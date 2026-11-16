// Baut aus blocks.js + games.js fertige, eigenstaendige HTML-Seiten (kein Jekyll noetig).
// Aufruf im Website-Ordner:  node .privacy/build.js
// Die erzeugten .html-Dateien kann man 1:1 auf jede andere Website kopieren
// (dazu studio.css, testers.css und das jeweilige Icon mitnehmen).

const fs = require("fs");
const path = require("path");
const games = require("./games");
const B = require("./blocks");

const ROOT = path.join(__dirname, "..");

function page(g) {
  const depth = g.file.split("/").length - 1;
  const r = "../".repeat(depth); // Weg zurueck zur Website-Wurzel
  const rel = (target) => r + target; // Link zu einer Datei ab Wurzel

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
  const isStudioPrivacy = g.file === "privacy.html";
  const footerLinks = games
    .map((o) => `<a href="${rel(o.file)}">${o.footerLabel}</a>`)
    .join("");

  return `<!doctype html>
<html lang="en"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1"><meta name="referrer" content="no-referrer">
<meta name="robots" content="noindex,follow"><meta http-equiv="Content-Security-Policy" content="default-src 'none'; img-src 'self'; style-src 'self'; base-uri 'none'; form-action 'none'">
<title>${g.title}</title><meta name="description" content="${g.description}">
<link rel="stylesheet" href="${rel("studio.css")}"><link rel="icon" href="${g.icon}"><link rel="stylesheet" href="${rel("testers.css?v=3")}"></head><body>
<!-- Erzeugt von .privacy/build.js - Text in .privacy/games.js bzw. .privacy/blocks.js aendern. -->
<a class="skip" href="#main">Skip to content</a><header class="site-header"><a class="brand" href="${r || "./"}" aria-label="K-Code Studio home"><span class="brand-mark" aria-hidden="true">K.</span><span>K-Code<span class="brand-light"> Studio</span></span></a>
<nav aria-label="Main navigation"><a href="${r || "./"}#games">Games</a><a class="tester-nav" href="${rel("testers.html")}">Become a Tester</a><a href="${rel("privacy.html")}"${isStudioPrivacy ? ' aria-current="page"' : ""}>Privacy</a><a href="mailto:${B.MAIL}">Contact <span aria-hidden="true">↗</span></a></nav></header>
<main id="main"><div class="document-intro"><a class="back-link" href="${r || "./"}">← Back to studio</a><p class="eyebrow">${g.eyebrow}</p><h1>Privacy Policy</h1><p>${g.intro}</p><span class="updated">Last updated · ${g.updated}</span></div>
<div class="policy-summary"><div><span>GAME COVERED</span><strong>${g.covered}</strong></div><div><span>PRIVACY CONTACT</span>${B.mail}</div></div>
<div class="policy-grid"><aside><nav aria-label="Policy contents">
${toc}
</nav></aside><article class="policy-content">

${body}

</article></div></main><footer><a class="brand footer-brand" href="${r || "./"}">K-Code Studio</a><p>Independent games. Made in Germany.</p><nav aria-label="Legal navigation">${footerLinks}<a href="${rel("legal.html")}">Legal Notice / Impressum</a><a href="mailto:${B.MAIL}">Support</a></nav><small>© 2026 K-Code Studio</small></footer></body></html>
`;
}

for (const g of games) {
  const out = path.join(ROOT, g.file);
  fs.mkdirSync(path.dirname(out), { recursive: true });
  fs.writeFileSync(out, page(g));
  console.log("geschrieben:", g.file);
}
