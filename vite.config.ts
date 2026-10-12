import { defineConfig, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import million from 'million/compiler';
import { sitemapXml, robotsTxt } from './src/data/seo';

/** SPA fallback page for static hosts: unknown paths are forwarded to
 *  index.html, which restores the route. `keep` is the number of leading
 *  path segments belonging to the host (1 for a `/address0/` project
 *  site, 0 for root hosts). Based on rafgraph/spa-github-pages. */
function spaFallback(base: string): string {
  const keep = base.split('/').filter(Boolean).length;
  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Redirecting…</title>
    <script>
      (function () {
        var pathSegmentsToKeep = ${keep};
        var l = window.location;
        var base = l.pathname.split('/').slice(0, 1 + pathSegmentsToKeep).join('/') + '/';
        var route =
          l.pathname.slice(1).split('/').slice(pathSegmentsToKeep).join('/') +
          (l.search ? '&' + l.search.slice(1).replace(/&/g, '~and~') : '') +
          l.hash;
        l.replace(base + '?/' + route);
      })();
    </script>
  </head>
  <body></body>
</html>
`;
}

/** Serves /sitemap.xml and /robots.txt in dev and emits them into the build. */
function seoPlugin(): Plugin {
  // Resolved deploy base, for the SPA fallback page.
  let base = '/';
  return {
    name: 'ten-seo',
    configResolved(config) {
      base = config.base || '/';
    },
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const url = (req.url || '').split('?')[0];
        if (url === '/sitemap.xml') {
          res.setHeader('Content-Type', 'application/xml; charset=utf-8');
          res.end(sitemapXml());
          return;
        }
        if (url === '/robots.txt') {
          res.setHeader('Content-Type', 'text/plain; charset=utf-8');
          res.end(robotsTxt());
          return;
        }
        next();
      });
    },
    generateBundle() {
      this.emitFile({ type: 'asset', fileName: 'sitemap.xml', source: sitemapXml() });
      this.emitFile({ type: 'asset', fileName: 'robots.txt', source: robotsTxt() });
      this.emitFile({ type: 'asset', fileName: '404.html', source: spaFallback(base) });
    },
  };
}

export default defineConfig(({ command }) => ({
  // Deploy base: `/address0/` for the GitHub Pages project site, `/` for
  // root hosts (Cloudflare Pages). Override with VITE_BASE at build time.
  // Local dev always stays at root for convenience.
  base: command === 'serve' ? '/' : process.env.VITE_BASE || '/address0/',
  plugins: [
    million.vite({
      // Million's Text/block optimizer steals product-button text nodes;
      // when the bag empties React then throws removeChild NotFoundError.
      // Skip Atelier + shared shell that mounts the bag UI.
      filter: {
        exclude: [
          /Atelier/i,
          /atelier/i,
          /landings\/Atelier/,
          /components\/Page\./,
          /components\/Nav\./,
          /components\/Footer\./,
          /components\/Modal\./,
        ],
      },
      auto: {
        skip: [/Atelier/i, /atelier/i, /Page\./, /Nav\./, /Footer\./, /Modal\./],
      },
    }),
    react(),
    seoPlugin(),
  ],
  build: {
    rollupOptions: {
      output: {
        // One vendor chunk for all of node_modules (react, router, million
        // runtime) — they import each other, so a single chunk avoids the
        // circular-chunk warnings you get from splitting them apart.
        manualChunks(id) {
          if (id.includes('node_modules')) return 'vendor';
          return undefined;
        },
      },
    },
  },
}));
