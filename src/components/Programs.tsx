import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { waLink } from "@/lib/site";

const programs = [
  {
    title: "Taekwondo",
    desc: "Belt-graded curriculum covering forms, sparring and conditioning for kids and adults.",
    tag: "All Levels",
  },
  {
    title: "Weapon Training",
    desc: "Traditional staff, sword and bow forms for students who've built their base fundamentals.",
    tag: "Intermediate+",
  },
  {
    title: "Self-Defense",
    desc: "Practical, real-world techniques focused on awareness and quick, effective response.",
    tag: "All Ages",
  },
  {
    title: "Kids Classes",
    desc: "Discipline, focus and fitness for young students, taught with patience and structure.",
    tag: "Ages 5+",
  },
];

export default function Programs() {
  return (
    <section id="programs" className="bg-ink py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading eyebrow="Train With Us" title="Programs" align="center" />
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {programs.map((p, i) => (
            <Reveal key={p.title} delay={i * 90}>
              <div className="group relative h-full rounded-lg border border-line bg-surface p-6 transition-colors hover:border-crimson">
                <span className="text-xs font-semibold uppercase tracking-wider text-gold">
                  {p.tag}
                </span>
                <h3 className="mt-3 font-display uppercase text-2xl text-paper leading-none">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm text-muted leading-relaxed">{p.desc}</p>
                <a
                  href={waLink(`Hi Harshit! I'm interested in the ${p.title} program.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-crimson group-hover:text-gold transition-colors"
                >
                  Ask about this
                  <span aria-hidden>→</span>
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
