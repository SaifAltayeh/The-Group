"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { TheGroupLogo } from "@/components/brand/TheGroupLogo";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { ACCOUNT_NAV, PRIMARY_NAV } from "@/lib/constants/navigation";
import { cn } from "@/lib/cn";
import { getGsap, prefersReducedMotion } from "@/lib/animations/gsap";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const compact = window.scrollY > 24;
      setScrolled((current) => (current === compact ? current : compact));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const { gsap } = getGsap();
    const ctx = gsap.context(() => {
      if (prefersReducedMotion()) {
        gsap.set("[data-nav]", { opacity: 1, y: 0 });
        return;
      }

      gsap.fromTo(
        "[data-nav]",
        { opacity: 0, y: -16 },
        { opacity: 1, y: 0, duration: 0.9, delay: 0.2, ease: "power3.out" },
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <header
        data-nav
        className={cn(
          "fixed inset-x-0 top-0 z-50 page-x",
          "transition-[height,background-color,backdrop-filter,padding] duration-500",
          scrolled
            ? "h-[72px] bg-ivory/86 backdrop-blur-md"
            : "h-[88px] bg-transparent lg:h-[92px]",
        )}
      >
        <div className="page-max flex h-full items-center justify-between gap-6">
          <Link
            href="/#home"
            aria-label="The Group® home"
            className="relative z-10 shrink-0"
          >
            <TheGroupLogo priority className="h-[52px] w-auto sm:h-[58px]" />
          </Link>

          <nav
            className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-9 lg:flex"
            aria-label="Primary"
          >
            {PRIMARY_NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="nav-link font-sans text-[11px] uppercase tracking-[0.32em]"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-5 sm:gap-6">
            <Link
              href={ACCOUNT_NAV.join.href}
              className="group relative hidden overflow-hidden border border-gold px-4 py-2 font-sans text-[10px] uppercase tracking-[0.28em] text-gold transition-colors duration-500 hover:text-black lg:inline-flex"
            >
              <span className="absolute inset-0 origin-left scale-x-0 bg-gold transition-transform duration-500 ease-out group-hover:scale-x-100" />
              <span className="relative">{ACCOUNT_NAV.join.label}</span>
            </Link>
            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center text-gold lg:hidden"
              aria-label="Open menu"
              aria-expanded={open}
              onClick={() => setOpen(true)}
            >
              <Menu className="h-5 w-5 stroke-[1.25]" />
            </button>
          </div>
        </div>
      </header>
      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </>
  );
}
