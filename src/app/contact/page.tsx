import type { Metadata } from "next";
import { MessageCircle, Mail, MapPin } from "lucide-react";
import { SITE, waLink } from "@/lib/site";
import InnerHero from "@/components/InnerHero";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Aamantran — the fastest way is WhatsApp.",
};

export default function ContactPage() {
  return (
    <>
      <InnerHero eyebrow="Say hello" title="Let's make your invitation" subtitle="The fastest way to reach us is WhatsApp — share your details and we'll take it from there." />

      <section style={{ padding: "48px 0 24px" }}>
        <div className="container" style={{ maxWidth: 640 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <a
              href={waLink(SITE.enquiryMessage)}
              target="_blank"
              rel="noopener noreferrer"
              style={cardStyle}
            >
              <span style={iconWrap}><MessageCircle size={22} /></span>
              <span>
                <span style={cardHead}>WhatsApp</span>
                <span style={cardSub}>Chat with us — fastest response</span>
              </span>
            </a>

            <a href={`mailto:${SITE.email}`} style={cardStyle}>
              <span style={iconWrap}><Mail size={22} /></span>
              <span>
                <span style={cardHead}>Email</span>
                <span style={cardSub}>{SITE.email}</span>
              </span>
            </a>

            <div style={{ ...cardStyle, cursor: "default" }}>
              <span style={iconWrap}><MapPin size={22} /></span>
              <span>
                <span style={cardHead}>Based in</span>
                <span style={cardSub}>{SITE.location}</span>
              </span>
            </div>
          </div>

          <div style={{ textAlign: "center", marginTop: 36 }}>
            <a className="btn btn-primary" href={waLink(SITE.enquiryMessage)} target="_blank" rel="noopener noreferrer">
              Start on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

const cardStyle: React.CSSProperties = {
  display: "flex", alignItems: "center", gap: 18, padding: "20px 22px",
  background: "var(--cream)", border: "1px solid var(--line)", borderRadius: 16,
};
const iconWrap: React.CSSProperties = {
  flex: "none", width: 48, height: 48, borderRadius: "50%", background: "var(--paper-2)",
  border: "1px solid var(--line)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--maroon)",
};
const cardHead: React.CSSProperties = { display: "block", fontFamily: "var(--font-display)", fontSize: "1.25rem", color: "var(--ink)" };
const cardSub: React.CSSProperties = { display: "block", fontFamily: "var(--font-ui)", fontSize: "0.9rem", color: "var(--muted)", marginTop: 2 };
