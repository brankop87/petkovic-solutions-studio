import Hero from "@/components/home/Hero";
import ProjectsPreview from "@/components/home/ProjectsPreview";
import ServicesPreview from "@/components/home/ServicesPreview";
import Pricing from "@/components/home/Pricing";
import WhyUs from "@/components/home/WhyUs";
import CTA from "@/components/home/CTA";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <ProjectsPreview />
      <ServicesPreview />
      <Pricing />
      <WhyUs />
      <CTA />
    </main>
  );
}
