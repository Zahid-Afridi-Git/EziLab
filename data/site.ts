export type NavItem = {
  label: string;
  href: string;
};

export const siteConfig = {
  name: "EziLab",
  shortName: "EziLab",
  tagline: "EziLab — We design, build, and launch websites and apps for businesses ready to grow online.",
  description:
    "EziLab (Elevate Zone of Innovation Lab) is a web and app development platform that designs, builds, and launches modern websites, mobile apps, dashboards, and digital products for startups and growing businesses.",
  email: "zahid@ezilab.io",
  whatsapp: "+92 334 966 2622",
  social: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    x: "https://x.com",
  },
} as const;

export const mainNav: NavItem[] = [
  { label: "Home", href: "/" },
  // { label: "Projects", href: "/projects" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const coreStats = [
  { label: "Projects Delivered", value: "28+" },
  { label: "Industries Supported", value: "9" },
  { label: "Avg. Delivery Window", value: "6-10 weeks" },
  { label: "Client Retention", value: "92%" },
];

export const processSteps = [
  {
    title: "Research",
    description:
      "We map business goals, users, and constraints before writing production code.",
  },
  {
    title: "Design",
    description:
      "Wireframes and visual systems are crafted for clarity, conversion, and usability.",
  },
  {
    title: "Development",
    description:
      "Frontend and backend are built with scalable architecture and measurable quality gates.",
  },
  {
    title: "Testing",
    description:
      "Each release passes QA, responsive checks, and performance validation across devices.",
  },
  {
    title: "Launch",
    description:
      "We ship with monitoring and handover documentation so teams can grow confidently.",
  },
];

export const techStack = [
  "React",
  "Next.js",
  "TypeScript",
  "React Native",
  "Tailwind CSS",
  "Node.js",
  "Firebase",
  "PostgreSQL",
  "MongoDB",
  "Framer Motion",
];
