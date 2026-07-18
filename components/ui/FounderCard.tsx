import { layoutClass } from "@/lib/imageLayout";
import { MiraiImage } from "./MiraiImage";

type FounderCardProps = {
  role: string;
  name: string;
  story: string;
  imageSrc: string | null;
  imageAlt: string;
  /** Per-portrait crop — same container everywhere, positioning/zoom adjusts per photo */
  imageClassName?: string;
};

/**
 * Balanced founder card — identical width, height, image ratio, padding, and
 * typography for both co-representatives. Only `imageClassName` may vary, so
 * each portrait can be framed head-shoulders-chest without distorting either
 * photo.
 */
export function FounderCard({ role, name, story, imageSrc, imageAlt, imageClassName }: FounderCardProps) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-[2rem] bg-white shadow-sm ring-1 ring-black/[0.04]">
      <div className="overflow-hidden">
        <MiraiImage
          src={imageSrc}
          alt={imageAlt}
          className="aspect-[4/5] w-full"
          imageClassName={imageClassName ?? layoutClass("member")}
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
      <div className="flex flex-1 flex-col p-6 md:p-8">
        <p className="text-sm font-medium text-primary">{role}</p>
        <h3 className="mt-1 text-xl font-bold text-text md:text-2xl">{name}</h3>
        <p className="mt-4 flex-1 text-base leading-[1.9] text-subtext">{story}</p>
      </div>
    </article>
  );
}
