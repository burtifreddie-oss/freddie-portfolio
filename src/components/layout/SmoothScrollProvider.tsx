"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export function SmoothScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    let rafId = 0;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    let mounted = true;
    import("gsap").then(({ default: gsap }) => {
      if (!mounted) return;
      import("gsap/ScrollTrigger").then(({ ScrollTrigger }) => {
        if (!mounted) return;
        gsap.registerPlugin(ScrollTrigger);
        lenis.on("scroll", ScrollTrigger.update);
        gsap.ticker.add((time) => {
          lenis.raf(time * 1000);
        });
        gsap.ticker.lagSmoothing(0);
      });
    });

    return () => {
      mounted = false;
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
