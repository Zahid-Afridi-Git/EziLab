export type Service = {
  slug: string;
  title: string;
  summary: string;
  forWho: string;
  value: string;
  deliverables: string[];
};

export const services: Service[] = [
  {
    slug: "web-development",
    title: "Web Development",
    summary:
      "Fast, SEO-ready websites and platforms built for real business growth.",
    forWho: "Startups, service businesses, and product teams.",
    value:
      "Improves acquisition, credibility, and conversion with modern architecture.",
    deliverables: [
      "Marketing websites",
      "Product web apps",
      "Performance optimization",
      "Technical SEO setup",
    ],
  },
  {
    slug: "mobile-app-development",
    title: "Mobile App Development",
    summary:
      "Cross-platform mobile experiences that feel native and scale with your roadmap.",
    forWho: "Organizations launching iOS and Android products quickly.",
    value:
      "Reduces development overhead while maintaining high UX and release speed.",
    deliverables: [
      "React Native apps",
      "Authentication and profiles",
      "Realtime features",
      "App store release support",
    ],
  },
  {
    slug: "dashboard-admin-panels",
    title: "Dashboard & Admin Panels",
    summary:
      "Operational dashboards and control panels for internal teams and admins.",
    forWho: "Operations teams, agencies, and data-driven organizations.",
    value:
      "Turns scattered workflows into one visible, manageable source of truth.",
    deliverables: [
      "Role-based access control",
      "Workflow automations",
      "Reporting and analytics",
      "Audit and activity logs",
    ],
  },
  {
    slug: "ecommerce-solutions",
    title: "E-commerce Solutions",
    summary:
      "Conversion-focused commerce experiences with secure checkout and catalog control.",
    forWho: "Brands and retailers selling digital or physical products.",
    value:
      "Increases average order value and improves retention through better UX.",
    deliverables: [
      "Storefront and PDP design",
      "Cart and checkout flows",
      "Inventory integrations",
      "Promotions and discount systems",
    ],
  },
  {
    slug: "branding-ui-design",
    title: "Branding & UI Design",
    summary:
      "Brand systems and interface design that match business goals and user behavior.",
    forWho: "Teams needing a consistent identity across products and channels.",
    value:
      "Builds trust quickly and keeps product experiences consistent over time.",
    deliverables: [
      "Visual identity direction",
      "UI design systems",
      "Interactive prototypes",
      "Design handoff documentation",
    ],
  },
  {
    slug: "maintenance-support",
    title: "Maintenance & Support",
    summary:
      "Continuous support for updates, monitoring, and quality improvements.",
    forWho: "Companies with active products that need long-term technical reliability.",
    value:
      "Protects uptime, performance, and customer trust after launch.",
    deliverables: [
      "Bug fixing and patching",
      "Feature enhancements",
      "Security and dependency updates",
      "Performance monitoring",
    ],
  },
];
