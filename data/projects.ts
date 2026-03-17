export type ProjectScreenshot = {
  src: string;
  alt: string;
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
  liveUrl?: string;
  githubUrl?: string;
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
    title: "TAK8 Mobility Platform",
    slug: "tak8-mobility-platform",
    category: "Mobility",
    year: 2026,
    shortDescription:
      "A full car-rental ecosystem with customer booking, fleet operations, and analytics.",
    fullDescription:
      "TAK8 is a multi-surface mobility product covering marketing website, booking app, and operations dashboard for the internal team.",
    projectType: "Web + Dashboard + Mobile Companion",
    clientType: "Client",
    role: "Product strategy, UI engineering, backend architecture, and release management.",
    image: "/images/projects/tak8.svg",
    liveUrl: "https://tak8.example.com",
    githubUrl: "https://github.com",
    features: [
      "Vehicle listing and smart availability management",
      "Dynamic booking flow with pricing logic",
      "Driver and fleet management dashboard",
      "Live booking analytics and utilization reporting",
    ],
    challenge:
      "The client was handling bookings manually with spreadsheets and had no reliable way to monitor fleet performance in real time.",
    solution:
      "EziLab delivered one connected platform with customer booking automation, admin workflows, and centralized analytics dashboards.",
    result:
      "Booking processing time dropped by 58%, while fleet utilization improved by 34% within the first two months.",
    techStack: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Tailwind CSS",
      "Framer Motion",
    ],
    screenshots: [
      { src: "/images/projects/tak8.svg", alt: "TAK8 booking flow screen" },
      { src: "/images/projects/tak8.svg", alt: "TAK8 fleet dashboard view" },
      { src: "/images/projects/tak8.svg", alt: "TAK8 analytics overview" },
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
    liveUrl: "https://unifreelance.example.com",
    githubUrl: "https://github.com",
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
    title: "Aalatesbeeh Commerce",
    slug: "aalatesbeeh-commerce",
    category: "E-commerce",
    year: 2025,
    shortDescription:
      "A premium e-commerce website with product management, cart, and order tracking.",
    fullDescription:
      "Aalatesbeeh Commerce is a conversion-driven storefront with optimized product pages and a streamlined operational dashboard.",
    projectType: "Storefront + Admin",
    clientType: "Client",
    role: "Brand-aware UI design, storefront engineering, and admin dashboard delivery.",
    image: "/images/projects/aalatesbeeh.svg",
    liveUrl: "https://aalatesbeeh.example.com",
    features: [
      "Category and product catalog management",
      "Optimized cart and checkout journey",
      "Order lifecycle and status updates",
      "Admin controls for inventory and promotions",
    ],
    challenge:
      "The business needed a professional digital store but had slow manual order handling and no central inventory view.",
    solution:
      "EziLab built a complete commerce workflow with storefront UX improvements and a role-based management dashboard.",
    result:
      "Online orders increased by 67% and average checkout completion improved from 48% to 71%.",
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
        src: "/images/projects/aalatesbeeh.svg",
        alt: "Aalatesbeeh product listing page",
      },
      {
        src: "/images/projects/aalatesbeeh.svg",
        alt: "Aalatesbeeh checkout and cart UI",
      },
      {
        src: "/images/projects/aalatesbeeh.svg",
        alt: "Aalatesbeeh admin inventory controls",
      },
    ],
    featured: true,
    status: "Completed",
  },
  {
    title: "RetailPulse Analytics",
    slug: "retailpulse-analytics",
    category: "Dashboard",
    year: 2026,
    shortDescription:
      "A retail intelligence dashboard for sales trends, inventory risk, and demand forecasting.",
    fullDescription:
      "RetailPulse combines sales data, inventory metrics, and predictive insights into a decision-ready dashboard for managers.",
    projectType: "Data Dashboard",
    clientType: "Client",
    role: "Dashboard UX, data visualization system, and API integration pipeline.",
    image: "/images/projects/retailpulse.svg",
    liveUrl: "https://retailpulse.example.com",
    githubUrl: "https://github.com",
    features: [
      "Interactive KPI widgets and custom date filters",
      "Store-level and product-level segmentation",
      "Low-stock alerts and forecasting panels",
      "CSV export and scheduled summary reports",
    ],
    challenge:
      "Leadership teams were making inventory decisions using delayed reports and disconnected spreadsheets.",
    solution:
      "We integrated live data streams and designed a modular analytics workspace with actionable KPI cards and alerts.",
    result:
      "Stockout incidents reduced by 29% and weekly reporting effort was cut by 11 hours.",
    techStack: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Chart.js",
      "Tailwind CSS",
    ],
    screenshots: [
      {
        src: "/images/projects/retailpulse.svg",
        alt: "RetailPulse KPI and trend charts",
      },
      {
        src: "/images/projects/retailpulse.svg",
        alt: "RetailPulse inventory risk heatmap",
      },
      {
        src: "/images/projects/retailpulse.svg",
        alt: "RetailPulse demand forecast module",
      },
    ],
    featured: true,
    status: "Completed",
  },
  {
    title: "CareBridge Portal",
    slug: "carebridge-portal",
    category: "Healthcare",
    year: 2025,
    shortDescription:
      "A patient communication and appointment portal with secure doctor workflows.",
    fullDescription:
      "CareBridge is a secure healthcare portal for appointments, medical summaries, and doctor-patient communication.",
    projectType: "Patient Portal",
    clientType: "Client",
    role: "Architecture planning, compliant UX patterns, and secure API implementation.",
    image: "/images/projects/carebridge.svg",
    liveUrl: "https://carebridge.example.com",
    features: [
      "Doctor scheduling and appointment slots",
      "Patient dashboard with records and summaries",
      "Secure communication channels",
      "Role-based access and audit trail controls",
    ],
    challenge:
      "The clinic operated with fragmented tools, causing long wait times and poor visibility for both patients and staff.",
    solution:
      "EziLab delivered a consolidated portal with secure access, appointment orchestration, and communication workflows.",
    result:
      "Appointment no-show rates dropped by 22% and staff coordination improved significantly in under one quarter.",
    techStack: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Tailwind CSS",
      "JWT Auth",
    ],
    screenshots: [
      {
        src: "/images/projects/carebridge.svg",
        alt: "CareBridge appointment calendar",
      },
      {
        src: "/images/projects/carebridge.svg",
        alt: "CareBridge patient dashboard",
      },
      {
        src: "/images/projects/carebridge.svg",
        alt: "CareBridge secure communication view",
      },
    ],
    featured: true,
    status: "Completed",
  },
  {
    title: "CivicFlow Permits",
    slug: "civicflow-permits",
    category: "GovTech",
    year: 2026,
    shortDescription:
      "A permit submission and review platform for municipality services and citizen requests.",
    fullDescription:
      "CivicFlow modernizes permit submissions with transparent workflows for citizens, reviewers, and municipal teams.",
    projectType: "Web Platform + Dashboard",
    clientType: "Client",
    role: "Product planning, service design, and end-to-end engineering delivery.",
    image: "/images/projects/civicflow.svg",
    liveUrl: "https://civicflow.example.com",
    githubUrl: "https://github.com",
    features: [
      "Online permit submission with document upload",
      "Status timeline and email notifications",
      "Reviewer dashboard with approval queues",
      "Operational reporting for municipal offices",
    ],
    challenge:
      "Permit processing relied on paper forms and manual approvals, leading to long response times and low transparency.",
    solution:
      "EziLab created a digital workflow engine that tracks every request, automates notifications, and centralizes review actions.",
    result:
      "Average permit turnaround time improved by 46% and citizen support calls declined notably.",
    techStack: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Tailwind CSS",
      "AWS S3",
    ],
    screenshots: [
      {
        src: "/images/projects/civicflow.svg",
        alt: "CivicFlow submission form",
      },
      {
        src: "/images/projects/civicflow.svg",
        alt: "CivicFlow request timeline",
      },
      {
        src: "/images/projects/civicflow.svg",
        alt: "CivicFlow reviewer dashboard",
      },
    ],
    featured: true,
    status: "Completed",
  },
  {
    title: "ClassOrbit LMS",
    slug: "classorbit-lms",
    category: "Education",
    year: 2025,
    shortDescription:
      "A learning management system with course progress, quizzes, and instructor analytics.",
    fullDescription:
      "ClassOrbit supports institutions with modular course publishing, student progress tracking, and performance reporting.",
    projectType: "Web Platform",
    clientType: "Client",
    role: "Frontend system design, API integration, and analytics dashboard implementation.",
    image: "/images/projects/classorbit.svg",
    liveUrl: "https://classorbit.example.com",
    features: [
      "Course modules with progress persistence",
      "Timed quizzes and assessment controls",
      "Instructor analytics and learner cohorts",
      "Announcements and notifications",
    ],
    challenge:
      "The organization had no unified digital learning environment and relied on disjointed communication tools.",
    solution:
      "We designed one platform for course delivery, assessment, and reporting with role-specific interfaces.",
    result:
      "Course completion rates improved by 31% after launch with stronger engagement tracking.",
    techStack: ["React", "TypeScript", "Firebase", "Tailwind CSS", "Cloud Functions"],
    screenshots: [
      {
        src: "/images/projects/classorbit.svg",
        alt: "ClassOrbit learner dashboard",
      },
      {
        src: "/images/projects/classorbit.svg",
        alt: "ClassOrbit quiz interface",
      },
      {
        src: "/images/projects/classorbit.svg",
        alt: "ClassOrbit instructor analytics",
      },
    ],
    featured: false,
    status: "Completed",
  },
  {
    title: "NovaEstate CRM",
    slug: "novaestate-crm",
    category: "Real Estate",
    year: 2026,
    shortDescription:
      "A CRM for brokers with lead funnels, follow-ups, and performance insights.",
    fullDescription:
      "NovaEstate CRM helps sales teams manage leads, nurture communication, and track performance from one dashboard.",
    projectType: "Dashboard Application",
    clientType: "Client",
    role: "Platform UX strategy, CRM workflow design, and backend integration.",
    image: "/images/projects/novaestate.svg",
    liveUrl: "https://novaestate.example.com",
    features: [
      "Lead capture and lifecycle pipeline",
      "Agent-level activity and conversion metrics",
      "Automated reminders and follow-up tracking",
      "Property assignment and notes history",
    ],
    challenge:
      "Agents were losing qualified leads due to missed follow-ups and inconsistent records across channels.",
    solution:
      "EziLab built a structured CRM pipeline with reminders, activity visibility, and manager-level insight dashboards.",
    result:
      "Lead response speed improved by 52% and deal conversion increased by 24% during pilot rollout.",
    techStack: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Tailwind CSS",
      "Redis",
    ],
    screenshots: [
      {
        src: "/images/projects/novaestate.svg",
        alt: "NovaEstate lead pipeline screen",
      },
      {
        src: "/images/projects/novaestate.svg",
        alt: "NovaEstate agent performance dashboard",
      },
      {
        src: "/images/projects/novaestate.svg",
        alt: "NovaEstate activity timeline",
      },
    ],
    featured: false,
    status: "Ongoing",
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
