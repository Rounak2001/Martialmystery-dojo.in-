import Image from "next/image";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const photos = [
  {
    src: "/media/hero-group.jpg",
    alt: "Harshit Tiwari with his Taekwondo students, yellow belts",
    span: "sm:col-span-2 sm:row-span-2",
  },
  {
    src: "/media/team-lucknow.jpg",
    alt: "Students at a Lucknow Taekwondo competition",
    span: "",
  },
  {
    src: "/media/weapon-poster.jpg",
    alt: "Weapon training practice on the dojo mat",
    span: "",
  },
  {
    src: "/media/dojo-banner.jpg",
    alt: "Martial Mystery Dojo signage, Indira Nagar, Lucknow",
    span: "sm:col-span-2",
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="bg-surface py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading eyebrow="From the Mat" title="Gallery" align="center" />
        </Reveal>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:auto-rows-[220px]">
          {photos.map((p, i) => (
            <Reveal key={p.src + i} delay={i * 80} className={p.span}>
              <div className="group relative h-full min-h-[160px] overflow-hidden rounded-lg border border-line">
                <Image
                  src={p.src}
                  alt={p.alt}
                  fill
                  sizes="(max-width: 640px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
