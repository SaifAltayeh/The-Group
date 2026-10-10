import { cn } from "@/lib/cn";

type SectionLabelProps = {
  children: string;
  className?: string;
  line?: "before" | "after" | "both" | "none";
};

export function SectionLabel({
  children,
  className,
  line = "after",
}: SectionLabelProps) {
  return (
    <div
      className={cn(
        "flex max-w-full items-center gap-3 text-gold sm:gap-5",
        className,
      )}
    >
      {(line === "before" || line === "both") && (
        <span className="h-px w-6 shrink-0 bg-gold/70 sm:w-14" aria-hidden />
      )}
      <p className="min-w-0 font-sans text-[9px] font-medium uppercase leading-5 tracking-[0.2em] sm:text-[11px] sm:tracking-[0.42em]">
        {children}
      </p>
      {(line === "after" || line === "both") && (
        <span
          className={
            line === "both"
              ? "h-px w-6 shrink-0 bg-gold/70 sm:w-14"
              : "h-px max-w-16 flex-1 bg-gold/70 sm:max-w-40"
          }
          aria-hidden
        />
      )}
    </div>
  );
}
