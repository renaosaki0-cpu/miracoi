"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { SITE } from "@/lib/constants";
import { useLocale } from "@/lib/i18n/context";

const NEW_TAB_HINT: Record<string, string> = {
  ja: "（新しいタブでREADYFORが開きます）",
  en: "(opens READYFOR in a new tab)",
  pt: "(abre o READYFOR numa nova aba)",
};

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

type CTAButtonProps = {
  href?: string;
  onClick?: () => void;
  /** Fires alongside normal link navigation (e.g. closing a mobile menu) without turning this into a plain button */
  onNavigate?: () => void;
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  external?: boolean;
};

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-primary text-white shadow-lg shadow-primary/30 ring-2 ring-primary/20 hover:bg-[#249088] hover:shadow-primary/40 active:scale-[0.98]",
  secondary:
    "bg-white text-primary shadow-lg hover:bg-accent border border-transparent",
  outline:
    "bg-transparent text-primary border-2 border-primary hover:bg-primary hover:text-white",
  ghost: "bg-white/10 text-white border border-white/30 hover:bg-white/20 backdrop-blur-sm",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-4 py-2.5 text-sm min-h-10",
  md: "px-6 py-3 text-base min-h-11",
  lg: "px-8 py-4 text-base sm:text-lg min-h-12",
};

/** CTAボタン — ホバーアニメーション付き */
export function CTAButton({
  href = SITE.readyforUrl,
  onClick,
  onNavigate,
  children,
  variant = "primary",
  size = "md",
  className = "",
  external = true,
}: CTAButtonProps) {
  const { locale } = useLocale();
  const classes = `inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-colors duration-300 ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  const motionProps = {
    whileHover: { scale: 1.03, y: -2 },
    whileTap: { scale: 0.98 },
    transition: { type: "spring" as const, stiffness: 400, damping: 20 },
  };

  if (onClick) {
    return (
      <motion.button type="button" onClick={onClick} className={classes} {...motionProps}>
        {children}
      </motion.button>
    );
  }

  if (external) {
    const isMailto = href.startsWith("mailto:");
    const ariaLabel =
      !isMailto && typeof children === "string"
        ? `${children} ${NEW_TAB_HINT[locale] ?? NEW_TAB_HINT.en}`
        : undefined;
    return (
      <motion.a
        href={href}
        target={isMailto ? undefined : "_blank"}
        rel={isMailto ? undefined : "noopener noreferrer"}
        aria-label={ariaLabel}
        onClick={onNavigate}
        className={classes}
        {...motionProps}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.div {...motionProps}>
      <Link href={href} onClick={onNavigate} className={classes}>
        {children}
      </Link>
    </motion.div>
  );
}
