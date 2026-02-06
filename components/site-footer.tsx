import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-muted/40">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary">
              <span className="text-xs font-bold text-primary-foreground">gi</span>
            </div>
            <span className="text-sm font-semibold text-foreground">
              getinside media
            </span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-sm text-muted-foreground">
            <span>
              Contact Operations :{" "}
              <a
                href="mailto:benoit@getinside.fr"
                className="font-medium text-primary hover:underline"
              >
                benoit@getinside.fr
              </a>
            </span>
            <span className="hidden sm:inline" aria-hidden="true">
              {"  "}
            </span>
            <span>
              Studio Graphique :{" "}
              <a
                href="mailto:studio@getinside.fr"
                className="font-medium text-primary hover:underline"
              >
                studio@getinside.fr
              </a>
            </span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
            <Link href="/docs/annonceurs" className="hover:text-foreground">
              Annonceurs
            </Link>
            <Link href="/docs/distributeurs" className="hover:text-foreground">
              Distributeurs
            </Link>
            <Link href="/docs/faq" className="hover:text-foreground">
              FAQ
            </Link>
            <a
              href="https://getinside.fr/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground"
            >
              Site Web
            </a>
          </div>
          <p className="text-xs text-muted-foreground/70">
            2026 getinside media. Tous droits reserves.
          </p>
        </div>
      </div>
    </footer>
  );
}
