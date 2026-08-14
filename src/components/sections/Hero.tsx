"use client";

import { useRef, useEffect } from "react";
import { m, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";

const HERO_LINES = [
  "Busco criar designs que",
  "transcendem a estética",
  "com funcionalidade.",
];
const RADIUS = 160;
const STROKE_MAX = 4.5;

function AnimatedHeroText() {
  const h1Ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const h1 = h1Ref.current;
    if (!h1) return;

    function onMove(e: MouseEvent) {
      const spans = h1!.querySelectorAll<HTMLSpanElement>("span");
      spans.forEach((span) => {
        const r = span.getBoundingClientRect();
        const cx = r.left + r.width / 2;
        const cy = r.top + r.height / 2;
        const dist = Math.hypot(e.clientX - cx, e.clientY - cy);
        const t = Math.max(0, 1 - dist / RADIUS);
        span.style.setProperty("-webkit-text-stroke-width", `${(t * STROKE_MAX).toFixed(3)}px`);
        span.style.setProperty("-webkit-text-stroke-color", "currentColor");
      });
    }

    function onLeave() {
      const spans = h1!.querySelectorAll<HTMLSpanElement>("span");
      spans.forEach((span) => {
        span.style.setProperty("-webkit-text-stroke-width", "0px");
      });
    }

    // Só ativa em dispositivos com mouse real (desktop)
    const hasHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!hasHover) return;

    h1.addEventListener("mousemove", onMove);
    h1.addEventListener("mouseleave", onLeave);
    return () => {
      h1.removeEventListener("mousemove", onMove);
      h1.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <h1
      ref={h1Ref}
      className="block w-full cursor-default font-display font-semibold leading-[1.05] text-foreground md:leading-[0.92]"
      style={{ fontSize: "clamp(1.8rem, 6.5vw, 92px)", letterSpacing: "clamp(-2px, -0.5vw, -5px)" }}
    >
      {HERO_LINES.map((line, li) => (
        <span key={li} style={{ display: "block" }}>
          {line.split("").map((char, ci) => (
            <span
              key={ci}
              style={{
                display: "inline-block",
                transition: "-webkit-text-stroke-width 0.1s ease",
                whiteSpace: char === " " ? "pre" : undefined,
              }}
            >
              {char}
            </span>
          ))}
        </span>
      ))}
    </h1>
  );
}

export function Hero() {
  const { scrollY } = useScroll();
  const nameY = useTransform(scrollY, [0, 500], [0, -280]);
  const nameOpacity = useTransform(scrollY, [0, 220, 450], [1, 0.6, 0]);

  return (
    <section
      className="relative flex min-h-[72svh] flex-col overflow-x-hidden md:min-h-[100svh]"
      style={{
        background: "#ffffff",
        "--background": "#ffffff",
        "--foreground": "#0f0f0f",
        "--muted-foreground": "#5a5a5a",
        "--border": "#e2e2de",
        "--accent": "#C62E24",
        "--color-foreground": "#0f0f0f",
        "--color-muted-foreground": "#5a5a5a",
        "--color-border": "#e2e2de",
        "--color-accent": "#C62E24",
      } as React.CSSProperties}
    >
      <div className="mx-auto flex w-full max-w-[1400px] items-start justify-between gap-4 px-4 pt-16 sm:gap-8 sm:px-6 sm:pt-28 md:px-10 md:pt-36">
        <p className="text-base font-light leading-tight sm:leading-relaxed text-muted-foreground">
          Designer movido pela curiosidade<br className="hidden sm:block" />{" "}
          e resolução{" "}<br className="sm:hidden" />de problemas
        </p>
        <span className="shrink-0 text-[10px] font-light uppercase tracking-[0.18em] text-muted-foreground sm:text-xs sm:tracking-[0.22em]">
          São Paulo — 2026
        </span>
      </div>

      <div className="flex-1" />

      <m.div
        style={{ y: nameY, opacity: nameOpacity }}
        className="mx-auto w-full max-w-[1400px] px-4 pb-6 sm:px-6 md:px-10"
      >
        <AnimatedHeroText />

        <div className="mt-5 flex items-center gap-2 text-base font-light uppercase tracking-[0.18em] text-muted-foreground md:mt-6">
          <span>Scroll</span>
          <m.span
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown className="h-3.5 w-3.5" />
          </m.span>
        </div>
      </m.div>

      <div className="flex-1 md:hidden" />
      <div className="hidden md:block md:pb-6" />
    </section>
  );
}
