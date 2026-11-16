// Ein Eintrag pro Spiel. Jeder Abschnitt ist entweder ein gemeinsamer Baustein (B.xyz)
// oder spielspezifischer Text. Neues Spiel: Eintrag kopieren, anpassen, build.js laufen lassen.

const B = require("./blocks");

// ======================= Penguin to the Moon =======================
// Werbung: Limited Ads fuer alle (kein Einwilligungsformular) + Google Play Games.
const penguin = {
  slug: "penguin",
  name: "Penguin to the Moon",
  file: "privacy.html", // Studio-Hauptseite, URL steht im Play Store -> nicht verschieben
  url: "https://kcodestudio.github.io/privacy.html",
  updated: "16 November 2026",
  title: "Penguin to the Moon Privacy Policy · K-Code Studio",
  description: "Privacy policy for Penguin to the Moon, an Android game by K-Code Studio.",
  icon: "penguin.png",
  eyebrow: "PENGUIN TO THE MOON",
  intro: "How Penguin to the Moon handles your data.",
  uses: "Optional rewarded video with Google Limited Ads for every player · optional online leaderboards via Google Play Games",
  covered: "Penguin to the Moon",
  sections: [
    { id: "section-1", title: "Who is responsible", html: B.who },
    { id: "section-2", title: "Scope and audience", html: (g, all) => `
<p>This privacy policy covers this website and Penguin to the Moon, an English-language Android game intended for teenagers aged 13 and older and adults. The game is not directed at children under 13. This statement describes the intended audience; the game does not verify players&#x27; ages.</p>
<p>The main game can be played without signing in. Optional Google Play Games sign-in is required to view online leaderboards and submit scores. {Ref:section-10} explains this feature. The game has no chat or purchases with real money. Points, equipment and skins are virtual game progress.</p>
<p>A future game is covered by this policy only after it is identified here and any different data practices are described. Website hosting and support are explained separately from in-game processing.</p>
<p>Other K-Code Studio games are not covered by this policy. They have their own privacy policies because their advertising and consent setup is different: ${all
      .filter((o) => o.slug !== g.slug)
      .map((o) => `<a href="${o.file}">${o.name} Privacy Policy</a>`)
      .join(", ")}.</p>` },
    { id: "section-3", title: "Data stored on your device", html: `
<p>The game stores scores, reached heights, points, rewards, owned and selected equipment and skins, and audio settings in private app storage. Local recovery copies may also be stored there. Android cloud backup of this game is disabled. K-Code Studio does not operate a server that receives this local save file.</p>
<p>The online leaderboard feature also caches information in private app storage, including player identifiers, display names, leaderboard entries, scores and ranks. Cached results help the game display previously loaded information.</p>
<p>Local data can be removed by clearing the app&#x27;s storage in Android settings or uninstalling the app. This does not delete scores or other data already stored by Google, or support emails you have sent.</p>` },
    { id: "section-4", title: "Google advertising and Limited Ads", html: `
<p>The app includes Google Mobile Ads through the Poing Studios Godot plugin. It offers an optional rewarded video for revival after dying, when an ad is available. There are no banner ads or automatically displayed full-screen ads in the game.</p>
<p>Depending on the app version, advertising configuration and Google&#x27;s test-device settings, the game may display test ads or regular ads. Testing may use Google&#x27;s demo ad units or the publisher&#x27;s own ad units configured for testing; regular ads use the publisher&#x27;s own ad units. Both test and regular ad requests use the Limited Ads configuration described below. Test ads can also involve communication with Google and processing of data.</p>
<p>Beginning with version 89, the game is configured to request Google&#x27;s Limited Ads treatment for every player, regardless of country. If the game cannot apply or verify its Limited Ads restriction, it does not load or show a video. Limited Ads disable ad personalization and features requiring a local identifier; they do not mean that no data is processed. Google still uses information such as IP addresses to deliver ads, and advertising technology and creatives may be cached on the device.</p>
<p>The advertising adapter starts when the game opens. If its technical safeguards pass, it initializes Google Mobile Ads and preloads an ad. Communication with Google can therefore begin before the player chooses to watch a video. Declining a rewarded video does not stop initialization or preloading. The Limited Ads configuration does not request a User Messaging Platform consent form or consent-status update. It does not record or imply a user&#x27;s advertising consent.</p>
<p>The game does not ask for a birthday or age group. Advertising requests retain conservative child-directed treatment and a maximum requested ad content rating of G for every user. These are advertising protections for an unknown age; they do not change the intended audience of ages 13 and older. The app does not request Android advertising-ID, unused AdServices or location permissions.</p>
<p>The account uses programmatic Limited Ads. Google states that this mode uses cookies and local storage only for invalid-traffic detection and protection against fraud and abuse. These controls do not eliminate all processing. Depending on the SDK and serving behavior, Google may also process approximate location inferred from an IP address, app and ad interactions, performance and diagnostic information, and permitted device-related information.</p>
<p>The integration uses Google Mobile Ads without mediation. Google describes SDK traffic as encrypted in transit. The game does not pass its Play Games player identifiers or local save file to the advertising adapter. K-Code Studio does not operate its own advertising or player-data server. An unavailable ad does not prevent normal local play.</p>
<p>Earlier test builds used non-personalized demo-ad requests with conservative child-directed treatment. Their messaging request was marked as under the age of consent, without displaying an adult consent form. Those earlier builds did not yet enforce the separate Limited Ads signal. Updating to version 89 applies the new restriction.</p>
${B.links([
  ["https://support.google.com/admob/answer/10105530?hl=en"],
  ["https://developers.google.com/admob/android/privacy/play-data-disclosure"],
  ["https://policies.google.com/privacy"],
  ["https://policies.google.com/technologies/partner-sites"],
])}` },
    { id: "section-5", title: "Google recipients, retention and transfers", html: `
<p>The advertising and Play Games features communicate with Google. Google processes information under the terms and privacy notices applicable to those services. Google lists ordinary AdMob as a controller service. Its Controller Terms describe the parties as independent controllers and identify Google Ireland Limited as Google&#x27;s end controller for European Controller Personal Data. Google&#x27;s affiliated companies, including Google LLC, may also be involved in the processing described in Google&#x27;s privacy information.</p>
<p>Google determines retention according to the data type, processing purpose, security needs and legal requirements. Uninstalling the game does not automatically erase data already received by Google. The 90-day support-email period in {ref:section-6} does not apply to Google&#x27;s service records or online scores. Play Games deletion options are described in {ref:section-10}.</p>
<p>Google describes international processing and applicable transfer safeguards, including adequacy decisions, the Data Privacy Framework and standard contractual clauses, in the information linked below. This is not a statement that all data remains in Germany or the European Union.</p>
${B.links([
  ["https://business.safety.google/adscontrollerterms/"],
  ["https://business.safety.google/adsservices/"],
  ["https://business.safety.google/adsdatatransfers/"],
  ["https://policies.google.com/technologies/retention"],
])}` },
    { id: "section-6", title: "Contacting support", html: B.support },
    { id: "section-7", title: "Your privacy choices and rights", html: () => `
<p>Players, parents and guardians can contact ${B.mail} about the game and data processing. You can play the main game without signing in and decline optional rewarded videos. These choices do not necessarily stop all Google SDK initialization or service communication.</p>
<p>You can remove local data through Android&#x27;s app-storage settings. For Google Play Games data, see {ref:section-10}. We cannot identify an individual Google advertising SDK record from a local save alone; requests concerning Google&#x27;s records may need to be directed to Google.</p>
${B.rightsTail()}` },
    { id: "section-8", title: "This website", html: B.website },
    { id: "section-9", title: "Updates and access", html: `
<p>This policy describes data practices for test versions and publicly released versions of Penguin to the Moon. It is available at <a href="https://kcodestudio.github.io/privacy.html">https://kcodestudio.github.io/privacy.html</a> and through the game&#x27;s privacy link.</p>
<p>Switching from test ads to regular ads alone does not change the Limited Ads restrictions or the types of processing described in this policy. If we change how data is processed, introduce a different advertising mode or add another game, we will update the policy and provide any information or choices required for that change. The date at the top identifies the latest policy update.</p>
<p>Limited Ads do not by themselves establish consent. Selecting a rewarded video is not treated as blanket advertising consent or parental authorization.</p>` },
    { id: "section-10", title: "Google Play Games and leaderboards", html: `
<p>The game integrates Google Play Games Services for optional online leaderboards. It does not create a separate K-Code Studio player account. The main game does not require sign-in. Viewing online leaderboards and submitting online scores require authentication through Google Play Games. Depending on your Google Play Games settings, authentication may occur automatically.</p>
<p>The game uses the authenticated player&#x27;s game-specific player identifier and display name. It submits reached heights and game scores to Google&#x27;s leaderboards and retrieves leaderboard entries, display names, scores and ranks for display in the game. The game&#x27;s own sign-in integration does not request your email address or Google password. Authentication is handled through Google&#x27;s services.</p>
<p>Leaderboard information is processed by Google to operate the online ranking feature. Your display name and scores may be visible to other players, depending on Google&#x27;s profile visibility settings and service rules. Avoid using a real name or other personal information as a public player name.</p>
<p>Google states that Play Games Services also collects service analytics and diagnostic information. Its services may process account, device and connection information as described in Google&#x27;s privacy information. Google describes Play Games Services data as encrypted in transit using HTTPS.</p>
<p>Some retrieved leaderboard information is cached on your device as described in {ref:section-3}. Clearing local app storage does not delete the corresponding online data held by Google.</p>
<p>You can manage your Play Games profile visibility and sign-in settings through Google Play Games. Google provides options to delete Play Games data for an individual game or delete your Play Games profile. Account eligibility and the availability of features can depend on age, country and parental supervision. The game does not provide a way to bypass Google&#x27;s account restrictions.</p>
${B.links([
  ["https://developer.android.com/games/pgs/data-collection", "Play Games Services data disclosures"],
  ["https://support.google.com/android/answer/12461859", "How Google Play services for Games handles data"],
  ["https://support.google.com/googleplay/answer/9130646", "Delete your Play Games profile and data"],
  ["https://policies.google.com/privacy", "Google Privacy Policy"],
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
