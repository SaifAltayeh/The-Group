import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/cn";

type LuxuryButtonProps = {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  variant?: "fill" | "outline" | "ghost";
  arrow?: boolean;
  className?: string;
  type?: "button" | "submit";
  ariaLabel?: string;
};

export function LuxuryButton({
  href,
  onClick,
  children,
  variant = "outline",
  arrow = true,
  className,
  type = "button",
  ariaLabel,
}: LuxuryButtonProps) {
  const classes = cn(
    "group relative inline-flex items-center justify-center gap-3 overflow-hidden",
    "px-4 py-3 sm:px-7 sm:py-3.5",
    "font-sans text-[10px] font-medium uppercase tracking-[0.18em] sm:text-[11px] sm:tracking-[0.28em]",
    "transition-[color,border-color,background-color] duration-500 ease-out",
    "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold",
    variant === "fill" &&
      "border border-gold bg-gold text-black hover:bg-transparent hover:text-gold",
    variant === "outline" &&
      "border border-gold text-gold before:absolute before:inset-0 before:origin-left before:scale-x-0 before:bg-gold before:transition-transform before:duration-500 before:ease-out hover:text-black hover:before:scale-x-100",
    variant === "ghost" &&
      "border-0 px-0 py-2 text-ink/70 hover:text-gold",
    className,
  );

  const content = (
    <>
      <span className="relative z-10">{children}</span>
      {arrow ? (
        <ArrowRight
          className={cn(
            "relative z-10 h-3.5 w-3.5 stroke-[1.25] transition-transform duration-500",
            "group-hover:translate-x-1",
          )}
          aria-hidden
        />
      ) : null}
    </>
  );

  if (href) {
    return (
      <Link href={href} onClick={onClick} className={classes} aria-label={ariaLabel}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={classes}
      aria-label={ariaLabel}
    >
      {content}
    </button>
  );
}
