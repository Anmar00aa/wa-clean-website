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

  // [PLATZHALTER] – im gesamten Projekt ist aktuell KEINE WhatsApp-Nummer
  // hinterlegt. Bewusst nicht geraten (z. B. keine der Mobilnummern
  // wiederverwendet) – bitte die echte WhatsApp-Geschäftsnummer eintragen.
  // Format ohne "+" und ohne Leerzeichen, z. B. "4917600000000".
  whatsappNumber: "[PLATZHALTER]",
  get whatsappHref() {
    return `https://wa.me/${this.whatsappNumber}`;
  },

  // Zentrale Ziel-Route für alle "Anfrage"/"Angebot anfordern"-CTAs
  // (Mobile Bottom Bar, Header, o. ä.), die nicht direkt auf ein
  // eingebettetes Formular verlinken.
  requestPath: "/kontakt/",
} as const;

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
