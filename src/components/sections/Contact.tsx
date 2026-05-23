"use client";

import { m } from "framer-motion";

const LINKS = [
  { label: "Enviar e-mail", href: "mailto:burtifreddie@gmail.com" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/freddieburti/" },
  { label: "Behance", href: "https://www.behance.net/freddieab" },
  { label: "Baixar CV", href: "/freddie-burti-cv.pdf" },
];

export function Contact() {
  return (
    <section
      id="contato"
      className="relative z-20 w-full bg-background px-4 pb-8 pt-0 sm:px-6 md:px-10 md:pb-12"
    >
      <m.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.85, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="mx-auto w-full max-w-[1400px] overflow-hidden rounded-3xl bg-card px-5 pb-8 pt-12 sm:px-10 sm:pb-12 sm:pt-20 md:px-16 md:pb-14 md:pt-24 lg:px-20 lg:pb-16 lg:pt-28"
      >
        {/* ── Headline — bold/700 ── */}
        <h2
          className="font-display leading-[0.9] tracking-tight text-foreground"
          style={{
            fontSize: "clamp(1.25rem, 3.5vw, 4rem)",
            fontWeight: 700,
          }}
        >
          Vamos criar
          <br />
          juntos.
        </h2>

        {/* ── Links ── */}
        <div className="mt-10 flex flex-wrap items-center gap-6 sm:gap-10 md:mt-20 md:gap-16">
          {LINKS.map((link, i) => (
            <m.a
              key={link.label}
              href={link.href}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.1 + i * 0.07 }}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="group relative inline-block text-sm font-medium tracking-wide text-foreground transition-colors duration-300 hover:text-accent"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 h-px w-full bg-foreground/30 transition-colors duration-300 group-hover:bg-accent" />
            </m.a>
          ))}
        </div>

        {/* ── Divider ── */}
        <div className="mt-14 h-px w-full bg-border md:mt-20" />

        {/* ── Footer row — light/300 ── */}
        <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <span className="text-xs font-light text-muted-foreground">
            Freddie Burti — Designer
          </span>
          <span className="text-xs font-light text-muted-foreground">
            São Paulo, Brasil
          </span>
        </div>
      </m.div>
    </section>
  );
}
