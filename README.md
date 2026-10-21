# Aamantran — Digital Wedding Invitations

> Invitations that open like a story.

Brand landing page + a collection of live, animated invitation templates. Fully static — no server required (RSVPs post directly to a Google Apps Script / Google Sheet).

## Live URL
After deploy (see `APPLY.txt`): **https://sharpfarrier.github.io/aamantran/**

## Structure
```
aamantran/
├── index.html                    # Brand landing + design gallery
├── templates/
│   ├── lotus-courtyard.html      # Premium Mughal-miniature design (featured)
│   ├── shaadi-mode.html          # Playful story-reel
│   ├── royal.html                # Royal Rajasthani
│   ├── minimal.html              # Minimal Editorial
│   ├── coastal.html              # Coastal
│   ├── deco.html                 # Art-Deco
│   └── gradient.html             # Vivid Gradient
├── .nojekyll                     # Serve files as-is on GitHub Pages
└── README.md
```

## Setting the WhatsApp contact number
The site contacts you via WhatsApp only. It currently ships with a placeholder.
Open `index.html`, find/replace **`91XXXXXXXXXX`** → your number (e.g. `919876543210`) — **4 occurrences**. Commit & push.

## Personalising an invite for a client
Every template is config-driven. Open the template file and edit the single **`CONFIG`** block near the top of its `<script>`:
```js
const CONFIG = {
  name1: "Rohit", name2: "Mita",
  dateText: "22 – 23 August 2026",
  venueName: "Gateway Goa", venueArea: "Palolem, South Goa",
  mapQuery: "Gateway Goa Palolem",
  rsvpEndpoint: "https://script.google.com/.../exec",
  events: [ ... ]
};
```
Save as `templates/<client-slug>.html` (or `i/<slug>.html`) and share that link.

## RSVP backend
RSVPs POST (fire-and-forget, `no-cors`) to the Google Apps Script web app in `rsvp-apps-script.gs`.
Sheet columns: `Timestamp, Name, Phone, Attending, ComingWith, Guests, Members, Note`.

## Notes
- Template files embed their artwork as base64 (self-contained). `lotus-courtyard.html` is ~4 MB; a later pass will split images into hosted assets for faster loads.
- Light mode, mobile-first (phone column, max-width 460px).
