import type { Metadata } from "next";
import Link from "next/link";
import { SITE, waLink } from "@/lib/site";
import InnerHero from "@/components/InnerHero";
import FaqAccordion from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Answers to common questions about Aamantran's digital wedding invitations, RSVPs, delivery and pricing.",
};

export default function FaqPage() {
  return (
    <>
      <InnerHero eyebrow="Questions" title="Frequently asked" subtitle="Everything you need to know before you order. Still curious? Message us on WhatsApp." />
      <section style={{ padding: "48px 0 24px" }}>
        <div className="container">
          <FaqAccordion />
          <div style={{ textAlign: "center", marginTop: 40 }}>
            <p style={{ color: "var(--ink-soft)", marginBottom: 16 }}>Didn&apos;t find your answer?</p>
            <a className="btn btn-primary" href={waLink(SITE.enquiryMessage)} target="_blank" rel="noopener noreferrer">
              Ask us on WhatsApp
            </a>
            <div style={{ marginTop: 14 }}>
              <Link href="/contact" style={{ color: "var(--maroon)", textDecoration: "underline", textUnderlineOffset: 2 }}>
                or see all the ways to reach us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
