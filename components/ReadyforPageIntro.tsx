"use client";

import { useLocale } from "@/lib/i18n/context";
import { ScrollReveal } from "./ui/ScrollReveal";
import { CTAButton } from "./ui/CTAButton";

type ReadyforPageIntroProps = {
  title: string;
  description: string;
};

/** 詳細ページの代わり — READYFOR へ誘導 */
export function ReadyforPageIntro({ title, description }: ReadyforPageIntroProps) {
  const { t } = useLocale();

  return (
    <section className="section-padding bg-section-warm pt-8 md:pt-12">
      <div className="container-main max-w-2xl text-center">
        <ScrollReveal>
          <h1 className="text-3xl font-bold tracking-tight text-text sm:text-4xl">{title}</h1>
          <p className="mt-6 text-base leading-[1.9] text-subtext md:text-lg">{description}</p>
          <p className="mt-4 text-sm leading-relaxed text-subtext">{t.readyfor.detailsOnReadyfor}</p>
          <div className="mt-10 flex flex-col items-stretch gap-3 sm:mx-auto sm:max-w-md">
            <CTAButton variant="primary" size="lg" className="w-full min-h-12">
              {t.readyfor.viewProject}
            </CTAButton>
            <CTAButton variant="outline" size="md" className="w-full min-h-11">
              {t.readyfor.support}
            </CTAButton>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
