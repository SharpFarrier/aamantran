import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.brand} — ${SITE.tagline}`,
    template: `%s — ${SITE.brand}`,
  },
  description:
    "Beautiful animated digital wedding invitations with built-in RSVP. Pick a design, share your details, and get a private link to send your guests.",
  keywords: ["wedding invitation", "digital invite", "e-invite", "RSVP", "Indian wedding", "save the date"],
  openGraph: {
    type: "website",
    url: SITE.url,
    title: `${SITE.brand} — ${SITE.tagline}`,
    description: "Beautiful animated digital wedding invitations with built-in RSVP.",
    siteName: SITE.brand,
    images: [{ url: "/og.png", width: 1200, height: 630, alt: SITE.brand }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.brand} — ${SITE.tagline}`,
    description: "Beautiful animated digital wedding invitations with built-in RSVP.",
    images: ["/og.png"],
  },
  icons: { icon: "/icon.svg", apple: "/icon.svg" },
};

const FONTS_HREF =
  "https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600&family=Cormorant+Garamond:wght@400;500;600&family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600&family=Jost:wght@300;400;500&display=swap";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="stylesheet" href={FONTS_HREF} />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
