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
        "flex items-center gap-5 text-gold",
        className,
      )}
    >
      {(line === "before" || line === "both") && (
        <span className="h-px w-10 bg-gold/70 sm:w-14" aria-hidden />
      )}
      <p className="font-sans text-[10px] font-medium uppercase tracking-[0.42em] sm:text-[11px]">
        {children}
      </p>
      {(line === "after" || line === "both") && (
        <span
          className={
            line === "both"
              ? "h-px w-10 bg-gold/70 sm:w-14"
              : "h-px max-w-28 flex-1 bg-gold/70 sm:max-w-40"
          }
          aria-hidden
        />
      )}
    </div>
  );
}
