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
  // PLACEHOLDER specs — app not live yet (lookup returns 0 results, 2026-10-06);
  // refresh from https://itunes.apple.com/lookup?id=6797527517 after release
  minIOS: "16.0",
  size: "42 MB",
  languages: "English",
  category: "Utilities",
  age: "4+",
  price: "Free · In‑App Purchases",
};

export const nav = [
  { to: "/app", label: "App" },
  { to: "/about", label: "About" },
  { to: "/support", label: "Support" },
  { to: "/contact", label: "Contact" },
];

export const ticker = ["D‑pad & OK", "Volume & mute", "Touchpad", "Keyboard input", "App launcher", "Auto‑discovery"];

// DRAFT copy — check against the app
export const steps = [
  { n: "01", title: "Get the app", text: "Free download from the App Store." },
  { n: "02", title: "Join the same Wi‑Fi", text: "Your iPhone and TV on one network." },
  { n: "03", title: "Tap your TV", text: "Pick it from the list and you're in control." },
];

export const stats = [
  { n: "0", label: "accounts to create", text: "Open the app and start pressing buttons. No sign‑up, no email." },
  { n: "1", label: "Wi‑Fi network", text: "Phone and TV on the same network — that's the whole setup." },
  { n: `${app.minIOS.split(".")[0]}+`, label: "iOS version", text: "Runs on any iPhone from the last several years." },
];

export const scenarios = [
  { img: "/images/card-1.jpg", title: "Movie night", text: "Remote lost in the cushions? Your phone is already in your hand." },
  { img: "/images/card-2.jpg", title: "Logging into apps", text: "Type long passwords on a real keyboard, not letter by letter." },
  { img: "/images/card-3.jpg", title: "Hands busy", text: "Pause the recipe video from the phone on the counter." },
];

export const appFeatures = [
  { tag: "01 · Buttons", title: "Full remote layout", text: "Power, D‑pad, OK, Back, Home, Exit, volume, mute and channels — big targets, easy to hit in the dark." },
  { tag: "02 · Touchpad", title: "Swipe to navigate", text: "Move through menus with swipes and select with a tap." },
  { tag: "03 · Keyboard", title: "Type on iPhone", text: "Text goes straight into search fields and sign‑in forms on the TV." },
  { tag: "04 · Cast", title: "Photos and videos on the big screen", text: "Send images, videos and files from your iPhone to the TV." },
];

// DRAFT answers — check against the app
export const faq = [
  { q: "How do I connect to my TV?", a: "Turn on the TV and make sure it and your iPhone are on the same Wi‑Fi network. Open the app, pick your TV from the list and confirm the prompt on the TV screen if one appears." },
  { q: "My TV doesn't show up in the list", a: "Check that both devices are on the same Wi‑Fi (not a guest network), then tap refresh. Restarting the TV's network connection usually helps." },
  { q: "Can I control more than one TV?", a: "Yes. Every TV found on your network appears in the list — switch between them from the Select TV menu." },
  { q: "How do I cancel my subscription?", a: "Subscriptions are managed by Apple: open Settings → your name → Subscriptions on your iPhone and choose the app." },
  { q: "How do I restore a purchase?", a: "Reinstalling the app or switching iPhones doesn't remove a purchase. Sign in with the same Apple ID and use the restore option in the app's settings." },
  { q: "Does the TV need to be on?", a: "Yes — the app talks to the TV over Wi‑Fi, so the TV has to be powered on and connected to the network." },
];
