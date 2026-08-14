import type { Metadata } from "next";
import { Anton, Inter } from "next/font/google";
import JsFlag from "@/components/JsFlag";
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

const siteUrl = "https://martialmysterydojo.in";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Martial Mystery Dojo | Taekwondo & Weapon Training in Lucknow",
  description:
    "Taekwondo, self-defense and traditional weapon training in Indira Nagar, Lucknow — led by instructor Harshit Tiwari. Book a free trial class today.",
  keywords: [
    "taekwondo lucknow",
    "martial arts lucknow",
    "weapon training lucknow",
    "self defense classes lucknow",
    "Harshit Tiwari taekwondo",
    "Indira Nagar martial arts",
    "Martial Mystery Dojo",
  ],
  openGraph: {
    title: "Martial Mystery Dojo | Taekwondo & Weapon Training in Lucknow",
    description:
      "Taekwondo, self-defense and traditional weapon training in Indira Nagar, Lucknow — led by instructor Harshit Tiwari.",
    url: siteUrl,
    siteName: "Martial Mystery Dojo",
    images: ["/media/hero-group.jpg"],
    locale: "en_IN",
    type: "website",
  },
  robots: { index: true, follow: true },
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
