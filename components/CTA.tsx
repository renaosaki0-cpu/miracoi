"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useLocale } from "@/lib/i18n/context";
import { CTAButton } from "./ui/CTAButton";
import { resolveImage } from "@/lib/images";
import { layoutClass } from "@/lib/imageLayout";
import { MiraiImage } from "./ui/MiraiImage";
import { ScrollReveal } from "./ui/ScrollReveal";

export function CTA() {
  const { t } = useLocale();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

  return (
    <section ref={ref} id="join" className="relative overflow-hidden py-16 sm:py-20 md:py-28 lg:py-32">
      <motion.div style={{ y: bgY }} className="absolute inset-0">
        <div className="relative h-[110%] w-full">
          <MiraiImage
            src={resolveImage("ctaBg")}
            alt="Join Miracoi"
            fill
            className="h-full w-full"
            imageClassName={layoutClass("ctaBg")}
          />
        </div>
        <div className="absolute inset-0 bg-primary/88" />
      </motion.div>

      <div className="container-main relative z-10 text-center">
        <ScrollReveal>
          <p className="mb-3 text-xs tracking-[0.2em] text-white/70 uppercase md:mb-4 md:text-sm">{t.cta.label}</p>
          <h2 className="text-2xl font-bold leading-snug text-white sm:text-3xl md:text-4xl lg:text-5xl">
            {t.cta.title}
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-white/90 md:mt-6 md:max-w-xl md:text-base">
            {t.cta.description}
          </p>
          <p className="mx-auto mt-4 max-w-md text-sm italic text-white/75 md:mt-5 md:text-base">
            {t.cta.quote}
          </p>
          <div className="mt-8 flex flex-col items-stretch gap-3 sm:mx-auto sm:max-w-md sm:items-center md:mt-10 md:gap-4">
            <CTAButton variant="secondary" size="lg" className="w-full min-h-12 sm:min-w-[260px]">
              {t.cta.support}
            </CTAButton>
            <CTAButton
              href="/supporters"
              variant="ghost"
              size="md"
              external={false}
              className="w-full min-h-11 sm:min-w-[260px]"
            >
              {t.cta.messages}
            </CTAButton>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
