"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";
import {
  getGsap,
  isCompactViewport,
  prefersReducedMotion,
} from "@/lib/animations/gsap";

const NAV_OFFSET = -96;

function getSamePageHash(href: string): string | null {
  if (href.startsWith("#") && href.length > 1) {
    return decodeURIComponent(href.slice(1));
  }

  try {
    const url = new URL(href, window.location.href);
    if (url.origin !== window.location.origin) return null;
    if (url.pathname !== window.location.pathname) return null;
    if (!url.hash || url.hash === "#") return null;
    return decodeURIComponent(url.hash.slice(1));
  } catch {
    return null;
  }
}

function scrollToSection(id: string, lenis: Lenis | null) {
  const target = document.getElementById(id);
  if (!target) return;

  if (lenis) {
    lenis.scrollTo(target, { offset: NAV_OFFSET, duration: 1.15 });
    return;
  }

  const top = target.getBoundingClientRect().top + window.scrollY + NAV_OFFSET;
  window.scrollTo({
    top,
    behavior: prefersReducedMotion() ? "auto" : "smooth",
  });
}

function onHashLinkClick(event: MouseEvent, lenis: Lenis | null) {
  if (event.button !== 0) return;
  if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

  const anchor = (event.target as Element | null)?.closest("a[href]");
  if (!anchor) return;

  const href = anchor.getAttribute("href");
  if (!href) return;

  const id = getSamePageHash(href);
  if (!id || !document.getElementById(id)) return;

  event.preventDefault();
  scrollToSection(id, lenis);
  window.history.pushState(null, "", `#${id}`);
}

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const { gsap, ScrollTrigger } = getGsap();
    const reduced = prefersReducedMotion() || isCompactViewport();
    let removeTicker: (() => void) | undefined;
    let onResize: (() => void) | undefined;

    if (!reduced) {
      const lenis = new Lenis({
        duration: 1.15,
        lerp: 0.085,
        smoothWheel: true,
        wheelMultiplier: 0.92,
      });

      lenis.on("scroll", ScrollTrigger.update);

      const sync = (time: number) => {
        lenis.raf(time * 1000);
      };

      gsap.ticker.add(sync);
      gsap.ticker.lagSmoothing(0);
      lenisRef.current = lenis;
      removeTicker = () => gsap.ticker.remove(sync);

      onResize = () => ScrollTrigger.refresh();
      window.addEventListener("resize", onResize);
    }

    const onClick = (event: MouseEvent) => {
      onHashLinkClick(event, lenisRef.current);
    };

    document.addEventListener("click", onClick, true);

    return () => {
      document.removeEventListener("click", onClick, true);
      if (onResize) window.removeEventListener("resize", onResize);
      removeTicker?.();
      lenisRef.current?.destroy();
      lenisRef.current = null;
    };
  }, []);

  useEffect(() => {
    const id = window.location.hash.slice(1);
    if (!id) return;

    const timer = window.setTimeout(() => {
      scrollToSection(id, lenisRef.current);
    }, 80);

    return () => window.clearTimeout(timer);
  }, [pathname]);

  return children;
}
