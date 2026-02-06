import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-foreground py-20 sm:py-28" role="banner">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(252_82%_63%/0.15),transparent_70%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
            Documentation officielle
          </div>
          <h1 className="text-balance text-4xl font-bold tracking-tight text-background sm:text-5xl lg:text-6xl">
            Handbook getinside
          </h1>
          <p className="mt-6 text-pretty text-lg leading-relaxed text-background/70 sm:text-xl">
            {"L'espace unique pour piloter vos campagnes, monetiser vos audiences et acceder a tout l'univers technique du Retail Media."}
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/docs/decouvrir"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-md transition-colors hover:bg-primary/90"
            >
              Guide de Demarrage
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="https://app.getinside.media/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-background/20 px-6 py-3 text-sm font-semibold text-background transition-colors hover:bg-background/10"
            >
              Acceder au SaaS
              <ExternalLink className="h-4 w-4" />
            </a>
            <a
              href="https://getinside.fr/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-background/20 px-6 py-3 text-sm font-semibold text-background transition-colors hover:bg-background/10"
            >
              Site Web
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
