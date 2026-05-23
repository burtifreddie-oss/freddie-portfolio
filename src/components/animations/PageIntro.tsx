"use client";

import { useEffect, useState } from "react";
import { m, AnimatePresence } from "framer-motion";

export function PageIntro() {
  const [phase, setPhase] = useState<"loading" | "reveal" | "done">("loading");

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) { setPhase("done"); return; }

    // Pula o loading se o usuário já visitou antes
    const visited = localStorage.getItem("fb_visited");
    if (visited) { setPhase("done"); return; }

    localStorage.setItem("fb_visited", "1");

    const t1 = setTimeout(() => setPhase("reveal"), 2600);
    const t2 = setTimeout(() => setPhase("done"), 3600);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  if (phase === "done") return null;

  const isRevealing = phase === "reveal";

  return (
    <AnimatePresence mode="wait">
      {(phase === "loading" || phase === "reveal") && (
        <m.div
          aria-hidden
          className="pointer-events-none fixed inset-0 z-[200] bg-[#0a0a0a]"
          exit={{ opacity: 0, transition: { duration: 0.3 } }}
        >
          {/* Painéis de reveal */}
          <m.div
            className="absolute left-0 top-0 h-full w-1/2 origin-left bg-[#0a0a0a]"
            animate={isRevealing ? { scaleX: 0 } : { scaleX: 1 }}
            transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1], delay: 0.05 }}
          />
          <m.div
            className="absolute right-0 top-0 h-full w-1/2 origin-right bg-[#0a0a0a]"
            animate={isRevealing ? { scaleX: 0 } : { scaleX: 1 }}
            transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1], delay: 0.05 }}
          />

          {/* Conteúdo centralizado */}
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-5">

            {/* Nome — pequeno e elegante */}
            <div className="overflow-hidden">
              <m.span
                className="block text-sm tracking-[0.25em] uppercase text-[#f5f5f0]"
                style={{ fontWeight: 700 }}
                initial={{ y: "110%", opacity: 0 }}
                animate={
                  isRevealing
                    ? { y: "-110%", opacity: 0 }
                    : { y: "0%", opacity: 1 }
                }
                transition={
                  isRevealing
                    ? { duration: 0.5, ease: [0.76, 0, 0.24, 1] }
                    : { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.15 }
                }
              >
                Freddie Burti
              </m.span>
            </div>

            {/* Progress bar */}
            <m.div
              className="relative h-px w-48 overflow-hidden rounded-full bg-[#f5f5f0]/10"
              initial={{ opacity: 0 }}
              animate={{ opacity: isRevealing ? 0 : 1 }}
              transition={{ duration: 0.3, delay: isRevealing ? 0 : 0.2 }}
            >
              <m.div
                className="absolute inset-y-0 left-0 bg-[#FF3B30]"
                initial={{ width: "0%" }}
                animate={{ width: isRevealing ? "100%" : "100%" }}
                transition={{ duration: 2.2, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.2 }}
              />
            </m.div>

          </div>
        </m.div>
      )}
    </AnimatePresence>
  );
}
