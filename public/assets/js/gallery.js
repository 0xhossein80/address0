(() => {
  "use strict";

  let overlay = null;
  let lastFocus = null;

  function build() {
    const el = document.createElement("div");
    el.className = "lightbox";
    el.hidden = true;
    el.innerHTML =
      '<div class="lightbox__backdrop" data-lightbox-close></div>' +
      '<div class="lightbox__dialog" role="dialog" aria-modal="true" aria-labelledby="lightbox-title">' +
      '<button class="lightbox__close" type="button" data-lightbox-close aria-label="Close">&#10005;</button>' +
      '<div class="lightbox__art" aria-hidden="true"></div>' +
      '<p class="lightbox__tag"></p>' +
      '<h2 class="lightbox__title" id="lightbox-title"></h2>' +
      '<p class="lightbox__text"></p>' +
      '<a class="lightbox__cta" href="#enquire" data-lightbox-close>Book something like this &#8594;</a>' +
      "</div>";
    document.body.appendChild(el);
    el.addEventListener("click", (event) => {
      if (event.target instanceof Element && event.target.closest("[data-lightbox-close]")) close();
    });
    return el;
  }

  function open(trigger) {
    if (!overlay || !overlay.isConnected) overlay = build();
    const title = trigger.getAttribute("data-lightbox-title") || "";
    const tag = trigger.getAttribute("data-lightbox-tag") || "";
    const text = trigger.getAttribute("data-lightbox-text") || "";

    overlay.querySelector(".lightbox__title").textContent = title;
    overlay.querySelector(".lightbox__tag").textContent = tag;
    overlay.querySelector(".lightbox__text").textContent = text;

    const art = overlay.querySelector(".lightbox__art");
    const image = trigger.getAttribute("data-lightbox-image") || "";
    if (image) {
      art.textContent = "";
      art.classList.add("lightbox__art--photo");
      if (!art.querySelector("img")) {
        const img = document.createElement("img");
        img.className = "lightbox__img";
        img.alt = "";
        img.decoding = "async";
        art.appendChild(img);
      }
      const img = art.querySelector("img");
      img.src = image;
      img.alt = title;
    } else {
      const stale = art.querySelector("img");
      if (stale) stale.remove();
      art.classList.remove("lightbox__art--photo");
      art.textContent = tag;
    }
    art.style.setProperty("--tone", trigger.getAttribute("data-lightbox-tone") || "");

    // The CTA only makes sense when the page actually has a form.
    const cta = overlay.querySelector(".lightbox__cta");
    cta.hidden = !document.querySelector("form[data-enquiry]");

    lastFocus = trigger;
    overlay.hidden = false;
    document.documentElement.style.overflow = "hidden";
    overlay.querySelector(".lightbox__close").focus();
  }

  function close() {
    if (!overlay || overlay.hidden) return;
    overlay.hidden = true;
    document.documentElement.style.overflow = "";
    if (lastFocus && typeof lastFocus.focus === "function") lastFocus.focus();
    lastFocus = null;
  }

  document.addEventListener("click", (event) => {
    if (!(event.target instanceof Element)) return;
    const trigger = event.target.closest("[data-lightbox]");
    if (trigger) {
      event.preventDefault();
      open(trigger);
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") close();
  });

  // <body> is replaced on every in-page navigation: the overlay went with the
  // old page, so drop the reference and release the scroll lock it took.
  document.addEventListener("ten:navigate", () => {
    if (overlay) {
      overlay.remove();
      overlay = null;
    }
    lastFocus = null;
    document.documentElement.style.overflow = "";
  });
})();
