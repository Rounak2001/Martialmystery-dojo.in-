"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

interface Photo {
  src: string;
  alt: string;
  category: "all" | "tournaments" | "ceremonies" | "training";
  caption: string;
  badge: string;
}

const photos: Photo[] = [
  {
    src: "/media/champions-gold.jpg",
    alt: "Utkarsh Tiwari and fellow champion holding gold medals in Taekwondo black belts",
    category: "tournaments",
    caption: "Instructor Utkarsh Tiwari with Gold Medals at Taekwondo Championship",
    badge: "Gold Medalist",
  },
  {
    src: "/media/certificate-ceremony.jpg",
    alt: "Utkarsh Tiwari presenting certificate to yellow belt student at 1st Lucknow District Taekwondo Championship",
    category: "ceremonies",
    caption: "Utkarsh Tiwari awarding Certificate of Merit at 1st Lucknow District Championship",
    badge: "District Championship",
  },
  {
    src: "/media/student-medalist.jpg",
    alt: "Young Martial Mystery Dojo student wearing medal at 1st Lucknow District Taekwondo Championship",
    category: "tournaments",
    caption: "Student Medal Winner at 1st Lucknow District Taekwondo Championship",
    badge: "Tournament Medalist",
  },
  {
    src: "/media/hero-group.jpg",
    alt: "Utkarsh Tiwari with his Taekwondo yellow belt students on the dojo training mat",
    category: "training",
    caption: "Utkarsh Tiwari coaching youth yellow belt students at the dojo",
    badge: "Dojo Mat Session",
  },
  {
    src: "/media/student-merit.jpg",
    alt: "Student receiving Certificate of Merit from dignitary at Taekwondo Championship",
    category: "ceremonies",
    caption: "Certificate of Merit presentation for outstanding forms & discipline",
    badge: "Merit Award",
  },
  {
    src: "/media/team-lucknow.jpg",
    alt: "Students representing Martial Mystery Dojo and Lucknow at Taekwondo tournament",
    category: "tournaments",
    caption: "Students representing Lucknow at state & district level tournament",
    badge: "Team Lucknow",
  },
  {
    src: "/media/weapon-poster.jpg",
    alt: "Traditional weapon training practice on the dojo mat",
    category: "training",
    caption: "Weapon kata training session with bo staff and forms",
    badge: "Weapon Forms",
  },
  {
    src: "/media/dojo-banner.jpg",
    alt: "Martial Mystery Dojo entrance signage, Indira Nagar, Lucknow",
    category: "training",
    caption: "Martial Mystery Dojo campus in Indira Nagar, Lucknow",
    badge: "Indira Nagar Dojo",
  },
];

const categories = [
  { id: "all", label: "All Photos" },
  { id: "tournaments", label: "Tournaments & Medals" },
  { id: "ceremonies", label: "Belt Ceremonies" },
  { id: "training", label: "Dojo Training" },
] as const;

