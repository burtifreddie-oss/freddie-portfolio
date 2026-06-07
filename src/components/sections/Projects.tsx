"use client";

import { m } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/projects";
import { ProjectCard } from "@/components/ProjectCard";

export function Projects() {
  const featured = projects;

  return (
    <section id="projetos" className="relative w-full pb-16 pt-8 md:pb-24 md:pt-10">

      {/* Cabeçalho */}
      <div className="mx-auto mb-8 flex w-full max-w-[1400px] items-end justify-between gap-6 px-5 sm:px-6 md:mb-12 md:px-10">
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col gap-2"
        >
          <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Projetos selecionados
          </span>
        </m.div>
        <m.span
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="hidden h-px max-w-xs flex-1 bg-border lg:block"
        />
      </div>

      {/* Grid — 3 colunas no desktop */}
      <div className="mx-auto w-full max-w-[1400px] px-5 sm:px-6 md:px-10">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:gap-8">
          {featured.map((project, i) => (
            <ProjectCard
              key={project.slug}
              project={project}
              index={i}
            />
          ))}
        </div>
      </div>

      {/* CTA Behance */}
      <div className="mx-auto mt-10 flex w-full max-w-[1400px] justify-center px-5 sm:px-6 md:mt-14 md:px-10">
        <a
          href="https://www.behance.net/freddieab"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-[48px] items-center gap-2 rounded-full border border-border px-6 py-3 text-sm transition-all duration-300 hover:border-accent hover:bg-accent hover:text-background"
        >
          Ver mais no Behance
          <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
}
