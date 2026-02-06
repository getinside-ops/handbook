import Link from "next/link";
import {
  ShoppingBag,
  Warehouse,
  Package,
  Mail,
  Smartphone,
  CreditCard,
  Rocket,
  Handshake,
  Banknote,
  ArrowRight,
} from "lucide-react";

const annonceurLinks = [
  {
    icon: Package,
    label: "Sponsored Mail",
    href: "/docs/annonceurs/asile-colis",
  },
  {
    icon: Mail,
    label: "Dedicated Email",
    href: "/docs/annonceurs/email-dedie",
  },
  {
    icon: Smartphone,
    label: "Sponsored Social",
    href: "/docs/annonceurs/social-ads",
  },
  {
    icon: CreditCard,
    label: "Modele Tarifaire",
    href: "/docs/annonceurs/tarification",
  },
];

const distributeurLinks = [
  {
    icon: Rocket,
    label: "Guide de Demarrage",
    href: "/docs/distributeurs/onboarding",
  },
  {
    icon: Package,
    label: "Sponsored Mail",
    href: "/docs/distributeurs/asile-colis",
  },
  {
    icon: Handshake,
    label: "Programme Affiliation",
    href: "/docs/distributeurs/affiliation",
  },
  {
    icon: Banknote,
    label: "Paiements & Wallet",
    href: "/docs/distributeurs/paiements",
  },
];

export function PathNavigation() {
  return (
    <section className="py-16 sm:py-20" aria-label="Navigation par profil">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Annonceurs Card */}
          <div className="flex flex-col rounded-xl border border-border bg-card p-8 shadow-sm transition-shadow hover:shadow-md">
            <div className="mb-6 flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                <ShoppingBag className="h-7 w-7 text-primary" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-card-foreground">Espace Annonceurs</h2>
                <p className="text-sm text-muted-foreground">Marques et agences</p>
              </div>
            </div>
            <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
              {"Decouvrez comment diffuser vos campagnes aupres de nos reseaux de distribution premium."}
            </p>
            <div className="flex flex-col gap-2">
              {annonceurLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group flex items-center gap-3 rounded-lg border border-border px-4 py-3 text-sm font-medium text-card-foreground transition-colors hover:border-primary/30 hover:bg-primary/5"
                >
                  <link.icon className="h-4 w-4 text-muted-foreground group-hover:text-primary" />
                  <span className="flex-1">{link.label}</span>
                  <ArrowRight className="h-4 w-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
                </Link>
              ))}
            </div>
            <div className="mt-6 pt-4">
              <Link
                href="/docs/annonceurs"
                className="text-sm font-semibold text-primary hover:underline"
              >
                {"Explorer l'espace complet"} <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>

          {/* Distributeurs Card */}
          <div className="flex flex-col rounded-xl border border-border bg-card p-8 shadow-sm transition-shadow hover:shadow-md">
            <div className="mb-6 flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                <Warehouse className="h-7 w-7 text-primary" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-card-foreground">Espace Distributeurs</h2>
                <p className="text-sm text-muted-foreground">E-commercants</p>
              </div>
            </div>
            <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
              {"Apprenez a monetiser vos colis et vos audiences avec une experience client irreprochable."}
            </p>
            <div className="flex flex-col gap-2">
              {distributeurLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group flex items-center gap-3 rounded-lg border border-border px-4 py-3 text-sm font-medium text-card-foreground transition-colors hover:border-primary/30 hover:bg-primary/5"
                >
                  <link.icon className="h-4 w-4 text-muted-foreground group-hover:text-primary" />
                  <span className="flex-1">{link.label}</span>
                  <ArrowRight className="h-4 w-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
                </Link>
              ))}
            </div>
            <div className="mt-6 pt-4">
              <Link
                href="/docs/distributeurs"
                className="text-sm font-semibold text-primary hover:underline"
              >
                {"Explorer l'espace complet"} <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
