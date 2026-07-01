export default function SectionHead({
  index,
  title,
}: {
  index: string;
  title: string;
}) {
  return (
    <div className="flex items-baseline gap-4 border-b rule pb-4">
      <span className="label pt-1">{index}</span>
      <h2 className="display text-3xl font-medium tracking-tight text-ink sm:text-5xl">
        {title}
      </h2>
    </div>
  );
}
