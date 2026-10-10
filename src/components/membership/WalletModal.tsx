"use client";

import { useEffect, useId, useRef } from "react";
import { X } from "lucide-react";
import type { WalletActionResult } from "@/lib/wallet/actions";

type WalletModalProps = {
  result: WalletActionResult | null;
  onClose: () => void;
};

export function WalletModal({ result, onClose }: WalletModalProps) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const titleId = useId();
  const descId = useId();

  useEffect(() => {
    if (!result) return;
    const previous = document.activeElement as HTMLElement | null;
    closeRef.current?.focus();

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      previous?.focus();
    };
  }, [result, onClose]);

  if (!result) return null;

  return (
    <div className="fixed inset-0 z-[90] flex items-end justify-center p-4 sm:items-center">
      <button
        type="button"
        className="absolute inset-0 bg-ink/35"
        aria-label="Close dialog"
        onClick={onClose}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-describedby={descId}
        className="relative w-full max-w-md border border-gold-muted bg-paper px-7 py-8"
      >
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 text-gold hover:text-ink"
          aria-label="Close"
        >
          <X className="h-5 w-5 stroke-[1.25]" />
        </button>
        <p className="font-sans text-[10px] uppercase tracking-[0.36em] text-gold">
          Demonstration
        </p>
        <h2
          id={titleId}
          className="mt-4 font-sans text-[2rem] font-light leading-tight text-ink"
        >
          {result.title}
        </h2>
        <p
          id={descId}
          className="mt-4 font-sans text-[15px] leading-7 text-ink/68"
        >
          {result.message}
        </p>
        <p className="mt-5 font-sans text-[12px] leading-6 text-ink/42">
          No wallet pass has been created or added.
        </p>
        <button
          type="button"
          onClick={onClose}
          className="mt-8 border border-gold px-5 py-2.5 font-sans text-[10px] uppercase tracking-[0.28em] text-gold transition-colors hover:bg-gold hover:text-black"
        >
          Close
        </button>
      </div>
    </div>
  );
}
