"use client";

import { m } from "framer-motion";
import { cn } from "@/lib/utils";

type Props = {
  children: string;
  className?: string;
  as?: "p" | "h2" | "h3" | "span";
  delay?: number;
};

export function TextReveal({
  children,
  className,
  as = "p",
  delay = 0,
}: Props) {
  const lines = children.split("\n");
  const MotionTag = m[as];

  return (
    <MotionTag className={cn(className)}>
      {lines.map((line, i) => (
        <span
          key={i}
          className="block overflow-hidden"
          style={{ lineHeight: "1.2" }}
        >
          <m.span
            className="block"
            initial={{ y: "100%" }}
            whileInView={{ y: "0%" }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.9,
              ease: [0.25, 0.46, 0.45, 0.94],
              delay: delay + i * 0.08,
            }}
          >
            {line}
          </m.span>
        </span>
      ))}
    </MotionTag>
  );
}
