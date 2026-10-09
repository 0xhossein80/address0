(() => {
  "use strict";

  // Circle wipe for SPA navigation. React Router owns the document now, so
  // this script no longer fetches or swaps anything: it grows the circle,
  // asks React to change route ("ten:request-navigation"), waits for the
  // post-render pulse ("ten:navigate") and fades away over the new page.
  const ANIM_SAFETY_MS = 1500;
  const FADE_SAFETY_MS = 700;
  const NAV_TIMEOUT_MS = 2000;

  let busy = false;
  let wipe = null;

  function buildWipe() {
    const el = document.createElement("div");
    el.className = "circle-wipe";
    el.setAttribute("aria-hidden", "true");
    document.body.appendChild(el);
    return el;
  }

  function getWipe() {
    if (!wipe) {
      wipe = buildWipe();
    } else if (!wipe.isConnected) {
      document.body.appendChild(wipe);
    }
    return wipe;
  }

  // Resolves when the circle has finished its single grow animation.
  function waitForCover(el) {
    return new Promise((resolve) => {
      let settled = false;
      const done = () => {
        if (!settled) {
          settled = true;
          resolve();
        }
      };
      const onEnd = (event) => {
        if (event.target === el && event.animationName === "wipe-grow") done();
      };
      el.addEventListener("animationend", onEnd);
      setTimeout(() => {
        el.removeEventListener("animationend", onEnd);
        done();
      }, ANIM_SAFETY_MS);
    });
  }

  // Resolves once the covered circle has faded away over the new page.
  function waitForFade(el) {
    return new Promise((resolve) => {
      let settled = false;
      const done = () => {
        if (!settled) {
          settled = true;
          resolve();
        }
      };
      const onEnd = (event) => {
        if (event.target === el && event.propertyName === "opacity") done();
      };
      el.addEventListener("transitionend", onEnd);
      setTimeout(() => {
        el.removeEventListener("transitionend", onEnd);
        done();
      }, FADE_SAFETY_MS);
    });
  }

  // Asks the React app to change route. Returns true when it took over
  // (the event was prevented); false means nothing is listening yet.
  function spaNavigate(url) {
    const event = new CustomEvent("ten:request-navigation", {
      detail: { url: url },
      cancelable: true,
    });
    document.dispatchEvent(event);
    return event.defaultPrevented;
  }

  // React dispatches a plain "ten:navigate" pulse after every route render.
  // Wait for the next one, with a timeout so a slow route cannot leave the
  // wipe (and this script) stuck busy forever.
  function waitForNavigation() {
    return new Promise((resolve) => {
      let settled = false;
      const done = () => {
        if (settled) return;
        settled = true;
        document.removeEventListener("ten:navigate", done);
        resolve();
      };
      document.addEventListener("ten:navigate", done);
      setTimeout(done, NAV_TIMEOUT_MS);
    });
  }

  // One circle, one play: it grows once from the click point until it covers
  // the screen, the route changes underneath, then it fades over the new page.
  async function navigate(url, originX, originY) {
    if (busy) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      if (!spaNavigate(url)) window.location.href = url;
      return;
    }

    busy = true;
    const overlay = getWipe();
    const x = Number.isFinite(originX) ? originX : window.innerWidth / 2;
    const y = Number.isFinite(originY) ? originY : window.innerHeight / 2;
    overlay.style.setProperty("--wx", x + "px");
    overlay.style.setProperty("--wy", y + "px");

    try {
      overlay.classList.remove("is-fading");
      overlay.classList.add("is-covering");
      await waitForCover(overlay);

      const taken = spaNavigate(url);
      if (!taken) {
        window.location.href = url;
        return;
      }

      await waitForNavigation();

      overlay.classList.remove("is-covering");
      void overlay.offsetWidth;
      overlay.classList.add("is-fading");
      await waitForFade(overlay);
      overlay.classList.remove("is-fading");
      overlay.style.removeProperty("--wx");
      overlay.style.removeProperty("--wy");
    } catch (err) {
      window.location.href = url;
    } finally {
      busy = false;
    }
  }

  function internalTarget(anchor) {
    if (!anchor) return null;
    if (anchor.target === "_blank" || anchor.hasAttribute("download")) return null;
    if (anchor.hasAttribute("data-no-transition")) return null;

    let url;
    try {
      url = new URL(anchor.getAttribute("href"), window.location.href);
    } catch (err) {
      return null;
    }

    if (url.origin !== window.location.origin) return null;
    if (url.protocol !== "http:" && url.protocol !== "https:") return null;
    if (url.pathname === window.location.pathname && url.hash) return null;
    return url;
  }

  document.addEventListener("click", (event) => {
    if (event.defaultPrevented || event.button !== 0) return;
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

    const target = event.target instanceof Element ? event.target : null;
    const anchor = target ? target.closest("a[href]") : null;
    const url = internalTarget(anchor);
    if (!url) return;

    event.preventDefault();
    // Path only — react-router treats anything not starting with "/" as a
    // relative path and would append an absolute URL to the current one.
    navigate(url.pathname + url.search + url.hash, event.clientX, event.clientY);
  });

  // React Router owns popstate; nothing to do on history traversal.
})();
