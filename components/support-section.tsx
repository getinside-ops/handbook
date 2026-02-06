import Link from "next/link";
import { HelpCircle, BookOpen, ArrowRight } from "lucide-react";

const supportLinks = [
  {
    icon: HelpCircle,
    title: "FAQ",
    description:
      "Reponses rapides sur la logistique, les paiements et le tracking.",
    href: "/docs/faq",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: BookOpen,
    title: "Glossaire",
    description: "Definitions metier : CPM, Lead Time, BAT, FOGRA39...",
    href: "/docs/decouvrir/glossaire",
    color: "text-muted-foreground",
    bgColor: "bg-muted",
  },
];

export function SupportSection() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-12 text-center text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          {"Besoin d'aide ?"}
        </h2>
        <div className="mx-auto grid max-w-3xl gap-6 sm:grid-cols-2">
          {supportLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group flex flex-col rounded-xl border border-border bg-card p-6 shadow-sm transition-all hover:border-primary/30 hover:shadow-md"
            >
              <div
                className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg ${link.bgColor}`}
              >
                <link.icon className={`h-6 w-6 ${link.color}`} />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-card-foreground">
                {link.title}
              </h3>
              <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
                {link.description}
              </p>
              <div className="mt-4 flex items-center text-sm font-medium text-primary">
                Consulter
                <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
