// Hero attivo = variante "mobile-app-landing-template" (porting in mobile-kit, con
// tutti gli effetti: rewards, headline animata, scroll-stack screenshot, wave finale).
// L'Hero originale di ios-app-landing-page resta in '@/components/Hero', basta
// cambiare questo import per tornare a usarlo.
import Hero from "@/components/mobile-kit/Hero";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing/Pricing";
import FAQ from "@/components/FAQ";
import Logos from "@/components/Logos";
import Benefits from "@/components/Benefits/Benefits";
import Container from "@/components/Container";
import Section from "@/components/Section";
import Stats from "@/components/Stats";
import CTA from "@/components/CTA";

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <Logos />
      <Container>
        <Benefits />

        <Section
          id="pricing"
          title="Prezzi"
          description="Prezzi semplici e trasparenti. Nessuna sorpresa."
        >
          <Pricing />
        </Section>

        <Section
          id="testimonials"
          title="Cosa dicono i nostri clienti"
          description="Le esperienze di chi ha scelto di collaborare con noi."
        >
          <Testimonials />
        </Section>

        <FAQ />

        <Stats />
        
        <CTA />
      </Container>
    </>
  );
};

export default HomePage;
