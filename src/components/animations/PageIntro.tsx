"use client";

import { useEffect, useState } from "react";
import { m, AnimatePresence } from "framer-motion";

export function PageIntro() {
  const [phase, setPhase] = useState<"loading" | "reveal" | "done">("loading");
  const [count, setCount] = useState(0);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) { setPhase("done"); return; }

    // Pula o loading se o usuário já visitou antes
    const visited = localStorage.getItem("fb_visited");
    if (visited) { setPhase("done"); return; }
    localStorage.setItem("fb_visited", "1");

    // Contador 0 → 100 em ~2s
    const duration = 2000;
    const steps = 100;
    const stepMs = duration / steps;
    let current = 0;

    const countId = setInterval(() => {
      current += 1;
      setCount(current);
      if (current >= 100) clearInterval(countId);
    }, stepMs);

    // Inicia curtain reveal após ~2.4s
    const t1 = setTimeout(() => setPhase("reveal"), 2400);
    // Remove do DOM após a animação terminar (~3.5s total)
    const t2 = setTimeout(() => setPhase("done"), 3500);

    return () => {
      clearInterval(countId);
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  const isRevealing = phase === "reveal";
  const isDone = phase === "done";

  return (
    <AnimatePresence>
      {!isDone && (
        <div aria-hidden className="pointer-events-none fixed inset-0 z-[200]">

          {/* Painel esquerdo */}
          <m.div
            className="absolute inset-y-0 left-0 w-1/2 bg-[#070606]"
            initial={{ x: 0 }}
            animate={isRevealing ? { x: "-101%" } : { x: 0 }}
            transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1], delay: 0.1 }}
          />

          {/* Painel direito */}
          <m.div
            className="absolute inset-y-0 right-0 w-1/2 bg-[#070606]"
            initial={{ x: 0 }}
            animate={isRevealing ? { x: "101%" } : { x: 0 }}
            transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1], delay: 0.1 }}
          />

          {/* Conteúdo centralizado — desaparece ao revelar */}
          <m.div
            className="absolute inset-0 flex flex-col items-center justify-center gap-6"
            animate={{ opacity: isRevealing ? 0 : 1 }}
            transition={{ duration: 0.25 }}
          >
            {/* Nome */}
            <div className="overflow-hidden">
              <m.span
                className="block text-sm font-bold uppercase tracking-[0.3em] text-[#f5f5f0]"
                initial={{ y: "110%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.15 }}
              >
                Freddie Burti
              </m.span>
            </div>

            {/* Contador */}
            <m.span
              className="font-display text-[clamp(2rem,5vw,3.5rem)] font-light tabular-nums leading-none text-[#f5f5f0]/60"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              {String(count).padStart(2, "0")}
            </m.span>

            {/* Barra de progresso */}
            <m.div
              className="relative h-px w-32 overflow-hidden bg-[#f5f5f0]/10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              <m.div
                className="absolute inset-y-0 left-0 bg-[#FF3B30]"
                initial={{ width: "0%" }}
                animate={{ width: `${count}%` }}
                transition={{ duration: 0.05, ease: "linear" }}
              />
            </m.div>
          </m.div>

        </div>
      )}
    </AnimatePresence>
  );
}
