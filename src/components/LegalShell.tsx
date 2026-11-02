import { SITE } from "@/lib/site";
import InnerHero from "@/components/InnerHero";

export default function LegalShell({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <>
      <InnerHero eyebrow="Legal" title={title} />
      <section style={{ padding: "40px 0 24px" }}>
        <div className="container" style={{ maxWidth: 760 }}>
          <p style={{ fontFamily: "var(--font-ui)", fontSize: "0.82rem", letterSpacing: "0.06em", color: "var(--muted)", marginBottom: 28 }}>
            Effective date: {SITE.legal.effectiveDate} · Operated by {SITE.legal.entityName}
          </p>
          <div className="prose">{children}</div>
          <p style={{ marginTop: 40, paddingTop: 20, borderTop: "1px solid var(--line)", color: "var(--muted)", fontSize: "0.95rem" }}>
            Questions about this policy? Email{" "}
            <a href={`mailto:${SITE.email}`} style={{ color: "var(--maroon)" }}>{SITE.email}</a>.
          </p>
        </div>
      </section>
    </>
  );
}
