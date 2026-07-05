"use client";

import { useLocale } from "@/lib/i18n/context";
import { ScrollReveal } from "./ui/ScrollReveal";
import { CTAButton } from "./ui/CTAButton";

/** あなたの支援でできること — Apple風の大きな数字カード */
export function SupportImpact() {
  const { t, locale } = useLocale();

  const formatAmount = (n: number) =>
    n.toLocaleString(locale === "ja" ? "ja-JP" : locale === "pt" ? "pt-PT" : "en-US");

  return (
    <section id="support-impact" className="section-padding bg-[#fafafa]">
      <div className="container-main">
        <ScrollReveal className="mb-12 text-center md:mb-20 lg:mb-24">
          <p className="mb-3 text-xs font-medium tracking-[0.25em] text-primary uppercase md:text-sm">
            {t.supportImpact.label}
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-text sm:text-4xl md:text-5xl lg:text-6xl">
            {t.supportImpact.title}
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-base text-subtext md:mt-6 md:text-lg">
            {t.supportImpact.subtitle}
          </p>
        </ScrollReveal>

        <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
          {t.supportImpact.items.map((item, i) => (
            <ScrollReveal key={item.amount} delay={i * 0.05}>
              <article className="group flex h-full flex-col rounded-3xl border border-black/[0.06] bg-white p-6 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/[0.06] sm:p-8 md:p-10">
                <div className="mb-6 md:mb-8">
                  <p className="font-en text-[2.75rem] font-semibold leading-none tracking-tight text-text sm:text-5xl md:text-6xl">
                    {formatAmount(item.amount)}
                  </p>
                  <p className="mt-1 text-sm font-medium text-subtext md:text-base">{t.supportImpact.yen}</p>
                </div>
                <p className="flex-1 text-sm leading-[1.85] text-text sm:text-base md:text-[1.05rem] md:leading-[1.9]">
                  {item.description}
                </p>
              </article>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className="mt-12 text-center md:mt-16">
          <CTAButton variant="primary" size="lg" className="w-full min-h-12 sm:w-auto sm:min-w-[260px]">
            {t.nav.support}
          </CTAButton>
        </ScrollReveal>
      </div>
    </section>
  );
}
