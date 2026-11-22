// Ein Eintrag pro Spiel. Jeder Abschnitt ist entweder ein gemeinsamer Baustein (B.xyz)
// oder spielspezifischer Text. Neues Spiel: Eintrag kopieren, anpassen, build.js laufen lassen.

const B = require("./blocks");

// ======================= Penguin to the Moon =======================
// Werbung: Limited Ads fuer alle. Ab v108 keine Play-Games-Anmeldung/Bestenlisten.
const penguin = {
  slug: "penguin",
  name: "Penguin to the Moon",
  file: "privacy.html", // Studio-Hauptseite, URL steht im Play Store -> nicht verschieben
  url: "https://kcodestudio.github.io/privacy.html",
  updated: "22 November 2026",
  title: "Penguin to the Moon Privacy Policy · K-Code Studio",
  description: "Privacy policy for Penguin to the Moon, an Android game by K-Code Studio.",
  icon: "penguin.png",
  eyebrow: "PENGUIN TO THE MOON",
  intro: "How Penguin to the Moon handles your data.",
  uses: "Optional rewarded videos with Google Limited Ads for every player · local records and progress · Google Play update checks",
  covered: "Penguin to the Moon",
  sections: [
    { id: "section-1", title: "Who is responsible", html: B.who },
    { id: "section-2", title: "Scope and audience", html: (g, all) => `
<p>This privacy policy covers this website and Penguin to the Moon, an English-language Android game intended for teenagers aged 13 and older and adults. The game is not directed at children under 13. This statement describes the intended audience; the game does not verify players&#x27; ages.</p>
<p>Beginning with version 108 (0.48.16), the game has no player accounts, sign-in or online leaderboards. Scores and reached heights are kept as local records on your device and are not submitted to an online ranking service. Earlier versions used Google Play Games as described in {ref:section-10}. The game has no chat or purchases with real money. Points, equipment and skins are virtual game progress.</p>
<p>A future game is covered by this policy only after it is identified here and any different data practices are described. Website hosting and support are explained separately from in-game processing.</p>
<p>Other K-Code Studio games are not covered by this policy. They have their own privacy policies because their advertising and consent setup is different: ${all
      .filter((o) => o.slug !== g.slug)
      .map((o) => `<a href="${o.file}">${o.name} Privacy Policy</a>`)
      .join(", ")}.</p>` },
    { id: "section-3", title: "Data stored on your device", html: `
<p>The game stores scores, reached heights, points, rewards, game statistics, owned and selected equipment and skins, progress toward unlocking skins with rewarded videos, and audio settings in private app storage. Local recovery copies may also be stored there. Android cloud backup of this game is disabled. K-Code Studio does not operate a server that receives this local save file.</p>
<p>Earlier versions could cache Google Play Games player identifiers, display names, leaderboard entries, scores and ranks in private app storage. These old files may remain after an update, but version 108 no longer uses them to connect to Google Play Games or display rankings. They can be removed by clearing the app&#x27;s storage, which also removes your local game progress.</p>
<p>Local data can be removed by clearing the app&#x27;s storage in Android settings or uninstalling the app. This does not delete scores or other data already stored by Google, or support emails you have sent.</p>` },
    { id: "section-4", title: "Google advertising and Limited Ads", html: `
<p>The app includes Google Mobile Ads through the Poing Studios Godot plugin. When an ad is available, you can choose to watch a rewarded video for revival after dying or to make progress toward unlocking a skin. Skins can also be unlocked by reaching the required height in one flight. There are no banner ads or automatically displayed full-screen ads in the game.</p>
<p>Depending on the app version, advertising configuration and Google&#x27;s test-device settings, the game may display test ads or regular ads. Testing may use Google&#x27;s demo ad units or the publisher&#x27;s own ad units configured for testing; regular ads use the publisher&#x27;s own ad units. Both test and regular ad requests use the Limited Ads configuration described below. Test ads can also involve communication with Google and processing of data.</p>
<p>Beginning with version 89, the game is configured to request Google&#x27;s Limited Ads treatment for every player, regardless of country. If the game cannot apply or verify its Limited Ads restriction, it does not load or show a video. Limited Ads disable ad personalization and features requiring a local identifier; they do not mean that no data is processed. Google still uses information such as IP addresses to deliver ads, and advertising technology and creatives may be cached on the device.</p>
<p>The advertising adapter starts when the game opens. If its technical safeguards pass, it initializes Google Mobile Ads and preloads an ad. Communication with Google can therefore begin before the player chooses to watch a video. Declining a rewarded video does not stop initialization or preloading. The Limited Ads configuration does not request a User Messaging Platform consent form or consent-status update. It does not record or imply a user&#x27;s advertising consent.</p>
<p>The game does not ask for a birthday or age group. Advertising requests retain conservative child-directed treatment and a maximum requested ad content rating of G for every user. These are advertising protections for an unknown age; they do not change the intended audience of ages 13 and older. The app does not request Android advertising-ID, unused AdServices or location permissions.</p>
<p>The account uses programmatic Limited Ads. Google states that this mode uses cookies and local storage only for invalid-traffic detection and protection against fraud and abuse. These controls do not eliminate all processing. Depending on the SDK and serving behavior, Google may also process approximate location inferred from an IP address, app and ad interactions, performance and diagnostic information, and permitted device-related information.</p>
<p>The integration uses Google Mobile Ads without mediation. Google describes SDK traffic as encrypted in transit. The game does not pass its local save file, local records or former Play Games player identifiers to the advertising adapter. K-Code Studio does not operate its own advertising or player-data server. An unavailable ad does not prevent normal local play.</p>
<p>Earlier test builds used non-personalized demo-ad requests with conservative child-directed treatment. Their messaging request was marked as under the age of consent, without displaying an adult consent form. Those earlier builds did not yet enforce the separate Limited Ads signal. Updating to version 89 applies the new restriction.</p>
${B.links([
  ["https://support.google.com/admob/answer/10105530?hl=en"],
  ["https://developers.google.com/admob/android/privacy/play-data-disclosure"],
  ["https://policies.google.com/privacy"],
  ["https://policies.google.com/technologies/partner-sites"],
])}` },
    { id: "section-5", title: "Google recipients, retention and transfers", html: `
<p>The advertising and Google Play update features communicate with Google. Earlier versions also used Google Play Games, as described in {ref:section-10}. Google processes information under the terms and privacy notices applicable to those services. Google lists ordinary AdMob as a controller service. Its Controller Terms describe the parties as independent controllers and identify Google Ireland Limited as Google&#x27;s end controller for European Controller Personal Data. Google&#x27;s affiliated companies, including Google LLC, may also be involved in the processing described in Google&#x27;s privacy information.</p>
<p>Google determines retention according to the data type, processing purpose, security needs and legal requirements. Uninstalling the game or removing its leaderboard feature does not itself erase data previously received by Google. The 90-day support-email period in {ref:section-6} does not apply to Google&#x27;s service records or former online scores. Play Games deletion options for earlier versions are described in {ref:section-10}. Google&#x27;s update-library retention information is described in {ref:section-11}.</p>
<p>Google describes international processing and applicable transfer safeguards, including adequacy decisions, the Data Privacy Framework and standard contractual clauses, in the information linked below. This is not a statement that all data remains in Germany or the European Union.</p>
${B.links([
  ["https://business.safety.google/adscontrollerterms/"],
  ["https://business.safety.google/adsservices/"],
  ["https://business.safety.google/adsdatatransfers/"],
  ["https://policies.google.com/technologies/retention"],
])}` },
    { id: "section-6", title: "Contacting support", html: B.support },
    { id: "section-7", title: "Your privacy choices and rights", html: () => `
<p>Players, parents and guardians can contact ${B.mail} about the game and data processing. Version 108 does not require or offer player sign-in. You can decline optional rewarded videos; doing so does not stop advertising SDK initialization or preloading, or Google Play update checks.</p>
<p>You can remove local data through Android&#x27;s app-storage settings. For Google Play Games data from earlier versions, see {ref:section-10}. We cannot identify an individual Google advertising SDK record from a local save alone; requests concerning Google&#x27;s records may need to be directed to Google.</p>
${B.rightsTail()}` },
    { id: "section-8", title: "This website", html: B.website },
    { id: "section-9", title: "Updates and access", html: `
<p>This policy describes data practices for test versions and publicly released versions of Penguin to the Moon. It is available at <a href="https://kcodestudio.github.io/privacy.html">https://kcodestudio.github.io/privacy.html</a> and through the game&#x27;s privacy link.</p>
<p>Switching from test ads to regular ads alone does not change the Limited Ads restrictions or the types of processing described in this policy. If we change how data is processed, introduce a different advertising mode or add another game, we will update the policy and provide any information or choices required for that change. The date at the top identifies the latest policy update.</p>
<p>Limited Ads do not by themselves establish consent. Selecting a rewarded video is not treated as blanket advertising consent or parental authorization.</p>` },
    { id: "section-10", title: "Earlier versions: Google Play Games", html: `
<p>The Google Play Games integration, player sign-in and online leaderboards were removed in version 108 (0.48.16). That version no longer initializes the Play Games SDK, authenticates players, sends flight scores to Google Play Games or loads online rankings. Your local game records and progress remain separate from those former online features.</p>
<p>Earlier versions integrated Google Play Games Services for optional online leaderboards. Authentication could occur automatically according to the player&#x27;s Google Play Games settings. Those versions used a game-specific player identifier and display name, sent reached heights and game scores to Google&#x27;s leaderboards, and retrieved player names, entries, scores and ranks. Public visibility depended on Google&#x27;s profile settings and service rules. The game&#x27;s own sign-in integration did not request a Google password or email address.</p>
<p>Google states that Play Games Services also processes service analytics and diagnostic information, and may process account, device and connection information under Google&#x27;s privacy information. Google describes Play Games Services data as encrypted in transit using HTTPS. If you continue to use an earlier version, its former integration may still attempt to communicate with Google. Updating to version 108 removes that integration from the installed game.</p>
<p>Removing a feature or updating the game does not itself delete records that Google previously received. Google provides options to manage or delete Play Games data for an individual game or delete a Play Games profile. Old local cache files, if present, can be removed as described in {ref:section-3}. Google&#x27;s profile and data controls are linked below.</p>
${B.links([
  ["https://developer.android.com/games/pgs/data-collection", "Play Games Services data disclosures"],
  ["https://support.google.com/android/answer/12461859", "How Google Play services for Games handles data"],
  ["https://support.google.com/googleplay/answer/9130646", "Delete your Play Games profile and data"],
  ["https://policies.google.com/privacy", "Google Privacy Policy"],
])}` },
    { id: "section-11", title: "Google Play update checks", html: `
<p>The game uses Google Play&#x27;s in-app update library to check whether a newer version is available. These checks can run when the game opens, resumes or prepares a flight. If an update is required and available to your account, Google Play can display its update screen or the game can open its Play Store listing.</p>
<p>Google&#x27;s library disclosure lists device metadata, the application version, and the list of installed app modules and asset packs. This information is used to determine update availability and the expected download size. It is not a request for a list of all other apps on your device. The game&#x27;s update integration does not send flight scores, local records or its save file.</p>
<p>Google states that data handled by the in-app update library is encrypted, is not transferred to third parties, and is deleted after a fixed retention period. Google Play also runs its own processes under the Google Play Terms of Service. K-Code Studio does not receive a separate player database or report of individual update checks.</p>
${B.links([
  ["https://developer.android.com/guide/playcore/in-app-updates#data-safety", "In-app updates: data safety"],
  ["https://play.google.com/about/play-terms/", "Google Play Terms of Service"],
])}` },
  ],
};

