import { createFileRoute } from "@tanstack/react-router";
import { ContactForm } from "@/components/ContactForm";
import { TopBar } from "@/components/home/TopBar";
import { Nav } from "@/components/home/Nav";
import { Hero } from "@/components/home/Hero";
import { LocalExperts } from "@/components/home/LocalExperts";
import { Services } from "@/components/home/Services";
import { Process } from "@/components/home/Process";
import { Trust } from "@/components/home/Trust";
import { TickerBar } from "@/components/home/TickerBar";
import { EstimateCTA } from "@/components/home/EstimateCTA";
import { Testimonials } from "@/components/home/Testimonials";
import { WhyChoose } from "@/components/home/WhyChoose";
import { ServiceAreas } from "@/components/home/ServiceAreas";
import { FAQ } from "@/components/home/FAQ";
import { TransformCTA } from "@/components/home/TransformCTA";
import { Footer } from "@/components/home/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Cinco Services — Home Remodeling & Construction | Houston, TX" },
      { name: "description", content: "Expert home remodeling and custom construction services in Houston. Over 15 years of experience bringing quality craftsmanship, remodeling, framing, and roofing to your home. Free estimates." },
      { property: "og:title", content: "Cinco Services" },
      { property: "og:description", content: "Houston's trusted remodeling and construction specialists." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="bg-background text-foreground">
      <TopBar />
      <Nav />
      <main>
        <Hero />
        <LocalExperts />
        <Services />
        <Process />
        <Trust />
        <TickerBar />
        <EstimateCTA />
        <Testimonials />
        <WhyChoose />
        <ServiceAreas />
        <FAQ />
        <ContactForm />
        <TransformCTA />
      </main>
      <Footer />
    </div>
  );
}
