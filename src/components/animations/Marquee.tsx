"use client";

import { cn } from "@/lib/utils";

type Props = {
  items: string[];
  reverse?: boolean;
  className?: string;
  separator?: React.ReactNode;
};

export function Marquee({ items, reverse, className, separator }: Props) {
  const repeated = [...items, ...items];
  return (
    <div
      className={cn(
        "marquee-container relative flex w-full overflow-hidden",
        className
      )}
    >
      <div
        className={cn(
          "flex shrink-0 items-center gap-12 pr-12",
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        )}
      >
        {repeated.map((item, i) => (
          <span key={i} className="flex shrink-0 items-center gap-12">
            <span className="font-display text-6xl tracking-tight md:text-8xl">
              {item}
            </span>
            <span aria-hidden className="text-accent">
              {separator ?? "✦"}
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
