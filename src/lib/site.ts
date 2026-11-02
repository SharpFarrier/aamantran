/**
 * Aamantran — single source of truth for brand + business details.
 * Everything on the site (header, footer, designs, pricing, FAQ, legal pages) reads from here.
 */

export const SITE = {
  brand: "Aamantran",
  brandScript: "आमंत्रण",
  tagline: "Invitations that open like a story.",
  domain: "amntrn.in",
  url: "https://amntrn.in",

  // ---- Contact (used across footer, contact page, legal pages) ----
  // WhatsApp number for every Enquire button (country code, no +, no spaces)
  whatsapp: "917875795738",
  email: "adityaramnani91581@gmail.com",
  location: "Mumbai, Maharashtra, India",

  // ---- Legal entity (used in the legal pages) ----
  legal: {
    entityName: "Ray Ventures",
    // set true once you accept online payments (Razorpay etc.); switches on the payment-gateway clauses
    takesOnlinePayments: false,
    effectiveDate: "2 November 2026",
    advancePercent: 30,
  },

  // ---- WhatsApp enquiry prefill ----
  enquiryMessage: "Hi Aamantran! I'd love to know more about your wedding invitations.",
} as const;

export function waLink(message?: string): string {
  const base = `https://wa.me/${SITE.whatsapp}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

// ---- Navigation ----
export const NAV: { label: string; href: string }[] = [
  { label: "Designs", href: "/#designs" },
  { label: "Pricing", href: "/pricing" },
  { label: "How it works", href: "/#how" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

// ---- Designs (preview video + cover live in /public/designs/<slug>.mp4 / .webp) ----
export type Design = { slug: string; name: string; note: string; plan: "Classic" | "Signature" };

export const DESIGNS: Design[] = [
  { slug: "emerald-gold", name: "Emerald & Gold", note: "Deep emerald, antique gold & a hint of wine", plan: "Classic" },
  { slug: "lotus-courtyard", name: "Lotus Courtyard", note: "Painted pavilion, peacock & lotus · blush & gold", plan: "Signature" },
  { slug: "kerala-kasavu", name: "Kerala Kasavu", note: "Cream & gold kasavu bands", plan: "Classic" },
  { slug: "royal-rajasthani", name: "Royal Rajasthani", note: "Maroon & gold · arched frame", plan: "Classic" },
  { slug: "modern-minimal", name: "Modern Minimal", note: "Ivory & charcoal · clean type", plan: "Classic" },
  { slug: "temple-brass", name: "Temple", note: "Teak & brass · jasmine strand", plan: "Classic" },
  { slug: "coastal", name: "Coastal", note: "Sand & sea blue · soft waves", plan: "Classic" },
];

// ---- Pricing: RSVP website plans ----
export type Tier = {
  name: string;
  price: string;
  note: string;
  highlight?: boolean;
  features: string[];
};

export const TIERS: Tier[] = [
  {
    name: "Classic",
    price: "₹6,999",
    note: "A clean, elegant animated invitation website",
    features: [
      "Any Classic design from the collection",
      "Personalised names, dates, venues & events",
      "Tap-to-open reveal & scratch-card save-the-date",
      "Event timeline & venue maps",
      "Live RSVP — to a private sheet or your WhatsApp",
      "Private link to share with your guests",
    ],
  },
  {
    name: "Signature",
    price: "₹9,999",
    note: "Premium painterly artwork",
    highlight: true,
    features: [
      "Signature designs with painted artwork (e.g. Lotus Courtyard)",
      "Full event timeline & venue maps",
      "RSVP with guest names & headcount tracking",
      "Custom colour & font tweaks",
      "Everything in Classic",
    ],
  },
  {
    name: "Bespoke",
    price: "₹15,000+",
    note: "Designed entirely from scratch, just for you",
    features: [
      "Fully custom artwork & layout",
      "Unlimited sections",
      "Unlimited revisions",
      "Priority WhatsApp support",
      "Everything in Signature",
    ],
  },
];

// ---- Pricing: the animated invitation (image / video) ----
export const INVITATION = {
  name: "Animated Invitation",
  price: "₹2,999",
  note: "A beautifully animated image or video with your event details — ready to broadcast to all your guests on WhatsApp.",
};

// ---- Pricing: add-ons ----
export const ADDONS: { name: string; price: string }[] = [
  { name: "Custom monogram / couple logo", price: "₹999" },
  { name: "Additional function / event", price: "₹1,500" },
  { name: "Same-day rush delivery", price: "₹1,500" },
  { name: "Extra revision", price: "₹500" },
];

// ---- FAQ ----
export const FAQS: { q: string; a: string }[] = [
  {
    q: "What's the difference between an Invitation and an RSVP website?",
    a: "An Invitation is an animated image or video with your event details, made to broadcast to all your guests. An RSVP website is a full interactive invitation your guests open from a link — with your events, venue maps and a form to tell you whether they're coming. Many couples take both.",
  },
  {
    q: "How does it work?",
    a: "Pick a design you love, send us your details on WhatsApp — names, dates, venues, events and any preferences — and we personalise it for you. You get a private link to share with your guests.",
  },
  {
    q: "How long does it take?",
    a: "Most invitations are ready within a few days of receiving your details, depending on the design. Bespoke designs take a little longer, and same-day rush delivery is available as an add-on.",
  },
  {
    q: "What do you need from me?",
    a: "The couple's names, the date(s), the venue(s), your event schedule (haldi, sangeet, pheras, reception and so on), and optionally a colour preference or monogram. You send it all on WhatsApp — no forms to fill.",
  },
  {
    q: "Where do RSVP responses go?",
    a: "Your choice. Responses can be collected in a private spreadsheet that we share with you, or each guest can send their RSVP straight to your WhatsApp with one tap. Either way you see who's coming and how many, for every event.",
  },
  {
    q: "Can I see a design live before ordering?",
    a: "The previews on this site show each design exactly as your guests will see it. Once you order, you get a private personalised link to review before you share it.",
  },
  {
    q: "What device does it work on?",
    a: "Any phone, tablet or computer with a web browser. The link opens instantly — nothing to download or install.",
  },
  {
    q: "Can I make changes after it's ready?",
    a: "Yes. Message us the changes on WhatsApp. Extra revisions beyond your plan are ₹500 each.",
  },
  {
    q: "How do I pay?",
    a: "We ask for a 30% advance by UPI or bank transfer to begin work, and the balance before delivery. Payment details are shared on WhatsApp when you confirm your order.",
  },
];
