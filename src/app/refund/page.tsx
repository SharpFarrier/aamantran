import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import LegalShell from "@/components/LegalShell";

export const metadata: Metadata = {
  title: "Refund & Cancellation Policy",
  description: `${SITE.brand}'s policy on cancellations and refunds for custom digital invitations.`,
};

export default function RefundPage() {
  return (
    <LegalShell title="Refund & Cancellation">
      <p>
        Our invitations are custom, made-to-order digital work. This policy explains when you can cancel and how
        refunds are handled. It applies to orders placed with {SITE.legal.entityName} (&ldquo;{SITE.brand}&rdquo;).
      </p>

      <h2>Cancelling your order</h2>
      <ul>
        <li>
          <strong>Before we start work:</strong> if you cancel before we have begun designing your invitation, you
          are eligible for a full refund of any amount paid.
        </li>
        <li>
          <strong>After work has begun:</strong> because the work is custom and time has already been spent, the{" "}
          {SITE.legal.advancePercent}% advance is non-refundable. Any amount paid beyond the advance is refunded in
          proportion to the work not yet completed, at our reasonable discretion.
        </li>
        <li>
          <strong>After delivery:</strong> once the finished invitation link has been delivered, the order is
          considered complete and is non-refundable. Revisions included in your plan still apply.
        </li>
      </ul>

      <h2>Revisions vs refunds</h2>
      <p>
        If something isn&apos;t right, tell us — the revisions included in your plan are there to make it perfect. Most
        concerns are best resolved with a revision rather than a cancellation.
      </p>

      <h2>How to request a cancellation or refund</h2>
      <p>
        Email <a href={`mailto:${SITE.email}`}>{SITE.email}</a> (or message us on WhatsApp) with your order details.
        We will confirm the status of your order and the applicable outcome.
      </p>

      {SITE.legal.takesOnlinePayments && (
        <>
          <h2>Refund timelines</h2>
          <p>
            Approved refunds are processed back to your original payment method. Depending on your bank or payment
            provider, it may take 5–10 business days for the amount to reflect.
          </p>
        </>
      )}

      <h2>Contact</h2>
      <p>
        Any questions about cancellations or refunds? Reach us at <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.
      </p>
    </LegalShell>
  );
}
