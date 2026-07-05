import { getMiracoiIconSrc } from "@/lib/miracoiIcon";

type MiracoiIconProps = {
  size?: number;
  className?: string;
  priority?: boolean;
};

/** 団体アイコン — manifest の icon スロット（透過PNG） */
export function MiracoiIcon({ size = 32, className = "", priority = false }: MiracoiIconProps) {
  return (
    <img
      src={getMiracoiIconSrc()}
      alt="Miracoi"
      width={size}
      height={size}
      className={`object-contain ${className}`}
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : undefined}
    />
  );
}
