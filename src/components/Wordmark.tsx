import Link from "next/link";
import { SITE } from "@/lib/site";

export default function Wordmark({ size = 20 }: { size?: number }) {
  return (
    <Link href="/" aria-label={`${SITE.brand} home`} style={{ display: "inline-flex", alignItems: "baseline", gap: 8 }}>
      <span
        style={{
          fontFamily: "var(--font-caps)",
          fontWeight: 600,
          letterSpacing: "0.22em",
          fontSize: size,
          color: "var(--maroon)",
          textTransform: "uppercase",
        }}
      >
        {SITE.brand}
      </span>
    </Link>
  );
}
