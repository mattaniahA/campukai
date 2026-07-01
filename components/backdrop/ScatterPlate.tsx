import { scatterPlot } from "@/lib/generative";

const tones = {
  olive: "var(--olive-deep)",
  slate: "var(--slate-deep)",
  ochre: "var(--ochre-deep)",
  rust: "var(--rust-deep)",
  ink: "var(--ink)",
} as const;

/**
 * A framed particle-scatter figure, like a plate in a research catalog.
 * Used as an editorial motif and as the gallery placeholder art.
 */
export default function ScatterPlate({
  seed,
  tone = "ink",
  count = 320,
  className,
  label,
}: {
  seed: number;
  tone?: keyof typeof tones;
  count?: number;
  className?: string;
  label?: string;
}) {
  const W = 200;
  const H = 200;
  const dots = scatterPlot(seed, count, W, H);
  const color = tones[tone];

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      className={className}
      preserveAspectRatio="xMidYMid slice"
      aria-hidden
    >
      {/* crosshair axes */}
      <g stroke={color} strokeWidth="0.5" opacity="0.35">
        <line x1={W / 2} y1="14" x2={W / 2} y2={H - 14} />
        <line x1="14" y1={H / 2} x2={W - 14} y2={H / 2} />
      </g>
      <g fill={color}>
        {dots.map((d, i) => (
          <circle key={i} cx={d.x} cy={d.y} r={d.r} />
        ))}
      </g>
      {label && (
        <text
          x="12"
          y={H - 10}
          fill={color}
          fontSize="7"
          fontFamily="var(--font-space-mono), monospace"
          letterSpacing="1"
        >
          {label}
        </text>
      )}
    </svg>
  );
}
