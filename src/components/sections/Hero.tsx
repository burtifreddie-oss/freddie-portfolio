"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CYCLE = ["Designer", "Criativo", "Visual", "Estratégico", "Conceitual"];

export function Hero() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % CYCLE.length), 2200);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative flex min-h-[100svh] w-full flex-col justify-end overflow-hidden px-5 pb-14 pt-28 sm:px-6 md:px-10 md:pb-24 md:pt-32">
      <div className="mx-auto flex w-full max-w-[1400px] flex-col gap-8 md:gap-10">

        {/* Status */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          className="flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-muted-foreground"
        >
          <span className="text-accent">●</span>
          <span>Disponível para projetos · São Paulo, Brasil</span>
        </motion.div>

        {/* Headline */}
        <h1 className="font-display flex flex-col gap-1 overflow-hidden leading-[0.95] tracking-tight md:gap-2">
          <motion.span
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="block text-[clamp(2.8rem,10vw,11rem)]"
          >
            Freddie Burti
          </motion.span>

          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.7, duration: 0.5 }}
            className="flex items-baseline gap-3 text-[clamp(1.6rem,5.5vw,5.5rem)] text-muted-foreground md:gap-4"
          >
            <span className="text-accent">—</span>
            {/* Container com largura máxima para não overflow */}
            <span className="relative inline-block h-[1.15em] min-w-0 flex-1 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.span
                  key={CYCLE[idx]}
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: "0%", opacity: 1 }}
                  exit={{ y: "-100%", opacity: 0 }}
                  transition={{ duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="block text-foreground"
                >
                  {CYCLE[idx]}
                </motion.span>
              </AnimatePresence>
            </span>
          </motion.span>
        </h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.9, duration: 0.6 }}
          className="max-w-sm text-sm leading-relaxed text-muted-foreground sm:max-w-md sm:text-base md:max-w-lg"
        >
          Transcendendo a estética com a funcionalidade. 7+ anos criando
          interfaces, marcas e direção de arte orientada por dados.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.1, duration: 0.6 }}
          className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4"
        >
          <Button asChild variant="accent" size="lg" className="w-full sm:w-auto">
            <a href="#projetos">
              Ver projetos
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </Button>
          <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
            <a href="#contato">Entrar em contato</a>
          </Button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.4, duration: 0.6 }}
        className="absolute bottom-8 right-5 hidden items-center gap-2 text-xs uppercase tracking-[0.18em] text-muted-foreground md:flex md:right-10"
      >
        <span>Scroll</span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="h-4 w-4" />
        </motion.span>
      </motion.div>
    </section>
  );
}
