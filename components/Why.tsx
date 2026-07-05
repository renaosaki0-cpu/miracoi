import { whyBlocks, mozambiqueStats } from "@/data/content";
import { SectionHeader } from "./ui/SectionHeader";
import { ScrollReveal } from "./ui/ScrollReveal";
import { PlaceholderImage } from "./ui/PlaceholderImage";
import { CTAButton } from "./ui/CTAButton";

/** ④ Why */
export function Why() {
  return (
    <section id="why" className="section-padding bg-background">
      <div className="container-main">
        <SectionHeader
          label="Why"
          title="なぜ、この活動なのか"
        />

        <div className="space-y-20 md:space-y-28">
          {whyBlocks.map((block, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={block.id}
                className={`grid gap-10 lg:grid-cols-2 lg:gap-16 lg:items-center ${
                  isEven ? "" : "lg:[direction:rtl]"
                }`}
              >
                <ScrollReveal direction={isEven ? "left" : "right"} className="lg:[direction:ltr]">
                  <PlaceholderImage
                    src={block.image}
                    alt={block.title}
                    className="aspect-[4/3] w-full rounded-3xl lg:aspect-[5/4]"
                  />
                </ScrollReveal>

                <ScrollReveal
                  delay={0.15}
                  direction={isEven ? "right" : "left"}
                  className="lg:[direction:ltr]"
                >
                  <p className="mb-2 text-sm font-medium text-primary">{block.subtitle}</p>
                  <h3 className="mb-5 text-2xl font-bold text-text md:text-3xl">
                    {block.title}
                  </h3>
                  <p className="text-base leading-[1.9] text-subtext md:text-lg">
                    {block.description}
                  </p>
                </ScrollReveal>
              </div>
            );
          })}
        </div>

        {/* モザンビークの数字 */}
        <ScrollReveal className="mt-20">
          <div className="rounded-3xl bg-accent p-8 md:p-10">
            <h3 className="mb-6 text-lg font-bold text-text">
              モザンビークで子どもたちを取り巻く課題
            </h3>
            <div className="grid gap-4 sm:grid-cols-3">
              {mozambiqueStats.map((stat) => (
                <div key={stat.label} className="rounded-2xl bg-white p-5">
                  <p className="font-en text-2xl font-bold text-primary">{stat.value}</p>
                  <p className="mt-2 text-sm text-subtext">{stat.label}</p>
                </div>
              ))}
            </div>
            <p className="mt-4 text-xs text-subtext">出典：UNICEF Mozambique 2024年次報告</p>
          </div>
        </ScrollReveal>

        <ScrollReveal className="mt-12 text-center">
          <CTAButton variant="primary">支援する</CTAButton>
        </ScrollReveal>
      </div>
    </section>
  );
}
