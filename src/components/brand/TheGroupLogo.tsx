import Image from "next/image";
import { GROUP } from "@/lib/constants/brands";
import { cn } from "@/lib/cn";

type LogoProps = {
  className?: string;
  priority?: boolean;
  height?: number;
};

export function TheGroupLogo({
  className,
  priority = false,
  height,
}: LogoProps) {
  return (
    <Image
      src={GROUP.src}
      alt={GROUP.alt}
      width={GROUP.width}
      height={GROUP.height}
      priority={priority}
      className={cn(
        height ? "object-contain" : "h-auto w-auto object-contain",
        className,
      )}
      style={
        height
          ? { height, width: "auto", maxWidth: "100%" }
          : undefined
      }
    />
  );
}

export function TheGroupSymbol({
  className,
  title,
}: {
  className?: string;
  title?: string;
}) {
  return (
    <Image
      src={GROUP.src}
      alt={title ?? ""}
      width={GROUP.width}
      height={GROUP.height}
      className={cn("object-contain", className)}
      aria-hidden={title ? undefined : true}
    />
  );
}
