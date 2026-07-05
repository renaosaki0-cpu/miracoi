"use client";

import { motion } from "framer-motion";
import { useLocale } from "@/lib/i18n/context";
import { ScrollReveal } from "./ui/ScrollReveal";
import { MiracoiIcon } from "./ui/MiracoiIcon";

export function Mission() {
  const { t } = useLocale();

  return (
    <section id="mission" className="section-padding bg-section-cream">
      <div className="container-main">
        <ScrollReveal className="mb-14 text-center md:mb-16">
          <MiracoiIcon size={80} className="mx-auto mb-6 h-16 w-16 sm:h-20 sm:w-20" />
          <p className="section-label">{t.mission.label}</p>
          <h2 className="text-3xl font-bold text-text md:text-4xl lg:text-5xl">{t.mission.title}</h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-subtext md:text-lg">{t.mission.description}</p>
        </ScrollReveal>

        <div className="grid gap-6 md:grid-cols-3">
          {t.mission.cards.map((card, i) => (
            <ScrollReveal key={card.label} delay={i * 0.08}>
              <motion.div whileHover={{ y: -4 }} className="card-surface flex h-full flex-col p-8 md:p-10">
                <p className="mb-3 text-xs font-semibold tracking-widest text-primary uppercase">{card.label}</p>
                <h3 className="mb-3 text-xl font-bold text-text">{card.title}</h3>
                <p className="text-sm leading-relaxed text-subtext md:text-base">{card.description}</p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
