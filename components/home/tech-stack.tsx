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
    <section className="py-20 sm:py-28">
      <Container>
        <FadeIn>
          <SectionHeading label="Built With" title="Modern tech stack, production-ready code." description="We use industry-leading tools so your product is fast, secure, and easy to maintain." align="center" className="mx-auto max-w-2xl" />
        </FadeIn>

        <div className="mt-12 grid items-start gap-8 lg:grid-cols-2">
          <FadeIn delay={0.1}>
            <div className="flex flex-wrap items-center justify-center gap-3 lg:justify-start">
              {stack.map((tech, i) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: i * 0.04, ease: [0.25, 0.46, 0.45, 0.94] }}
                  viewport={{ once: true }}
                  className="card !rounded-full px-4 py-2 text-sm font-medium text-foreground"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
            <div className="card mt-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 px-6 py-4 lg:justify-start">
              {["Type-safe by default", "Component-driven", "API-first architecture", "CI/CD ready"].map((p) => (
                <span key={p} className="flex items-center gap-2 text-xs font-medium text-muted">
                  <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />{p}
                </span>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.2} scale>
            <div className="card card-lg overflow-hidden">
              <div className="flex items-center gap-1.5 border-b border-[var(--card-border)] px-4 py-2.5">
                <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                <span className="ml-3 text-[11px] text-muted">app/page.tsx</span>
              </div>
              <div className="p-4 font-mono text-xs leading-6 sm:text-[13px] sm:leading-7">
                {codeLines.map((line, i) => (
                  <motion.div key={i} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.25, delay: i * 0.06 }} viewport={{ once: true }}>
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
