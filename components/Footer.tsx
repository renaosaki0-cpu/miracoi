"use client";

import Link from "next/link";
import { useLocale } from "@/lib/i18n/context";
import { SITE } from "@/lib/constants";
import { MiracoiIcon } from "./ui/MiracoiIcon";

export function Footer() {
  const { t } = useLocale();
  const year = new Date().getFullYear();

  const links = [
    { label: t.footer.supporters, href: "/#supporters" },
    { label: t.footer.contact, href: "/contact" },
    { label: t.footer.instagram, href: SITE.instagramUrl, external: true },
    { label: t.footer.terms, href: "/terms" },
    { label: t.footer.privacy, href: "/privacy" },
  ];

  return (
    <footer className="relative border-t border-accent/90 bg-gradient-to-b from-[#fbf8f3] via-[#f5efe6] to-accent/45">
      <div className="container-main px-5 py-16 sm:px-6 md:py-20 lg:py-24">
        <div className="flex flex-col gap-14 lg:flex-row lg:items-start lg:justify-between lg:gap-20">
          {/* ブランド */}
          <div className="max-w-sm lg:max-w-md">
            <Link
              href="/"
              className="group inline-flex items-center gap-3.5 transition-opacity hover:opacity-90 sm:gap-4"
            >
              <MiracoiIcon
                size={56}
                className="h-12 w-12 drop-shadow-sm sm:h-14 sm:w-14 md:h-16 md:w-16"
              />
              <span className="font-en text-[1.65rem] font-bold tracking-tight text-text sm:text-3xl md:text-[2rem]">
                Miracoi
              </span>
            </Link>
            <p className="mt-7 text-base leading-[1.85] text-text/90 sm:mt-8 sm:text-lg">{t.footer.tagline}</p>
            <p className="mt-2.5 text-sm tracking-[0.06em] text-subtext/85">{t.footer.subtitle}</p>
          </div>

          {/* ナビ + CTA */}
          <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between sm:gap-12 lg:flex-col lg:items-end lg:gap-12">
            <nav aria-label="Footer">
              <ul className="flex flex-col gap-3 sm:items-end">
                {links.map((link) => (
                  <li key={link.label}>
                    {"external" in link && link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-subtext/90 transition-colors hover:text-primary"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link href={link.href} className="text-sm text-subtext/90 transition-colors hover:text-primary">
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </nav>

            <a
              href={SITE.readyforUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-white shadow-sm shadow-primary/15 transition-all hover:bg-[#249088] hover:shadow-md hover:shadow-primary/20 sm:w-auto"
            >
              {t.footer.supportCta}
            </a>
          </div>
        </div>

        <div className="mt-16 border-t border-black/[0.04] pt-8 md:mt-20">
          <p className="text-center text-xs tracking-wide text-subtext/50">
            &copy; {year} {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
