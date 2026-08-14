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
import { site } from "@/lib/site";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SportsActivityLocation",
    name: site.brand,
    description:
      "Taekwondo, self-defense and traditional weapon training academy led by Harshit Tiwari.",
    address: {
      "@type": "PostalAddress",
      streetAddress: `${site.address.landmark}, ${site.address.line1}`,
      addressLocality: "Lucknow",
      addressRegion: "Uttar Pradesh",
      addressCountry: "IN",
    },
    telephone: site.phoneDisplay,
    founder: {
      "@type": "Person",
      name: site.instructor,
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
