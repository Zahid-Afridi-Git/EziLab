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
    image: "/images/projects/tak8.svg",
    primaryAction: {
      href: "https://tak8.com.au",
      label: "Live Demo",
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
      { src: "/images/projects/tak8.svg", alt: "TAK8 vehicle browsing page" },
      { src: "/images/projects/tak8.svg", alt: "TAK8 booking flow" },
      { src: "/images/projects/tak8.svg", alt: "TAK8 admin dashboard" },
    ],
    featured: true,
    status: "Completed",
  },
  {
    title: "UniFreelance",
    slug: "unifreelance",
    category: "Education",
    year: 2025,
    shortDescription:
      "A freelancer marketplace for students with proposal workflows and profile verification.",
    fullDescription:
      "UniFreelance enables student freelancers to create portfolios, discover projects, and collaborate through a moderated ecosystem.",
    projectType: "Web Platform",
    clientType: "Client",
    role: "UX architecture, frontend implementation, and Firebase-based backend integration.",
    image: "/images/projects/unifreelance.svg",
    primaryAction: {
      href: "https://unifreelance.example.com",
      label: "Live Demo",
      kind: "external",
    },
    secondaryAction: {
      href: "https://github.com",
      label: "GitHub",
      kind: "github",
    },
    features: [
      "Student onboarding with profile verification",
      "Project posting and proposal management",
      "Messaging system for clients and freelancers",
      "Admin moderation and trust scoring",
    ],
    challenge:
      "Students struggled to present credibility, and clients lacked confidence in hiring entry-level talent.",
    solution:
      "We implemented verified portfolios, skill tags, and a transparent proposal pipeline with moderation controls.",
    result:
      "The platform reached 1,200 verified users and improved successful proposal acceptance by 41%.",
    techStack: [
      "React",
      "TypeScript",
      "Firebase",
      "Tailwind CSS",
      "Cloud Functions",
    ],
    screenshots: [
      {
        src: "/images/projects/unifreelance.svg",
        alt: "UniFreelance candidate profile screen",
      },
      {
        src: "/images/projects/unifreelance.svg",
        alt: "UniFreelance project proposal board",
      },
      {
        src: "/images/projects/unifreelance.svg",
        alt: "UniFreelance admin moderation panel",
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
    image: "/images/projects/sukoon.svg",
    availabilityNote:
      "This is a mobile app, not a web product. Add the Android APK path and store links here when the public release is ready.",
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
        src: "/images/projects/sukoon.svg",
        alt: "Sukoon onboarding designed for a calm first experience",
      },
      {
        src: "/images/projects/sukoon.svg",
        alt: "Sukoon daily duas and adhkar screen",
      },
      {
        src: "/images/projects/sukoon.svg",
        alt: "Sukoon faith reminders and habit support flow",
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
    image: "/images/projects/eziwalk.svg",
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
        src: "/images/projects/eziwalk.svg",
        alt: "EziWalk product listing page",
      },
      {
        src: "/images/projects/eziwalk.svg",
        alt: "EziWalk checkout and cart UI",
      },
      {
        src: "/images/projects/eziwalk.svg",
        alt: "EziWalk admin dashboard",
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
