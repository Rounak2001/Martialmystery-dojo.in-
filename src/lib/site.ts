export const site = {
  brand: "Martial Mystery Dojo",
  tagline: "Taekwondo & Traditional Weapon Training",
  instructor: "Harshit Tiwari",
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
  // Placeholder handles — swap for the real profile URLs once the accounts are live.
  social: {
    instagram: "https://instagram.com/martialmysterydojo",
    facebook: "https://facebook.com/martialmysterydojo",
    youtube: "https://youtube.com/@martialmysterydojo",
  },
};

export function waLink(message: string) {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
