// Gemeinsame Bausteine fuer alle Privacy Policies.
// Einmal hier aendern -> "node .privacy/build.js" -> alle Seiten sind aktuell.
// {ref:id} wird beim Bauen durch "section N" ersetzt (N = Nummer des Abschnitts mit dieser id).

const MAIL = "kcodestudio.support@gmail.com";
const mail = `<a href="mailto:${MAIL}">${MAIL}</a>`;

const links = (items) =>
  `<p>Further information:<br>${items.map(([href, text]) => `<a href="${href}">${text ?? href}</a>`).join("<br>")}</p>`;

// ---------- Fuer alle Spiele ----------

const who = (g) => `
<p>This website and ${g.name} are operated by Kerem Aydinguel under the developer brand K-Code Studio, Germany. Kerem Aydinguel is the controller for the processing described in this policy, except where Google is named as an independent controller.</p>
<p>Address: Offenburger Straße 107, 68239 Mannheim, Germany<br>Privacy and support: ${mail}</p>`;

const support = () => `
<p>If you email us, we receive your email address and message and use them to respond and handle your request. The support address uses Gmail, so Google also processes email as the mailbox provider. Parents or guardians may contact us on behalf of younger players. Please avoid sending unnecessary personal information, passwords or verification codes.</p>
<p>Support correspondence is retained for 90 days after the request has been finally resolved and is then deleted, unless an applicable legal obligation requires longer retention. Any required longer retention is limited to the relevant information and legally required duration. This is a mailbox procedure; the game does not automatically delete emails.</p>`;

// Schluss jedes "Rechte"-Abschnitts (davor kommen die spielspezifischen Absaetze).
const rightsTail = () => `
<p>Where applicable, you may request access, correction, deletion, restriction or portability, object to processing, and withdraw consent without affecting earlier lawful processing. You may complain to a competent data-protection authority, including the authority where you habitually reside or work in the EU.</p>
<p>For the publisher in Baden-Württemberg, Germany, the state authority is the Landesbeauftragte für den Datenschutz und die Informationsfreiheit Baden-Württemberg:<br><a href="https://www.baden-wuerttemberg.datenschutz.de/kontakt-aufnehmen/">Contact the data-protection authority</a></p>`;

const website = () => `
<p>This website is hosted on GitHub Pages. GitHub states that visitors' IP addresses are logged and stored for security purposes even if they are not signed in. This hosting processing is separate from the game's local storage and its Google integrations.</p>
<p>Our static pages add no analytics scripts, cookies, advertising embeds, web forms or externally loaded fonts. GitHub's own infrastructure processing still applies. Email links open your email application; external links take you to the named provider's website.</p>
${links([
  ["https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages", "About GitHub Pages"],
  ["https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement", "GitHub General Privacy Statement"],
])}`;

// ---------- Werbung MIT Einwilligung (Google UMP) ----------
// Parameter am Spiel (g.ump): preload, noConsent, privacyButton, localData, permissionsFor, policyAccess

const umpDeviceExtra = () => `
<p>The Google advertising components ({ref:ads}) and Google's consent tool ({ref:consent}) may also store information on your device, for example your consent choices and technical data needed to show ads.</p>
<p>You can delete all of this by clearing the app's storage in Android's settings or by uninstalling the game. This does not delete data that Google has already received.</p>`;

const umpAdsCommon = (g) => `
<p>The ads are provided by Google AdMob (Google Mobile Ads SDK), integrated with the Godot AdMob plugin by Poing Studios. When the game starts and advertising is allowed (see {ref:consent}), the SDK is initialized and ${g.ump.preload} This means the game communicates with Google even if you never see an ad.</p>
<p>To deliver ads, measure them and prevent fraud, Google may process information such as your IP address, approximate location derived from it, device and app information, the Android advertising ID, ad interactions (for example whether an ad was shown, clicked or completed) and diagnostic data. Whether ads are personalized depends on your consent choices ({ref:consent}) and the rules that apply in your region. Without consent, Google may still show non-personalized or limited ads, which also involve some processing, for example of the IP address.</p>
<p>Development and test versions of the game, and devices registered by the developer as test devices, receive Google's test ads instead of real ads. Test ads also involve communication with Google.</p>
${links([
  ["https://policies.google.com/technologies/partner-sites", "How Google uses information from apps that use its services"],
  ["https://developers.google.com/admob/android/privacy/play-data-disclosure", "Google Mobile Ads SDK data disclosure"],
  ["https://policies.google.com/privacy", "Google Privacy Policy"],
])}`;

