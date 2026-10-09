(() => {
  "use strict";

  // Signature widgets: one tiny loader, one module per landing page at
  // /assets/js/sig/{slug}.js. Modules are plain render functions — every
  // click/input/change inside [data-sig] is routed to the page's module,
  // so nothing needs rebinding after a curtain swap.
  window.__tenSig = window.__tenSig || {};

  const loading = new Map();

  function version() {
    return window.__TEN_AV__ || "0";
  }

  function ensure(slug) {
    if (!slug) return Promise.resolve();
    if (!loading.has(slug)) {
      loading.set(
        slug,
        new Promise((resolve) => {
          const script = document.createElement("script");
          script.src = "/assets/js/sig/" + slug + ".js?v=" + version();
          script.async = true;
          script.onload = resolve;
          script.onerror = resolve;
          document.head.appendChild(script);
        })
      );
    }
    return loading.get(slug);
  }

  function render(root) {
    if (!root) return;
    const module = window.__tenSig[root.getAttribute("data-sig")];
    if (typeof module === "function") {
      try {
        module(root, null);
      } catch (err) {
        /* one broken widget must not break the page */
      }
    }
  }

  function route(event) {
    if (!(event.target instanceof Element)) return;
    const root = event.target.closest("[data-sig]");
    if (!root) return;
    const module = window.__tenSig[root.getAttribute("data-sig")];
    if (typeof module === "function") {
      try {
        module(root, event);
      } catch (err) {
        /* keep the rest of the page alive */
      }
    }
  }

  ["click", "input", "change"].forEach((type) => {
    document.addEventListener(type, route);
  });

  async function boot() {
    const root = document.querySelector("[data-sig]");
    if (!root) return;
    const slug = root.getAttribute("data-sig");
    await ensure(slug);
    render(root);
  }

  document.addEventListener("DOMContentLoaded", boot);
  document.addEventListener("ten:navigate", boot);
})();
