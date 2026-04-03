import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  ctaLabel: string;
  href: string;
  isExternal?: boolean;
  imageBg?: string;
}

export default function ProjectCard({
  title,
  description,
  imageUrl,
  imageAlt,
  ctaLabel,
  href,
  isExternal,
  imageBg,
}: ProjectCardProps) {
  const card = (
    <div className="group bg-surface-container-lowest rounded-xl overflow-hidden flex flex-col transition-transform hover:-translate-y-2 duration-500">
      <div
        className="aspect-video overflow-hidden"
        style={imageBg ? { backgroundColor: imageBg } : undefined}
      >
        <Image
          src={imageUrl}
          alt={imageAlt}
          width={600}
          height={338}
          className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-700"
        />
      </div>
      <div className="p-8">
        <h3 className="text-xl font-bold mb-2 font-headline">{title}</h3>
        <p className="text-on-surface-variant text-sm mb-6 line-clamp-3 font-body">
          {description}
        </p>
        <span className="inline-flex items-center gap-2 px-3 py-1 bg-secondary-container text-on-secondary-container rounded-lg font-bold text-sm uppercase tracking-widest hover:brightness-95 transition-all font-headline">
          <span className="material-symbols-outlined text-sm">
            arrow_forward
          </span>
          {ctaLabel}
        </span>
      </div>
    </div>
  );

  if (isExternal) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {card}
      </a>
    );
  }

  return <Link href={href}>{card}</Link>;
}
