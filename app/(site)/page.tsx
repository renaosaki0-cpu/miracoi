import { Hero } from "@/components/Hero";
import { Story } from "@/components/Story";
import { ReadyforStrip } from "@/components/ReadyforStrip";
import { ValuesSection } from "@/components/ValuesSection";
import { ProjectSummary } from "@/components/ProjectSummary";
import { Support } from "@/components/Support";
import { Supporters } from "@/components/Supporters";
import { CTA } from "@/components/CTA";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Story />
      <ReadyforStrip showStoryLink />
      <ValuesSection />
      <ProjectSummary />
      <Support />
      <Supporters />
      <CTA />
    </main>
  );
}
