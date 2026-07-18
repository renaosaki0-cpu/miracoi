"use client";

import { CTAButton } from "./CTAButton";

type ReadyforCTAProps = {
  children: React.ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "secondary" | "outline" | "ghost";
};

/**
 * Section-level call to action — always points to the READYFOR project page
 * (see CTAButton's default href). Kept as a distinct component so every
 * "learn more" moment in the story reads consistently and is easy to audit.
 */
export function ReadyforCTA({ children, className = "", size = "md", variant = "primary" }: ReadyforCTAProps) {
  return (
    <CTAButton variant={variant} size={size} className={`w-full min-h-12 sm:w-auto ${className}`}>
      {children}
    </CTAButton>
  );
}
