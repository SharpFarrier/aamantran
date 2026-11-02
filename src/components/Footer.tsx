import Link from "next/link";
import { SITE, waLink } from "@/lib/site";

const legal = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Refund & Cancellation", href: "/refund" },
  { label: "Contact", href: "/contact" },
];

const explore = [
  { label: "Designs", href: "/#designs" },
  { label: "Pricing", href: "/pricing" },
  { label: "How it works", href: "/#how" },
  { label: "FAQ", href: "/faq" },
];

export default function Footer() {
  return (
    <footer style={{ background: "var(--maroon)", color: "#f3e3cf", marginTop: 80 }}>
      <div className="container" style={{ padding: "56px 20px 28px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr", gap: 40 }} className="foot-grid">
          <div>
            <div style={{ fontFamily: "var(--font-caps)", fontWeight: 600, letterSpacing: "0.22em", fontSize: 22, color: "#fff" }}>
              {SITE.brand}
            </div>
            <p style={{ fontFamily: "var(--font-serif)", fontSize: "1.05rem", color: "#e8d3bd", marginTop: 10, maxWidth: 320 }}>
              {SITE.tagline}
            </p>
            <a
              className="btn"
              href={waLink(SITE.enquiryMessage)}
              target="_blank"
              rel="noopener noreferrer"
              style={{ marginTop: 18, background: "var(--gold)", color: "#3a2a24" }}
            >
              Enquire on WhatsApp
            </a>
          </div>

          <div>
            <div style={footHead}>Explore</div>
            {explore.map((l) => (
              <Link key={l.href} href={l.href} style={footLink}>{l.label}</Link>
            ))}
          </div>

          <div>
            <div style={footHead}>Legal</div>
            {legal.map((l) => (
              <Link key={l.href} href={l.href} style={footLink}>{l.label}</Link>
            ))}
          </div>
        </div>

        <div
          style={{
            marginTop: 44, paddingTop: 20, borderTop: "1px solid rgba(255,255,255,0.14)",
            display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 10,
            fontFamily: "var(--font-ui)", fontSize: "0.74rem", letterSpacing: "0.06em", color: "#d9c3aa",
          }}
        >
          <span>© {new Date().getFullYear()} {SITE.brand}. All rights reserved.</span>
          <span>{SITE.domain}</span>
        </div>
      </div>

      <style>{`
        @media (max-width: 720px) {
          .foot-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
        }
      `}</style>
    </footer>
  );
}

const footHead: React.CSSProperties = {
  fontFamily: "var(--font-ui)", fontSize: "0.7rem", letterSpacing: "0.22em",
  textTransform: "uppercase", color: "var(--gold-2)", marginBottom: 14,
};
const footLink: React.CSSProperties = {
  display: "block", fontFamily: "var(--font-serif)", fontSize: "1.02rem",
  color: "#ecd9c4", padding: "5px 0",
};
