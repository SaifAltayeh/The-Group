"use client";

import { useEffect, useId, useRef } from "react";
import Link from "next/link";
import { X } from "lucide-react";
import { ACCOUNT_NAV, PRIMARY_NAV } from "@/lib/constants/navigation";
import { TheGroupLogo } from "@/components/brand/TheGroupLogo";
import { LuxuryButton } from "@/components/ui/LuxuryButton";

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
};

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const titleId = useId();

  useEffect(() => {
    if (!open) return;

    const previous = document.activeElement as HTMLElement | null;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }

      if (event.key !== "Tab" || !panelRef.current) return;

      const focusable = panelRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", onKey);
      previous?.focus();
    };
  }, [open, onClose]);

  return (
    <div
      className={`fixed inset-0 z-[80] transition-[opacity,visibility] duration-500 ${
        open ? "visible opacity-100" : "invisible opacity-0"
      }`}
      aria-hidden={!open}
    >
      <button
        type="button"
        className="absolute inset-0 bg-ink/20"
        tabIndex={-1}
        onClick={onClose}
        aria-label="Close menu"
      />
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className={`absolute inset-0 flex flex-col bg-ivory px-[6vw] pb-10 pt-6 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          open ? "translate-y-0" : "-translate-y-4"
        }`}
      >
        <div className="flex items-center justify-between">
          <div className="h-9 w-[6.4rem]">
            <TheGroupLogo className="h-full w-full object-left" />
          </div>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            className="flex h-11 w-11 items-center justify-center text-gold transition-colors hover:text-ink"
            aria-label="Close menu"
          >
            <X className="h-6 w-6 stroke-[1.25]" />
          </button>
        </div>

        <p id={titleId} className="sr-only">
          Site navigation
        </p>

        <nav className="mt-16 flex flex-1 flex-col justify-center gap-2">
          {PRIMARY_NAV.map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={onClose}
              className="font-sans text-[clamp(2rem,10vw,3.4rem)] font-light leading-[1.1] text-ink transition-colors hover:text-gold"
              style={{
                transitionDelay: open ? `${120 + index * 60}ms` : "0ms",
                opacity: open ? 1 : 0,
                transform: open ? "translateY(0)" : "translateY(18px)",
                transitionProperty: "opacity, transform, color",
                transitionDuration: "700ms",
              }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="border-t border-gold-muted pt-8">
          <LuxuryButton
            href={ACCOUNT_NAV.join.href}
            onClick={onClose}
            className="w-full"
          >
            {ACCOUNT_NAV.join.label}
          </LuxuryButton>
        </div>
      </div>
    </div>
  );
}
