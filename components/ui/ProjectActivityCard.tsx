import { MiraiImage } from "./MiraiImage";

type ProjectActivityCardProps = {
  index: number;
  title: string;
  description: string;
  imageSrc: string | null;
  imageAlt: string;
  imageClassName?: string;
};

/** One of the three on-the-ground activities — real photo first, short text below. */
export function ProjectActivityCard({
  index,
  title,
  description,
  imageSrc,
  imageAlt,
  imageClassName = "object-cover object-center",
}: ProjectActivityCardProps) {
  return (
    <li className="flex h-full flex-col overflow-hidden rounded-[2rem] bg-white shadow-sm ring-1 ring-black/[0.04]">
      <div className="overflow-hidden">
        <MiraiImage
          src={imageSrc}
          alt={imageAlt}
          className="aspect-[4/3] w-full"
          imageClassName={imageClassName}
          sizes="(max-width: 1024px) 100vw, 400px"
        />
      </div>
      <div className="flex flex-1 flex-col p-6 md:p-7">
        <span className="mb-3 flex h-8 w-8 items-center justify-center rounded-full bg-primary/15 text-sm font-bold text-primary">
          {index}
        </span>
        <h3 className="text-lg font-bold leading-snug text-text md:text-xl">{title}</h3>
        <p className="mt-2 flex-1 text-sm leading-[1.85] text-subtext md:text-base">{description}</p>
      </div>
    </li>
  );
}
