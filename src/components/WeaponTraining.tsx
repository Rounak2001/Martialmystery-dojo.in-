import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function WeaponTraining() {
  return (
    <section id="training" className="relative bg-surface py-20 sm:py-28 overflow-hidden">
      <div className="absolute -top-24 left-1/2 h-[400px] w-[700px] -translate-x-1/2 rounded-full bg-crimson/10 blur-[140px]" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-5 sm:px-8 lg:grid-cols-2">
        <Reveal className="relative mx-auto w-full max-w-sm">
          <div className="relative overflow-hidden rounded-[2rem] border-4 border-line shadow-[0_30px_70px_-20px_rgba(0,0,0,0.8)]">
            <video
              src="/media/weapon-training.mp4"
              poster="/media/weapon-poster.jpg"
              controls
              playsInline
              preload="none"
              className="aspect-[9/16] w-full bg-ink object-cover"
            />
          </div>
          <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-gold px-5 py-1.5 text-xs font-bold uppercase tracking-wider text-ink shadow-lg whitespace-nowrap">
            Live at the Dojo
          </span>
        </Reveal>

        <Reveal delay={120}>
          <SectionHeading eyebrow="Beyond the Belt" title="Weapon Training" />
          <p className="mt-6 text-base sm:text-lg text-muted leading-relaxed max-w-xl">
            {"Once students build a solid Taekwondo foundation, they move on to traditional weapon forms — staff, sword, and bow work practiced on our matted training floor. It's discipline, precision, and control taken to the next level."}
          </p>

          <ul className="mt-8 space-y-4 max-w-md">
            {[
              "Traditional weapon forms (kata) taught progressively by grade",
              "Focus on balance, precision timing and controlled power",
              "Supervised, safety-first training on padded mats",
            ].map((line) => (
              <li key={line} className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-crimson" />
                <span className="text-sm sm:text-base text-paper/90">{line}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
