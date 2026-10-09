(() => {
  "use strict";

  // Submits enquiry forms through the client-side API installed by the SPA
  // (src/lib/enquiry.ts exposes window.tenEnquiry.submit). No server.

  function statusNode(form) {
    return form.querySelector("[data-form-status]");
  }

  function showStatus(form, text, ok) {
    const node = statusNode(form);
    if (!node) return;
    node.hidden = false;
    node.textContent = text;
    node.classList.toggle("is-ok", ok);
    node.classList.toggle("is-error", !ok);
    node.focus({ preventScroll: false });
  }

  function setBusy(form, busy) {
    const button = form.querySelector('button[type="submit"]');
    if (!button) return;
    if (busy) {
      button.dataset.label = button.textContent || "Send";
      button.disabled = true;
      button.textContent = "Sending…";
      button.setAttribute("aria-busy", "true");
    } else {
      if (form.classList.contains("is-sent")) return;
      button.disabled = false;
      button.removeAttribute("aria-busy");
      if (button.dataset.label) button.textContent = button.dataset.label;
    }
  }

  // <a data-prefill="plan=The Regular;brew=Filter"> — fills the form before
  // the anchor scrolls to it, so "Choose plan" lands on a pre-picked plan.
  document.addEventListener("click", (event) => {
    const trigger = event.target instanceof Element
      ? event.target.closest("[data-prefill]")
      : null;
    if (!trigger) return;
    const spec = trigger.getAttribute("data-prefill");
    const form = document.querySelector("form[data-enquiry]");
    if (!spec || !form) return;

    spec.split(";").forEach((pair) => {
      const eq = pair.indexOf("=");
      if (eq < 1) return;
      const name = pair.slice(0, eq).trim();
      const value = pair.slice(eq + 1).trim();
      const control = form.elements.namedItem(name);
      if (control && "value" in control) control.value = value;
    });

    const first = form.querySelector(".field__input");
    if (first && !first.value) first.focus({ preventScroll: true });
  });

  document.addEventListener("submit", async (event) => {
    const form = event.target;
    if (!(form instanceof HTMLFormElement) || !form.matches("form[data-enquiry]")) return;

    event.preventDefault();

    if (typeof form.checkValidity === "function" && !form.checkValidity()) {
      form.reportValidity();
      return;
    }

    setBusy(form, true);
    try {
      const api = window.tenEnquiry;
      if (!api || typeof api.submit !== "function") {
        showStatus(form, "Enquiry service not ready — please try again.", false);
        return;
      }

      const payload = await api.submit(Object.fromEntries(new FormData(form)));

      if (payload && payload.ok) {
        form.classList.add("is-sent");
        const prefix = payload.ticket ? payload.ticket + " — " : "";
        const message = prefix + (payload.message || "Thanks, that is with us.");
        showStatus(form, message, true);
        if (typeof window.tenToast === "function") window.tenToast(message);
        form.querySelectorAll("input, select, textarea, button").forEach((field) => {
          if (field.type !== "hidden") field.disabled = true;
        });
        return;
      }

      const issues = payload && Array.isArray(payload.errors) ? payload.errors : [];
      const message = issues.length
        ? issues.map((issue) => `${issue.field}: ${issue.message}`).join(" · ")
        : (payload && payload.message) || "Something went wrong — please try again.";
      showStatus(form, message, false);
    } catch (err) {
      showStatus(form, "Something went wrong — please try again.", false);
    } finally {
      setBusy(form, false);
    }
  });
})();
