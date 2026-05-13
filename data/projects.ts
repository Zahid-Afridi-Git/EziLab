export type ProjectScreenshot = {
  src: string;
  alt: string;
};

export type ProjectAction = {
  href: string;
  label: string;
  kind?: "download" | "external" | "github";
};

export type Project = {
  title: string;
  slug: string;
  category: string;
  year: number;
  shortDescription: string;
  fullDescription: string;
  projectType: string;
  clientType: "Client" | "Internal";
  role: string;
  image: string;
  primaryAction?: ProjectAction;
  secondaryAction?: ProjectAction;
  availabilityNote?: string;
  features: string[];
  challenge: string;
  solution: string;
  result: string;
  techStack: string[];
  screenshots: ProjectScreenshot[];
  featured: boolean;
  status: "Completed" | "Ongoing";
};

export const projects: Project[] = [
  {
    title: "TAK8 Car Rental",
    slug: "tak8-car-rental",
    category: "Mobility",
    year: 2026,
    shortDescription:
      "A car rental platform for Perth, Australia with online booking, fleet management, and customer portal.",
    fullDescription:
      "TAK8 is a full-service car rental platform built for tak8.com.au, offering seamless vehicle browsing, online booking, and fleet operations management for the Perth market.",
    projectType: "Web Platform + Admin Dashboard",
    clientType: "Client",
    role: "Product strategy, UI engineering, backend architecture, and release management.",
    image: "/images/projects/tak8/tak8-hero.png",
    primaryAction: {
      href: "https://tak8.com.au",
      label: "Visit Website",
      kind: "external",
    },
    features: [
      "Vehicle browsing with filters and availability checks",
      "Online booking flow with pricing and date selection",
      "Customer portal for managing reservations",
      "Fleet and booking management admin dashboard",
    ],
    challenge:
      "The client needed a professional online presence to compete in Perth's car rental market, replacing manual booking processes.",
    solution:
      "EziLab built a modern car rental platform with an intuitive booking experience, customer self-service portal, and admin tools for fleet operations.",
    result:
      "Online bookings increased significantly, reducing manual processing time and improving customer satisfaction.",
    techStack: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Tailwind CSS",
      "Framer Motion",
    ],
    screenshots: [
      { src: "/images/projects/tak8/tak8-hero.png", alt: "TAK8 homepage" },
      { src: "/images/projects/tak8/tak8-booking.png", alt: "TAK8 booking flow" },
    ],
    featured: true,
    status: "Completed",
  },
  {
    title: "StarRental",
    slug: "starrental",
    category: "Mobility",
    year: 2026,
    shortDescription:
      "An affordable car hire platform for Perth, Australia with vehicle browsing, pricing guides, and direct booking via call or message.",
    fullDescription:
      "StarRental is a modern car rental website built for starrental.com.au, serving the Perth market with a clean vehicle catalog, transparent pricing tiers, customer reviews, and a simple contact-based booking flow. The site covers sedans, SUVs, utes, and people movers for daily, weekly, and long-term hire.",
    projectType: "Web Platform",
    clientType: "Client",
    role: "Full-stack development, UI/UX design, SEO optimization, and deployment.",
    image: "/images/projects/StarRental/starrental website.png",
    primaryAction: {
      href: "https://starrental.com.au",
      label: "Visit Website",
      kind: "external",
    },
    features: [
      "Vehicle catalog with sedans, SUVs, utes, and people movers",
      "Transparent pricing tiers for daily, weekly, and long-term hire",
      "Google Reviews integration with 5.0 rating display",
      "SEO-optimized for Perth car rental searches",
      "Mobile-responsive design with call-to-action buttons",
      "FAQ section and simple 3-step booking process",
    ],
    challenge:
      "The client needed a professional online presence to attract Perth customers searching for affordable car hire, replacing reliance on word-of-mouth only.",
    solution:
      "EziLab built a fast, SEO-optimized car rental website with clear vehicle listings, transparent pricing, and direct contact options that make booking simple and trustworthy.",
    result:
      "The website now ranks for Perth car rental keywords, driving organic leads and establishing credibility with a 5.0 Google rating showcase.",
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
    ],
    screenshots: [
      {
        src: "/images/projects/StarRental/starrental website.png",
        alt: "StarRental homepage",
      },
    ],
    featured: true,
    status: "Completed",
  },
  {
    title: "Sukoon",
    slug: "sukoon",
    category: "Islamic App",
    year: 2026,
    shortDescription:
      "An Islamic mobile app designed around duas, adhkar, reflection, and calm daily faith routines.",
    fullDescription:
      "Sukoon is a mobile-first Islamic app created to help users stay connected to their faith through a calmer, more intentional daily experience. The product combines duas, adhkar, reminders, guided reflection, and habit support in a focused interface that avoids the clutter common in feature-heavy utility apps. Every part of the app is being shaped around trust, simplicity, and repeat daily use.",
    projectType: "Mobile App (Android-first MVP)",
    clientType: "Internal",
    role: "Product strategy, Islamic UX design, mobile app architecture, and end-to-end development.",
    image: "/images/projects/sukoon/hero-sectin.png",
    features: [
      "Daily duas and adhkar presented in a calm, readable interface",
      "Faith-based reminders that encourage regular Islamic practice",
      "Guided reflection flows designed for quiet, intentional use",
      "Habit and routine support for building consistency over time",
      "Mobile-first UX designed for low-friction daily engagement",
      "Launch path prepared for Android APK distribution and future store rollout",
    ],
    challenge:
      "The challenge was to design an Islamic app that felt spiritually grounded without becoming visually cluttered or difficult to use. Many existing apps are useful but fragmented, outdated, or overloaded with options, so Sukoon needed to deliver real faith-centered value inside a modern, peaceful experience that users would want to return to every day.",
    solution:
      "EziLab approached Sukoon as a faith-centered product experience rather than a feature dump. We focused on a calm visual system, lightweight navigation, and a structure built around the moments users revisit most: remembrance, reflection, routine, and spiritual encouragement. The app was also planned for staged distribution, with support for early Android APK delivery and a roadmap for future app-store publishing.",
    result:
      "Sukoon is currently in active MVP development with a strong Islamic product identity, a focused feature set, and a launch-ready case study presence on the website. The current outcome is a clear product direction, a brand-aligned mobile experience, and a scalable foundation for screenshots, APK distribution, and future app-store expansion.",
    techStack: ["React Native", "TypeScript", "Firebase", "Node.js", "Figma"],
    screenshots: [
      {
        src: "/images/projects/sukoon/sukoon-greeting page.png",
        alt: "Sukoon greeting page",
      },
      {
        src: "/images/projects/sukoon/dua-library.png",
        alt: "Sukoon dua library screen",
      },
      {
        src: "/images/projects/sukoon/habits-section.png",
        alt: "Sukoon habits and routine section",
      },
      {
        src: "/images/projects/sukoon/hero-sectin.png",
        alt: "Sukoon hero section",
      },
    ],
    featured: true,
    status: "Ongoing",
  },
  {
    title: "EziWalk E-Commerce",
    slug: "eziwalk-ecommerce",
    category: "E-commerce",
    year: 2025,
    shortDescription:
      "A modern e-commerce website with product catalog, cart, checkout, and order management.",
    fullDescription:
      "EziWalk is a full-featured e-commerce platform with an optimized storefront, seamless checkout experience, and a comprehensive admin dashboard for managing products and orders.",
    projectType: "Storefront + Admin",
    clientType: "Client",
    role: "Brand-aware UI design, storefront engineering, and admin dashboard delivery.",
    image: "/images/projects/eziwalk/eziwalk-hero.png",
    features: [
      "Product catalog with categories and search",
      "Shopping cart and streamlined checkout flow",
      "Order tracking and status updates",
      "Admin dashboard for inventory and order management",
    ],
    challenge:
      "The business needed a professional online store to reach more customers and move away from manual order processing.",
    solution:
      "EziLab built a complete e-commerce platform with a conversion-optimized storefront and a role-based admin dashboard.",
    result:
      "Online orders increased significantly and checkout completion rates improved after launch.",
    techStack: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "MongoDB",
      "Tailwind CSS",
      "Stripe",
    ],
    screenshots: [
      {
        src: "/images/projects/eziwalk/eziwalk-hero.png",
        alt: "EziWalk homepage",
      },
      {
        src: "/images/projects/eziwalk/nabar area.png",
        alt: "EziWalk navigation area",
      },
      {
        src: "/images/projects/eziwalk/News-area.png",
        alt: "EziWalk news section",
      },
    ],
    featured: true,
    status: "Completed",
  },
];

export const featuredProjects = projects.filter((project) => project.featured);

export const projectCategories = [
  "All",
  ...Array.from(new Set(projects.map((project) => project.category))),
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getAdjacentProjects(slug: string) {
  const index = projects.findIndex((project) => project.slug === slug);
  if (index < 0) {
    return { previous: undefined, next: undefined };
  }

  const previous = index === 0 ? projects[projects.length - 1] : projects[index - 1];
  const next = index === projects.length - 1 ? projects[0] : projects[index + 1];

  return { previous, next };
}
