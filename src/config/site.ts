// Zentrale Unternehmensdaten. Alle mit [PLATZHALTER] markierten Werte
// müssen vor dem Livegang durch die echten Angaben ersetzt werden.
// Diese Datei ist die EINZIGE Stelle, an der Kontakt-/Rechtsdaten gepflegt werden.

export const site = {
  // Marketingname, wie er im Header/Footer/Titel erscheint
  name: "WA-Clean Gebäudeservice",

  // Vollständiger rechtlicher Name inkl. Rechtsform (für Impressum & Schema.org)
  legalName: "WA-Clean Gebäudeservice UG",

  // Beide Geschäftsführer (für Impressum) – je einer pro Standort, siehe locations[].manager unten
  owner: "Wael Alsaad, Anmar Alemarah",

  // Anschrift der Hauptniederlassung (Wiesbaden) – maßgeblich für Impressum & Schema.org
  street: "Tempelhofer Str. 72",
  zip: "65205",
  city: "Wiesbaden",

  // Haupttelefonnummer (Festnetz HQ Wiesbaden) – wird in Header, mobiler CTA-Leiste
  // und Hero als "Jetzt anrufen" verwendet.
  phoneDisplay: "+49 611 13744165",
  phoneHref: "tel:+4961113744165",

  email: "info@wa-clean.de",
  emailService: "service@wa-clean.de",

  vatId: "DE464118848",
  taxNumber: "040 248 02145",
  commercialRegister: "Amtsgericht Wiesbaden, HRB 36789",

  // Produktions-URL der Website (für Canonical/OG-Tags & Sitemap)
  // Aus der E-Mail-Domain abgeleitet – bitte bestätigen bzw. anpassen,
  // falls die Website unter einer anderen Domain läuft.
  url: "https://www.wa-clean.de",

  openingHours: "Mo–Fr 8:00–20:00 Uhr, Sa 10:00–18:00 Uhr, So geschlossen",

  // Zentral konfigurierbarer Link zur öffentlichen Google-Bewertungsseite.
  // [PLATZHALTER] – bitte durch den echten Google-Bewertungslink ersetzen
  // (Google Business Profil → "Rezension anfordern" → Link kopieren).
  // Wird auf /bewertungen/ sowohl bei positivem als auch bei negativem
  // Feedback verwendet – bewusst OHNE Review-Gating.
  googleReviewLink: "https://g.page/r/[PLATZHALTER]/review",

  // Zentrale WhatsApp-Geschäftsnummer im internationalen Format ohne "+"
  // und ohne Leerzeichen. Einzige Stelle im Projekt, an der diese Nummer
  // gepflegt wird – alle WhatsApp-Buttons beziehen sie ausschließlich von
  // hier (über whatsappHref bzw. getWhatsappHref()).
  whatsappNumber: "4917623966869",
  get whatsappHref() {
    return `https://wa.me/${this.whatsappNumber}`;
  },

  // Vorgefertigte, professionelle WhatsApp-Nachricht je Sprache. Wird von
  // getWhatsappHref() automatisch URL-encodiert an den wa.me-Link angehängt,
  // sodass der Chat direkt mit vorausgefülltem Text startet.
  whatsappMessageDe:
    "Hallo WA-Clean, ich interessiere mich für Ihre Reinigungsleistungen und möchte gerne ein unverbindliches Angebot erhalten.",
  whatsappMessageEn:
    "Hello WA-Clean, I am interested in your cleaning services and would like to request a non-binding quote.",

  // Zentrale Ziel-Route für alle "Anfrage"/"Angebot anfordern"-CTAs
  // (Mobile Bottom Bar, Header, o. ä.), die nicht direkt auf ein
  // eingebettetes Formular verlinken.
  requestPath: "/kontakt/",

  // Formspree-Endpoint für den echten Versand aller Website-Formulare
  // (Kontakt, Hero-Quick-Anfrage, Bewertungs-Feedback, Bewerbung).
  // Zielpostfach ist bei Formspree auf info@wa-clean.de eingestellt.
  formEndpoint: "https://formspree.io/f/meajnvvd",
} as const;

// Liefert den fertigen WhatsApp-Link inkl. sprachabhängiger, vorausgefüllter
// Nachricht. Zentrale Stelle für ALLE WhatsApp-Buttons der Website (Desktop
// Floating-Button, Mobile CTA-Leiste, Standort-Landingpages DE + EN) – so
// wird die Nummer nirgends im Code dupliziert.
export function getWhatsappHref(lang: "de" | "en" = "de"): string {
  const message = lang === "en" ? site.whatsappMessageEn : site.whatsappMessageDe;
  return `${site.whatsappHref}?text=${encodeURIComponent(message)}`;
}

// Grobe Regionsauswahl fürs Quick-Anfrageformular im Hero – bewusst kürzer
// als die vollständige regions-Liste unten (Startseite/Hero-Kontext).
export const contactRegions = ["Wiesbaden", "Rheingau", "Keine Präferenz"] as const;

// Beide Standorte. Die Hauptniederlassung (Wiesbaden) ist zugleich die
// rechtlich maßgebliche Anschrift (siehe site.street/zip/city oben).
export const locations = [
  {
    label: "Hauptniederlassung",
    city: "Wiesbaden",
    street: "Tempelhofer Str. 72",
    zip: "65205",
    phoneDisplay: "+49 611 13744165",
    phoneHref: "tel:+4961113744165",
    mobileDisplay: "+49 176 63169030",
    mobileHref: "tel:+4917663169030",
    manager: "Wael Alsaad",
    isMain: true,
  },
  {
    label: "Standort Rheingau",
    city: "Oestrich-Winkel",
    street: "Johannisberger Str. 9a",
    zip: "65375",
    phoneDisplay: "+49 6723 6742146",
    phoneHref: "tel:+4967236742146",
    mobileDisplay: "+49 176 23966869",
    mobileHref: "tel:+4917623966869",
    manager: "Anmar Alemarah",
    isMain: false,
  },
] as const;

