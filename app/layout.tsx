import type { Metadata } from "next";
import { Source_Serif_4 } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { SITE_URL } from "@/lib/site";
import "./globals.css";

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-source-serif",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "BioCraft — Bioethics: Science and the Future of Medicine",
    template: "%s — BioCraft",
  },
  description:
    "A discussion-led (Harkness) course on the ethics of modern biology, genetics, and medicine, for students 13 and up.",
  openGraph: {
    title: "BioCraft — Bioethics: Science and the Future of Medicine",
    description:
      "A discussion-led (Harkness) course on the ethics of modern biology, genetics, and medicine, for students 13 and up.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={sourceSerif.variable}>
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
