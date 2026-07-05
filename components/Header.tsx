"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocale } from "@/lib/i18n/context";
import { CTAButton } from "./ui/CTAButton";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { MiracoiIcon } from "./ui/MiracoiIcon";

const NAV_ITEMS = [
  { id: "project", href: "/project" },
  { id: "returns", href: "/returns" },
  { id: "supporters", href: "/supporters" },
  { id: "faq", href: "/faq" },
  { id: "contact", href: "/contact" },
] as const;

type NavId = (typeof NAV_ITEMS)[number]["id"];

export function Header() {
  const pathname = usePathname();
  const { t } = useLocale();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const navLabels: Record<NavId, string> = {
    project: t.nav.project,
    returns: t.nav.returns,
    supporters: t.nav.supporters,
    faq: t.nav.faq,
    contact: t.nav.contact,
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMenuOpen(false), [pathname]);

  const isActive = (href: string) => pathname === href || (href !== "/" && pathname.startsWith(href));

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 bg-[#111111] transition-shadow duration-300 ${
        scrolled ? "shadow-[0_1px_0_0_rgba(255,255,255,0.08)]" : ""
      }`}
    >
      <div className="container-main flex h-14 items-center justify-between gap-2 sm:h-16 md:h-[4.5rem] md:gap-4">
        <Link
          href="/"
          className="flex shrink-0 items-center gap-1.5 font-en text-lg font-bold tracking-tight text-white transition-colors hover:text-white/90 sm:text-xl"
        >
          <MiracoiIcon size={44} className="h-10 w-10 shrink-0 sm:h-11 sm:w-11" priority />
          Miracoi
        </Link>

        <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Main">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className={`relative rounded-full px-2.5 py-2 text-xs font-medium transition-colors xl:px-3 xl:text-sm ${
                isActive(item.href) ? "text-primary" : "text-white/90 hover:text-primary"
              }`}
            >
              {navLabels[item.id]}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-1.5 sm:gap-2">
          <LanguageSwitcher theme="dark" />
          <CTAButton
            variant="primary"
            size="sm"
            className="hidden min-h-10 shadow-lg shadow-primary/40 ring-2 ring-white/10 md:inline-flex"
          >
            {t.nav.support}
          </CTAButton>
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-full text-white transition-colors hover:bg-white/10 lg:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-label={t.nav.menu}
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-white/10 bg-[#111111] lg:hidden"
          >
            <ul className="container-main space-y-1 py-4">
              <li>
                <Link href="/" className="block rounded-xl px-4 py-3.5 text-base font-medium text-white/90">
                  Home
                </Link>
              </li>
              {NAV_ITEMS.map((item) => (
                <li key={item.id}>
                  <Link
                    href={item.href}
                    className={`block rounded-xl px-4 py-3.5 text-base font-medium transition-colors ${
                      isActive(item.href) ? "bg-white/10 text-primary" : "text-white/90 hover:text-primary"
                    }`}
                  >
                    {navLabels[item.id]}
                  </Link>
                </li>
              ))}
              <li className="border-t border-white/10 pt-4">
                <LanguageSwitcher showLabel theme="dark" className="px-4" />
              </li>
              <li className="pt-3">
                <CTAButton
                  variant="primary"
                  size="md"
                  className="w-full min-h-12 shadow-lg shadow-primary/40 ring-2 ring-white/10"
                >
                  {t.nav.support}
                </CTAButton>
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

export function HeaderSpacer() {
  return <div className="h-14 sm:h-16 md:h-[4.5rem]" aria-hidden />;
}
