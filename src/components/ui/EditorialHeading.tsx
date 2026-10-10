import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type EditorialHeadingProps = {
  lines: ReactNode[];
  as?: "h1" | "h2";
  className?: string;
  size?: "hero" | "section";
};

export function EditorialHeading({
  lines,
  as: Tag = "h1",
  className,
  size = "hero",
}: EditorialHeadingProps) {
  return (
    <Tag
      className={cn(
        "font-sans font-light tracking-[-0.03em] text-ink",
        size === "hero" && "text-display leading-[0.88]",
        size === "section" && "text-headline leading-[0.9]",
        className,
      )}
    >
      {lines.map((line, index) => (
        <span key={index} className="block overflow-hidden">
          <span
            data-line
            className="block will-change-transform"
            style={{ transform: "translateY(110%)" }}
          >
            {line}
          </span>
        </span>
      ))}
    </Tag>
  );
}
