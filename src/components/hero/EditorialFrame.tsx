import Image from "next/image";
import { HERO_EDITORIAL } from "@/lib/constants/brands";

export function EditorialFrame() {
  return (
    <figure
      data-reveal="frame"
      className="editorial-frame relative isolate min-h-[54vh] overflow-hidden border border-gold-muted lg:h-full lg:min-h-[72vh]"
    >
      {HERO_EDITORIAL.src ? (
        <Image
          src={HERO_EDITORIAL.src}
          alt={HERO_EDITORIAL.alt}
          fill
          priority
          sizes="(min-width: 1024px) 38vw, 92vw"
          className="object-cover object-[center_20%]"
        />
      ) : (
        <div className="absolute inset-0" aria-hidden>
          <div className="absolute left-1/2 top-[18%] h-[58%] w-[42%] -translate-x-1/2 rounded-full bg-white/50 blur-3xl" />
          <div className="absolute inset-x-[18%] bottom-[10%] top-[28%] bg-gradient-to-b from-transparent via-gold/10 to-ink/5" />
        </div>
      )}
      <figcaption className="relative z-10 flex h-full min-h-[inherit] flex-col justify-between p-5 sm:p-6">
        <div className="flex items-start justify-between">
          <p className="font-sans text-[10px] uppercase tracking-[0.38em] text-gold">
            Campaign 01
          </p>
          <p className="font-sans text-[10px] uppercase tracking-[0.28em] text-ink/35">
            Portrait
          </p>
        </div>
        {HERO_EDITORIAL.src ? null : (
          <p
            className="pointer-events-none select-none font-display text-[clamp(6rem,18vw,10rem)] leading-none text-ink/[0.06]"
            aria-hidden
          >
            01
          </p>
        )}
        <div className="flex items-end justify-between gap-4">
          <p className="max-w-[18ch] font-sans text-[10px] uppercase leading-5 tracking-[0.22em] text-ink/40">
            {HERO_EDITORIAL.src
              ? "The House of Brands"
              : "Editorial photograph to be commissioned"}
          </p>
          <span className="hidden origin-bottom-right -rotate-90 font-sans text-[9px] uppercase tracking-[0.4em] text-gold/70 sm:block">
            The Group
          </span>
        </div>
      </figcaption>
    </figure>
  );
}
