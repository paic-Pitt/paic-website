import Hero from "@/components/Hero";
import MajorsMarquee from "@/components/MajorsMarquee";
import About from "@/components/About";
import HowItWorks from "@/components/HowItWorks";
import Pathways from "@/components/Pathways";
import Join from "@/components/Join";
import ClosingCta from "@/components/ClosingCta";

export default function Home() {
  return (
    <>
      <Hero />
      <MajorsMarquee />
      <About />
      <HowItWorks />
      <Pathways />
      <Join />
      <ClosingCta />
    </>
  );
}
