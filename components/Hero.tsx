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
        <h1
          className={`max-w-3xl text-[2.1rem] leading-[1.3] text-white sm:text-5xl md:text-[3.4rem] ${
            locale === "ja" ? "font-handwritten" : "font-bold leading-[1.12] tracking-tight"
          }`}
        >
          {t.hero.title}
        </h1>
        <div className="mt-5 max-w-lg space-y-0.5 sm:mt-6">
          {t.hero.subtitleLines.map((line) => (
            <p key={line} className="text-base leading-relaxed text-white/90 sm:text-lg">
              {line}
            </p>
          ))}
        </div>
        <div className="mt-8 sm:mt-9">
          <CTAButton variant="primary" size="lg" className="min-h-12 w-full shadow-lg shadow-primary/25 sm:w-auto sm:min-w-[260px]">
            {t.hero.cta}
          </CTAButton>
        </div>
      </motion.div>
    </section>
  );
}
