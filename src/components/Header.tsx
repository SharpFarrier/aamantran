"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { NAV, SITE, waLink } from "@/lib/site";
import Wordmark from "./Wordmark";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header
      style={{
        position: "sticky", top: 0, zIndex: 100,
        background: "rgba(248,236,225,0.82)",
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid var(--line)",
      }}
    >
      <div
        className="container"
        style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 64 }}
      >
        <Wordmark />

        {/* desktop nav */}
        <nav className="nav-desktop" style={{ display: "flex", alignItems: "center", gap: 28 }}>
          {NAV.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              style={{ fontFamily: "var(--font-ui)", fontSize: "0.82rem", letterSpacing: "0.04em", color: "var(--ink-soft)" }}
            >
              {n.label}
            </Link>
          ))}
          <a className="btn btn-primary" href={waLink(SITE.enquiryMessage)} target="_blank" rel="noopener noreferrer">
            Enquire
          </a>
        </nav>

        {/* mobile toggle */}
        <button
          className="nav-toggle"
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
          style={{ display: "none", background: "transparent", border: "none", color: "var(--maroon)", cursor: "pointer" }}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* mobile menu */}
      {open && (
        <nav
          className="nav-mobile"
          style={{ borderTop: "1px solid var(--line)", background: "var(--paper-2)", padding: "12px 20px 20px" }}
        >
          {NAV.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              onClick={() => setOpen(false)}
              style={{ display: "block", padding: "12px 0", fontFamily: "var(--font-ui)", fontSize: "1rem", color: "var(--ink)", borderBottom: "1px solid var(--line)" }}
            >
              {n.label}
            </Link>
          ))}
          <a
            className="btn btn-primary"
            href={waLink(SITE.enquiryMessage)}
            target="_blank"
            rel="noopener noreferrer"
            style={{ marginTop: 16, width: "100%", justifyContent: "center" }}
          >
            Enquire on WhatsApp
          </a>
        </nav>
      )}

      <style>{`
        @media (max-width: 820px) {
          .nav-desktop { display: none !important; }
          .nav-toggle { display: inline-flex !important; }
        }
      `}</style>
    </header>
  );
}
