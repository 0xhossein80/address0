import { lazy, Suspense, useEffect } from 'react';
import type { ComponentType } from 'react';
import { Route, Routes, useLocation, useNavigate, useParams } from 'react-router-dom';
import { CATEGORIES, pathOf } from './data/categories';
import Index from './pages/Index';
import NotFound from './pages/NotFound';

// Each landing is its own chunk: only the page you visit (or the index)
// ships, instead of all ten designs in the entry bundle.
const SubPage = lazy(() => import('./pages/SubPage'));
const Roastery = lazy(() => import('./pages/landings/Roastery'));
const Forge = lazy(() => import('./pages/landings/Forge'));
const Haven = lazy(() => import('./pages/landings/Haven'));
const Brightside = lazy(() => import('./pages/landings/Brightside'));
const Verity = lazy(() => import('./pages/landings/Verity'));
const Saffron = lazy(() => import('./pages/landings/Saffron'));
const Wanderly = lazy(() => import('./pages/landings/Wanderly'));
const Loop = lazy(() => import('./pages/landings/Loop'));
const Lumen = lazy(() => import('./pages/landings/Lumen'));
const Atelier = lazy(() => import('./pages/landings/Atelier'));

const LANDINGS: Record<string, ComponentType> = {
  roastery: Roastery,
  forge: Forge,
  haven: Haven,
  brightside: Brightside,
  verity: Verity,
  saffron: Saffron,
  wanderly: Wanderly,
  loop: Loop,
  lumen: Lumen,
  atelier: Atelier,
};

function LandingRoute({ slug }: { slug: string }) {
  const Landing = LANDINGS[slug];
  return Landing ? <Landing /> : <NotFound />;
}

/** `/p/{slug}/{sub}` — resolved inside SubPage, so the 40 sub-page
 *  records (and their text) only load when one is actually visited. */
function SubPageRoute() {
  const { slug, sub } = useParams();
  return <SubPage parent={slug ?? ''} sub={sub ?? ''} />;
}

export default function App() {
  const location = useLocation();
  const navigate = useNavigate();

  // transition.js plays the circle wipe, then asks us to change route.
  useEffect(() => {
    const onRequest = (event: Event) => {
      const detail = (event as CustomEvent<{ url?: unknown }>).detail;
      if (!detail || typeof detail.url !== 'string' || detail.url.length === 0) return;
      let url = detail.url;
      // Defensive: react-router treats anything not starting with "/" as a
      // relative path, so a stray absolute same-origin URL would get
      // appended to the current one ("/http://host/random").
      if (/^[a-z][a-z0-9+.-]*:/i.test(url)) {
        try {
          const parsed = new URL(url, window.location.href);
          if (parsed.origin === window.location.origin) {
            url = parsed.pathname + parsed.search + parsed.hash;
          } else {
            return; // cross-origin: let the browser handle it normally
          }
        } catch {
          return;
        }
      }
      event.preventDefault();
      navigate(url);
    };
    document.addEventListener('ten:request-navigation', onRequest);
    return () => document.removeEventListener('ten:request-navigation', onRequest);
  }, [navigate]);

  // After every route change: rebind the vanilla widgets (modal.js, …) and
  // scroll — to the hash target when there is one, otherwise to the top.
  useEffect(() => {
    document.dispatchEvent(new CustomEvent('ten:navigate'));
    if (location.hash) {
      const id = decodeURIComponent(location.hash.slice(1));
      requestAnimationFrame(() => {
        const target = document.getElementById(id);
        if (target) target.scrollIntoView();
      });
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <Suspense fallback={null}>
      <Routes>
        <Route path="/" element={<Index />} />
        {CATEGORIES.map((card) => (
          <Route key={card.slug} path={pathOf(card)} element={<LandingRoute slug={card.slug} />} />
        ))}
        <Route path="/p/:slug/:sub" element={<SubPageRoute />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}
