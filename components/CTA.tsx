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
  const { t, locale } = useLocale();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

  return (
    <section ref={ref} id="join" className="relative overflow-hidden py-16 sm:py-20 md:py-24">
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
          <h2
            className={`text-2xl font-bold leading-snug text-white sm:text-3xl md:text-4xl ${
              locale === "ja" ? "font-handwritten text-3xl sm:text-4xl md:text-5xl" : ""
            }`}
          >
            {t.cta.title}
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-white/90 md:mt-6 md:text-base">
            {t.cta.description}
          </p>
          <div className="mt-8 flex flex-col items-stretch gap-3 sm:mx-auto sm:max-w-md md:mt-10">
            <CTAButton variant="secondary" size="lg" className="w-full min-h-12">
              {t.cta.support}
            </CTAButton>
            <CTAButton variant="ghost" size="md" className="w-full min-h-11">
              {t.readyfor.viewProject}
            </CTAButton>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
