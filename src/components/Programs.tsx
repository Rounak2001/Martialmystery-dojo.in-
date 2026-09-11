import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { waLink } from "@/lib/site";

const programs = [
  {
    title: "Taekwondo",
    desc: "Belt-graded curriculum covering forms (poomsae), Olympic sparring (kyorugi), agility, and fitness for all ages.",
    tag: "All Levels",
    icon: "🥋",
    points: ["Yellow to Black Belt grading", "District & state championships", "Cardio & flexibility focus"],
  },
  {
    title: "Weapon Training",
    desc: "Traditional staff, katana sword, bow, and nunchaku forms to develop high coordination, balance, and control.",
    tag: "Intermediate+",
    icon: "⚔️",
    points: ["Staff & Sword kata forms", "Mat-safe padded training", "Precision balance & grip"],
  },
  {
    title: "Self-Defense",
    desc: "Practical, real-world defensive techniques focused on situational awareness, grabs, and rapid neutralization.",
    tag: "Teens & Adults",
    icon: "🛡️",
    points: ["Street awareness & escapes", "Knife & grab defense drills", "Confidence & mental calmness"],
  },
  {
    title: "Kids Martial Arts",
    desc: "Character development, respect, discipline, and anti-bullying confidence taught with structured patience.",
    tag: "Ages 5+",
    icon: "🌟",
    points: ["Focus & school discipline", "Motor skills & coordination", "Safe, positive environment"],
  },
];

export default function Programs() {
  return (
    <section id="programs" className="bg-ink py-16 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <Reveal>
          <SectionHeading eyebrow="Train With Us" title="Programs & Batches" align="center" />
          <p className="mt-4 text-center text-sm sm:text-base text-muted max-w-2xl mx-auto">
            Structured batches designed for young beginners starting their martial arts path to advanced fighters preparing for state tournaments.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {programs.map((p, i) => (
            <Reveal key={p.title} delay={i * 90}>
              <div className="group relative flex h-full flex-col justify-between rounded-xl border border-line bg-surface p-6 transition-all hover:border-crimson hover:shadow-xl hover:-translate-y-1">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl">{p.icon}</span>
                    <span className="rounded-full border border-gold/30 bg-gold/10 px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider text-gold">
                      {p.tag}
                    </span>
                  </div>

                  <h3 className="mt-4 font-display uppercase text-2xl text-paper leading-none tracking-wide">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-xs sm:text-sm text-muted leading-relaxed">{p.desc}</p>

                  <ul className="mt-4 space-y-2 border-t border-line/60 pt-4">
                    {p.points.map((pt) => (
                      <li key={pt} className="flex items-center gap-2 text-xs text-paper/85">
                        <span className="h-1.5 w-1.5 rounded-full bg-crimson shrink-0" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-2">
                  <a
                    href={waLink(`Hi Utkarsh! I'm interested in the ${p.title} program at Martial Mystery Dojo.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-center gap-2 rounded-lg border border-line bg-surface-2 py-3 text-xs font-bold uppercase tracking-wider text-paper transition-all group-hover:border-gold group-hover:text-gold active:scale-95"
                  >
                    <span>Enquire Batch Timings</span>
                    <span aria-hidden>→</span>
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
