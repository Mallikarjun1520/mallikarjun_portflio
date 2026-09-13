interface SectionHeadingProps {
  index: string;
  title: string;
  description?: string;
}

export default function SectionHeading({ index, title, description }: SectionHeadingProps) {
  return (
    <div className="mb-12 md:mb-16">
      <div className="flex items-baseline gap-4 border-b border-line pb-4">
        <span className="field-label text-amber shrink-0">{index}</span>
        <h2 className="text-3xl md:text-4xl font-semibold text-paper">{title}</h2>
      </div>
      {description && (
        <p className="mt-4 max-w-xl text-muted leading-relaxed">{description}</p>
      )}
    </div>
  );
}
