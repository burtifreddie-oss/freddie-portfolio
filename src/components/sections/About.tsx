"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { skills } from "@/lib/experience";

const PHOTO = "/freddie-portrait.png";

const BIO_P1 = `Com mais de 7 anos de experiência no Design Visual, gosto de criar designs conceituais e eficazes nos resultados. Meu trabalho abrange desde a concepção de interfaces intuitivas até o desenvolvimento de materiais visuais estratégicos, utilizando dados e métricas.`;

const BIO_P2 = `Tenho expertise em design gráfico, UI/UX, branding e direção de arte, utilizando criatividade e pensamento estratégico para transformar conceitos em soluções visuais impactantes.`;

export function About() {
  return (
    <section
      id="sobre"
      className="relative w-full border-t border-border px-5 py-16 sm:px-6 md:px-10 md:py-40"
    >
      <div className="mx-auto grid w-full max-w-[1400px] grid-cols-1 gap-10 md:grid-cols-12 md:gap-16">

        {/* Foto */}
        <div className="md:col-span-5">
          <motion.div
            initial={{ opacity: 0, scale: 1.02 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative w-full overflow-hidden rounded-2xl border border-border bg-card"
            style={{ aspectRatio: "4/5" }}
          >
            <Image
              src={PHOTO}
              alt="Freddie Burti"
              fill
              quality={90}
              sizes="(max-width: 768px) 100vw, (max-width: 1400px) 42vw, 590px"
              className="object-cover object-[center_15%]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/5 to-transparent" />
            <div className="absolute inset-0 flex items-end p-6 md:p-10">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-white/50">
                  02 — Sobre
                </p>
                <p
                  className="mt-2 text-3xl leading-[1] tracking-tight text-white md:text-5xl"
                  style={{ fontFamily: "Aspekta", fontWeight: 700 }}
                >
                  Freddie
                  <br />
                  Burti.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bio */}
        <div className="flex flex-col justify-start md:col-span-7">
          <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Bio
          </span>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.1 }}
            className="mt-5 text-base leading-relaxed text-foreground/90 sm:text-lg"
          >
            {BIO_P1}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.22 }}
            className="mt-5 text-base leading-relaxed text-foreground/90 sm:text-lg"
          >
            {BIO_P2}
          </motion.p>

          <div className="mt-10 md:mt-12">
            <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Skills
            </span>
            <div className="mt-4 flex flex-wrap gap-2">
              {skills.map((skill, i) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: i * 0.04 }}
                >
                  <Badge variant="outline">{skill}</Badge>
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
