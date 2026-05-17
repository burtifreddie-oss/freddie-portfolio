"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "Projetos", href: "/#projetos" },
  { label: "Sobre", href: "/#sobre" },
  { label: "Experiência", href: "/#experiencia" },
  { label: "Contato", href: "/#contato" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "fixed left-0 right-0 top-0 z-50 transition-all duration-500",
          scrolled
            ? "border-b border-border bg-background/80 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent"
        )}
      >
        <div className="mx-auto flex h-16 w-full max-w-[1400px] items-center justify-between px-4 sm:px-6 md:h-20 md:px-10">
          <Link
            href="/"
            className="text-lg font-bold tracking-tight transition-colors hover:text-accent md:text-xl"
          >
            Freddie Burti
          </Link>

          {/* Desktop nav — links + pill buttons juntos */}
          <nav className="hidden items-center gap-6 md:flex lg:gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={
                  link.label === "Projetos"
                    ? (e) => {
                        e.preventDefault();
                        if (pathname === "/") {
                          window.scrollTo({ top: 0, behavior: "smooth" });
                        } else {
                          window.location.href = "/";
                        }
                      }
                    : undefined
                }
                className="link-underline text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}

            {/* Separador visual */}
            <span className="h-4 w-px bg-border" aria-hidden />

            <a
              href="https://www.linkedin.com/in/freddieburti/"
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              LinkedIn
            </a>
            <a
              href="/freddie-burti-cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Currículo
            </a>
          </nav>

          {/* Hamburger — touch target mínimo 44px */}
          <button
            type="button"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 md:hidden"
          >
            <span
              className={cn(
                "h-px w-6 bg-foreground transition-all duration-300",
                open && "translate-y-[5px] rotate-45"
              )}
            />
            <span
              className={cn(
                "h-px w-4 bg-foreground transition-all duration-300",
                open && "w-6 -translate-y-[3px] -rotate-45"
              )}
            />
          </button>
        </div>
      </header>

      {/* Mobile full-screen menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="fixed inset-0 z-40 flex flex-col bg-background pt-16 md:hidden"
          >
            <nav className="flex flex-1 flex-col justify-center px-5 sm:px-6">
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={
                    link.label === "Projetos"
                      ? (e) => {
                          e.preventDefault();
                          setOpen(false);
                          if (pathname === "/") {
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          } else {
                            window.location.href = "/";
                          }
                        }
                      : () => setOpen(false)
                  }
                  initial={{ y: 24, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.08 + i * 0.06, duration: 0.4 }}
                  className="font-display flex items-center gap-4 border-b border-border py-5 text-[clamp(1.5rem,6vw,3.5rem)] tracking-tight"
                >
                  <span className="text-xs text-muted-foreground">0{i + 1}</span>
                  {link.label}
                </motion.a>
              ))}

              {/* CTA buttons no mobile menu */}
              <motion.div
                initial={{ y: 24, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.35, duration: 0.4 }}
                className="mt-8 flex flex-wrap gap-8"
              >
                <a
                  href="https://www.linkedin.com/in/freddieburti/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="link-underline text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                >
                  LinkedIn
                </a>
                <a
                  href="/freddie-burti-cv.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="link-underline text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                >
                  Currículo
                </a>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
