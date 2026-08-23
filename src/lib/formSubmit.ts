// Gemeinsame Anfrageformular-Logik, damit ContactForm (Kontaktseite),
// QuickRequestForm (Hero), ReviewFlow (Bewertungs-Feedback) und
// ApplicationForm (Karriere) dieselbe Validierung, denselben Spam-Schutz
// (Honeypot) und denselben echten Versand nutzen.
//
// Versand läuft über Formspree (site.formEndpoint in src/config/site.ts).
// Formular-`action` muss auf diesen Endpoint zeigen; das Attribut wird
// hier als Ziel-URL für den fetch()-Aufruf verwendet.
export function setupInlineForm(form: HTMLFormElement, successBox: HTMLElement | null) {
  // Idempotenz-Schutz: Falls mehrere Formular-Komponenten auf derselben
  // Seite denselben generischen [data-inline-form-wrap]-Selektor nutzen,
  // würde jedes Komponenten-Script versuchen, ALLE passenden Formulare zu
  // verdrahten – ohne diese Sperre entstünden doppelte submit-Listener und
  // damit doppelt versendete Anfragen.
  if (form.dataset.formSubmitWired === "1") return;
  form.dataset.formSubmitWired = "1";

  const submitBtn = form.querySelector<HTMLButtonElement>('button[type="submit"]');
  const defaultBtnText = submitBtn?.textContent ?? "";

  let errorBox = form.querySelector<HTMLElement>("[data-form-error]");
  if (!errorBox) {
    errorBox = document.createElement("p");
    errorBox.setAttribute("data-form-error", "");
    errorBox.setAttribute("role", "alert");
    errorBox.className = "text-sm text-red-600";
    errorBox.hidden = true;
    submitBtn?.insertAdjacentElement("beforebegin", errorBox);
  }
  if (!errorBox.textContent?.trim()) {
    errorBox.textContent = "Beim Senden ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut oder schreiben Sie uns direkt eine E-Mail.";
  }

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    // Honeypot: gefüllt bedeutet höchstwahrscheinlich Bot -> still verwerfen
    const honeypot = form.querySelector<HTMLInputElement>('[name="website"]');
    if (honeypot?.value) return;

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    errorBox?.setAttribute("hidden", "");
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = "Wird gesendet …";
    }

    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });

      if (!response.ok) throw new Error(`Formspree-Fehler: ${response.status}`);

      form.setAttribute("hidden", "");
      successBox?.removeAttribute("hidden");
      successBox?.scrollIntoView({ behavior: "smooth", block: "start" });
    } catch (err) {
      errorBox?.removeAttribute("hidden");
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.textContent = defaultBtnText;
      }
    }
  });
}
