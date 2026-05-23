"use client";

import Image from "next/image";
import { m } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { skills, experience, education } from "@/lib/experience";

const PHOTO = "/freddie-portrait.png";

const BIO_P1 = `Com mais de 8 anos de experiência no Design Visual, gosto de criar designs conceituais e eficazes nos resultados. Meu trabalho abrange desde a concepção de interfaces intuitivas até o desenvolvimento de materiais visuais estratégicos, utilizando dados e métricas.`;

const BIO_P2 = `Tenho expertise em design gráfico, UI/UX, branding e direção de arte, utilizando criatividade e pensamento estratégico para transformar conceitos em soluções visuais impactantes.`;

export function AboutExperience() {
  return (
    <section
      id="sobre"
      className="relative z-20 w-full bg-background px-4 sm:px-6 md:rounded-t-[2.5rem] md:px-10"
    >
      <div className="mx-auto w-full max-w-[1400px]">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:gap-16">

          {/* ── Foto sticky ── */}
          <div className="md:col-span-4">
            <div className="sticky top-24 pb-4 pt-8 md:pb-24 md:pt-24">
              <m.div
                initial={{ opacity: 0, scale: 1.02 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="relative w-full overflow-hidden rounded-2xl border border-border bg-card md:w-[80%]"
                style={{ aspectRatio: "4/5" }}
              >
                <Image
                  src={PHOTO}
                  alt="Freddie Burti"
                  fill
                  priority
                  quality={90}
                  sizes="(max-width: 768px) 100vw, (max-width: 1400px) 42vw, 590px"
                  className="object-cover object-[center_15%]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/5 to-transparent" />
                <div className="absolute inset-0 flex items-end p-6 md:p-10">
                  <div>
                    <p
                      className="text-3xl font-bold leading-[1] tracking-tight text-white md:text-5xl"
                    >
                      Freddie
                      <br />
                      Burti.
                    </p>
                  </div>
                </div>
              </m.div>
            </div>
          </div>

          {/* ── Conteúdo scrollável ── */}
          <div className="flex flex-col md:col-span-8">

            {/* Bio */}
            <div id="bio" className="flex flex-col pb-16 pt-8 md:py-24">
              <h2 className="text-4xl font-bold leading-[1] tracking-tight">
                Sobre
              </h2>

              <m.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.1 }}
                className="mt-8 text-base leading-relaxed text-foreground/90 sm:text-lg"
              >
                {BIO_P1}
              </m.p>

              <m.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.22 }}
                className="mt-4 text-base leading-relaxed text-foreground/90 sm:text-lg"
              >
                {BIO_P2}
              </m.p>

              <div className="mt-10 md:mt-12">
                <span className="text-xs font-light uppercase tracking-[0.2em] text-muted-foreground">
                  Skills
                </span>
                <div className="mt-4 flex flex-wrap gap-2">
                  {skills.map((skill, i) => (
                    <m.span
                      key={skill}
                      initial={{ opacity: 0, y: 8 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.35, delay: i * 0.04 }}
                    >
                      <Badge variant="outline">{skill}</Badge>
                    </m.span>
                  ))}
                </div>
              </div>
            </div>

            {/* Experiência */}
            <div id="experiencia" className="border-t border-border py-16 md:py-24">
              <h2 className="text-2xl font-light leading-[1] tracking-tight" style={{ color: "#888888" }}>
                Experiência
              </h2>

              <div className="mt-16">
                <ul className="flex flex-col">
                  {experience.map((item, i) => (
                    <m.li
                      key={item.company + item.period}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 0.55, delay: i * 0.06 }}
                      className="flex flex-col gap-1 border-b border-border py-6 first:pt-0 sm:flex-row sm:items-center sm:justify-between sm:gap-8"
                    >
                      <div className="min-w-0">
                        {/* company — semibold/600 */}
                        <p className="font-display truncate text-xl font-semibold tracking-tight sm:text-2xl md:text-3xl">
                          {item.company}
                        </p>
                        {/* role — regular/400 */}
                        <p className="mt-1 text-sm font-normal text-muted-foreground">
                          {item.role}
                        </p>
                      </div>
                      {/* period — light/300 */}
                      <span className="mt-1 shrink-0 text-xs font-light uppercase tracking-[0.18em] text-muted-foreground sm:mt-0">
                        {item.period}
                      </span>
                    </m.li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Educação */}
            <div className="pb-16 pt-16 md:pb-24 md:pt-16">
              <h2 className="text-2xl font-light leading-[1] tracking-tight" style={{ color: "#888888" }}>
                Educação
              </h2>
              <ul className="mt-16">
                {education.map((item, i) => (
                  <m.li
                    key={item.course}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.06 }}
                    className="flex flex-col gap-2 border-b border-border py-6 first:pt-0 sm:flex-row sm:items-center sm:justify-between"
                  >
                    <div className="min-w-0">
                      {/* course — medium/500 */}
                      <p className="text-base font-medium">{item.course}</p>
                      {/* institution — light/300 */}
                      <p className="mt-0.5 text-xs font-light text-muted-foreground">
                        {item.institution}
                      </p>
                    </div>
                    {/* year — light/300 */}
                    <span className="mt-1 shrink-0 text-xs font-light uppercase tracking-[0.18em] text-muted-foreground sm:mt-0">
                      {item.year}
                    </span>
                  </m.li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
