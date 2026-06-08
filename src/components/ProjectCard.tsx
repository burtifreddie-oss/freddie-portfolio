"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { m, AnimatePresence } from "framer-motion";
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
    <m.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{
        duration: 0.65,
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: (index % 4) * 0.07,
      }}
      className={cn("group relative", className)}
    >
      <Link
        href={`/projetos/${project.slug}`}
        className="block overflow-hidden rounded-lg bg-[#111111]"
      >
        {/* Card — imagem preenche tudo, sem footer de texto */}
        <div
          className="relative aspect-[16/9] w-full overflow-hidden"
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
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover transition-transform duration-700 will-change-transform group-hover:scale-[1.04]"
            />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 via-zinc-900 to-black" />
          )}

          {/* Overlay escuro suave */}
          <div className="absolute inset-0 bg-black/10 transition-opacity duration-500 group-hover:bg-black/0" />

          {/* Gradiente inferior para os metadados */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

          {/* Tag de categoria — topo esquerdo */}
          <div className="absolute left-4 top-4 z-10">
            <span className="rounded-sm bg-black/50 px-2 py-1 text-[10px] font-medium uppercase tracking-[0.15em] text-white/70 backdrop-blur-sm">
              {project.category}
            </span>
          </div>

          {/* Metadados — base do card */}
          <div className="absolute bottom-0 left-0 right-0 z-10 flex items-end justify-between px-4 pb-4 sm:px-5 sm:pb-5">
            <p className="text-sm font-semibold leading-tight tracking-tight text-white sm:text-base">
              {project.title}
            </p>
            <span className="shrink-0 text-[11px] font-light text-white/50">
              {project.year}
            </span>
          </div>

          {/* Cursor follower */}
          <AnimatePresence>
            {hovered && (
              <m.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.18, ease: "easeOut" }}
                className="pointer-events-none absolute z-20 flex items-center gap-2 rounded-full bg-white/90 px-5 py-3 text-sm font-medium text-black backdrop-blur-sm"
                style={{
                  left: pos.x,
                  top: pos.y,
                  transform: "translate(-50%, -50%)",
                }}
              >
                Ver projeto
                <ArrowUpRight className="h-4 w-4" />
              </m.span>
            )}
          </AnimatePresence>
        </div>
      </Link>
    </m.div>
  );
}
