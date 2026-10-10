import type { ReactNode } from 'react';
import { Seo } from './Seo';
import { Nav } from './Nav';
import { Footer } from './Footer';
import { Modal } from './Modal';

interface PageProps {
  /** Body marker + CSS page key: `index`, `404`, or a landing/sub slug. */
  slug: string;
  brand: string;
  title: string;
  description: string;
  /** Public path for canonical/OG/JSON-LD. */
  seoPath: string;
  navItems: [string, string][];
  /** Optional social share image path (site-relative). */
  image?: string;
  children: ReactNode;
}

/** Shared document shell: head management, header, content, dialog, footer. */
export function Page({
  slug,
  brand,
  title,
  description,
  seoPath,
  navItems,
  image,
  children,
}: PageProps) {
  return (
    <>
      <Seo
        slug={slug}
        title={title}
        description={description}
        seoPath={seoPath}
        {...(image ? { image } : {})}
      />
      <Nav slug={slug} brand={brand} items={navItems} />
      {children}
      <Modal brand={brand} />
      <Footer slug={slug} brand={brand} />
    </>
  );
}