// Partner/Kunden, deren Logo wir zeigen dürfen (Startseite & Referenzen-Slideshow).
export const partners = [
  { name: "Rüdesheim Assmannshausen am Rhein", logo: "/partners/ruedesheim.png" },
  { name: "Rhein Pavillon Da Nico", logo: "/partners/rhein-pavillon.png" },
  { name: "Weingut Prinz von Hessen", logo: "/partners/prinz-von-hessen.png" },
  { name: "United States Army Garrison Wiesbaden", logo: "/partners/usag-wiesbaden.png" },
  { name: "Richard Kunz", logo: "/partners/richard-kunz.jpg" },
  { name: "Hautarztpraxis Dr. Hammer", logo: "/partners/praxis-hammer.png" },
  { name: "Bernd Baumgärtner Hausmeisterservice GmbH", logo: "/partners/baumgaertner-hms.png" },
  { name: "EBS Universität", logo: "/partners/ebs-universitaet.jpg" },
  { name: "Deutsche Gold AG", logo: "/partners/deutsche-gold-ag.svg" },
  { name: "Change Your Home", logo: "/partners/change-your-home.svg" },
  { name: "Eiffage Infra-Bau", logo: "/partners/eiffage-infra-bau.svg" },
  { name: "Hochschule Geisenheim", logo: "/partners/hs-geisenheim.svg" },
  { name: "Weingut Goldatzel", logo: "/partners/goldatzel.png" },
  { name: "Autohaus Schönleber Schuld", logo: "/partners/autohaus-schoenleber.png" },
] as const;

export const regions = [
  "Rheingau",
  "Wiesbaden",
  "Mainz",
  "Rüdesheim am Rhein",
  "Geisenheim",
  "Oestrich-Winkel",
  "Eltville am Rhein",
] as const;

export const mainNav = [
  { label: "Startseite", href: "/" },
  { label: "Leistungen", href: "/leistungen/" },
  { label: "Über uns", href: "/ueber-uns/" },
  { label: "Einsatzgebiet", href: "/einsatzgebiet/" },
  { label: "Referenzen", href: "/referenzen/" },
  { label: "FAQ", href: "/faq/" },
  { label: "Kontakt", href: "/kontakt/" },
] as const;

export const footerNav = {
  unternehmen: [
    { label: "Über uns", href: "/ueber-uns/" },
    { label: "Referenzen", href: "/referenzen/" },
    { label: "Häufige Fragen", href: "/faq/" },
    { label: "Bewertungen", href: "/bewertungen/" },
    { label: "Karriere", href: "/karriere/" },
    { label: "Kontakt", href: "/kontakt/" },
  ],
  leistungen: [
    { label: "Alle Leistungen", href: "/leistungen/" },
    { label: "Unterhaltsreinigung", href: "/leistungen/unterhaltsreinigung/" },
    { label: "Büroreinigung", href: "/leistungen/bueroreinigung/" },
    { label: "Fenster- & Glasreinigung", href: "/leistungen/fenster-glasreinigung/" },
  ],
  rechtliches: [
    { label: "Impressum", href: "/impressum/" },
    { label: "Datenschutz", href: "/datenschutz/" },
  ],
};

// ---- Englische Version (/en/) ------------------------------------------

export const mainNavEn = [
  { label: "Home", href: "/en/" },
  { label: "Services", href: "/en/services/" },
  { label: "About Us", href: "/en/about-us/" },
  { label: "Service Area", href: "/en/service-area/" },
  { label: "References", href: "/en/references/" },
  { label: "FAQ", href: "/en/faq/" },
  { label: "Contact", href: "/en/contact/" },
] as const;

export const footerNavEn = {
  company: [
    { label: "About Us", href: "/en/about-us/" },
    { label: "References", href: "/en/references/" },
    { label: "FAQ", href: "/en/faq/" },
    { label: "Contact", href: "/en/contact/" },
  ],
  services: [
    { label: "All Services", href: "/en/services/" },
    { label: "Routine Cleaning", href: "/en/services/unterhaltsreinigung/" },
    { label: "Office Cleaning", href: "/en/services/bueroreinigung/" },
    { label: "Window & Glass Cleaning", href: "/en/services/fenster-glasreinigung/" },
  ],
  legal: [
    { label: "Imprint (DE)", href: "/impressum/" },
    { label: "Privacy Policy (DE)", href: "/datenschutz/" },
  ],
};

// Zentrale DE<->EN-Seitenzuordnung für hreflang-Tags und den Sprachumschalter
// im Header. Wird in Layout.astro anhand des aktuellen Pfads nachgeschlagen –
// einzelne Leistungsseiten werden separat über den (identischen) Slug in
// den Collections "leistungen"/"leistungenEn" zugeordnet, siehe [slug].astro.
export const pageTranslationsDeToEn: Record<string, string> = {
  "/": "/en/",
  "/leistungen/": "/en/services/",
  "/ueber-uns/": "/en/about-us/",
  "/einsatzgebiet/": "/en/service-area/",
  "/referenzen/": "/en/references/",
  "/faq/": "/en/faq/",
  "/kontakt/": "/en/contact/",
  "/gebaeudereinigung-wiesbaden/": "/en/wiesbaden/",
  "/gebaeudereinigung-rheingau/": "/en/rheingau/",
  "/gebaeudereinigung-mainz/": "/en/mainz/",
};

export const pageTranslationsEnToDe: Record<string, string> = Object.fromEntries(
  Object.entries(pageTranslationsDeToEn).map(([de, en]) => [en, de])
);
