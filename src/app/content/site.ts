// Every brand / app fact lives here so names, IDs and emails are never duplicated.
// PLACEHOLDER values are marked — replace them when the owner sends real data
// (App Store ID → run the iTunes lookup and refresh `app`).

export const site = {
  brand: "Hisense · TV Remote Control",
  email: "tomislav@vikskendapa.store",
  year: new Date().getFullYear(),
  disclaimer: "TV remote for iPhone. Independent app, not affiliated with Hisense.",
};

export const app = {
  id: "6797527517",
  url: "https://apps.apple.com/app/id6797527517",
  // App isn't live yet (iTunes lookup returns 0 results, 2026-10-06).
  // minIOS confirmed by the owner; refresh the rest from
  // https://itunes.apple.com/lookup?id=6797527517 after release.
  minIOS: "18.0",
  category: "Utilities",
};

export const nav = [
  { to: "/app", label: "App" },
  { to: "/about", label: "About" },
  { to: "/support", label: "Support" },
  { to: "/contact", label: "Contact" },
];

// Everything below follows the app's own screens: Controller, T‑Pad, Cast
// and the "Connect to Your TV" list. Nothing here is claimed beyond them.
export const ticker = ["Power", "D‑pad & OK", "Volume & mute", "Channels", "Play & pause", "T‑Pad", "Cast photos", "Cast videos", "Streaming shortcuts"];

export const steps = [
  { n: "01", title: "Get the app", text: "Download it from the App Store." },
  { n: "02", title: "Join the same Wi‑Fi", text: "Put your iPhone and TV on one network." },
  { n: "03", title: "Tap to connect", text: "Pick your TV from the list and start controlling." },
];

export const stats = [
  { n: "3", label: "ways to control", text: "Controller, T‑Pad and Cast — one tab each." },
  { n: "1", label: "Wi‑Fi network", text: "Phone and TV on the same network — that's the whole setup." },
  { n: `${app.minIOS.split(".")[0]}+`, label: "iOS version", text: `Runs on iPhone with iOS ${app.minIOS.split(".")[0]} or later.` },
];

export const scenarios = [
  { img: "/images/card-1.jpg", title: "Movie night", text: "Remote lost in the cushions? Your phone is already in your hand." },
  { img: "/images/card-2.jpg", title: "Photos on the big screen", text: "Cast pictures and videos from your iPhone to the TV for everyone to see." },
  { img: "/images/card-3.jpg", title: "Hands busy", text: "Pause the recipe video from the phone on the counter." },
];

export const appFeatures = [
  { tag: "01 · Controller", title: "The full remote", text: "Power, D‑pad with OK, Back, Home and Exit, volume, mute, channels, play / pause and rewind — plus a settings key." },
  { tag: "02 · T‑Pad", title: "Swipe to navigate", text: "A touchpad for moving through menus, with media, volume and channel keys kept right below it." },
  { tag: "03 · Cast", title: "Photos, videos and files", text: "Send pictures from your library, your videos or media stored in Files to the TV." },
  { tag: "04 · Shortcuts", title: "Streaming in one tap", text: "Jump straight to Netflix, Sling or YouTube from the top of the remote." },
];

export const specs: [string, string][] = [
  ["Works with", "Hisense smart TVs"],
  ["Connection", "Wi‑Fi — iPhone and TV on the same network"],
  ["Compatibility", `iPhone · iOS ${app.minIOS} or later`],
  ["Tabs", "Controller · T‑Pad · Cast"],
  ["Category", app.category],
];

export const faq = [
  { q: "How do I connect to my TV?", a: "Turn on the TV and make sure it and your iPhone use the same Wi‑Fi network. Open the app — your TV appears under Available to Connect. Tap it to connect; if the TV shows a prompt, confirm it." },
  { q: "My TV doesn't show up in the list", a: "Check that the TV is on and that both devices are on the same Wi‑Fi (not a guest network), then tap the refresh button on the Connect to Your TV screen." },
  { q: "Can I control more than one TV?", a: "Yes. Every Hisense TV found on your network is listed — switch between them from the Select TV menu at the top of the remote." },
  { q: "How do I use the touchpad?", a: "Open the T‑Pad tab and swipe on the pad to move through menus. Media, Back, Home, Exit, volume and channel keys stay right below it." },
  { q: "How do I cast photos or videos?", a: "Open the Cast tab and choose Image/Photo, Video or Files. Your iPhone and TV need to be on the same Wi‑Fi network." },
  { q: "Does the TV need to be on?", a: "Yes — the app talks to the TV over Wi‑Fi, so the TV has to be powered on and connected to the network." },
];
