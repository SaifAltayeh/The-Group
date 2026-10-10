import { cn } from "@/lib/cn";

type AnimatedTextProps = {
  children: React.ReactNode;
  className?: string;
};

export function AnimatedText({ children, className }: AnimatedTextProps) {
  return (
    <span className={cn("block overflow-hidden", className)}>
      <span
        data-line
        className="block will-change-transform"
        style={{ transform: "translateY(110%)" }}
      >
        {children}
      </span>
    </span>
  );
}
