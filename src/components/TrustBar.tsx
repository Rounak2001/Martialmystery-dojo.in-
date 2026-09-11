const items = [
  "Certified Black Belt Coaching",
  "Kids & Adult Batches",
  "District Gold Medalists",
  "Traditional Katana & Staff Forms",
  "Self-Defense & Combat Sparring",
  "LDTA / UPTA Affiliated",
  "Belt-Graded Certification",
];

export default function TrustBar() {
  const loop = [...items, ...items];
  return (
    <div className="relative border-y border-line bg-surface py-3.5 overflow-hidden">
      {/* Edge gradient masks for seamless fade on mobile and desktop */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-12 sm:w-24 bg-gradient-to-r from-surface to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-12 sm:w-24 bg-gradient-to-l from-surface to-transparent z-10" />

      <div className="flex w-max animate-marquee select-none">
        {loop.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-3 px-5 sm:px-6 text-xs sm:text-sm font-semibold uppercase tracking-widest text-muted whitespace-nowrap"
          >
            {item}
            <span className="text-crimson">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
