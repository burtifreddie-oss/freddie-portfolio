"use client";

import { useState } from "react";
import { m, AnimatePresence, useScroll, useTransform } from "framer-motion";
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
  // scrollY global — mais confiável que target ref para parallax
  const { scrollY } = useScroll();

  // Ao scrollar: nome sobe ~280px e desaparece
  const nameY = useTransform(scrollY, [0, 500], [0, -280]);
  const nameOpacity = useTransform(scrollY, [0, 220, 450], [1, 0.6, 0]);

  return (
    <section
      className="relative flex min-h-[100svh] flex-col bg-background overflow-x-hidden"
    >
      {/* ── Topo: tagline esquerda / localização direita ── */}
      <div className="mx-auto flex w-full max-w-[1400px] items-start justify-between gap-4 px-4 pt-20 sm:gap-8 sm:px-6 sm:pt-28 md:px-10 md:pt-36">
        <p className="max-w-[200px] text-xs font-light leading-relaxed text-muted-foreground sm:max-w-[280px] sm:text-sm">
          Movido pela curiosidade e resolução de problemas, busco criar designs
          que transcendem a estética com funcionalidade.
        </p>
        <span className="shrink-0 text-[10px] font-light uppercase tracking-[0.18em] text-muted-foreground sm:text-xs sm:tracking-[0.22em]">
          São Paulo — 2025
        </span>
      </div>

      {/* ── Espaçador ── */}
      <div className="flex-1" />

      {/* ── Nome em destaque — dentro do grid, com parallax ── */}
      <m.div
        style={{ y: nameY, opacity: nameOpacity }}
        className="mx-auto w-full max-w-[1400px] px-4 pb-4 sm:px-6 md:px-10"
      >
        <HoverTooltip>
          <h1
            className="block w-full font-display font-bold leading-[0.85] tracking-tight text-foreground"
            style={{ fontSize: "clamp(2.2rem, 11.5vw, 175px)" }}
          >
            FREDDIE BURTI
          </h1>
        </HoverTooltip>

        {/* Scroll indicator */}
        <div className="mt-5 flex items-center gap-2 text-xs font-light uppercase tracking-[0.18em] text-muted-foreground md:mt-6">
          <span>Scroll</span>
          <m.span
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown className="h-3.5 w-3.5" />
          </m.span>
        </div>
      </m.div>

      {/* ── Margem inferior ── */}
      <div className="pb-10 md:pb-14" />
    </section>
  );
}
