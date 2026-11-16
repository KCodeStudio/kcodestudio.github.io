// Privacy-Uebersicht des Studios: kcodestudio.github.io/privacy/
// Listet automatisch alle Spiele aus games.js (Feld "uses" = eine Zeile, was das Spiel nutzt).

const B = require("./blocks");

module.exports = {
  slug: "hub",
  name: "our games",
  file: "privacy/index.html",
  url: "https://kcodestudio.github.io/privacy/",
  updated: "16 November 2026",
  title: "Privacy · K-Code Studio",
  description: "Privacy at K-Code Studio: how our website works and the privacy policy of each of our Android games.",
  icon: "../studio-icon.svg",
  eyebrow: "K-CODE STUDIO",
  heading: "Privacy",
  intro: "Our website, our games and your privacy.",
  coveredLabel: "GAMES",
  covered: (all) => all.map((g) => g.name).join(" · "),
  sections: [
    { id: "games", title: "Privacy policy for each game", html: (g, all) => `
<p>Each of our games has its own privacy policy, because the games use different features – for example a different advertising setup. Please open the policy of the game you play:</p>
<ul class="policy-games">${all
  .map((o) => `<li><a href="${o.file}">${o.name} Privacy Policy</a><p>${o.uses}</p></li>`)
  .join("")}</ul>
<p>None of our games has user accounts of its own, in-app purchases or analytics of its own, and K-Code Studio does not run a server that receives data from the games.</p>` },
    { id: "who", title: "Who is responsible", html: B.who },
    { id: "support", title: "Contacting support", html: B.support },
    { id: "rights", title: "Your rights", html: () => `
<p>Players, parents and guardians can contact ${B.mail} about our games, this website and data processing. Details about each game are in its own privacy policy listed in {ref:games}.</p>
${B.rightsTail()}` },
    { id: "website", title: "This website", html: B.website },
  ],
};