export default function Gallery() {
  const [activeTab, setActiveTab] = useState<string>("all");
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

  const filteredPhotos =
    activeTab === "all"
      ? photos
      : photos.filter((p) => p.category === activeTab);

  useEffect(() => {
    if (lightboxIdx !== null) {
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") setLightboxIdx(null);
        if (e.key === "ArrowRight")
          setLightboxIdx((idx) => (idx !== null ? (idx + 1) % filteredPhotos.length : null));
        if (e.key === "ArrowLeft")
          setLightboxIdx((idx) => (idx !== null ? (idx - 1 + filteredPhotos.length) % filteredPhotos.length : null));
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", handleKeyDown);
      };
    } else {
      document.body.style.overflow = "";
    }
  }, [lightboxIdx, filteredPhotos.length]);

  return (
    <section id="gallery" className="bg-surface py-16 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <Reveal>
          <SectionHeading eyebrow="Real Achievements" title="Gallery & Medals" align="center" />
          <p className="mt-3 text-center text-sm sm:text-base text-muted max-w-xl mx-auto">
            From first yellow belts to district championship podiums — real moments of hard work, discipline, and triumph at Martial Mystery Dojo.
          </p>

          {/* Filter Pills */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => {
              const active = activeTab === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => {
                    setActiveTab(cat.id);
                    setLightboxIdx(null);
                  }}
                  className={`rounded-full px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all active:scale-95 ${
                    active
                      ? "bg-crimson text-paper shadow-md shadow-crimson/30"
                      : "border border-line bg-ink/60 text-muted hover:border-gold hover:text-paper"
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Photos Grid */}
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3.5 sm:gap-5">
          {filteredPhotos.map((p, i) => (
            <Reveal key={p.src + i} delay={(i % 4) * 60}>
              <button
                type="button"
                onClick={() => setLightboxIdx(i)}
                aria-label={`View full photo: ${p.caption}`}
                className="group relative w-full aspect-[4/5] overflow-hidden rounded-xl border border-line bg-ink text-left transition-all duration-300 hover:border-gold hover:shadow-xl active:scale-[0.98]"
              >
                <Image
                  src={p.src}
                  alt={p.alt}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-108"
                />

                {/* Gradient vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

                {/* Badge top */}
                <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between">
                  <span className="rounded-md bg-ink/80 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-gold backdrop-blur-md border border-line/60">
                    {p.badge}
                  </span>
                  <span className="hidden sm:inline-grid h-6 w-6 place-items-center rounded-full bg-ink/80 text-paper text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                    🔍
                  </span>
                </div>

                {/* Bottom Caption */}
                <div className="absolute inset-x-0 bottom-0 p-3 sm:p-3.5">
                  <p className="font-display uppercase text-paper text-xs sm:text-sm leading-tight line-clamp-2">
                    {p.caption}
                  </p>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Fullscreen Interactive Lightbox Modal */}
      {lightboxIdx !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Image lightbox"
          onClick={() => setLightboxIdx(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink/95 backdrop-blur-xl p-4 sm:p-8"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative flex flex-col items-center max-w-4xl w-full max-h-[92vh]"
          >
            {/* Close Button */}
            <button
              type="button"
              aria-label="Close photo preview"
              onClick={() => setLightboxIdx(null)}
              className="absolute -top-12 right-0 sm:top-2 sm:right-2 z-20 grid h-10 w-10 place-items-center rounded-full bg-ink/80 border border-line text-paper hover:text-gold active:scale-90 transition-transform"
            >
              ✕
            </button>

            {/* Navigation Previous */}
            <button
              type="button"
              aria-label="Previous photo"
              onClick={() =>
                setLightboxIdx((idx) =>
                  idx !== null ? (idx - 1 + filteredPhotos.length) % filteredPhotos.length : null
                )
              }
              className="absolute left-2 top-1/2 -translate-y-1/2 z-20 grid h-11 w-11 place-items-center rounded-full bg-ink/80 border border-line text-paper hover:text-gold active:scale-90 shadow-xl transition-all"
            >
              ❮
            </button>

            {/* Navigation Next */}
            <button
              type="button"
              aria-label="Next photo"
              onClick={() =>
                setLightboxIdx((idx) =>
                  idx !== null ? (idx + 1) % filteredPhotos.length : null
                )
              }
              className="absolute right-2 top-1/2 -translate-y-1/2 z-20 grid h-11 w-11 place-items-center rounded-full bg-ink/80 border border-line text-paper hover:text-gold active:scale-90 shadow-xl transition-all"
            >
              ❯
            </button>

            {/* Main Image Frame */}
            <div className="relative w-full h-[60vh] sm:h-[72vh] rounded-2xl overflow-hidden border-2 border-line bg-ink">
              <Image
                src={filteredPhotos[lightboxIdx].src}
                alt={filteredPhotos[lightboxIdx].alt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 900px"
                className="object-contain"
              />
            </div>

            {/* Image Details */}
            <div className="mt-4 flex flex-col sm:flex-row items-center justify-between w-full gap-2 px-2 text-center sm:text-left">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-gold">
                  {filteredPhotos[lightboxIdx].badge}
                </span>
                <p className="text-sm sm:text-base font-semibold text-paper">
                  {filteredPhotos[lightboxIdx].caption}
                </p>
              </div>
              <span className="text-xs text-muted font-mono">
                {lightboxIdx + 1} of {filteredPhotos.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
