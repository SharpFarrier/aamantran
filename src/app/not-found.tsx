import Link from "next/link";

export default function NotFound() {
  return (
    <section style={{ padding: "100px 0", textAlign: "center" }}>
      <div className="container" style={{ maxWidth: 520 }}>
        <div className="eyebrow" style={{ marginBottom: 14 }}>404</div>
        <h1 style={{ fontSize: "clamp(2rem, 6vw, 3rem)", color: "var(--maroon)" }}>This page has wandered off</h1>
        <p style={{ color: "var(--ink-soft)", fontSize: "1.1rem", margin: "16px 0 28px" }}>
          The link may be old or mistyped. Let&apos;s get you back to something beautiful.
        </p>
        <Link className="btn btn-primary" href="/">Back to home</Link>
      </div>
    </section>
  );
}
