/** The shared dialog that `data-modal-open` buttons fill with a `<template>`. */
export function Modal({ brand }: { brand: string }) {
  return (
    <dialog className="lp-modal" id="lp-modal" aria-labelledby="lp-modal-title">
      <div className="lp-modal__bar">
        <span className="lp-modal__brand">{brand}</span>
        <form method="dialog">
          <button className="lp-modal__close" type="submit" value="close" aria-label="Close">
            &#10005;
          </button>
        </form>
      </div>
      <div className="lp-modal__body" data-modal-body>
        <h2 id="lp-modal-title">Details</h2>
      </div>
    </dialog>
  );
}