// ======================= Floatstone =======================
// Werbung: Google-Einwilligungsformular (UMP), ein optionales Rewarded-Video.
const floatstone = {
  slug: "floatstone",
  name: "Floatstone",
  file: "floatstone/privacy.html",
  url: "https://kcodestudio.github.io/floatstone/privacy.html",
  updated: "16 November 2026",
  title: "Floatstone Privacy Policy · K-Code Studio",
  description: "Privacy policy for Floatstone, an Android game by K-Code Studio.",
  icon: "icon.svg",
  eyebrow: "FLOATSTONE",
  intro: "How Floatstone handles your data.",
  covered: "Floatstone (Android)",
  uses: "One optional rewarded video · Google consent form (UMP) where consent is required",
  ump: {
    preload: "one video is loaded in advance, so it is ready when you need it.",
    noConsent: "no ads are loaded and the game simply does not offer the “Continue” video.",
    privacyButton: "the “Privacy” option on the game's title screen",
    localData: "your best score",
    permissionsFor: "videos",
    policyAccess: "from the game's title screen",
  },
  sections: [
    { id: "who", title: "Who is responsible", html: B.who },
    { id: "overview", title: "The game at a glance", html: `
<p>Floatstone is a one-touch arcade game for Android: hold to fall as a stone, release to float as a feather, and fall as deep as you can. The game is in English and is intended for players aged 13 and older. It is not directed at children under 13 and does not ask for your age.</p>
<p>Floatstone has no user accounts, no sign-in, no online leaderboards, no chat, no in-app purchases and no analytics of its own. K-Code Studio does not run a server that receives data from the game. The only online feature is the optional rewarded video described in {ref:ads}. The game can be played completely without watching a video.</p>` },
    { id: "device", title: "Data stored on your device", html: () => `
<p>The game saves your best score in the app's private storage on your device. Nothing else is saved by the game itself. Android cloud backup is disabled for Floatstone, so this file is not copied to your Google account by the game.</p>
${B.umpDeviceExtra()}` },
    { id: "ads", title: "Rewarded video ads (Google AdMob)", html: (g) => `
<p>Floatstone is free and is financed by one optional rewarded video. When you lose a run for the first time, you can choose to watch a short video to continue that run. If you choose “No thanks”, a new run starts and no video is shown. There are no banner ads and no ads that appear on their own.</p>
${B.umpAdsCommon(g)}` },
    { id: "consent", title: "Consent and how to change it", html: B.umpConsent },
    { id: "google", title: "Google as a recipient", html: B.umpGoogle },
    { id: "permissions", title: "App permissions", html: B.umpPermissions },
    { id: "legal", title: "Legal bases", html: B.umpLegal },
    { id: "support", title: "Contacting support", html: B.support },
    { id: "rights", title: "Your rights", html: B.umpRights },
    { id: "website", title: "This website", html: B.website },
    { id: "changes", title: "Changes to this policy", html: B.umpChanges },
  ],
};

