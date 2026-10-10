"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ArrowRight } from "lucide-react";
import { TheGroupLogo } from "@/components/brand/TheGroupLogo";
import { BrandCollection } from "@/components/hero/BrandCollection";
import { LuxuryButton } from "@/components/ui/LuxuryButton";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { COPY } from "@/lib/constants/brands";
import {
  EASE,
  getGsap,
  isCompactViewport,
  prefersReducedMotion,
} from "@/lib/animations/gsap";

export function HeroSection() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const { gsap, ScrollTrigger } = getGsap();

      if (prefersReducedMotion()) {
        gsap.set("[data-reveal], [data-house]", {
          opacity: 1,
          y: 0,
          clearProps: "transform",
        });
        return;
      }

      const compact = isCompactViewport();
      const intro = gsap.timeline({ defaults: { ease: EASE.cinematic } });

      intro
        .fromTo(
          "[data-reveal='eyebrow']",
          { opacity: 0, y: compact ? 10 : 14 },
          { opacity: 1, y: 0, duration: compact ? 0.5 : 0.7 },
          compact ? 0.08 : 0.2,
        )
        .fromTo(
          "[data-reveal='mark']",
          { opacity: 0, y: compact ? 16 : 22 },
          { opacity: 1, y: 0, duration: compact ? 0.7 : 1 },
          compact ? 0.18 : 0.4,
        )
        .fromTo(
          "[data-reveal='title']",
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: compact ? 0.55 : 0.8 },
          compact ? 0.32 : 0.75,
        )
        .fromTo(
          "[data-reveal='copy']",
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: compact ? 0.5 : 0.75 },
          compact ? 0.44 : 0.95,
        )
        .fromTo(
          "[data-reveal='cta']",
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: compact ? 0.5 : 0.7 },
          compact ? 0.54 : 1.1,
        );

      gsap.fromTo(
        "[data-reveal='label']",
        { opacity: 0, y: 12 },
        {
          opacity: 1,
          y: 0,
          duration: compact ? 0.5 : 0.6,
          ease: EASE.cinematic,
          scrollTrigger: {
            trigger: "[data-reveal='label']",
            start: compact ? "top 92%" : "top 88%",
            once: true,
          },
        },
      );

      gsap.fromTo(
        "[data-house]",
        { opacity: 0, y: 18 },
        {
          opacity: 1,
          y: 0,
          duration: compact ? 0.5 : 0.65,
          stagger: compact ? 0.1 : 0.08,
          ease: EASE.cinematic,
          scrollTrigger: {
            trigger: "#our-brands",
            start: compact ? "top 90%" : "top 80%",
            once: true,
          },
        },
      );

      if (!compact) {
        ScrollTrigger.create({
          trigger: root.current,
          start: "top top",
          end: "bottom top",
          scrub: 0.6,
          onUpdate: (self) => {
            const p = self.progress;
            gsap.set("[data-reveal='mark']", { y: p * -28 });
            gsap.set("[data-reveal='title']", { y: p * -16 });
          },
        });
      }
    },
    { scope: root },
  );

  return (
    <section
      ref={root}
      id="home"
      className="relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-ivory pt-[88px] sm:pt-[108px] lg:pt-[118px]"
    >
      <div className="page-x page-max relative flex flex-1 flex-col">
        <div className="flex flex-1 flex-col items-center justify-center px-0 py-8 text-center sm:px-2 sm:py-14">
          <div data-reveal="eyebrow" className="flex justify-center">
            <SectionLabel line="both">The House of Brands</SectionLabel>
          </div>

          <div
            data-reveal="mark"
            className="mt-7 w-full max-w-[min(78vw,20rem)] sm:mt-12 sm:max-w-[min(86vw,34rem)]"
          >
            <TheGroupLogo priority className="h-auto w-full" />
          </div>

          <h1
            data-reveal="title"
            className="mt-7 max-w-[16ch] font-sans text-[clamp(1.45rem,1.05rem+2vw,2.55rem)] font-light leading-snug tracking-[-0.03em] text-ink sm:mt-12 sm:max-w-[18ch]"
          >
            Beyond a single identity<span className="text-gold">.</span>
          </h1>

          <p
            data-reveal="copy"
            className="mt-5 max-w-[36ch] px-1 font-sans text-[14px] font-light leading-7 text-ink/60 sm:mt-6 sm:max-w-[42ch] sm:text-[16px] sm:leading-8"
          >
            {COPY.heroSupport}
          </p>

          <div
            data-reveal="cta"
            className="mt-7 flex w-full max-w-[22rem] flex-col items-stretch gap-3 sm:mt-9 sm:max-w-none sm:flex-row sm:items-center sm:justify-center sm:gap-4"
          >
            <LuxuryButton href="#our-brands" variant="outline">
              Explore Our Brands
            </LuxuryButton>
            <a
              href="https://www.clicksloyalty.com/card/258"
              className="group relative inline-flex items-center justify-center gap-3 overflow-hidden border border-gold bg-gold px-4 py-3 font-sans text-[10px] font-medium uppercase tracking-[0.18em] text-black transition-[color,border-color,background-color] duration-500 ease-out hover:bg-transparent hover:text-gold focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold sm:px-7 sm:py-3.5 sm:text-[11px] sm:tracking-[0.28em]"
            >
              <span className="relative z-10">Add Your Loyalty Card</span>
              <ArrowRight className="relative z-10 h-3.5 w-3.5 stroke-[1.25] transition-transform duration-500 group-hover:translate-x-1" />
            </a>
          </div>
        </div>

        <div className="border-t border-gold-muted pb-14 pt-8 lg:pb-20 lg:pt-12">
          <BrandCollection />
        </div>
      </div>
    </section>
  );
}
