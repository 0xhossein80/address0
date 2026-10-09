import { Page } from '../components/Page';

export default function NotFound() {
  return (
    <Page
      slug="404"
      brand="Ten Landings"
      title="404 — this landing page does not exist"
      description="The page you were looking for is not part of the collection."
      seoPath="/404"
      navItems={[['Portfolio index', '/']]}
    >
      <main className="page-404">
        <section className="wrap lost">
          <p className="lost__code">404</p>
          <h1 className="lost__title">This page is not part of the collection.</h1>
          <p className="lost__text">
            There are ten landings here and you found an eleventh. Take the next one
            instead.
          </p>
          <div className="hero__actions">
            <a className="btn btn--accent" href="/p/roastery">
              Next landing
            </a>
            <a className="btn btn--ghost" href="/">
              Portfolio index
            </a>
          </div>
        </section>
      </main>
    </Page>
  );
}
