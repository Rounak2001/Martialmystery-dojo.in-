import Image from "next/image";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { site } from "@/lib/site";

export default function About() {
  return (
    <section id="about" className="bg-ink py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-5 sm:px-8 lg:grid-cols-2">
        <Reveal className="order-2 lg:order-1">
          <SectionHeading eyebrow="Meet Your Instructor" title={site.instructor} />

          <p className="mt-6 text-base sm:text-lg text-muted leading-relaxed">
            {site.instructor} is the founder and lead instructor at {site.brand} in{" "}
            {site.city}, training students in Taekwondo, self-defense, and traditional
            weapon forms — from wooden staffs and swords to bow and nunchaku work.
          </p>
          <p className="mt-4 text-base sm:text-lg text-muted leading-relaxed">
            Affiliated with the Lucknow District Taekwondo Association and Uttar Pradesh
            Taekwondo Association, his students train and compete at district and state
            level — building discipline, fitness, and real self-defense skill along the way.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-4 max-w-md">
            {[
              ["Taekwondo", "Belt-graded curriculum"],
              ["Weapon Training", "Staff, sword & more"],
              ["Self-Defense", "Practical, real-world"],
              ["All Ages", "Kids to adults"],
            ].map(([title, desc]) => (
              <div key={title} className="rounded-md border border-line bg-surface p-4">
                <p className="font-display uppercase text-paper text-lg leading-none">
                  {title}
                </p>
                <p className="mt-1.5 text-xs text-muted">{desc}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={120} className="order-1 lg:order-2 relative">
          <div className="relative overflow-hidden rounded-xl border border-line">
            <Image
              src="/media/team-lucknow.jpg"
              alt="Students representing Lucknow at a Taekwondo competition"
              width={900}
              height={1200}
              className="h-[440px] w-full object-cover sm:h-[560px]"
            />
          </div>
          <div className="absolute -top-5 -right-5 hidden sm:flex flex-col items-center justify-center rounded-full bg-crimson h-28 w-28 rotate-6 text-center shadow-xl">
            <span className="font-display text-xl text-paper leading-none">LDTA</span>
            <span className="font-display text-xl text-paper leading-none">UPTA</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
