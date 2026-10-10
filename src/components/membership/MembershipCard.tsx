"use client";

import { useEffect, useRef, useState } from "react";
import QRCode from "qrcode";
import { TheGroupLogo } from "@/components/brand/TheGroupLogo";
import { HouseLogo } from "@/components/brand/HouseLogo";
import { HOUSES, MEMBERSHIP_CARD } from "@/lib/constants/brands";
import { prefersReducedMotion } from "@/lib/animations/gsap";
import type { MembershipCardPayload } from "@/server/membership";

const FALLBACK_CARD: MembershipCardPayload = {
  id: MEMBERSHIP_CARD.id,
  nameLabel: MEMBERSHIP_CARD.nameLabel,
  memberName: MEMBERSHIP_CARD.memberName,
  pointsLabel: MEMBERSHIP_CARD.pointsLabel,
  points: MEMBERSHIP_CARD.points,
  enrollUrl: MEMBERSHIP_CARD.enrollUrl,
  qrUrl: MEMBERSHIP_CARD.demoPath,
};

const CARD_HOUSES = [
  { id: "delfino" as const, height: 22 },
  { id: "moustache-women" as const, height: 26 },
  { id: "ipo" as const, height: 30 },
  { id: "moustache" as const, height: 18 },
];

export function MembershipCard() {
  const cardRef = useRef<HTMLDivElement>(null);
  const [card, setCard] = useState<MembershipCardPayload>(FALLBACK_CARD);
  const [qr, setQr] = useState<string>("");

  useEffect(() => {
    let active = true;
    fetch("/api/membership/card")
      .then((response) => (response.ok ? response.json() : null))
      .then((payload: MembershipCardPayload | null) => {
        if (active && payload) setCard(payload);
      })
      .catch(() => {});
    return () => {
      active = false;
    };
  }, []);

  useEffect(() => {
    const url = card.qrUrl.startsWith("http")
      ? card.qrUrl
      : `${window.location.origin}${card.qrUrl}`;
    let active = true;
    QRCode.toDataURL(url, {
      margin: 1,
      width: 280,
      color: { dark: "#ffffff", light: "#000000" },
    }).then((value) => {
      if (active) setQr(value);
    });
    return () => {
      active = false;
    };
  }, [card.qrUrl]);

  const resetTilt = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = "rotateX(0deg) rotateY(0deg)";
  };

  const onMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const finePointer = window.matchMedia(
      "(hover: hover) and (pointer: fine)",
    ).matches;
    if (!finePointer || prefersReducedMotion() || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    cardRef.current.style.transform = `rotateX(${y * -6}deg) rotateY(${x * 8}deg)`;
  };

  return (
    <div className="perspective-[1400px]">
      <article
        ref={cardRef}
        data-card
        onMouseMove={onMove}
        onMouseLeave={resetTilt}
        className="relative grid aspect-[2/3] w-full max-w-[420px] grid-rows-[auto_1fr_auto_auto] overflow-hidden rounded-[22px] bg-black px-8 pb-9 pt-8 text-white shadow-[0_28px_70px_rgba(0,0,0,0.35)] transition-[transform,box-shadow] duration-300 ease-out will-change-transform sm:px-10 sm:pb-10 sm:pt-9"
        style={{ transformStyle: "preserve-3d" }}
      >
        <header className="flex items-start justify-between gap-4">
          <TheGroupLogo height={50} />
          <p className="pt-1 font-sans text-[12px] font-light tracking-[0.02em] text-white/90">
            {card.id}
          </p>
        </header>

        <div className="flex items-center">
          <ul className="flex w-full items-center justify-between gap-2">
            {CARD_HOUSES.map((item) => {
              const brand = HOUSES.find((house) => house.id === item.id);
              if (!brand) return null;
              return (
                <li key={brand.id} className="flex min-w-0 justify-center">
                  <HouseLogo brand={brand} onDark height={item.height} />
                </li>
              );
            })}
          </ul>
        </div>

        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="font-sans text-[12px] font-light text-white/75">
                {card.nameLabel}
            </p>
            <p className="mt-2 font-sans text-[1.4rem] font-light leading-none tracking-[-0.02em] text-white">
                {card.memberName}
            </p>
          </div>
          <div className="text-right">
            <p className="font-sans text-[12px] font-light text-white/75">
                {card.pointsLabel}
            </p>
            <p className="mt-2 font-sans text-[1.4rem] font-light leading-none tracking-[-0.02em] text-white">
                {card.points}
            </p>
          </div>
        </div>

        <div className="mt-9 flex justify-center sm:mt-10">
          {qr ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={qr}
              alt="Demonstration loyalty QR code"
              width={180}
              height={180}
              className="h-[156px] w-[156px] sm:h-[176px] sm:w-[176px]"
            />
          ) : (
            <div className="h-[156px] w-[156px] bg-black sm:h-[176px] sm:w-[176px]" />
          )}
        </div>
      </article>
      <p className="mt-4 max-w-[36ch] font-sans text-[11px] leading-5 tracking-[0.04em] text-ink/40">
        Demonstration loyalty card. The QR code opens a demo route and does not
        represent a registered member.
      </p>
    </div>
  );
}
