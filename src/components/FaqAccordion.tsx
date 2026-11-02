"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { FAQS } from "@/lib/site";

export default function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div style={{ maxWidth: 740, margin: "0 auto", display: "flex", flexDirection: "column", gap: 12 }}>
      {FAQS.map((f, i) => {
        const isOpen = open === i;
        return (
          <div
            key={i}
            style={{ border: "1px solid var(--line)", borderRadius: 14, background: "var(--cream)", overflow: "hidden" }}
          >
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              style={{
                width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16,
                padding: "18px 20px", background: "transparent", border: "none", cursor: "pointer", textAlign: "left",
                fontFamily: "var(--font-display)", fontSize: "1.2rem", color: "var(--ink)",
              }}
            >
              <span>{f.q}</span>
              <span style={{ flex: "none", color: "var(--maroon)" }}>{isOpen ? <Minus size={20} /> : <Plus size={20} />}</span>
            </button>
            {isOpen && (
              <div style={{ padding: "0 20px 20px", color: "var(--ink-soft)", fontSize: "1.05rem", lineHeight: 1.7 }}>
                {f.a}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
