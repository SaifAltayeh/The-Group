import Image from "next/image";
import type { HouseBrand } from "@/lib/constants/brands";
import { cn } from "@/lib/cn";

type HouseLogoProps = {
  brand: HouseBrand;
  className?: string;
  onDark?: boolean;
  height?: number;
};

export function HouseLogo({
  brand,
  className,
  onDark = false,
  height,
}: HouseLogoProps) {
  const markHeight = height ?? brand.maxHeight;

  return (
    <Image
      src={onDark ? brand.darkSrc : brand.src}
      alt={brand.alt}
      width={brand.width}
      height={brand.height}
      className={cn("bg-transparent object-contain", className)}
      style={{
        height: markHeight,
        width: "auto",
        maxWidth: "100%",
        backgroundColor: "transparent",
      }}
    />
  );
}
