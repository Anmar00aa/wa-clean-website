// Gemeinsame Anfrageformular-Logik, damit ContactForm (Kontaktseite) und
// QuickRequestForm (Hero) KEIN zwei getrennten Systeme sind, sondern
// dieselbe Validierung, denselben Spam-Schutz (Honeypot) und dasselbe
// Erfolgsverhalten nutzen.
//
// HINWEIS zum Versand: Wie bisher ist noch kein echtes Backend angebunden
// (action="#"). Für eine statische Astro-Seite eignet sich z. B. Netlify
// Forms, Formspree oder eine eigene API-Route – dort sollte auch die
// serverseitige Prüfung des Honeypot-Felds erfolgen.
export function setupInlineForm(form: HTMLFormElement, successBox: HTMLElement | null) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Honeypot: gefüllt bedeutet höchstwahrscheinlich Bot -> still verwerfen
    const honeypot = form.querySelector<HTMLInputElement>('[name="website"]');
    if (honeypot?.value) return;

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    form.setAttribute("hidden", "");
    successBox?.removeAttribute("hidden");
    successBox?.scrollIntoView({ behavior: "smooth", block: "start" });
  });
}
