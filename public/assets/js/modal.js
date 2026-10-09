(() => {
  "use strict";

  // ---------------------------------------------------------------- toasts
  let toastHost = null;

  function toast(message) {
    if (!message) return;
    // The body is replaced on every in-page navigation, so re-attach a host
    // that was swapped away — otherwise toasts land in a detached node.
    if (!toastHost || !toastHost.isConnected) {
      toastHost = document.createElement("div");
      toastHost.className = "toasts";
      toastHost.setAttribute("aria-live", "polite");
      toastHost.setAttribute("aria-atomic", "true");
      document.body.appendChild(toastHost);
    }
    const el = document.createElement("p");
    el.className = "toast";
    el.textContent = message;
    toastHost.appendChild(el);
    while (toastHost.children.length > 3) toastHost.firstElementChild.remove();
    requestAnimationFrame(() => el.classList.add("is-in"));
    setTimeout(() => {
      el.classList.remove("is-in");
      setTimeout(() => el.remove(), 400);
    }, 3600);
  }

  window.tenToast = toast;

  // ---------------------------------------------------------- shared dialog
  // The dialog element lives inside <body>, which is thrown away on every
  // in-page navigation — so look it up fresh each time and (re)bind its
  // listeners per instance instead of holding one reference forever.
  let opener = null;
  const boundDialogs = new WeakSet();

  function lockScroll(lock) {
    document.documentElement.style.overflow = lock ? "hidden" : "";
  }

  function present(element) {
    if (!element || !element.isConnected) return;
    if (typeof element.showModal === "function") element.showModal();
    else element.setAttribute("open", "");
    lockScroll(true);
  }

  function dismiss(element) {
    if (!element) return;
    if (typeof element.close === "function" && element.open) element.close();
    else element.removeAttribute("open");
    lockScroll(false);
  }

  function bindDialog(element) {
    if (!element || boundDialogs.has(element)) return element;
    boundDialogs.add(element);
    element.addEventListener("close", () => {
      lockScroll(false);
      if (opener && typeof opener.focus === "function") {
        opener.focus({ preventScroll: true });
      }
      opener = null;
    });
    element.addEventListener("cancel", () => {
      // Escape: the dialog closes itself, just release the scroll lock.
      lockScroll(false);
    });
    return element;
  }

  function sharedDialog() {
    return bindDialog(document.getElementById("lp-modal"));
  }

  function openFrom(trigger) {
    const dialog = sharedDialog();
    if (!dialog) return;
    const ref = trigger.getAttribute("data-modal-open");
    const source = ref ? document.getElementById(ref) : null;
    if (!source || !source.content) return;
    const body = dialog.querySelector("[data-modal-body]");
    if (!body) return;
    body.replaceChildren(source.content.cloneNode(true));
    const heading = body.querySelector("h1, h2, h3");
    if (heading && !heading.id) heading.id = "lp-modal-title";
    opener = trigger;
    present(dialog);
  }

  // ------------------------------------------------------- auto session popups
  const boundPopups = new WeakSet();

  function bindPopup(popup) {
    if (!popup || boundPopups.has(popup)) return;
    boundPopups.add(popup);
    const key = popup.getAttribute("data-popup-key") || popup.id || "popup";
    let seen = false;
    try {
      seen = sessionStorage.getItem(key) === "1";
    } catch (err) {
      seen = false;
    }
    popup.addEventListener("close", () => {
      lockScroll(false);
      try {
        sessionStorage.setItem(key, "1");
      } catch (err) {
        /* private mode: just show it again next visit */
      }
    });
    popup.addEventListener("cancel", () => lockScroll(false));
    if (seen) return;
    const raw = parseInt(popup.getAttribute("data-popup-delay") || "6000", 10);
    const delay = Number.isFinite(raw) && raw >= 0 ? raw : 6000;
    setTimeout(() => {
      if (!popup.isConnected) return; // navigated away before it fired
      // Re-read the flag: it may have been dismissed in another tab or by a
      // later navigation while this timer was pending.
      let dismissed = false;
      try {
        dismissed = sessionStorage.getItem(key) === "1";
      } catch (err) {
        dismissed = false;
      }
      if (dismissed) return;
      present(popup);
    }, delay);
  }

  function bindPopups() {
    document.querySelectorAll("dialog[data-popup]").forEach(bindPopup);
  }

  bindPopups();

  // A navigation swaps <body>: anything still open or pending is now stale.
  document.addEventListener("ten:navigate", () => {
    opener = null;
    lockScroll(false);
    bindPopups();
  });

  // ---------------------------------------------------------- one click rules
  document.addEventListener("click", (event) => {
    const target = event.target instanceof Element ? event.target : null;
    if (!target) return;

    const openerButton = target.closest("[data-modal-open]");
    if (openerButton) {
      event.preventDefault();
      openFrom(openerButton);
      return;
    }

    const closeButton = target.closest("[data-modal-close]");
    if (closeButton) {
      const host = closeButton.closest("dialog");
      if (host) dismiss(host);
      return;
    }

    // A link inside an open dialog (CTA to a form, a sub page, …): close the
    // dialog and let the navigation happen.
    const link = target.closest("a[href]");
    if (link) {
      const host = link.closest("dialog[open]");
      if (host) dismiss(host);
      return;
    }

    // Backdrop click: the click landed on the dialog element itself.
    if (target instanceof HTMLDialogElement && target.open) {
      dismiss(target);
    }
  });

  // --------------------------------------------------------------- toasts
  document.addEventListener("click", (event) => {
    const target = event.target instanceof Element ? event.target : null;
    if (!target) return;

    const declarative = target.closest("[data-toast]");
    if (declarative) {
      toast(declarative.getAttribute("data-toast") || "");
      return;
    }

    // "Choose plan" style buttons fill the form below — say so out loud.
    const prefill = target.closest("[data-prefill]");
    if (prefill) {
      const spec = prefill.getAttribute("data-prefill") || "";
      const first = spec.split(";")[0];
      const eq = first.indexOf("=");
      const value = eq > 0 ? first.slice(eq + 1).trim() : "";
      toast(
        value
          ? `${value} — picked. Finish the form below to lock it in.`
          : "Pre-selected — finish the form below."
      );
    }
  });
})();
