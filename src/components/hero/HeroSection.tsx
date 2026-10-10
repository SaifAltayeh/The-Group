"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { TheGroupLogo } from "@/components/brand/TheGroupLogo";
import { BrandCollection } from "@/components/hero/BrandCollection";
import { LuxuryButton } from "@/components/ui/LuxuryButton";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { COPY } from "@/lib/constants/brands";
import { EASE, getGsap, prefersReducedMotion } from "@/lib/animations/gsap";

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

      const intro = gsap.timeline({ defaults: { ease: EASE.cinematic } });

      intro
        .fromTo(
          "[data-reveal='eyebrow']",
          { opacity: 0, y: 14 },
          { opacity: 1, y: 0, duration: 0.7 },
          0.2,
        )
        .fromTo(
          "[data-reveal='mark']",
          { opacity: 0, y: 22 },
          { opacity: 1, y: 0, duration: 1 },
          0.4,
        )
        .fromTo(
          "[data-reveal='title']",
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.8 },
          0.75,
        )
        .fromTo(
          "[data-reveal='copy']",
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.75 },
          0.95,
        )
        .fromTo(
          "[data-reveal='cta']",
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.7 },
          1.1,
        )
        .fromTo(
          "[data-reveal='label']",
          { opacity: 0, y: 12 },
          { opacity: 1, y: 0, duration: 0.6 },
          1.25,
        )
        .fromTo(
          "[data-house]",
          { opacity: 0, y: 18 },
          { opacity: 1, y: 0, duration: 0.65, stagger: 0.08 },
          1.35,
        );

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
    },
    { scope: root },
  );

  return (
    <section
      ref={root}
      id="home"
      className="relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-ivory pt-[108px] lg:pt-[118px]"
    >
      <div className="page-x page-max relative flex flex-1 flex-col">
        <div className="flex flex-1 flex-col items-center justify-center px-2 py-10 text-center sm:py-14">
          <div data-reveal="eyebrow" className="flex justify-center">
            <SectionLabel line="both">The House of Brands</SectionLabel>
          </div>

          <div
            data-reveal="mark"
            className="mt-10 w-full max-w-[min(86vw,34rem)] sm:mt-12"
          >
            <TheGroupLogo priority className="h-auto w-full" />
          </div>

          <h1
            data-reveal="title"
            className="mt-10 max-w-[18ch] font-sans text-[clamp(1.65rem,1.1rem+2vw,2.55rem)] font-light leading-snug tracking-[-0.03em] text-ink sm:mt-12"
          >
            Beyond a single identity<span className="text-gold">.</span>
          </h1>

          <p
            data-reveal="copy"
            className="mt-6 max-w-[42ch] font-sans text-[15px] font-light leading-7 text-ink/60 sm:text-[16px] sm:leading-8"
          >
            {COPY.heroSupport}
          </p>

          <div data-reveal="cta" className="mt-9">
            <LuxuryButton href="#our-brands" variant="outline">
              Explore Our Brands
            </LuxuryButton>
          </div>
        </div>

        <div className="border-t border-gold-muted pb-16 pt-10 lg:pb-20 lg:pt-12">
          <BrandCollection />
        </div>
      </div>
    </section>
  );
}
