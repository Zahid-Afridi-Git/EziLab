"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/shared/container";
import { FadeIn } from "@/components/shared/fade-in";
import { SectionHeading } from "@/components/shared/section-heading";

const stack = ["React", "Next.js", "TypeScript", "React Native", "Tailwind CSS", "Node.js", "PostgreSQL", "MongoDB", "Firebase", "Framer Motion"];

const codeLines = [
  { t: "// Built with our production stack", c: "comment" },
  { t: 'import { NextPage } from "next";', c: "import" },
  { t: 'import { motion } from "framer-motion";', c: "import" },
  { t: 'import { db } from "@/lib/database";', c: "import" },
  { t: "", c: "blank" },
  { t: "export default async function App() {", c: "export" },
  { t: "  const data = await db.query(...);", c: "const" },
  { t: "  return <Dashboard data={data} />;", c: "return" },
  { t: "}", c: "close" },
];

export function TechStackSection() {
  return (
    <section className="py-14 sm:py-20 lg:py-28">
      <Container>
        <FadeIn>
          <SectionHeading label="Built With" title="Modern tech stack, production-ready code." description="We use industry-leading tools so your product is fast, secure, and easy to maintain." align="center" className="mx-auto max-w-2xl" />
        </FadeIn>

        <div className="mt-8 grid items-start gap-6 sm:mt-12 sm:gap-8 lg:grid-cols-2">
          <FadeIn delay={0.1}>
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 lg:justify-start">
              {stack.map((tech, i) => (
                <motion.span key={tech} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.4, delay: i * 0.04, ease: [0.25, 0.46, 0.45, 0.94] }} viewport={{ once: true }} className="card !rounded-full px-3.5 py-1.5 text-[13px] font-medium text-foreground sm:px-4 sm:py-2 sm:text-sm">
                  {tech}
                </motion.span>
              ))}
            </div>
            <div className="card mt-4 flex flex-wrap items-center justify-center gap-x-5 gap-y-2.5 px-4 py-3 sm:mt-6 sm:gap-x-8 sm:gap-y-3 sm:px-6 sm:py-4 lg:justify-start">
              {["Type-safe by default", "Component-driven", "API-first architecture", "CI/CD ready"].map((p) => (
                <span key={p} className="flex items-center gap-1.5 text-[11px] font-medium text-muted sm:gap-2 sm:text-xs">
                  <span className="h-1 w-1 rounded-full bg-sky-400 sm:h-1.5 sm:w-1.5" />{p}
                </span>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.2} scale>
            <div className="card card-lg overflow-hidden">
              <div className="flex items-center gap-1.5 border-b border-[var(--card-border)] px-3 py-2 sm:px-4 sm:py-2.5">
                <span className="h-2 w-2 rounded-full bg-[#ff5f57] sm:h-2.5 sm:w-2.5" />
                <span className="h-2 w-2 rounded-full bg-[#febc2e] sm:h-2.5 sm:w-2.5" />
                <span className="h-2 w-2 rounded-full bg-[#28c840] sm:h-2.5 sm:w-2.5" />
                <span className="ml-2 text-[10px] text-muted sm:ml-3 sm:text-[11px]">app/page.tsx</span>
              </div>
              <div className="overflow-x-auto p-3 font-mono text-[10px] leading-5 sm:p-4 sm:text-[13px] sm:leading-7">
                {codeLines.map((line, i) => (
                  <motion.div key={i} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.25, delay: i * 0.06 }} viewport={{ once: true }} className="whitespace-nowrap">
                    {line.c === "comment" ? <span className="text-[#636366]">{line.t}</span>
                    : line.c === "import" ? <><span className="text-[#bf5af2]">import</span><span className="text-[#98989d]">{line.t.slice(6)}</span></>
                    : line.c === "export" ? <><span className="text-[#bf5af2]">export default</span><span className="text-[#64d2ff]"> async function</span><span className="text-[#ffd60a]"> App</span><span className="text-[#98989d]">() {"{"}</span></>
                    : line.c === "const" ? <><span className="text-[#98989d]">  </span><span className="text-[#bf5af2]">const</span><span className="text-[#98989d]"> data = </span><span className="text-[#64d2ff]">await</span><span className="text-[#98989d]"> db.query(...);</span></>
                    : line.c === "return" ? <><span className="text-[#98989d]">  </span><span className="text-[#bf5af2]">return</span><span className="text-[#98989d]"> {"<"}</span><span className="text-[#64d2ff]">Dashboard</span><span className="text-[#98989d]"> data={"{data}"} /{">"}</span><span className="text-[#98989d]">;</span></>
                    : line.c === "close" ? <span className="text-[#98989d]">{"}"}</span>
                    : <span>&nbsp;</span>}
                  </motion.div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
