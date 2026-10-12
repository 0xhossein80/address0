/** Suspense fallback while a lazy page chunk loads. Same markup and
 *  styling as the static splash in index.html (`.ten-loader`, styled
 *  there so it paints before React and app.css arrive). */
export function Loader() {
  return (
    <div className="ten-loader" role="status" aria-label="Loading page">
      <p className="ten-loader__brand" aria-hidden="true">
        Address(0)
      </p>
      <p className="ten-loader__hint">Loading the page</p>
      <p className="ten-loader__bar" aria-hidden="true">
        <span />
      </p>
    </div>
  );
}
