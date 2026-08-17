import type { Metadata } from "next";
import { Anton, Inter } from "next/font/google";
import JsFlag from "@/components/JsFlag";
import { siteUrl } from "@/lib/site";
import "./globals.css";

const anton = Anton({
  variable: "--font-anton",
  weight: "400",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const title = "Martial Mystery Dojo | Taekwondo & Weapon Training in Lucknow";
const description =
  "Taekwondo, self-defense and traditional weapon training in Indira Nagar, Lucknow — led by instructor Harshit Tiwari. Book a free trial class today.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: `%s | Martial Mystery Dojo`,
  },
  description,
  keywords: [
    "taekwondo lucknow",
    "martial arts lucknow",
    "weapon training lucknow",
    "self defense classes lucknow",
    "Harshit Tiwari taekwondo",
    "Indira Nagar martial arts",
    "Martial Mystery Dojo",
  ],
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: "Martial Mystery Dojo",
    images: [{ url: "/media/hero-group.jpg", width: 1200, height: 1260, alt: title }],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/media/hero-group.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export const viewport = {
  themeColor: "#0a0a0c",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${anton.variable} ${inter.variable} antialiased`}>
        <JsFlag />
        {children}
      </body>
    </html>
  );
}
