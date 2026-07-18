"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useLocale } from "@/lib/i18n/context";
import { resolveImage } from "@/lib/images";
import { layoutClass } from "@/lib/imageLayout";
import { CTAButton } from "./ui/CTAButton";
import { EmotionalPhrase } from "./ui/EmotionalPhrase";
import { MiraiImage } from "./ui/MiraiImage";

/** Hero — フルスクリーンの写真と、あの約束の一言。READYFOR への最初の入口。 */
export function Hero() {
  const { t } = useLocale();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.06]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.45], [1, 0]);

  return (
    <section
      ref={ref}
      id="home"
      className="relative -mt-14 min-h-[90svh] overflow-hidden sm:-mt-16 md:-mt-[4.5rem] md:min-h-[100svh]"
    >
      <motion.div style={{ y: imageY, scale: imageScale }} className="absolute inset-0 h-[115%] w-full origin-center">
        <MiraiImage
          src={resolveImage("hero")}
          alt="モザンビークの子どもたちと交流するMiracoiメンバー"
          fill
          priority
          sizes="100vw"
          className="h-full w-full"
          imageClassName={layoutClass("hero")}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-black/5" />
      </motion.div>

      <motion.div
        style={{ opacity: contentOpacity }}
        className="relative z-10 flex h-full flex-col justify-end container-main pb-28 sm:pb-32 md:pb-36"
      >
        <p className="mb-4 text-xs font-medium tracking-[0.2em] text-white/75 sm:text-sm">
          {t.hero.eyebrow}
        </p>
        <EmotionalPhrase
          as="h1"
          className="max-w-3xl text-[2.1rem] leading-[1.3] text-white sm:text-5xl md:text-[3.4rem]"
        >
          {t.hero.title}
        </EmotionalPhrase>
        <div className="mt-5 max-w-lg space-y-0.5 sm:mt-6">
          {t.hero.subtitleLines.map((line) => (
            <p key={line} className="text-base leading-relaxed text-white/90 sm:text-lg">
              {line}
            </p>
          ))}
        </div>
        <div className="mt-8 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:items-center sm:gap-4">
          <CTAButton
            variant="primary"
            size="lg"
            className="min-h-12 w-full shadow-lg shadow-primary/25 sm:w-auto sm:min-w-[240px]"
          >
            {t.hero.ctaPrimary}
          </CTAButton>
          <CTAButton variant="ghost" size="lg" className="min-h-12 w-full sm:w-auto sm:min-w-[220px]">
            {t.hero.ctaSecondary}
          </CTAButton>
        </div>
      </motion.div>
    </section>
  );
}
