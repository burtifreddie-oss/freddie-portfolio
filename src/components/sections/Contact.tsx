"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

function LinkedInIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.37V9h3.41v1.56h.05a3.74 3.74 0 0 1 3.37-1.85c3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden {...props}>
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function BehanceIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M7.8 4c.6 0 1.16.05 1.66.16.5.1.94.27 1.3.5.36.23.65.55.85.95.2.4.3.9.3 1.5 0 .65-.15 1.18-.45 1.6-.3.42-.74.77-1.32 1.04.8.23 1.4.63 1.78 1.2.4.57.6 1.26.6 2.07 0 .65-.13 1.21-.38 1.69-.25.47-.6.86-1.04 1.16-.43.3-.93.52-1.5.66-.55.14-1.13.21-1.7.21H1V4h6.8zM7.4 9.07c.5 0 .91-.12 1.23-.35.32-.24.48-.62.48-1.15 0-.3-.05-.54-.16-.73a1.2 1.2 0 0 0-.43-.45c-.18-.1-.4-.18-.63-.22-.24-.04-.48-.06-.73-.06H4v2.96h3.4zm.2 5.32c.27 0 .54-.03.78-.08.25-.05.47-.14.66-.27.2-.13.35-.3.46-.52.12-.22.18-.5.18-.83 0-.65-.18-1.12-.55-1.4-.36-.28-.85-.42-1.45-.42H4v3.52h3.6zM17.32 14.36c.4.4.99.6 1.75.6.55 0 1.02-.14 1.42-.41.4-.28.64-.57.74-.88H23c-.36 1.13-.92 1.94-1.66 2.43-.74.49-1.65.73-2.7.73-.74 0-1.4-.12-2-.36a4.4 4.4 0 0 1-1.51-1.01 4.5 4.5 0 0 1-.95-1.55c-.22-.6-.34-1.27-.34-2 0-.7.12-1.34.35-1.94a4.6 4.6 0 0 1 1-1.55c.43-.43.95-.77 1.55-1.02.6-.25 1.27-.37 1.99-.37.81 0 1.51.16 2.11.47.6.31 1.1.73 1.5 1.26.4.52.69 1.13.86 1.81.18.69.24 1.4.2 2.16h-6.4c0 .8.27 1.42.66 1.83zm3.04-4.96a2.06 2.06 0 0 0-1.6-.59c-.46 0-.83.07-1.13.23-.3.15-.53.34-.71.56-.18.22-.3.46-.37.71-.07.25-.11.47-.13.66h3.95c-.06-.62-.27-1.1-.61-1.42L20.37 9.4zM15 5.5h5v1.4h-5V5.5z" />
    </svg>
  );
}

const SOCIALS = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/freddieburti/", icon: LinkedInIcon },
  { label: "Instagram", href: "https://www.instagram.com/freddieburti/", icon: InstagramIcon },
  { label: "Behance", href: "https://www.behance.net/freddieab", icon: BehanceIcon },
];

const EMAIL = "burtifreddie@gmail.com";

function MagneticButton({ href, children }: { href: string; children: React.ReactNode }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const dx = e.clientX - (rect.left + rect.width / 2);
      const dy = e.clientY - (rect.top + rect.height / 2);
      if (Math.hypot(dx, dy) < 120) {
        setPos({ x: dx * 0.25, y: dy * 0.25 });
      } else {
        setPos({ x: 0, y: 0 });
      }
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <motion.a
      ref={ref}
      href={href}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.3 }}
      className="inline-flex min-h-[48px] items-center gap-3 rounded-full border border-accent/50 bg-accent/10 px-6 py-3 text-sm font-medium text-accent transition-colors hover:bg-accent hover:text-background sm:px-7 sm:py-4"
    >
      {children}
    </motion.a>
  );
}

function CharDance({ text }: { text: string }) {
  return (
    <span className="inline-flex flex-wrap" aria-label={text}>
      {text.split("").map((ch, i) => (
        <motion.span
          key={i}
          aria-hidden
          className="inline-block"
          whileHover={{ y: -6, color: "var(--accent)" }}
          transition={{ duration: 0.2, ease: "easeOut" }}
        >
          {ch === " " ? " " : ch}
        </motion.span>
      ))}
    </span>
  );
}

export function Contact() {
  return (
    <section
      id="contato"
      className="relative w-full border-t border-border px-5 py-16 sm:px-6 md:px-10 md:py-40"
    >
      <div className="mx-auto flex w-full max-w-[1400px] flex-col gap-12 md:gap-16">

        {/* Título */}
        <div className="flex flex-col gap-3">
          <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
            04 — Contato
          </span>
          <h2 className="font-display text-[clamp(2.5rem,8vw,9rem)] leading-[0.95] tracking-tight">
            Vamos
            <br />
            conversar?
          </h2>
        </div>

        {/* Email + CTA */}
        <div className="flex flex-col gap-8">
          {/* Email — fluid com min seguro para mobile */}
          <a
            href={`mailto:${EMAIL}`}
            className="font-display block w-fit cursor-none break-all text-[clamp(1.1rem,4vw,5.5rem)] leading-[1.1] tracking-tight transition-colors hover:text-accent sm:break-normal"
            data-cursor-hover
          >
            <CharDance text={EMAIL} />
          </a>

          <MagneticButton href={`mailto:${EMAIL}`}>
            Iniciar projeto
            <ArrowUpRight className="h-4 w-4" />
          </MagneticButton>
        </div>

        {/* Redes sociais */}
        <div className="flex flex-col gap-5 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between">
          <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Onde me encontrar
          </span>
          <ul className="flex flex-wrap items-center gap-5 sm:gap-8">
            {SOCIALS.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline inline-flex min-h-[44px] items-center gap-2 text-sm font-medium transition-colors hover:text-accent"
                >
                  <s.icon className="h-4 w-4" />
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
