import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { DocsSidebar } from "@/components/docs-sidebar";
import { MarkdownRenderer } from "@/components/markdown-renderer";
import { getDocPage, getSectionNav, getAllDocSlugs } from "@/lib/docs";
import Link from "next/link";
import { ChevronRight, ArrowLeft } from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string[] }>;
}

const SECTION_TITLES: Record<string, string> = {
  decouvrir: "Decouvrir getinside",
  annonceurs: "Espace Annonceurs",
  distributeurs: "Espace Distributeurs",
  faq: "FAQ",
  ressources: "Ressources",
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const doc = getDocPage(slug);
  if (!doc) return { title: "Page non trouvee" };

  return {
    title: `${doc.meta.title} | Handbook getinside`,
    description: doc.meta.description || undefined,
  };
}

export async function generateStaticParams() {
  const slugs = getAllDocSlugs();
  return slugs.map((slug) => ({ slug }));
}

export default async function DocPage({ params }: PageProps) {
  const { slug } = await params;
  const doc = getDocPage(slug);

  if (!doc) {
    notFound();
  }

  const sectionSlug = slug[0];
  const sectionTitle = SECTION_TITLES[sectionSlug] || sectionSlug;
  const sidebarItems = getSectionNav(sectionSlug);

  // Build breadcrumb
  const breadcrumbs = [
    { label: "Handbook", href: "/" },
    { label: sectionTitle, href: `/docs/${sectionSlug}` },
    ...slug.slice(1).map((segment, index) => ({
      label: segment.replace(/-/g, " ").replace(/^\d+-/, ""),
      href: `/docs/${slug.slice(0, index + 2).join("/")}`,
    })),
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <div className="mx-auto flex w-full max-w-7xl flex-1 gap-8 px-4 py-8 sm:px-6 lg:px-8">
        {/* Sidebar - hidden on mobile */}
        <div className="hidden lg:block">
          <DocsSidebar
            sectionTitle={sectionTitle}
            sectionSlug={sectionSlug}
            items={sidebarItems}
          />
        </div>

        {/* Main content */}
        <main className="min-w-0 flex-1">
          {/* Breadcrumb */}
          <nav className="mb-6 flex items-center gap-1 text-sm text-muted-foreground" aria-label="Fil d'Ariane">
            {breadcrumbs.map((crumb, index) => (
              <span key={crumb.href} className="flex items-center gap-1">
                {index > 0 && <ChevronRight className="h-3.5 w-3.5" />}
                {index < breadcrumbs.length - 1 ? (
                  <Link href={crumb.href} className="capitalize hover:text-foreground">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="capitalize text-foreground">{crumb.label}</span>
                )}
              </span>
            ))}
          </nav>

          {/* Page title */}
          <header className="mb-8">
            <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {doc.meta.title}
            </h1>
            {doc.meta.description && (
              <p className="mt-3 text-lg leading-relaxed text-muted-foreground">
                {doc.meta.description}
              </p>
            )}
          </header>

          {/* Content */}
          <article className="pb-16">
            <MarkdownRenderer content={doc.content} />
          </article>

          {/* Back button */}
          <div className="border-t border-border pt-6">
            <Link
              href={slug.length > 1 ? `/docs/${sectionSlug}` : "/"}
              className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
            >
              <ArrowLeft className="h-4 w-4" />
              {slug.length > 1 ? `Retour a ${sectionTitle}` : "Retour a l'accueil"}
            </Link>
          </div>
        </main>
      </div>
      <SiteFooter />
    </div>
  );
}
