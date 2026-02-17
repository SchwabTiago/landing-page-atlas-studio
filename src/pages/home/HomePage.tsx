import CtaSection from "./sections/CtaSection";
import WhatWeDoSection from "./sections/WhatWeDoSection";
import PhilosophySection from "./sections/PhilosophySection";
import PortfolioSection from "./sections/PortfolioSection";
import HeroSection from "./sections/HeroSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <PortfolioSection />
      <PhilosophySection />
      <WhatWeDoSection />
      <CtaSection />
    </>
  );
}
