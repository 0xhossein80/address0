import { defineConfig, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import million from 'million/compiler';
import { sitemapXml, robotsTxt } from './src/data/seo';

/** Serves /sitemap.xml and /robots.txt in dev and emits them into the build. */
function seoPlugin(): Plugin {
  return {
    name: 'ten-seo',
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
    },
  };
}

export default defineConfig(({ command }) => ({
  // Project site on GitHub Pages: https://hosseinmobarakian.github.io/Portfolio/
  // Local dev stays at root for convenience.
  base: command === 'serve' ? '/' : '/Portfolio/',
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
