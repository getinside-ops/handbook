import { Shield, Zap, BarChart3 } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Securite Financiere",
    description:
      "Tiers de confiance assurant des paiements securises et garantis.",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: Zap,
    title: "Simplicite Administrative",
    description:
      "Un seul interlocuteur et un contrat unique pour toutes vos campagnes.",
    color: "text-amber-500",
    bgColor: "bg-amber-500/10",
  },
  {
    icon: BarChart3,
    title: "Fiabilite Technique",
    description:
      "Tracking proprietaire et conformite totale aux standards RGPD/RSE.",
    color: "text-emerald-500",
    bgColor: "bg-emerald-500/10",
  },
];

export function ReassuranceSection() {
  return (
    <section className="border-t border-border bg-muted/30 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-12 text-center text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          Pourquoi centraliser sur getinside ?
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-xl border border-border bg-card p-6 shadow-sm"
            >
              <div
                className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg ${feature.bgColor}`}
              >
                <feature.icon className={`h-6 w-6 ${feature.color}`} />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-card-foreground">
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
