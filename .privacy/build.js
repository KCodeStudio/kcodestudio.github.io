// Baut aus blocks.js + games.js + hub.js fertige, eigenstaendige HTML-Seiten (kein Jekyll noetig).
// Aufruf im Website-Ordner:  node .privacy/build.js
// Die erzeugten .html-Dateien kann man 1:1 auf jede andere Website kopieren
// (dazu studio.css, testers.css und das jeweilige Icon mitnehmen).

const fs = require("fs");
const path = require("path");
const games = require("./games");
const hub = require("./hub");
const B = require("./blocks");

const ROOT = path.join(__dirname, "..");
const CSS_VERSION = { studio: 3, testers: 4 };

// Studio-Favicon (Logo K.) fuer Seiten, die nicht zu einem einzelnen Spiel gehoeren
const studioIcons = (r) =>
  `<link rel="icon" type="image/png" sizes="32x32" href="${r}favicon-32.png"><link rel="icon" type="image/png" sizes="192x192" href="${r}favicon-192.png"><link rel="apple-touch-icon" href="${r}apple-touch-icon.png">`;

function page(g) {
  const depth = g.file.split("/").length - 1;
  const r = "../".repeat(depth); // Weg zurueck zur Website-Wurzel
  const rel = (target) => r + target; // Link zu einer Datei ab Wurzel
  const home = r || "./";

  const sections = g.sections.map((s, i) => ({ ...s, n: i + 1 }));
  const num = Object.fromEntries(sections.map((s) => [s.id, s.n]));
  const resolveRefs = (html) =>
    html.replace(/\{(ref|Ref):([\w-]+)\}/g, (_, kind, id) => {
      if (!(id in num)) throw new Error(`${g.name}: unbekannter Verweis {${kind}:${id}}`);
      return `${kind === "Ref" ? "Section" : "section"} ${num[id]}`;
    });

  // Links zu anderen Spielen relativ zu dieser Seite
  const others = games.map((o) => ({ ...o, file: rel(o.file) }));
  const body = sections
    .map((s) => {
      const raw = typeof s.html === "function" ? s.html(g, others) : s.html;
      return `<section id="${s.id}"><h2>${s.n}. ${s.title}</h2>${resolveRefs(raw).trim()}</section>`;
    })
    .join("\n\n");

  const toc = sections.map((s) => `<a href="#${s.id}">${s.n}. ${s.title}</a>`).join("\n");
  const isHub = g === hub;
  const covered = typeof g.covered === "function" ? g.covered(games) : g.covered;

  return `<!doctype html>
<html lang="en"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1"><meta name="referrer" content="no-referrer">
<meta name="robots" content="noindex,follow"><meta http-equiv="Content-Security-Policy" content="default-src 'none'; img-src 'self'; style-src 'self'; base-uri 'none'; form-action 'none'">
<title>${g.title}</title><meta name="description" content="${g.description}">
<link rel="stylesheet" href="${rel(`studio.css?v=${CSS_VERSION.studio}`)}">${g.studioIcon ? studioIcons(r) : `<link rel="icon" href="${g.icon}">`}<link rel="stylesheet" href="${rel(`testers.css?v=${CSS_VERSION.testers}`)}"></head><body>
<!-- Erzeugt von .privacy/build.js - Text in .privacy/games.js, hub.js bzw. blocks.js aendern. -->
<a class="skip" href="#main">Skip to content</a><header class="site-header"><a class="brand" href="${home}" aria-label="K-Code Studio home"><span class="brand-mark" aria-hidden="true">K.</span><span>K-Code<span class="brand-light"> Studio</span></span></a>
<nav aria-label="Main navigation"><a href="${home}#about">About</a><a class="tester-nav" href="${rel("testers.html")}">Become a Tester</a><a href="${rel("privacy/")}"${isHub ? ' aria-current="page"' : ""}>Privacy</a><a href="mailto:${B.MAIL}">Contact <span aria-hidden="true">↗</span></a></nav></header>
<main id="main"><div class="document-intro"><a class="back-link" href="${isHub ? home : rel("privacy/")}">${isHub ? "← Back to studio" : "← All privacy information"}</a><p class="eyebrow">${g.eyebrow}</p><h1>${g.heading ?? "Privacy Policy"}</h1><p>${g.intro}</p><span class="updated">Last updated · ${g.updated}</span></div>
<div class="policy-summary"><div><span>${g.coveredLabel ?? "GAME COVERED"}</span><strong>${covered}</strong></div><div><span>PRIVACY CONTACT</span>${B.mail}</div></div>
<div class="policy-grid"><aside><nav aria-label="Policy contents">
${toc}
</nav></aside><article class="policy-content">

${body}

</article></div></main><footer><a class="brand footer-brand" href="${home}">K-Code Studio</a><p>Independent games. Made in Germany.</p><nav aria-label="Legal navigation"><a href="${rel("privacy/")}">Privacy Policy</a><a href="${rel("legal.html")}">Legal Notice / Impressum</a><a href="mailto:${B.MAIL}">Support</a></nav><small>© 2026 K-Code Studio</small></footer></body></html>
`;
}

for (const g of [hub, ...games]) {
  const out = path.join(ROOT, g.file);
  fs.mkdirSync(path.dirname(out), { recursive: true });
  fs.writeFileSync(out, page(g));
  console.log("geschrieben:", g.file);
}
