import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import LegalShell from "@/components/LegalShell";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${SITE.brand} collects, uses and protects your information.`,
};

export default function PrivacyPage() {
  return (
    <LegalShell title="Privacy Policy">
      <p>
        {SITE.brand} (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;), operated by {SITE.legal.entityName}, respects your
        privacy. This policy explains what information we collect when you use {SITE.domain} and our invitation
        services, how we use it, and the choices you have.
      </p>

      <h2>Information we collect</h2>
      <h3>Details you give us</h3>
      <p>
        When you order an invitation, you share details such as the couple&apos;s names, wedding dates, venue,
        event schedule, and optionally photos or design preferences. You send these to us directly, usually over
        WhatsApp or email.
      </p>
      <h3>RSVP information from your guests</h3>
      <p>
        Each invitation includes an RSVP form. When a guest responds, we collect the information they enter —
        typically their name, phone number, whether they will attend, the number of guests, and an optional note.
        This information is collected on behalf of the couple who created the invitation and is shared with them.
      </p>
      <h3>Information collected automatically</h3>
      <p>
        Like most websites, we collect basic technical information such as your device type, browser, country and the
        pages you visit, to keep the site working and to improve it. We use Vercel Web Analytics for this, which
        reports visits in aggregate and does not use cookies. We aim to keep this minimal.
      </p>

      <h2>How we use information</h2>
      <ul>
        <li>To design, personalise and deliver your invitation.</li>
        <li>To collect and pass on RSVP responses to the couple.</li>
        <li>To communicate with you about your order.</li>
        <li>To maintain, secure and improve our services.</li>
      </ul>

      <h2>How RSVP data is stored</h2>
      <p>
        Depending on the option the couple chooses, RSVP responses are either stored using secure third-party
        services (such as a hosted spreadsheet) accessible only to us and the couple, or sent by the guest directly to
        the couple on WhatsApp — in which case the response goes from the guest to the couple and we do not receive it. We take reasonable measures to protect this data, but no method of transmission or
        storage is completely secure.
      </p>

      <h2>Sharing your information</h2>
      <p>
        We do not sell your personal information. We share it only: with the couple whose invitation collected it;
        with service providers who help us operate (for example hosting and messaging); or where required by law.
      </p>

      <h2>Data retention</h2>
      <p>
        We keep order and RSVP information for as long as needed to provide the service and for a reasonable period
        afterwards, then delete or anonymise it. You can ask us to delete your information sooner (see below).
      </p>

      <h2>Your choices and rights</h2>
      <p>
        You may ask us to access, correct, or delete the personal information we hold about you by emailing{" "}
        <a href={`mailto:${SITE.email}`}>{SITE.email}</a>. We will respond within a reasonable time.
      </p>

      <h2>Children</h2>
      <p>Our services are intended for adults. We do not knowingly collect information from children.</p>

      <h2>Changes to this policy</h2>
      <p>
        We may update this policy from time to time. The latest version will always be available on this page with
        its effective date.
      </p>

      <h2>Contact</h2>
      <p>
        Questions or requests? Reach us at <a href={`mailto:${SITE.email}`}>{SITE.email}</a>. We are based in{" "}
        {SITE.location}.
      </p>
    </LegalShell>
  );
}
