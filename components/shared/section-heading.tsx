import { cn } from "@/lib/cn";

type SectionHeadingProps = {
  label: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({ label, title, description, align = "left", className }: SectionHeadingProps) {
  return (
    <div className={cn(align === "center" && "text-center", className)}>
      <span className="inline-block text-sm font-semibold uppercase tracking-[0.08em] text-sky-400">
        {label}
      </span>
      <h2 className="mt-3 text-balance font-heading text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-[2.75rem]">
        {title}
      </h2>
      {description ? (
        <p className={cn("mt-4 text-pretty text-base leading-relaxed text-muted sm:text-lg", align === "center" && "mx-auto max-w-2xl")}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
