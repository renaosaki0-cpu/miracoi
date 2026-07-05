import { Hero } from "@/components/Hero";
import { Story } from "@/components/Story";
import { ProjectCore } from "@/components/ProjectCore";
import { Mission } from "@/components/Mission";
import { Gallery } from "@/components/Gallery";
import { Project } from "@/components/Project";
import { Support } from "@/components/Support";
import { ReturnsPageContent } from "@/components/ReturnsPageContent";
import { Supporters } from "@/components/Supporters";
import { Members } from "@/components/Members";
import { FAQ } from "@/components/FAQ";
import { CTA } from "@/components/CTA";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Story />
      <ProjectCore />
      <Mission />
      <Gallery preview />
      <Project />
      <Support />
      <ReturnsPageContent />
      <Supporters />
      <Members />
      <FAQ />
      <CTA />
    </main>
  );
}
