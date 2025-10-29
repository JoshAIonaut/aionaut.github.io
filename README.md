# Aionaut – statische Website (GitHub Pages)

Bereit für GitHub Pages – reines HTML, CSS, JS. Keine Builds, keine Abhängigkeiten.

Ordnerstruktur
- `index.html` – Startseite mit allen Sektionen
- `css/styles.css` – minimiertes Stylesheet
- `js/main.js` – kleines Vanilla‑JS (defer)
- `assets/logo.svg` – neutrales SVG‑Logo
- `assets/og-hero.jpg` – Platzhalter (1200×630) für Social‑Previews
- `robots.txt`, `sitemap.xml`
- `impressum.html`, `datenschutz.html` – Platzhalter

Deploy auf GitHub Pages
1) Dateien committen und pushen.
2) In den Repo‑Settings: Pages → "Deploy from branch" wählen, Branch `main`, Ordner `/root`.
3) URL prüfen: `https://aionaut.github.io/`.
4) In `index.html`, `robots.txt`, `sitemap.xml` sind bereits Links auf diese URL gesetzt.

Dark Mode
- Automatisch per `prefers-color-scheme`.
- Manuell via Toggle (speichert Auswahl in `localStorage`).

Kontaktformular
- Standard: Öffnet das lokale E‑Mail‑Programm via `mailto:`. Setze im Skript in `js/main.js` die Adresse bei `to = 'kontakt@example.com'`.
- Optional: Formspree möglich – ein Snippet ist in `index.html` als Kommentar skizziert.

Impressum/Datenschutz
- Ersetze die Platzhalterinhalte in `impressum.html` und `datenschutz.html` durch deine echten Texte oder verlinke externe Seiten.

SEO‑Hinweise
- Ersetze `assets/og-hero.jpg` durch ein 1200×630 Bild (max ~300KB).
- Aktualisiere ggf. soziale Links im Footer (LinkedIn/GitHub).

Lokal testen
- Öffne `index.html` direkt im Browser oder starte z. B.: `python -m http.server`.

