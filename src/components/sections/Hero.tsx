"use client";

import { useState } from "react";
import { m, AnimatePresence } from "framer-motion";
import { ArrowDown } from "lucide-react";

/* ── Tooltip on name ── */
function HoverTooltip({ children }: { children: React.ReactNode }) {
  const [hovered, setHovered] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  function handleMove(e: React.MouseEvent) {
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  }

  return (
    <span
      className="relative cursor-default"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={handleMove}
    >
      {children}
      <AnimatePresence>
        {hovered && (
          <m.span
            initial={{ opacity: 0, scale: 0.92, y: 6 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 6 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="pointer-events-none absolute z-50 whitespace-nowrap rounded-full bg-foreground/90 px-4 py-2 text-[0.75rem] font-normal tracking-wide text-background backdrop-blur-sm"
            style={{
              left: pos.x,
              top: pos.y - 48,
              transform: "translateX(-50%)",
            }}
          >
            [ Design is about intention ]
          </m.span>
        )}
      </AnimatePresence>
    </span>
  );
}

/* ── Hero ── */
export function Hero() {
  return (
    <section className="relative flex min-h-[100svh] flex-col bg-background">

      {/* ── Barra superior ── */}
      <div className="mx-auto flex w-full max-w-[1400px] items-center justify-between px-5 pt-28 sm:px-6 md:px-10 md:pt-36">
        <span className="text-xs font-light uppercase tracking-[0.22em] text-muted-foreground">
          Designer Visual
        </span>
        <span className="text-xs font-light uppercase tracking-[0.22em] text-muted-foreground">
          São Paulo — 2025
        </span>
      </div>

      {/* ── Nome em destaque ── */}
      <div className="flex flex-1 flex-col justify-center px-4 py-6 sm:px-6 md:px-10">
        <div className="mx-auto w-full max-w-[1400px]">
          <HoverTooltip>
            <h1
              className="font-display font-bold leading-[0.88] tracking-tight text-foreground"
              style={{ fontSize: "clamp(4.5rem, 18vw, 240px)" }}
            >
              <span className="block">FREDDIE</span>
              <span className="block">BURTI.</span>
            </h1>
          </HoverTooltip>
        </div>
      </div>

      {/* ── Barra inferior ── */}
      <div className="mx-auto w-full max-w-[1400px] px-5 pb-12 sm:px-6 md:pb-16 md:px-10">
        <div className="flex items-end justify-between gap-8">

          {/* Tagline */}
          <p className="max-w-sm text-sm font-light leading-relaxed text-muted-foreground sm:max-w-md sm:text-base">
            Movido pela curiosidade e resolução de problemas, busco criar designs
            que transcendem a estética com funcionalidade.
          </p>

          {/* Indicador de scroll */}
          <div className="hidden shrink-0 items-center gap-2 text-xs font-light uppercase tracking-[0.18em] text-muted-foreground md:flex">
            <span>Scroll</span>
            <m.span
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            >
              <ArrowDown className="h-4 w-4" />
            </m.span>
          </div>

        </div>
      </div>

    </section>
  );
}
