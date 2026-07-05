"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useLocale } from "@/lib/i18n/context";
import { resolveImage } from "@/lib/images";
import { layoutClass } from "@/lib/imageLayout";
import { CTAButton } from "./ui/CTAButton";
import { MiraiImage } from "./ui/MiraiImage";

/** Hero — 写真主役・最小限の文字 */
export function Hero() {
  const { t } = useLocale();
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
        <p className="mb-4 text-xs font-medium tracking-[0.28em] text-white/75 uppercase sm:text-sm">
          {t.hero.eyebrow}
        </p>
        <h1 className="max-w-4xl text-[2rem] font-bold leading-[1.08] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[4.25rem]">
          {t.hero.titleLine1}
          <br />
          <span className="text-primary">{t.hero.titleLine2}</span>
        </h1>
        {t.hero.subtitle && (
          <p className="mt-5 max-w-lg text-base leading-relaxed text-white/90 sm:text-lg md:mt-6">{t.hero.subtitle}</p>
        )}
        <div className="mt-9 sm:mt-10">
          <CTAButton variant="primary" size="lg" className="min-h-12 min-w-[220px] shadow-lg shadow-primary/25">
            {t.hero.ctaSupport}
          </CTAButton>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-white/50"
        aria-hidden
      >
        <span className="block text-center text-[10px] tracking-[0.3em] uppercase">{t.hero.scroll}</span>
        <svg className="mx-auto mt-1 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
        </svg>
      </motion.div>
    </section>
  );
}
