/** 団体アイコン — public/images/miracoi-icon.png（透過PNG） */
export const MIRACOI_ICON_FALLBACK = "/images/miracoi-icon.png";

type MiracoiIconProps = {
  size?: number;
  className?: string;
  priority?: boolean;
};

export function MiracoiIcon({ size = 32, className = "", priority = false }: MiracoiIconProps) {
  return (
    <img
      src={MIRACOI_ICON_FALLBACK}
      alt="Miracoi"
      width={size}
      height={size}
      className={`object-contain ${className}`}
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : undefined}
    />
  );
}
