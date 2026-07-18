"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useLocale } from "@/lib/i18n/context";
import { resolveImage } from "@/lib/images";
import { layoutClass } from "@/lib/imageLayout";
import { CTAButton } from "./ui/CTAButton";
import { MiraiImage } from "./ui/MiraiImage";

/** Hero — 写真主役・READYFOR へ */
export function Hero() {
  const { t, locale } = useLocale();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.06]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.45], [1, 0]);

  return (
    <section ref={ref} id="hero" className="relative -mt-14 h-[100svh] min-h-[560px] overflow-hidden sm:-mt-16 md:-mt-[4.5rem]">
      <motion.div style={{ y: imageY, scale: imageScale }} className="absolute inset-0 h-[115%] w-full origin-center">
        <MiraiImage
          src={resolveImage("hero")}
          alt="Miracoi"
          fill
          priority
          sizes="100vw"
          className="h-full w-full"
          imageClassName={layoutClass("hero")}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/15" />
      </motion.div>

      <motion.div
        style={{ opacity: contentOpacity }}
        className="relative z-10 flex h-full flex-col justify-end container-main pb-28 sm:pb-32 md:pb-36"
      >
        <p className="mb-4 text-xs font-medium tracking-[0.2em] text-white/75 sm:text-sm">
          {t.hero.eyebrow}
        </p>
        <h1 className="max-w-4xl text-[2rem] font-bold leading-[1.12] tracking-tight text-white sm:text-5xl md:text-6xl">
          <span className={locale === "ja" ? "font-handwritten block text-[2.25rem] sm:text-5xl md:text-6xl" : ""}>
            {t.hero.titleLine1}
          </span>
          <span className="mt-1 block text-primary">{t.hero.titleLine2}</span>
        </h1>
        {t.hero.subtitle && (
          <p className="mt-5 max-w-lg text-base leading-relaxed text-white/90 sm:text-lg md:mt-6">{t.hero.subtitle}</p>
        )}
        <div className="mt-8 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:flex-wrap sm:items-center">
          <CTAButton variant="primary" size="lg" className="min-h-12 w-full shadow-lg shadow-primary/25 sm:w-auto sm:min-w-[260px]">
            {t.hero.ctaSupport}
          </CTAButton>
          <CTAButton variant="ghost" size="md" className="min-h-11 w-full sm:w-auto sm:min-w-[240px]">
            {t.readyfor.viewProject}
          </CTAButton>
        </div>
        {t.hero.ctaNote && (
          <p className="mt-4 max-w-md text-xs leading-relaxed text-white/65 sm:text-sm">{t.hero.ctaNote}</p>
        )}
      </motion.div>
    </section>
  );
}
