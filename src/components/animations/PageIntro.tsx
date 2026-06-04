"use client";

import { useEffect, useState } from "react";
import { m } from "framer-motion";

export function PageIntro() {
  const [phase, setPhase] = useState<"loading" | "reveal" | "done">("loading");
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setPhase("done");
      return;
    }

    // Exibe somente na primeira visita
    const visited = sessionStorage.getItem("fb_intro_shown");
    if (visited) {
      setPhase("done");
      return;
    }
    sessionStorage.setItem("fb_intro_shown", "1");

    // Contador 0 → 100 em ~2s
    let current = 0;
    const countId = setInterval(() => {
      current += 1;
      setCount(current);
      if (current >= 100) clearInterval(countId);
    }, 20);

    const t1 = setTimeout(() => setPhase("reveal"), 2400);
    const t2 = setTimeout(() => setPhase("done"), 3500);

    return () => {
      clearInterval(countId);
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  if (phase === "done") return null;

  const isRevealing = phase === "reveal";

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-[200]">

      {/* Painel esquerdo */}
      <m.div
        className="absolute inset-y-0 left-0 w-1/2 bg-[#070606]"
        animate={isRevealing ? { x: "-101%" } : { x: "0%" }}
        transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1], delay: 0.1 }}
      />

      {/* Painel direito */}
      <m.div
        className="absolute inset-y-0 right-0 w-1/2 bg-[#070606]"
        animate={isRevealing ? { x: "101%" } : { x: "0%" }}
        transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1], delay: 0.1 }}
      />

      {/* Nome grande — some ao revelar */}
      <m.div
        className="absolute inset-0 flex flex-col items-center justify-center px-6"
        animate={{ opacity: isRevealing ? 0 : 1, y: isRevealing ? -24 : 0 }}
        transition={{ duration: 0.35, ease: [0.76, 0, 0.24, 1] }}
      >
        <div className="overflow-hidden">
          <m.h1
            className="block text-center font-display font-bold leading-[0.88] tracking-tight text-[#f5f5f0]"
            style={{ fontSize: "clamp(3.5rem, 14vw, 220px)" }}
            initial={{ y: "110%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 0.85, ease: [0.76, 0, 0.24, 1], delay: 0.1 }}
          >
            FREDDIE
          </m.h1>
        </div>
        <div className="overflow-hidden">
          <m.span
            className="block text-center font-display font-bold leading-[0.88] tracking-tight text-[#f5f5f0]"
            style={{ fontSize: "clamp(3.5rem, 14vw, 220px)" }}
            initial={{ y: "110%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 0.85, ease: [0.76, 0, 0.24, 1], delay: 0.18 }}
          >
            BURTI
          </m.span>
        </div>
      </m.div>

      {/* Contador — canto inferior direito */}
      <m.span
        className="absolute bottom-8 right-8 font-display tabular-nums text-[#f5f5f0]/30"
        style={{ fontSize: "clamp(0.75rem, 1.5vw, 1rem)", fontWeight: 300 }}
        animate={{ opacity: isRevealing ? 0 : 1 }}
        transition={{ duration: 0.2 }}
      >
        {String(count).padStart(2, "0")}
      </m.span>

    </div>
  );
}
