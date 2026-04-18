import { cn } from "@/lib/cn";

type BadgeProps = { label: string; className?: string };

export function Badge({ label, className }: BadgeProps) {
  return (
    <span className={cn("inline-flex items-center rounded-full bg-foreground/[0.06] px-3 py-1 text-xs font-medium text-muted", className)}>
      {label}
    </span>
  );
}
