"use client";

import { useLocale } from "@/lib/i18n/context";
import { CTAButton } from "./ui/CTAButton";
import { ScrollReveal } from "./ui/ScrollReveal";

type ReadyforStripProps = {
  variant?: "primary" | "soft";
  showStoryLink?: boolean;
};

/** ページ内の READYFOR 誘導ブロック */
export function ReadyforStrip({ variant = "primary", showStoryLink = false }: ReadyforStripProps) {
  const { t } = useLocale();

  if (variant === "soft") {
    return (
      <ScrollReveal className="py-8 md:py-10">
        <div className="container-main">
          <div className="mx-auto flex max-w-xl flex-col items-center gap-4 text-center">
            <p className="text-sm leading-relaxed text-subtext">{t.readyfor.note}</p>
            <CTAButton variant="primary" size="lg" className="w-full min-h-12 sm:w-auto sm:min-w-[280px]">
              {t.readyfor.support}
            </CTAButton>
            {showStoryLink && (
              <CTAButton variant="outline" size="md" className="w-full min-h-11 sm:w-auto sm:min-w-[280px]">
                {t.readyfor.readStory}
              </CTAButton>
            )}
          </div>
        </div>
      </ScrollReveal>
    );
  }

  return (
    <ScrollReveal className="py-10 md:py-12">
      <div className="container-main">
        <div className="mx-auto max-w-2xl rounded-[2rem] bg-primary/10 px-6 py-10 text-center ring-1 ring-primary/15 sm:px-10 md:py-12">
          <p className="text-sm leading-relaxed text-subtext md:text-base">{t.readyfor.note}</p>
          <div className="mt-6 flex flex-col items-stretch gap-3 sm:mx-auto sm:max-w-md sm:items-center">
            <CTAButton variant="primary" size="lg" className="w-full min-h-12">
              {t.readyfor.support}
            </CTAButton>
            <CTAButton variant="outline" size="md" className="w-full min-h-11">
              {t.readyfor.viewProject}
            </CTAButton>
            {showStoryLink && (
              <CTAButton variant="outline" size="md" className="w-full min-h-11">
                {t.readyfor.readStory}
              </CTAButton>
            )}
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}
