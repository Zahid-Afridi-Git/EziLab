export type NavItem = {
  label: string;
  href: string;
};

export const siteConfig = {
  name: "EziLab",
  shortName: "EziLab",
  tagline: "Turning ideas into scalable digital products",
  description:
    "EziLab is a digital innovation organization that builds modern websites, applications, dashboards, and future-ready solutions for growing teams.",
  location: "Lahore, Pakistan",
  email: "hello@ezilab.dev",
  whatsapp: "+92 300 1234567",
  social: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    x: "https://x.com",
  },
} as const;

export const mainNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
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
