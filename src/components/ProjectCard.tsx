"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/projects";
import { cn } from "@/lib/utils";

type Props = {
  project: Project;
  index: number;
  className?: string;
};

export function ProjectCard({ project, index, className }: Props) {
  const [hovered, setHovered] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  }

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
        <div
          className="relative aspect-[4/3] w-full overflow-hidden bg-muted"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onMouseMove={handleMove}
        >
          {project.coverImage ? (
            <Image
              src={project.coverImage}
              alt={project.title}
              fill
              quality={90}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 800px"
              className="object-cover grayscale transition-all duration-700 will-change-transform group-hover:scale-[1.03] group-hover:grayscale-0"
            />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 via-zinc-900 to-black" />
          )}

          {/* Gradiente inferior */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

          {/* Cursor follower */}
          <AnimatePresence>
            {hovered && (
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="pointer-events-none absolute z-10 flex items-center gap-2 rounded-full bg-foreground/90 px-5 py-3 text-sm font-medium text-background backdrop-blur-sm"
                style={{
                  left: pos.x,
                  top: pos.y,
                  transform: "translate(-50%, -50%)",
                }}
              >
                Ver Projeto
                <ArrowUpRight className="h-4 w-4" />
              </motion.span>
            )}
          </AnimatePresence>
        </div>

        {/* Rodapé do card */}
        <div className="flex items-center justify-between gap-4 px-4 py-4 sm:px-6 sm:py-6">
          <div className="min-w-0">
            {/* title — semibold/600 */}
            <p className="font-display truncate text-xl font-semibold tracking-tight sm:text-2xl md:text-3xl">
              {project.title}
            </p>
            {/* category — light/300 */}
            <p className="mt-1 truncate text-xs font-light text-muted-foreground">
              {project.category}
            </p>
          </div>
          {/* year — light/300 */}
          <span className="shrink-0 text-xs font-light text-muted-foreground">{project.year}</span>
        </div>
      </Link>
    </motion.div>
  );
}
