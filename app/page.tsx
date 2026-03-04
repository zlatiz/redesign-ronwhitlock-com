import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import LatestVideos from "@/components/LatestVideos";
import StatsBar from "@/components/StatsBar";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <LatestVideos />
      <StatsBar />
    </>
  );
}