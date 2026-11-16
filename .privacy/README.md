# Privacy Policies – Bausteine

Die Seiten `privacy.html`, `floatstone/privacy.html` und `vinora/privacy.html` werden aus diesem Ordner erzeugt.
Das Ergebnis ist ganz normales HTML: man kann es auf jede andere Website kopieren (dazu `studio.css`, `testers.css` und das Icon mitnehmen).

- `blocks.js` – Texte, die mehrere Spiele teilen (Verantwortlicher, Support, Rechte, Website, Werbung mit Einwilligung …)
- `games.js` – ein Eintrag pro Spiel: Name, URL, Datum und welche Abschnitte es hat
- `build.js` – baut die HTML-Seiten

## Seiten neu bauen

```
node .privacy/build.js
```

## Neues Spiel hinzufügen

1. In `games.js` den Eintrag des ähnlichsten Spiels kopieren (Werbung mit Einwilligung → Vinora/Floatstone, Limited Ads → Penguin).
2. Name, `file`, `url`, `updated`, Icon und die spielspezifischen Texte anpassen.
3. Den Eintrag unten bei `module.exports` ergänzen.
4. `node .privacy/build.js` laufen lassen.

Ordner, die mit einem Punkt beginnen, veröffentlicht GitHub Pages nicht – dieser Ordner ist also nicht öffentlich sichtbar.
