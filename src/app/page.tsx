import Navbar from "@/components/Navbar";
import WhatsAppFab from "@/components/WhatsAppFab";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import About from "@/components/About";
import WeaponTraining from "@/components/WeaponTraining";
import Programs from "@/components/Programs";
import Gallery from "@/components/Gallery";
import Location from "@/components/Location";
import Connect from "@/components/Connect";
import EnquiryForm from "@/components/EnquiryForm";
import Footer from "@/components/Footer";
import { site, siteUrl } from "@/lib/site";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SportsActivityLocation",
    "@id": siteUrl,
    name: site.brand,
    url: siteUrl,
    image: `${siteUrl}/media/hero-group.jpg`,
    logo: `${siteUrl}/media/logo.png`,
    description:
      "Taekwondo, self-defense and traditional weapon training academy led by Harshit Tiwari, in Indira Nagar, Lucknow.",
    address: {
      "@type": "PostalAddress",
      streetAddress: `${site.address.landmark}, ${site.address.line1}`,
      addressLocality: "Lucknow",
      addressRegion: "Uttar Pradesh",
      addressCountry: "IN",
    },
    telephone: site.phoneDisplay,
    sameAs: [site.social.instagram, site.social.youtube],
    founder: {
      "@type": "Person",
      name: site.instructor,
      jobTitle: "Lead Instructor & Founder",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <About />
        <WeaponTraining />
        <Programs />
        <Gallery />
        <Location />
        <Connect />
        <EnquiryForm />
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  );
}
