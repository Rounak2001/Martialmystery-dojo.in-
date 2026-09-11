export default function SectionHeading({
  eyebrow,
  title,
  align = "left",
  light = false,
}: {
  eyebrow: string;
  title: string;
  align?: "left" | "center";
  light?: boolean;
}) {
  return (
    <div className={align === "center" ? "text-center" : "text-left"}>
      <span
        className={`inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase ${
          light ? "text-crimson-dim" : "text-crimson"
        }`}
      >
        <span className="h-px w-8 bg-current" />
        {eyebrow}
      </span>
      <h2
        className={`mt-3 font-display text-3xl sm:text-5xl md:text-6xl uppercase leading-[1.02] tracking-tight ${
          light ? "text-ink" : "text-paper"
        }`}
      >
        {title}
      </h2>
    </div>
  );
}
