import Link from "next/link";
import { ArrowRight, MessageCircle, Sparkles, Send, Heart } from "lucide-react";
import { SITE, TIERS, INVITATION, waLink } from "@/lib/site";
import DesignGallery from "@/components/DesignGallery";

const STEPS = [
  { icon: Sparkles, head: "Pick a design", body: "Choose a style you love from the collection." },
  { icon: MessageCircle, head: "Share your details", body: "Send names, dates, venue & photos on WhatsApp." },
  { icon: Heart, head: "We personalise it", body: "Your invitation, crafted — usually in 1–2 days." },
  { icon: Send, head: "Share & track RSVPs", body: "Share your private link; RSVPs reach your sheet or WhatsApp." },
];

export default function Home() {
  return (
    <>
      {/* ---------- HERO ---------- */}
      <section style={{ background: "radial-gradient(120% 80% at 50% 0%, var(--cream), var(--paper) 60%)" }}>
        <div className="container" style={{ padding: "72px 20px 64px", textAlign: "center" }}>
          <div className="eyebrow" style={{ marginBottom: 18 }}>Digital Wedding Invitations</div>
          <h1 style={{ fontSize: "clamp(2.4rem, 7vw, 4.2rem)", color: "var(--maroon)", lineHeight: 1.08 }}>
            Invitations that<br />open like a story.
          </h1>
          <p style={{ maxWidth: 560, margin: "22px auto 0", fontSize: "1.2rem", color: "var(--ink-soft)" }}>
            Beautiful, animated invitations with a built-in RSVP — personalised for your day and
            shared with a single link.
          </p>
          <div style={{ display: "flex", gap: 14, justifyContent: "center", marginTop: 32, flexWrap: "wrap" }}>
            <a className="btn btn-primary" href={waLink(SITE.enquiryMessage)} target="_blank" rel="noopener noreferrer">
              Enquire on WhatsApp <ArrowRight size={16} />
            </a>
            <Link className="btn btn-ghost" href="#designs">View designs</Link>
          </div>
        </div>
      </section>

      {/* ---------- DESIGNS ---------- */}
      <section id="designs" style={{ padding: "72px 0 24px" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <div className="eyebrow" style={{ marginBottom: 10 }}>The Collection</div>
            <h2 style={{ fontSize: "clamp(1.8rem, 5vw, 2.6rem)", color: "var(--ink)" }}>Designs for every celebration</h2>
            <p style={{ maxWidth: 520, margin: "12px auto 0", color: "var(--ink-soft)" }}>
              Tap any design to watch it open, exactly as your guests will see it. Every design is personalised with
              your names, events and venues.
            </p>
          </div>

          <DesignGallery />
        </div>
      </section>

      {/* ---------- HOW IT WORKS ---------- */}
      <section id="how" style={{ padding: "72px 0" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 44 }}>
            <div className="eyebrow" style={{ marginBottom: 10 }}>How it works</div>
            <h2 style={{ fontSize: "clamp(1.8rem, 5vw, 2.6rem)", color: "var(--ink)" }}>From "I do" to invite in days</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 22 }} className="steps-grid">
            {STEPS.map((s, i) => (
              <div key={i} style={{ textAlign: "center", padding: "0 6px" }}>
                <div
                  style={{
                    width: 58, height: 58, margin: "0 auto 16px", borderRadius: "50%",
                    background: "var(--cream)", border: "1px solid var(--gold)",
                    display: "flex", alignItems: "center", justifyContent: "center", color: "var(--maroon)",
                    boxShadow: "0 10px 22px -12px rgba(184,147,80,.6)",
                  }}
                >
                  <s.icon size={24} strokeWidth={1.6} />
                </div>
                <div style={{ fontFamily: "var(--font-ui)", fontSize: "0.68rem", letterSpacing: "0.2em", color: "var(--gold)", marginBottom: 6 }}>
                  STEP {i + 1}
                </div>
                <h3 style={{ fontSize: "1.3rem", marginBottom: 6 }}>{s.head}</h3>
                <p style={{ color: "var(--ink-soft)", fontSize: "1rem" }}>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- PRICING TEASER ---------- */}
      <section style={{ padding: "16px 0 72px" }}>
        <div className="container">
          <div
            style={{
              background: "var(--cream)", border: "1px solid var(--line)", borderRadius: 24,
              padding: "44px 28px", textAlign: "center", boxShadow: "0 24px 60px -40px rgba(110,28,43,.4)",
            }}
          >
            <div className="eyebrow" style={{ marginBottom: 10 }}>Simple pricing</div>
            <h2 style={{ fontSize: "clamp(1.6rem, 4.5vw, 2.3rem)", color: "var(--ink)" }}>Plans for every kind of celebration</h2>
            <p style={{ maxWidth: 480, margin: "12px auto 22px", color: "var(--ink-soft)" }}>
              Animated invitations from {INVITATION.price}. RSVP websites from {TIERS[0].price}.
            </p>
            <Link className="btn btn-primary" href="/pricing">See pricing <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 860px) { .steps-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 32px !important; } }
        @media (max-width: 480px) { .steps-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </>
  );
}
