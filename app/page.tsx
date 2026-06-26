import About from "@/components/sections/About";
import FAQ from "@/components/sections/FAQ";
import ForLeanTeams from "@/components/sections/ForLeanTeams";
import Hero from "@/components/sections/Hero";
import LogoSlider from "@/components/sections/LogoSlider";
import Package from "@/components/sections/Package";
import ServiceSection from "@/components/sections/Services.";
import StartBuildScale from "@/components/sections/StartBuildScale";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:"Effective Accounting, Audit, Tax & PRO in UAE | 800-Simplify",
  description:"800-Simplify brings efficiency to every number & value to every move with effective accounting, audit & tax, and PRO services for UAE SMEs, driving momentum.",
};

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <ServiceSection />
      <LogoSlider />
      <ForLeanTeams />
      <Package />
      <FAQ />
      <StartBuildScale />
    </div>
  );
}
