type SectionHeadingProps = {
  label?: string;
  title: string;
  lead?: string;
  align?: "left" | "center";
  className?: string;
};

/** Shared label + title + optional lead paragraph used across the homepage story sections. */
export function SectionHeading({ label, title, lead, align = "left", className = "" }: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center" : "text-left";

  return (
    <div className={`${alignClass} ${className}`}>
      {label ? <p className="section-label">{label}</p> : null}
      <h2 className="text-2xl font-bold tracking-tight text-text sm:text-3xl md:text-[2rem]">{title}</h2>
      {lead ? (
        <p
          className={`mt-4 text-base leading-[1.9] text-subtext ${
            align === "center" ? "mx-auto max-w-xl" : "max-w-xl"
          }`}
        >
          {lead}
        </p>
      ) : null}
    </div>
  );
}
