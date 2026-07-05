import { ScrollReveal } from "./ScrollReveal";

type SectionHeaderProps = {
  label?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  light?: boolean;
};

/** セクション見出し — 統一されたタイポグラフィ */
export function SectionHeader({
  label,
  title,
  description,
  align = "center",
  light = false,
}: SectionHeaderProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <ScrollReveal className={`mb-12 md:mb-16 max-w-3xl ${alignClass}`}>
      {label && (
        <p className={`section-label ${light ? "text-white/70" : ""}`}>{label}</p>
      )}
      <h2
        className={`text-3xl font-bold leading-tight tracking-tight md:text-4xl lg:text-5xl ${
          light ? "text-white" : "text-text"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-5 text-base leading-relaxed md:text-lg ${
            light ? "text-white/80" : "text-subtext"
          }`}
        >
          {description}
        </p>
      )}
    </ScrollReveal>
  );
}
