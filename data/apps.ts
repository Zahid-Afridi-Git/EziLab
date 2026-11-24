export type AppProduct = {
  name: string;
  storeTitle: string;
  category: string;
  tagline: string;
  points: string[];
  storeHref: string;
  caseStudyHref?: string;
  showcase: string;
  /** Brand accent of the app itself, used for the glow behind its screens. */
  accent: string;
  glow: string;
};

/** The three apps EziLab has published on Google Play. */
export const apps: AppProduct[] = [
  {
    name: "Sukoon",
    storeTitle: "Sukoon: Quran Prayer Dua Qibla",
    category: "Islamic companion",
    tagline: "Quran, prayer times, duas, Hadith, tasbeeh and Qibla, in one calm space.",
    points: [
      "Prayer times and Azan reminders for your location",
      "A distraction-free Quran reader with translations",
      "Qibla compass, tasbeeh counter and Hijri calendar",
      "Optional cloud sync for bookmarks and progress",
    ],
    storeHref: "https://play.google.com/store/apps/details?id=com.ezilab.sukoon",
    caseStudyHref: "/projects/sukoon",
    showcase: "/images/showcase/sukoon-showcase.png",
    accent: "#D8A93B",
    glow: "rgba(216, 169, 59, 0.22)",
  },
  {
    name: "MoneyPilot",
    storeTitle: "MoneyPilot: Expense Tracker",
    category: "Personal finance",
    tagline: "Know what you can safely spend today, with budgets, goals and voice entry.",
    points: [
      "A daily spend number that plans to your next payday",
      "Add an expense by voice: “Spent 12 on lunch”",
      "An advisor that answers from your own numbers, on your phone",
      "Budgets that warn you at 80% and again when you go over",
    ],
    storeHref: "https://play.google.com/store/apps/details?id=com.moneypilot.tracker",
    showcase: "/images/showcase/moneypilot-showcase.png",
    accent: "#7C3AED",
    glow: "rgba(124, 58, 237, 0.26)",
  },
  {
    name: "ChainTalk",
    storeTitle: "ChainTalk: Offline Mesh Chat",
    category: "Offline messaging",
    tagline: "Chat with no internet and no signal — phones pass your message along, hop by hop.",
    points: [
      "Messages hop phone to phone over Bluetooth and Wi-Fi",
      "No SIM, no account and no phone number",
      "End-to-end encrypted with forward secrecy",
      "SOS alerts with a GPS position that work offline",
    ],
    storeHref: "https://play.google.com/store/apps/details?id=com.chaintalk.app",
    showcase: "/images/showcase/chaintalk-showcase.png",
    accent: "#8B5CF6",
    glow: "rgba(139, 92, 246, 0.24)",
  },
];
