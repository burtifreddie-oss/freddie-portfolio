"use client";

import { useEffect } from "react";

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

    // Lenis só no desktop — no mobile o scroll nativo é mais estável
    const isMobile = window.innerWidth < 768;
    if (isMobile) return;

    let rafId = 0;
    let cleanup: (() => void) | null = null;

    const init = () => {
      import("lenis").then(({ default: Lenis }) => {
        const lenis = new Lenis({
          duration: 1.2,
          easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          smoothWheel: true,
        });

        function raf(time: number) {
          lenis.raf(time);
          rafId = requestAnimationFrame(raf);
        }
        rafId = requestAnimationFrame(raf);

        cleanup = () => {
          cancelAnimationFrame(rafId);
          lenis.destroy();
        };
      });
    };

    // Inicia Lenis somente após o carregamento completo da página
    if (document.readyState === "complete") {
      setTimeout(init, 0);
    } else {
      window.addEventListener("load", () => setTimeout(init, 0), { once: true });
    }

    return () => {
      cleanup?.();
      cancelAnimationFrame(rafId);
    };
  }, []);

  return <>{children}</>;
}