// ======================= Vinora =======================
// Werbung: Google-Einwilligungsformular (UMP), Interstitial + optionales Rewarded "Continue".
const vinora = {
  slug: "vinora",
  name: "Vinora",
  file: "vinora/privacy.html",
  url: "https://kcodestudio.github.io/vinora/privacy.html",
  updated: "16 November 2026",
  title: "Vinora Privacy Policy · K-Code Studio",
  description: "Privacy policy for Vinora, an Android game by K-Code Studio.",
  icon: "icon.png",
  eyebrow: "VINORA",
  intro: "How Vinora handles your data.",
  covered: "Vinora (Android)",
  uses: "Full-screen ads after every fifth crash and an optional rewarded video · Google consent form (UMP) where consent is required",
  ump: {
    preload: "one full-screen ad and one video are loaded in advance, so they are ready when needed.",
    noConsent: "no ads are loaded: no full-screen ads are shown and the “Continue” video is not offered.",
    privacyButton: "the “Privacy Settings” button in the game's settings (shown wherever Google requires this option)",
    localData: "your records, game statistics and settings",
    permissionsFor: "ads",
    policyAccess: "through the “Privacy Policy” button in the game's settings",
  },
  sections: [
    { id: "who", title: "Who is responsible", html: B.who },
    { id: "overview", title: "The game at a glance", html: `
<p>Vinora is a one-touch arcade game for Android: hold to swing, release to fly, and get as far as you can before the fog catches you. The game is in English and is intended for players aged 13 and older. It is not directed at children under 13 and does not ask for your age.</p>
<p>Vinora has no user accounts, no sign-in, no online leaderboards, no chat, no in-app purchases and no analytics of its own. K-Code Studio does not run a server that receives data from the game. The only online features are the ads described in {ref:ads}. The game can be played completely without watching an optional video.</p>` },
    { id: "device", title: "Data stored on your device", html: () => `
<p>The game saves your best distance, game statistics (number of attempts, total play time and total distance), story progress (for example whether the intro has been seen and how often the journey was completed) and your audio settings in the app's private storage on your device. Nothing else is saved by the game itself. Android cloud backup is disabled for Vinora, so this file is not copied to your Google account by the game.</p>
<p>The counter that spaces out full-screen ads is kept only while the app is running and is not saved.</p>
${B.umpDeviceExtra()}` },
    { id: "ads", title: "Ads (Google AdMob)", html: (g) => `
<p>Vinora is free and is financed by ads. There are two kinds:</p>
<p><strong>Full-screen ads (interstitials).</strong> After every fifth crash, a full-screen ad may be shown when you leave the result screen, for example by tapping “Try again” or returning to the menu. At least two minutes pass between two ads. No ad is ever shown during a run.</p>
<p><strong>Optional rewarded video (“Continue”).</strong> If a run ends after at least 500 m, you can choose to watch a short video to continue that run, once per run. If you do not choose it, no video is shown.</p>
<p>There are no banner ads.</p>
${B.umpAdsCommon(g)}` },
    { id: "consent", title: "Consent and how to change it", html: B.umpConsent },
    { id: "google", title: "Google as a recipient", html: B.umpGoogle },
    { id: "permissions", title: "App permissions", html: B.umpPermissions },
    { id: "legal", title: "Legal bases", html: B.umpLegal },
    { id: "support", title: "Contacting support", html: B.support },
    { id: "rights", title: "Your rights", html: B.umpRights },
    { id: "website", title: "This website", html: B.website },
    { id: "changes", title: "Changes to this policy", html: B.umpChanges },
  ],
};

module.exports = [penguin, floatstone, vinora];
