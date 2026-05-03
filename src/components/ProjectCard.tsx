"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/projects";
import { cn } from "@/lib/utils";

type Props = {
  project: Project;
  index: number;
  className?: string;
};

export function ProjectCard({ project, index, className }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: (index % 2) * 0.1,
      }}
      className={cn("group relative", className)}
    >
      <Link
        href={`/projetos/${project.slug}`}
        className="block overflow-hidden rounded-xl border border-border bg-card transition-colors duration-500 group-hover:border-accent/50 sm:rounded-2xl"
      >
        {/* Imagem */}
        <div className="relative aspect-[4/3] w-full overflow-hidden bg-muted">
          {project.coverImage ? (
            <Image
              src={project.coverImage}
              alt={project.title}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 700px"
              className="object-cover grayscale transition-all duration-700 will-change-transform group-hover:scale-[1.03] group-hover:grayscale-0"
            />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 via-zinc-900 to-black" />
          )}

          {/* Gradiente inferior */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

          {/* Botão seta */}
          <div className="absolute bottom-4 right-4 sm:bottom-5 sm:right-5">
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-background/60 backdrop-blur-md transition-all duration-500 group-hover:border-accent group-hover:bg-accent group-hover:text-background sm:h-10 sm:w-10">
              <ArrowUpRight className="h-4 w-4" />
            </span>
          </div>
        </div>

        {/* Rodapé do card */}
        <div className="flex items-center justify-between gap-4 px-5 py-5 sm:px-6 sm:py-6">
          <div className="min-w-0">
            <p className="font-display truncate text-xl tracking-tight sm:text-2xl md:text-3xl">
              {project.title}
            </p>
            <p className="mt-1 truncate text-xs text-muted-foreground">
              {project.category}
            </p>
          </div>
          <span className="shrink-0 text-xs text-muted-foreground">{project.year}</span>
        </div>
      </Link>
    </motion.div>
  );
}
