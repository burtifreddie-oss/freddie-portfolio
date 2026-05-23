"use client";

import { m } from "framer-motion";
import { experience, education } from "@/lib/experience";

export function Experience() {
  return (
    <section
      id="experiencia"
      className="relative w-full border-t border-border px-5 py-16 sm:px-6 md:px-10 md:py-40"
    >
      <div className="mx-auto w-full max-w-[1400px]">

        {/* Cabeçalho + lista */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-4">
            <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
              03 — Experiência
            </span>
            <h2 className="font-section mt-4 text-[clamp(2.5rem,6vw,5rem)] leading-[1] tracking-tight">
              Trajetória.
            </h2>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              7+ anos transitando entre fintech, cripto, branding e produto.
            </p>
          </div>

          <div className="relative md:col-span-8">
            {/* Linha vertical — alinhada com o dot (left-[5px] = metade do dot h-2.5 w-2.5) */}
            <m.span
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, amount: 0.05 }}
              transition={{ duration: 1.6, ease: [0.25, 0.46, 0.45, 0.94] }}
              style={{ transformOrigin: "top" }}
              className="absolute left-[5px] top-0 h-full w-px bg-border md:left-[5px]"
            />

            <ul className="flex flex-col">
              {experience.map((item, i) => (
                <m.li
                  key={item.company + item.period}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.55, delay: i * 0.06 }}
                  className="relative flex flex-col gap-1 border-b border-border py-6 pl-9 first:pt-0 sm:pl-10 md:flex-row md:items-center md:justify-between md:gap-8"
                >
                  {/* Dot — centrado sobre a linha */}
                  <span className="absolute left-0 top-[26px] h-[10px] w-[10px] -translate-x-[4.5px] rounded-full bg-accent first-of-type:top-0" />

                  <div className="min-w-0">
                    <p className="font-display truncate text-xl tracking-tight sm:text-2xl md:text-3xl">
                      {item.company}
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {item.role}
                    </p>
                  </div>
                  <span className="mt-1 shrink-0 text-xs uppercase tracking-[0.18em] text-muted-foreground md:mt-0">
                    {item.period}
                  </span>
                </m.li>
              ))}
            </ul>
          </div>
        </div>

        {/* Educação */}
        <div className="mt-20 grid grid-cols-1 gap-10 md:mt-32 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-4">
            <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Educação
            </span>
            <h3 className="font-section mt-4 text-3xl leading-[1] tracking-tight md:text-4xl">
              Formação.
            </h3>
          </div>
          <ul className="md:col-span-8">
            {education.map((item, i) => (
              <m.li
                key={item.course}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="flex flex-col gap-1 border-b border-border py-5 first:pt-0 sm:flex-row sm:items-center sm:justify-between"
              >
                <div className="min-w-0">
                  <p className="text-base">{item.course}</p>
                  <p className="mt-0.5 text-xs text-muted-foreground">
                    {item.institution}
                  </p>
                </div>
                <span className="mt-1 shrink-0 text-xs uppercase tracking-[0.18em] text-muted-foreground sm:mt-0">
                  {item.year}
                </span>
              </m.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
