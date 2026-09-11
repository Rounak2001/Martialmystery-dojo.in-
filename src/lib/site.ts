// Update this once the site has a permanent domain (custom domain or the
// vercel.app URL from the first deploy) — it feeds canonical links, the
// sitemap, robots.txt, and Open Graph/JSON-LD metadata.
export const siteUrl = "https://martialmysterydojo.in";

export const site = {
  brand: "Martial Mystery Dojo",
  tagline: "Taekwondo & Traditional Weapon Training",
  instructor: "Utkarsh Tiwari",
  city: "Lucknow",
  address: {
    line1: "9/40, Arvindo Path Road, Sector 9",
    line2: "Indira Nagar, Lucknow, Uttar Pradesh",
    landmark: "Inside New ABC Montessori School campus",
  },
  phoneDisplay: "+91 74590 36437",
  phoneHref: "tel:+917459036437",
  whatsappNumber: "917459036437",
  mapsQuery: "New ABC Montessori School, Sector 9, Indira Nagar, Lucknow",
  mapsHref:
    "https://www.google.com/maps/search/?api=1&query=New+ABC+Montessori+School+Sector+9+Indira+Nagar+Lucknow",
  social: {
    instagram: "https://www.instagram.com/martialmystery?igsh=bmM0aDVyNzFvZWRu",
    youtube: "https://youtube.com/@martialmystery?si=ok1wOuR3UZTAOijZ",
  },
};

export function waLink(message: string) {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
