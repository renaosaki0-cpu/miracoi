import { Hero } from "@/components/Hero";
import { WhoWeAre, HomeNarrativeSections } from "@/components/HomeNarrative";
import { Story } from "@/components/Story";
import { Supporters } from "@/components/Supporters";
import { CTA } from "@/components/CTA";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <WhoWeAre />
      <Story />
      <HomeNarrativeSections />
      <Supporters />
      <CTA />
    </main>
  );
}
