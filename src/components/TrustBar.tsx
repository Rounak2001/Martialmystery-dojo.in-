const items = [
  "Certified Instructor",
  "Kids & Adult Batches",
  "Traditional Weapon Forms",
  "Self-Defense Training",
  "LDTA / UPTA Affiliated",
  "Competition Training",
];

export default function TrustBar() {
  const loop = [...items, ...items];
  return (
    <div className="border-y border-line bg-surface py-3.5 overflow-hidden">
      <div className="flex w-max animate-marquee">
        {loop.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-3 px-6 text-xs sm:text-sm font-semibold uppercase tracking-widest text-muted whitespace-nowrap"
          >
            {item}
            <span className="text-crimson">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
