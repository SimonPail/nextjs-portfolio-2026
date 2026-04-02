interface ExperienceItemProps {
  title: string;
  company: string;
  period: string;
  description: string;
  tags: string[];
  isCurrent?: boolean;
}

export default function ExperienceItem({
  title,
  company,
  period,
  description,
  tags,
  isCurrent = false,
}: ExperienceItemProps) {
  return (
    <div className="relative pl-0 md:pl-12">
      <div
        className={`absolute left-0 top-1.5 w-4 h-4 rounded-full hidden md:block ${
          isCurrent ? "bg-secondary" : "bg-outline-variant"
        }`}
      />
      <div className="flex flex-col md:flex-row justify-between mb-4">
        <div>
          <h3 className="text-2xl font-bold text-on-surface font-headline">
            {title}
          </h3>
          <p className="text-lg text-primary font-headline">{company}</p>
        </div>
        <div className="mt-2 md:mt-0">
          <span className="font-label text-xs uppercase tracking-widest text-primary font-bold bg-surface-container-high px-3 py-1 rounded-lg">
            {period}
          </span>
        </div>
      </div>
      <p className="text-on-surface-variant mb-6 max-w-3xl font-body">
        {description}
      </p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 bg-secondary-container text-on-secondary-container text-[10px] font-bold uppercase tracking-wider rounded-lg"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