const umpConsent = (g) => `
<p>When the game starts, it uses Google's User Messaging Platform (UMP) to check whether your consent is required, for example in the European Economic Area, the United Kingdom and Switzerland. If it is, Google's consent form is shown, where you can accept, reject or adjust the use of your data for advertising.</p>
<p>The advertising SDK is only started after you have answered the form, or if no consent is required in your region. If the form cannot be shown or is not answered, ${g.ump.noConsent} If you reject personalized advertising, Google may still show non-personalized or limited ads, based on your choices.</p>
<p>You can change or withdraw your choice at any time using ${g.ump.privacyButton}, which opens Google's privacy options again. Clearing the app's storage also resets your choice, and the form is shown again on the next start. Withdrawing consent does not affect processing that happened before.</p>
<p>You can also reset or delete your Android advertising ID in your device settings (Settings → Google → Ads, or Settings → Privacy → Ads, depending on your device).</p>`;

const umpGoogle = () => `
<p>For AdMob, Google acts as an independent controller of the data it receives. For users in Europe, this is Google Ireland Limited; other Google companies, including Google LLC in the USA, may also be involved. Google may therefore process data outside the European Union. Google describes the safeguards it uses for such transfers, including standard contractual clauses and the EU-U.S. Data Privacy Framework, in the documents linked below.</p>
<p>How long Google keeps data is decided by Google according to its own retention rules. Uninstalling the game does not delete data that Google has already received; requests about that data may need to be sent to Google.</p>
${links([
  ["https://business.safety.google/adscontrollerterms/", "Google Ads Controller-Controller Data Protection Terms"],
  ["https://business.safety.google/adsdatatransfers/", "Google Ads data transfers"],
  ["https://policies.google.com/technologies/retention", "How Google retains data"],
])}`;

const umpPermissions = (g) => `
<p>${g.name} requests internet access and network-state access to load ${g.ump.permissionsFor}. The Google advertising components add the advertising-ID permission and a few technical permissions (for example to keep a download running). The game does not access your location, contacts, camera, microphone, photos or files.</p>`;

const umpLegal = (g) => `
<p>Where your consent is required, storing and reading information on your device for advertising and personalized advertising are based on your consent (Art. 6(1)(a) GDPR and § 25(1) TDDDG). Saving ${g.ump.localData} on your device is necessary to provide the game you are using (Art. 6(1)(b) GDPR and § 25(2) TDDDG). Showing non-personalized ads to finance a free game and handling support requests are based on our legitimate interests (Art. 6(1)(f) GDPR).</p>`;

const umpRights = (g) => `
<p>Players, parents and guardians can contact ${mail} about the game and data processing. Because the game does not identify you and keeps only ${g.ump.localData} on your device, we usually cannot link any Google advertising data to you; such requests may need to go to Google.</p>
${rightsTail()}`;

const umpChanges = (g) => `
<p>This policy applies to test versions and published versions of ${g.name}. It is available at <a href="${g.url}">${g.url}</a>, in the Google Play store listing and ${g.ump.policyAccess}. If the way ${g.name} handles data changes, we will update this page and the date at the top.</p>`;

module.exports = {
  MAIL, mail, links,
  who, support, rightsTail, website,
  umpDeviceExtra, umpAdsCommon, umpConsent, umpGoogle, umpPermissions, umpLegal, umpRights, umpChanges,
};
