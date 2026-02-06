import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { HeroSection } from "@/components/hero-section";
import { PathNavigation } from "@/components/path-navigation";
import { ReassuranceSection } from "@/components/reassurance-section";
import { SupportSection } from "@/components/support-section";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <PathNavigation />
        <ReassuranceSection />
        <SupportSection />
      </main>
      <SiteFooter />
    </div>
  );
}
