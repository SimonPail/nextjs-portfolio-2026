import Image from "next/image";

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  ctaLabel: string;
}

export default function ProjectCard({
  title,
  description,
  imageUrl,
  imageAlt,
  ctaLabel,
}: ProjectCardProps) {
  return (
    <div className="group bg-surface-container-lowest rounded-xl overflow-hidden flex flex-col transition-transform hover:-translate-y-2 duration-500">
      <div className="aspect-video overflow-hidden bg-surface-container-high">
        <Image
          src={imageUrl}
          alt={imageAlt}
          width={600}
          height={338}
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
        />
      </div>
      <div className="p-8">
        <h3 className="text-xl font-bold mb-2 font-headline">{title}</h3>
        <p className="text-on-surface-variant text-sm mb-6 line-clamp-3 font-body">
          {description}
        </p>
        <div className="flex items-center text-xs font-bold uppercase tracking-widest text-secondary group-hover:gap-4 transition-all font-headline">
          {ctaLabel}
          <span className="material-symbols-outlined text-sm ml-2">
            arrow_forward
          </span>
        </div>
      </div>
    </div>
  );
}
