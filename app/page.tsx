import HeroSection from "@/components/HeroSection";
import FeatureHighlight from "@/components/FeatureHighlight";
import ServicesSection from "@/components/ServicesSection";
import StatsSection from "@/components/StatsSection";
import TestimonialsSection from "@/components/TestimonialsSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeatureHighlight />
      <ServicesSection />
      <StatsSection />
      <TestimonialsSection />
    </>
  );
}