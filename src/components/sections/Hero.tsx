"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { m, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { projects } from "@/lib/projects";

const CYCLE = ["Designer", "Criativo", "Visual", "Estratégico", "Conceitual"];

/* ── Scramble text ── */
const SCRAMBLE_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&";

function ScrambleText({ text }: { text: string }) {
  const [display, setDisplay] = useState(text);

  const scramble = () => {
    const totalDuration = 1000;
    const fps = 30;
    const interval = 1000 / fps;
    const totalFrames = Math.round(totalDuration / interval);
    let frame = 0;

    const id = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;

      setDisplay(
        text
          .split("")
          .map((char, i) => {
            if (char === " ") return " ";
            const lockThreshold = i / text.replace(/ /g, "").length;
            if (progress > lockThreshold + 0.1) return char;
            return SCRAMBLE_CHARS[
              Math.floor(Math.random() * SCRAMBLE_CHARS.length)
            ];
          })
          .join("")
      );

      if (frame >= totalFrames) {
        clearInterval(id);
        setDisplay(text);
      }
    }, interval);

    return id;
  };

  useEffect(() => {
    let loopId: ReturnType<typeof setInterval>;
    let scrambleId: ReturnType<typeof setInterval>;

    const firstId = setTimeout(() => {
      scrambleId = scramble();
      loopId = setInterval(() => {
        scrambleId = scramble();
      }, 4000);
    }, 3000);

    return () => {
      clearTimeout(firstId);
      clearInterval(loopId);
      clearInterval(scrambleId);
    };
  }, []);

  return <span>{display}</span>;
}

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

/* ── Mini card for hero grid ── */
function HeroCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  return (
    <m.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.6 + index * 0.1,
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
    >
      <Link
        href={`/projetos/${project.slug}`}
        className="group block overflow-hidden rounded-xl border border-border bg-card transition-colors duration-300 hover:border-accent/40"
      >
        <div className="relative aspect-[4/3] w-full overflow-hidden bg-muted">
          {project.coverImage ? (
            <Image
              src={project.coverImage}
              alt={project.title}
              fill
              quality={90}
              sizes="(max-width: 768px) 50vw, 25vw"
              priority={index < 2}
              className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
            />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-black" />
          )}
        </div>

        <div className="flex flex-col gap-2 px-4 py-4">
          <p className="text-[0.65rem] font-light uppercase tracking-[0.15em] text-muted-foreground">
            {project.category}
          </p>
          <p className="text-sm font-semibold leading-snug tracking-tight">
            {project.title}
          </p>
          <p className="line-clamp-2 text-[0.72rem] font-normal leading-relaxed text-muted-foreground">
            {project.description}
          </p>
          <span className="mt-1 inline-flex items-center gap-1 text-[0.72rem] font-semibold text-foreground transition-colors duration-300 group-hover:text-accent">
            Ver projeto
            <ArrowUpRight className="h-3 w-3" />
          </span>
        </div>
      </Link>
    </m.div>
  );
}

/* ── Hero ── */
export function Hero() {
  const [idx, setIdx] = useState(0);
  const [vh, setVh] = useState(800);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % CYCLE.length), 2200);
    return () => clearInterval(t);
  }, []);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => {
      setVh(window.innerHeight);
      setIsMobile(window.innerWidth < 768);
    };
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const { scrollY } = useScroll();

  const scale        = useTransform(scrollY, [0, vh],          isMobile ? [1, 1]    : [1, 0.88]);
  const opacity      = useTransform(scrollY, [0, vh * 0.65],   isMobile ? [1, 1]    : [1, 0]);
  const borderRadius = useTransform(scrollY, [0, vh * 0.25],   isMobile ? [0, 0]    : [0, 32]);

  const featured = projects.slice(0, 4);

  return (
    /* ── Sticky wrapper — fica fixo enquanto a próxima seção desliza por cima ── */
    <section className="md:sticky top-0 z-10 min-h-[100svh]">

      {/* ── Card que encolhe e desaparece com o scroll ── */}
      <m.div
        ref={cardRef}
        style={{ scale, opacity, borderRadius }}
        className="relative flex min-h-[100svh] w-full flex-col justify-center overflow-hidden pb-24 pt-28 md:pb-40 md:pt-32"
      >
        <div className="mx-auto grid w-full max-w-[1400px] grid-cols-1 items-center gap-12 px-5 sm:px-6 md:grid-cols-12 md:gap-10 md:px-10 lg:gap-16">

          {/* ── Texto (esquerda) ── */}
          <div className="flex flex-col gap-4 md:col-span-5 md:gap-6">

            <m.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="text-sm font-light uppercase tracking-[0.2em] text-muted-foreground"
            >
              <ScrambleText text="Olá, sou o Freddie" />
            </m.span>

            <h1 className="font-display overflow-hidden leading-[1.05] tracking-normal">
              <m.span
                initial={{ y: 80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="block text-[clamp(1.4rem,6vw,2rem)]"
                style={{ fontWeight: 500 }}
              >
                Designer dedicado a transformar o complexo em experiências{" "}
                <span
                  className="bg-clip-text text-transparent"
                  style={{
                    backgroundImage: "linear-gradient(90deg, #FF3B30 0%, #ff6b35 50%, #cc2f26 100%)",
                  }}
                >
                  claras e memoráveis.
                </span>
              </m.span>
            </h1>

            <m.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="max-w-sm text-lg font-normal leading-relaxed text-muted-foreground sm:max-w-md"
            >
              Movido pela curiosidade e resolução de problemas, busco criar designs transcendendo a estética com a funcionalidade.
            </m.p>

            <m.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4"
            >
              <Button asChild variant="accent" size="lg" className="w-full sm:w-auto">
                <a
                  href="#projetos"
                  onClick={(e) => {
                    const el = document.getElementById("projetos");
                    if (!el) return;
                    const rect = el.getBoundingClientRect();
                    const alreadyVisible =
                      rect.top >= 0 && rect.bottom <= window.innerHeight;
                    if (alreadyVisible) {
                      e.preventDefault();
                      window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
                    }
                  }}
                >
                  Ver projetos
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
                <a href="#contato">Entrar em contato</a>
              </Button>
            </m.div>

          </div>

          {/* ── Grid de projetos (direita) ── */}
          <div id="projetos" className="md:col-span-7">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {featured.map((project, i) => (
                <HeroCard key={project.slug} project={project} index={i} />
              ))}
            </div>
          </div>

        </div>

        {/* Scroll indicator */}
        <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-24 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-xs font-light uppercase tracking-[0.18em] text-muted-foreground md:flex"
        >
          <span>Scroll</span>
          <m.span
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown className="h-4 w-4" />
          </m.span>
        </m.div>
      </m.div>
    </section>
  );
}
