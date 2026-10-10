"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { EditorialHeading } from "@/components/ui/EditorialHeading";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { MembershipCard } from "@/components/membership/MembershipCard";
import { WalletActions } from "@/components/membership/WalletActions";
import { COPY } from "@/lib/constants/brands";
import { EASE, getGsap, prefersInstantMotion } from "@/lib/animations/gsap";

export function MembershipSection() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const { gsap } = getGsap();
      if (prefersInstantMotion()) {
        gsap.set("[data-line], [data-reveal], [data-card]", {
          opacity: 1,
          y: 0,
          yPercent: 0,
          rotate: 0,
          clearProps: "transform",
        });
        return;
      }

      const tl = gsap.timeline({
        defaults: { ease: EASE.cinematic },
        scrollTrigger: {
          trigger: root.current,
          start: "top 72%",
          once: true,
        },
      });

      tl.fromTo(
        "[data-reveal='eyebrow']",
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.7 },
      )
        .fromTo(
          "[data-line]",
          { yPercent: 110 },
          { yPercent: 0, duration: 1.05, stagger: 0.18 },
          0.12,
        )
        .fromTo(
          "[data-reveal='copy']",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8 },
          0.7,
        )
        .fromTo(
          "[data-reveal='wallets']",
          { opacity: 0, y: 18 },
          { opacity: 1, y: 0, duration: 0.7 },
          0.95,
        )
        .fromTo(
          "[data-card]",
          { opacity: 0, y: 36, rotate: 4 },
          { opacity: 1, y: 0, rotate: 0, duration: 1.05 },
          0.35,
        );
    },
    { scope: root },
  );

  return (
    <section
      ref={root}
      id="membership"
      className="relative bg-ivory scroll-mt-24"
    >
      <div className="page-x page-max border-t border-gold-muted py-16 sm:py-[7.5rem] lg:py-[9rem]">
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,0.55fr)_minmax(0,0.45fr)] lg:items-center lg:gap-x-[6vw] lg:gap-y-0">
          <div className="min-w-0">
            <div data-reveal="eyebrow">
              <SectionLabel>{COPY.membershipEyebrow}</SectionLabel>
            </div>
            <div className="mt-6 sm:mt-8">
              <EditorialHeading
                as="h2"
                size="section"
                lines={[
                  "Belong to",
                  "Something",
                  <>
                    Exceptional<span className="text-gold">.</span>
                  </>,
                ]}
              />
            </div>
            <div data-reveal="copy" className="mt-6 max-w-[42ch] space-y-4 sm:mt-8 sm:space-y-5">
              <p className="font-sans text-[15px] font-light leading-7 text-ink/72 sm:text-[16px] sm:leading-8">
                {COPY.membershipLead}
              </p>
              <p className="font-sans text-[13px] leading-6 text-ink/50 sm:text-[14px] sm:leading-7">
                {COPY.membershipBody}
              </p>
            </div>
          </div>

          <div className="flex w-full justify-center lg:row-span-2 lg:justify-end">
            <MembershipCard />
          </div>

          <div className="flex justify-center lg:justify-start">
            <WalletActions />
          </div>
        </div>
      </div>
    </section>
  );
}
