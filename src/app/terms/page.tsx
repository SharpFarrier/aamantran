import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import LegalShell from "@/components/LegalShell";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `The terms that govern your use of ${SITE.brand} and its invitation services.`,
};

export default function TermsPage() {
  return (
    <LegalShell title="Terms of Service">
      <p>
        These Terms govern your use of {SITE.domain} and the invitation services provided by {SITE.legal.entityName}{" "}
        (&ldquo;{SITE.brand}&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;). By placing an order or using the site, you agree to these Terms.
      </p>

      <h2>What we provide</h2>
      <p>
        We create personalised digital invitations with a built-in RSVP, delivered as a private web link. The exact
        deliverables depend on the plan you choose.
      </p>

      <h2>Ownership of our designs</h2>
      <p>
        All designs, templates, artwork, layouts, code and other materials created and shown by {SITE.brand} are our
        intellectual property and remain ours. When you order, you receive a personalised invitation for your own
        event use. You may not copy, resell, redistribute, or reproduce our designs, in whole or in part, or use them
        to create competing products.
      </p>

      <h2>Your content</h2>
      <p>
        You retain ownership of the details and photos you provide. By sharing them, you grant us permission to use
        them solely to create and deliver your invitation. You confirm you have the right to share any content you
        send us.
      </p>

      <h2>Acceptable use</h2>
      <p>
        You agree not to misuse the service — including attempting to copy or extract our designs, interfering with
        the site, or using it for unlawful purposes.
      </p>

      <h2>Orders, delivery and revisions</h2>
      <p>
        We begin work once you confirm your order and share your details. Typical delivery times and the number of
        revisions included depend on your plan. We will do our best to meet agreed timelines, but delivery dates are
        estimates, not guarantees.
      </p>

      <h2>Payment</h2>
      {SITE.legal.takesOnlinePayments ? (
        <p>
          Prices are as quoted at the time of order. Payment is processed through our third-party payment provider.
          Your order is confirmed once payment is received. Refunds, where applicable, are governed by our{" "}
          <a href="/refund">Refund &amp; Cancellation Policy</a>.
        </p>
      ) : (
        <p>
          Payment is arranged directly with us (for example over WhatsApp) by UPI or bank transfer. We ask for a{" "}
          {SITE.legal.advancePercent}% advance to begin work, and the balance is due before the finished invitation is
          delivered. Your order is confirmed once the advance is received. Cancellations are governed by our{" "}
          <a href="/refund">Refund &amp; Cancellation Policy</a>.
        </p>
      )}

      <h2>Disclaimers and liability</h2>
      <p>
        The service is provided &ldquo;as is&rdquo;. To the extent permitted by law, we are not liable for any indirect or
        consequential loss arising from the use of our service. Our total liability for any claim is limited to the
        amount you paid for the order in question.
      </p>

      <h2>Governing law</h2>
      <p>
        These Terms are governed by the laws of India, and any disputes are subject to the jurisdiction of the courts
        at {SITE.location}.
      </p>

      <h2>Changes</h2>
      <p>We may update these Terms from time to time. Continued use of the service means you accept the latest version.</p>

      <h2>Contact</h2>
      <p>Questions about these Terms? Email <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.</p>
    </LegalShell>
  );
}
