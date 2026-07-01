import { site } from "@/lib/site";

/* A slow ticker of the programme — set in mono like a wire feed. */
export default function Marquee() {
  const items = [...site.activities, ...site.activities];
  return (
    <div className="panel relative overflow-hidden border-y rule py-3">
      <div className="flex w-max animate-marquee whitespace-nowrap">
        {items.map((item, i) => (
          <span
            key={i}
            className="mx-6 inline-flex items-center gap-6 text-xs uppercase tracking-[0.18em] text-ink-soft"
          >
            {item}
            <span className="text-ochre-deep">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
