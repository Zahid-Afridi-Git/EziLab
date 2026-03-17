import { cn } from "@/lib/cn";

type SectionHeadingProps = {
  label: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  label,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn(align === "center" && "text-center", className)}>
      <span className="inline-flex rounded-full border border-cyan-300/50 bg-cyan-300/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-cyan-200">
        {label}
      </span>
      <h2 className="mt-4 text-balance font-heading text-3xl font-semibold text-white sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 max-w-2xl text-pretty text-sm leading-relaxed text-slate-300 sm:text-base">
          {description}
        </p>
      ) : null}
    </div>
  );
}
