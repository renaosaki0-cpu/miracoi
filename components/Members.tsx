"use client";

import { motion } from "framer-motion";
import { useLocale } from "@/lib/i18n/context";
import { members } from "@/data/content";
import { resolveImage } from "@/lib/images";
import { layoutClass } from "@/lib/imageLayout";
import { MiraiImage } from "./ui/MiraiImage";
import { InstagramIcon } from "./ui/InstagramIcon";
import { ScrollReveal } from "./ui/ScrollReveal";

const MEMBER_IMAGE: Record<string, "memberRena" | "memberMomoe"> = {
  ozaki: "memberRena",
  yasunaga: "memberMomoe",
};

export function Members() {
  const { t } = useLocale();

  return (
    <section id="members" className="section-padding bg-section-cream">
      <div className="container-main">
        <ScrollReveal className="mb-14 text-center">
          <p className="section-label">{t.members.label}</p>
          <h2 className="text-3xl font-bold text-text md:text-4xl lg:text-5xl">{t.members.title}</h2>
          <p className="mx-auto mt-5 max-w-xl text-subtext">{t.members.description}</p>
        </ScrollReveal>

        <div className="grid gap-10 md:grid-cols-2 md:gap-12 lg:gap-16">
          {members.map((member, i) => {
            const slot = MEMBER_IMAGE[member.id];
            const imageSrc = slot ? resolveImage(slot) : null;

            return (
              <ScrollReveal key={member.id} delay={i * 0.1}>
                <motion.article
                  whileHover={{ y: -4 }}
                  className="overflow-hidden rounded-[2rem] bg-white shadow-sm md:rounded-[2.5rem]"
                >
                  <div className="overflow-hidden">
                    <MiraiImage
                      src={imageSrc}
                      alt={member.name}
                      className="aspect-[4/5] w-full md:aspect-[5/6] md:min-h-[420px]"
                      imageClassName={layoutClass("member")}
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="p-8 md:p-10">
                    <p className="text-sm font-medium text-primary">{member.role}</p>
                    <h3 className="mt-1 text-2xl font-bold text-text">{member.name}</h3>
                    <p className="mt-1 text-sm text-subtext">{member.origin}</p>
                    <ul className="mt-4 space-y-2">
                      {member.bio.map((line) => (
                        <li key={line} className="text-sm leading-relaxed text-subtext">
                          {line}
                        </li>
                      ))}
                    </ul>
                    <blockquote className="mt-5 rounded-xl bg-accent/60 p-4 text-sm italic text-text">
                      「{member.message}」
                    </blockquote>
                    {member.instagram && member.instagramHandle && (
                      <a
                        href={member.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-6 flex w-full items-center gap-4 rounded-2xl border border-primary/20 bg-accent/30 px-5 py-4 transition-all hover:border-primary/40 hover:bg-accent/60 hover:shadow-sm"
                      >
                        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary text-white">
                          <InstagramIcon className="h-5 w-5" />
                        </span>
                        <span className="min-w-0 text-left">
                          <span className="block text-sm font-semibold text-text">
                            {t.members.instagramLinks[member.id as "ozaki" | "yasunaga"]}
                          </span>
                          <span className="block text-xs text-subtext">@{member.instagramHandle}</span>
                        </span>
                        <span className="ml-auto shrink-0 text-sm font-medium text-primary" aria-hidden>
                          →
                        </span>
                      </a>
                    )}
                  </div>
                </motion.article>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
