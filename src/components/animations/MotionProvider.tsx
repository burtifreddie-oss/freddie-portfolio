"use client";

import { LazyMotion } from "framer-motion";

// Carrega as features do Framer Motion de forma assíncrona
// sem bloquear o carregamento inicial da página
const loadFeatures = () =>
  import("framer-motion").then((mod) => mod.domAnimation);

export function MotionProvider({ children }: { children: React.ReactNode }) {
  return (
    <LazyMotion features={loadFeatures}>
      {children}
    </LazyMotion>
  );
}
