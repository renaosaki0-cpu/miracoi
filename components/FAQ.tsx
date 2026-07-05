"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocale } from "@/lib/i18n/context";
import { ScrollReveal } from "./ui/ScrollReveal";

export function FAQ() {
  const { t } = useLocale();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="section-padding bg-section-white">
      <div className="container-main max-w-3xl">
        <ScrollReveal className="mb-12 text-center md:mb-16">
          <p className="section-label">{t.faq.label}</p>
          <h2 className="text-3xl font-bold tracking-tight text-text sm:text-4xl md:text-5xl">{t.faq.title}</h2>
          <p className="mx-auto mt-4 max-w-lg text-sm text-subtext md:text-base">{t.faq.description}</p>
        </ScrollReveal>

        <div className="space-y-3">
          {t.faq.items.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <ScrollReveal key={item.q} delay={index * 0.04}>
                <div className="card-surface overflow-hidden transition-shadow hover:shadow-md">
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-4 p-5 text-left md:p-6"
                    aria-expanded={isOpen}
                  >
                    <span className="font-semibold text-text">{item.q}</span>
                    <motion.span animate={{ rotate: isOpen ? 180 : 0 }} className="shrink-0 text-primary">
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <p className="border-t border-accent px-5 pb-5 pt-4 text-sm leading-relaxed text-subtext md:px-6 md:pb-6">
                          {item.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
