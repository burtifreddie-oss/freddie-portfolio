"use client";

import { useEffect, useRef } from "react";

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const targetRef = useRef({ x: -100, y: -100 });
  const currentRef = useRef({ x: -100, y: -100 });
  const hoverRef = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (isTouch || prefersReducedMotion) return;

    const dot = dotRef.current;
    if (!dot) return;

    const onMove = (e: MouseEvent) => {
      targetRef.current.x = e.clientX;
      targetRef.current.y = e.clientY;
    };

    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("a, button, [data-cursor-hover]")) {
        hoverRef.current = true;
        dot.style.width = "40px";
        dot.style.height = "40px";
        dot.style.mixBlendMode = "difference";
        dot.style.background = "#ffffff";
      }
    };

    const onOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("a, button, [data-cursor-hover]")) {
        hoverRef.current = false;
        dot.style.width = "12px";
        dot.style.height = "12px";
        dot.style.mixBlendMode = "normal";
        dot.style.background = "var(--accent)";
      }
    };

    let rafId = 0;
    const tick = () => {
      const lerp = 0.18;
      currentRef.current.x +=
        (targetRef.current.x - currentRef.current.x) * lerp;
      currentRef.current.y +=
        (targetRef.current.y - currentRef.current.y) * lerp;
      dot.style.transform = `translate3d(${currentRef.current.x}px, ${currentRef.current.y}px, 0) translate(-50%, -50%)`;
      rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseover", onOver);
    window.addEventListener("mouseout", onOut);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      window.removeEventListener("mouseout", onOut);
    };
  }, []);

  return (
    <div
      ref={dotRef}
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[9999] hidden h-3 w-3 rounded-full bg-accent transition-[width,height,background] duration-300 ease-out md:block"
      style={{ willChange: "transform, width, height" }}
    />
  );
}
