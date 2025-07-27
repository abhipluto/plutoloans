import HeroSection from "@/components/hero-section";
import StatisticsSection from "@/components/statistics-section";
import WhoWeServeSection from "@/components/who-we-serve-section";
import HowItWorksSection from "@/components/how-it-works-section";
import TestimonialsSection from "@/components/testimonials-section";
import TrustIndicatorsSection from "@/components/trust-indicators-section";
import CTASection from "@/components/cta-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatisticsSection />
      <WhoWeServeSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <TrustIndicatorsSection />
      <CTASection />
    </>
  );
}
