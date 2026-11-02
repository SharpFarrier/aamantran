import type { Metadata } from "next";
import { Check } from "lucide-react";
import { TIERS, INVITATION, ADDONS, SITE, waLink } from "@/lib/site";
import InnerHero from "@/components/InnerHero";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Animated wedding invitations from ₹2,999 and RSVP invitation websites from ₹6,999 — Classic, Signature and Bespoke plans.",
};

export default function PricingPage() {
  return (
    <>
      <InnerHero eyebrow="Pricing" title="Simple, honest pricing" subtitle="An animated invitation to broadcast, an RSVP website your guests open and reply to — or both." />

      <section style={{ padding: "56px 0 24px" }}>
        <div className="container">
          <div style={sectionHead}>
            <div className="eyebrow">RSVP Website</div>
            <h2 style={sectionTitle}>An interactive invitation with live responses</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24, alignItems: "stretch" }} className="price-grid">
            {TIERS.map((t) => (
              <div
                key={t.name}
                style={{
                  display: "flex", flexDirection: "column", borderRadius: 20, padding: "30px 26px",
                  background: t.highlight ? "var(--maroon)" : "var(--cream)",
                  color: t.highlight ? "#f3e3cf" : "var(--ink)",
                  border: `1px solid ${t.highlight ? "var(--maroon)" : "var(--line)"}`,
                  boxShadow: t.highlight ? "0 30px 60px -30px rgba(110,28,43,.6)" : "0 18px 44px -32px rgba(110,28,43,.3)",
                  position: "relative",
                }}
              >
                {t.highlight && (
                  <span
                    style={{
                      position: "absolute", top: 18, right: 18, fontFamily: "var(--font-ui)", fontSize: "0.62rem",
                      letterSpacing: "0.18em", textTransform: "uppercase", color: "#3a2a24",
                      background: "var(--gold)", padding: "4px 10px", borderRadius: 999,
                    }}
                  >
                    Popular
                  </span>
                )}
                <div style={{ fontFamily: "var(--font-caps)", fontSize: "0.82rem", letterSpacing: "0.18em", textTransform: "uppercase", color: t.highlight ? "var(--gold-2)" : "var(--maroon)" }}>
                  {t.name}
                </div>
                <div style={{ fontFamily: "var(--font-display)", fontSize: "2.6rem", margin: "10px 0 2px", color: t.highlight ? "#fff" : "var(--ink)" }}>
                  {t.price}
                </div>
                <div style={{ fontFamily: "var(--font-ui)", fontSize: "0.86rem", color: t.highlight ? "#e8d3bd" : "var(--muted)", marginBottom: 20 }}>
                  {t.note}
                </div>

                <ul style={{ listStyle: "none", margin: "0 0 24px", padding: 0, display: "flex", flexDirection: "column", gap: 11, flex: 1 }}>
                  {t.features.map((f) => (
                    <li key={f} style={{ display: "flex", gap: 10, alignItems: "flex-start", fontSize: "1rem" }}>
                      <Check size={18} style={{ flex: "none", marginTop: 3, color: t.highlight ? "var(--gold-2)" : "var(--gold)" }} />
                      <span style={{ color: t.highlight ? "#f0dcc6" : "var(--ink-soft)" }}>{f}</span>
                    </li>
                  ))}
                </ul>

                <a
                  className="btn"
                  href={waLink(`Hi Aamantran! I'm interested in the ${t.name} plan.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={
                    t.highlight
                      ? { background: "var(--gold)", color: "#3a2a24", justifyContent: "center" }
                      : { background: "var(--maroon)", color: "#fff", justifyContent: "center" }
                  }
                >
                  Choose {t.name}
                </a>
              </div>
            ))}
          </div>

          <div style={{ ...sectionHead, marginTop: 64 }}>
            <div className="eyebrow">Invitation</div>
            <h2 style={sectionTitle}>An animated invitation to broadcast</h2>
          </div>
          <div className="invite-card">
            <div>
              <div style={{ fontFamily: "var(--font-caps)", fontSize: "0.82rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--maroon)" }}>
                {INVITATION.name}
              </div>
              <p style={{ color: "var(--ink-soft)", margin: "8px 0 0", maxWidth: 520 }}>{INVITATION.note}</p>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 18, flexWrap: "wrap" }}>
              <div style={{ fontFamily: "var(--font-display)", fontSize: "2.4rem", color: "var(--ink)" }}>{INVITATION.price}</div>
              <a className="btn btn-primary" href={waLink(`Hi Aamantran! I'm interested in the ${INVITATION.name}.`)} target="_blank" rel="noopener noreferrer">
                Enquire
              </a>
            </div>
          </div>

          <div style={{ ...sectionHead, marginTop: 64 }}>
            <div className="eyebrow">Add-ons</div>
            <h2 style={sectionTitle}>Make it yours</h2>
          </div>
          <div className="addon-list">
            {ADDONS.map((a) => (
              <div key={a.name} className="addon-row">
                <span>{a.name}</span>
                <span style={{ fontFamily: "var(--font-display)", color: "var(--maroon)", fontSize: "1.2rem" }}>{a.price}</span>
              </div>
            ))}
          </div>

          <p style={{ textAlign: "center", color: "var(--muted)", fontSize: "0.95rem", marginTop: 28 }}>
            A {SITE.legal.advancePercent}% advance begins work; the balance is due before delivery. Message us on WhatsApp for an exact quote.
          </p>
        </div>
      </section>

      <style>{`
        .invite-card { display: flex; justify-content: space-between; align-items: center; gap: 24px; flex-wrap: wrap;
          background: var(--cream); border: 1px solid var(--line); border-radius: 20px; padding: 28px 26px;
          box-shadow: 0 18px 44px -32px rgba(110,28,43,.3); }
        .addon-list { max-width: 620px; margin: 0 auto; background: var(--cream); border: 1px solid var(--line); border-radius: 20px; padding: 8px 24px; }
        .addon-row { display: flex; justify-content: space-between; align-items: baseline; gap: 16px; padding: 14px 0; border-bottom: 1px solid var(--line); color: var(--ink-soft); font-size: 1.05rem; }
        .addon-row:last-child { border-bottom: 0; }
        @media (max-width: 860px) { .price-grid { grid-template-columns: 1fr !important; max-width: 440px; margin: 0 auto; } }
      `}</style>
    </>
  );
}

const sectionHead: React.CSSProperties = { textAlign: "center", marginBottom: 28 };
const sectionTitle: React.CSSProperties = { fontSize: "clamp(1.5rem, 4vw, 2.1rem)", color: "var(--ink)", marginTop: 8 };
