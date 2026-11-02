export default function InnerHero({ eyebrow, title, subtitle }: { eyebrow?: string; title: string; subtitle?: string }) {
  return (
    <section style={{ background: "linear-gradient(180deg, var(--paper-2), var(--paper))", borderBottom: "1px solid var(--line)" }}>
      <div className="container" style={{ padding: "56px 20px 44px", textAlign: "center" }}>
        {eyebrow && <div className="eyebrow" style={{ marginBottom: 12 }}>{eyebrow}</div>}
        <h1 style={{ fontSize: "clamp(2rem, 6vw, 3rem)", color: "var(--maroon)" }}>{title}</h1>
        {subtitle && (
          <p style={{ maxWidth: 560, margin: "14px auto 0", color: "var(--ink-soft)", fontSize: "1.1rem" }}>{subtitle}</p>
        )}
      </div>
    </section>
  );
}
