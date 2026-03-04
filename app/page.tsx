import Hero from "@/components/Hero";
import FocusAreas from "@/components/FocusAreas";
import Stats from "@/components/Stats";
import LatestVideos from "@/components/LatestVideos";

export default function Home() {
  return (
    <>
      <Hero />
      <FocusAreas />
      <Stats />
      <LatestVideos />
    </>
  );
}