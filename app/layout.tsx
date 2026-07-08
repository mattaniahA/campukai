import type { Metadata } from "next";
import { Space_Mono, Baloo_2, Pinyon_Script } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const baloo = Baloo_2({
  variable: "--font-baloo",
  subsets: ["latin"],
  weight: ["700", "800"],
});

const pinyon = Pinyon_Script({
  variable: "--font-pinyon",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: `${site.name} — ${site.location}`,
  description: site.tagline,
  openGraph: {
    title: `${site.name} — ${site.dates}`,
    description: site.tagline,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceMono.variable} ${baloo.variable} ${pinyon.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col overflow-x-hidden">
        <div className="gradient-field" aria-hidden>
          <span className="blob blob-green" />
          <span className="blob blob-yellow" />
          <span className="blob blob-white" />
          <span className="blob blob-deep" />
        </div>
        <div className="grain-overlay" aria-hidden />
        {children}
      </body>
    </html>
  );
}
