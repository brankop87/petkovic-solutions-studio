import Hero from "@/components/home/Hero";
import ProjectsPreview from "@/components/home/ProjectsPreview";
import ServicesPreview from "@/components/home/ServicesPreview";
import Pricing from "@/components/home/Pricing";
import WhyUs from "@/components/home/WhyUs";
import CTA from "@/components/home/CTA";
import { getLocale } from "@/lib/locale-server";

export default async function Home() {
  const locale = await getLocale();

  return (
    <main className="overflow-hidden">
      <Hero locale={locale} />
      <ProjectsPreview locale={locale} />
      <ServicesPreview locale={locale} />
      <Pricing locale={locale} />
      <WhyUs locale={locale} />
      <CTA locale={locale} />
    </main>
  );
}
