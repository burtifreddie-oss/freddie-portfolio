"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const PASSWORD = "cobli2025";
const SESSION_KEY = "cobli_unlocked";

// ── Placeholder de imagem ─────────────────────────────────────
function ImagePlaceholder({ label, aspect = "16/9" }: { label: string; aspect?: string }) {
  return (
    <div
      className="flex w-full items-center justify-center rounded-lg bg-card border border-border"
      style={{ aspectRatio: aspect }}
    >
      <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{label}</p>
    </div>
  );
}

// ── Planilha fictícia ─────────────────────────────────────────
function SpreadsheetPreview() {
  const rows = [
    { nome: "Ana Souza",       email: "ana.souza@cobli.com.br",      horario: "08:12",  apresentacao: "Apresentação Cobli — Completa" },
    { nome: "Rafael Mendes",   email: "rafael.mendes@cobli.com.br",  horario: "08:47",  apresentacao: "Cobli Cam — Monitoramento" },
    { nome: "Juliana Costa",   email: "juliana.costa@cobli.com.br",  horario: "09:03",  apresentacao: "Apresentação Cobli — Completa" },
    { nome: "Bruno Alves",     email: "bruno.alves@cobli.com.br",    horario: "09:31",  apresentacao: "ROI e Resultados" },
    { nome: "Fernanda Lima",   email: "fernanda.lima@cobli.com.br",  horario: "10:14",  apresentacao: "Apresentação Cobli — Completa" },
    { nome: "Carlos Pereira",  email: "carlos.pereira@cobli.com.br", horario: "10:52",  apresentacao: "Cobli Enterprise — Proposta" },
    { nome: "Mariana Rocha",   email: "mariana.rocha@cobli.com.br",  horario: "11:07",  apresentacao: "Cobli Cam — Monitoramento" },
    { nome: "Thiago Barros",   email: "thiago.barros@cobli.com.br",  horario: "11:43",  apresentacao: "ROI e Resultados" },
    { nome: "Patrícia Nunes",  email: "patricia.nunes@cobli.com.br", horario: "13:05",  apresentacao: "Apresentação Cobli — Completa" },
    { nome: "Diego Ferreira",  email: "diego.ferreira@cobli.com.br", horario: "13:38",  apresentacao: "Cobli Enterprise — Proposta" },
    { nome: "Larissa Gomes",   email: "larissa.gomes@cobli.com.br",  horario: "14:12",  apresentacao: "Cobli Cam — Monitoramento" },
    { nome: "Eduardo Martins", email: "eduardo.martins@cobli.com.br",horario: "14:55",  apresentacao: "Apresentação Cobli — Completa" },
  ];

  return (
    <div className="w-full overflow-hidden rounded-xl border border-border bg-white font-sans text-[13px] shadow-sm">
      {/* Barra de título estilo Google Sheets */}
      <div className="flex items-center gap-3 border-b border-[#e2e2de] bg-[#f8f9fa] px-4 py-2.5">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        </div>
        <span className="text-xs text-[#5f6368]">rastreamento-hub.sheets</span>
      </div>

      {/* Cabeçalho das colunas */}
      <div className="grid border-b border-[#e2e2de] bg-[#f8f9fa]" style={{ gridTemplateColumns: "2fr 2.5fr 1fr 2.5fr" }}>
        {["Nome", "E-mail", "Horário", "Apresentação"].map((col) => (
          <div key={col} className="border-r border-[#e2e2de] px-3 py-2 text-[11px] font-semibold uppercase tracking-wider text-[#5f6368] last:border-r-0">
            {col}
          </div>
        ))}
      </div>

      {/* Linhas */}
      {rows.map((row, i) => (
        <div
          key={i}
          className="grid border-b border-[#e2e2de] last:border-b-0"
          style={{ gridTemplateColumns: "2fr 2.5fr 1fr 2.5fr", background: i % 2 === 0 ? "#fff" : "#f8f9fa" }}
        >
          <div className="border-r border-[#e2e2de] px-3 py-2 text-[#1a1a1a]">{row.nome}</div>
          <div className="border-r border-[#e2e2de] px-3 py-2 text-[#5f6368]">{row.email}</div>
          <div className="border-r border-[#e2e2de] px-3 py-2 text-[#1a1a1a]">{row.horario}</div>
          <div className="px-3 py-2 text-[#1a1a1a]">{row.apresentacao}</div>
        </div>
      ))}
    </div>
  );
}

// ── Seção com label à esquerda e corpo à direita ──────────────
function CaseSection({
  label,
  children,
  tinted,
}: {
  label: string;
  children: React.ReactNode;
  tinted?: boolean;
}) {
  return (
    <div className={tinted ? "bg-card" : "bg-background"}>
      <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 md:px-10">
        <div className="grid grid-cols-1 gap-6 py-16 md:grid-cols-12 md:gap-12 md:py-24">
          <div className="md:col-span-4">
            <span className="text-base font-light uppercase tracking-[0.2em] text-muted-foreground">
              {label}
            </span>
          </div>
          <div className="md:col-span-8 flex flex-col gap-6">{children}</div>
        </div>
      </div>
    </div>
  );
}

// ── Carrossel marquee de slides ───────────────────────────────
const SLIDES = Array.from({ length: 10 }, (_, i) => `/cobli-slide-${i + 1}.png`);

function SlideMarquee() {
  const doubled = [...SLIDES, ...SLIDES];
  return (
    <div
      className="relative mt-8 w-full overflow-hidden rounded-2xl md:mt-12"
      style={{ backgroundColor: "#03082A", paddingTop: "clamp(20px, 3vw, 48px)", paddingBottom: "clamp(20px, 3vw, 48px)" }}
    >
      {/* Fade nas bordas */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24" style={{ background: "linear-gradient(to right, #03082A, transparent)" }} />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24" style={{ background: "linear-gradient(to left, #03082A, transparent)" }} />
      <style>{`
        @keyframes cobli-marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .cobli-marquee-track {
          display: flex;
          width: max-content;
          animation: cobli-marquee 40s linear infinite;
          will-change: transform;
        }
        .cobli-marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>
      <div className="cobli-marquee-track" style={{ gap: "12px", paddingLeft: "12px" }}>
        {doubled.map((src, i) => (
          <div
            key={i}
            className="relative shrink-0 overflow-hidden rounded-lg"
            style={{ width: "clamp(200px, 28vw, 420px)", aspectRatio: "16/9" }}
          >
            <Image
              src={src}
              alt={`Slide ${(i % 10) + 1}`}
              fill
              className="object-cover"
              sizes="420px"
              priority={i < 4}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Conteúdo do case (após unlock) ───────────────────────────
function CaseContent() {
  return (
    <>
      <Header />
      <main className="relative z-10">

        {/* ── Topo ── */}
        <div className="mx-auto w-full max-w-[1400px] px-4 pb-10 pt-24 sm:px-6 md:px-10 md:pb-16 md:pt-40">
          <Link
            href="/#projetos"
            className="mb-8 inline-flex min-h-[44px] items-center gap-2 text-base uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-foreground md:mb-10"
          >
            <ArrowLeft className="h-3 w-3" />
            Voltar
          </Link>

          <div className="mb-2 text-base text-muted-foreground">2026</div>
          <h1
            className="font-display leading-[0.95] tracking-tight text-foreground"
            style={{ fontSize: "clamp(2.5rem, 8vw, 5rem)", fontWeight: 400 }}
          >
            Cobli
          </h1>

          {/* Carrossel marquee — slides Cobli */}
          <SlideMarquee />

          {/* Meta row */}
          <div className="mt-8 grid grid-cols-1 gap-6 border-t border-border pt-8 sm:grid-cols-2 md:mt-12 md:grid-cols-4 md:gap-12 md:pt-12">
            <div>
              <p className="text-base font-semibold uppercase tracking-[0.15em] text-foreground">Materiais de vendas</p>
            </div>
            <div className="sm:col-span-1 md:col-span-3">
              <p className="mb-2 text-base font-semibold uppercase tracking-[0.15em] text-white">O que foi feito</p>
              <p className="text-base leading-relaxed text-muted-foreground">
                Sistema de templates de apresentação de vendas, hub centralizado de materiais e camada de dados para rastreamento de uso.
              </p>
            </div>
          </div>
        </div>

        {/* ── 1. Contexto ── */}
        <CaseSection label="Contexto" tinted>
          <p className="text-base leading-relaxed text-foreground/80 sm:text-lg">
            O time de vendas usava apresentações desatualizadas, sem padrão visual e sem padrão de conteúdo em reuniões com clientes. Cada vendedor construía ou pedia seu próprio material, gerando inconsistência de marca em um dos pontos de contato mais importantes com o cliente.
          </p>
        </CaseSection>

        {/* ── 2. O desafio ── */}
        <CaseSection label="O desafio">
          <p className="text-base leading-relaxed text-foreground/80 sm:text-lg">
            Dois problemas encadeados, não um só:
          </p>
          <ul className="flex flex-col gap-4">
            <li className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-muted-foreground/40" />
              <p className="text-base leading-relaxed text-foreground/80">
                <strong className="text-foreground font-medium">Consistência de marca:</strong> as apresentações não refletiam o padrão visual nem o tom de voz da empresa.
              </p>
            </li>
            <li className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-muted-foreground/40" />
              <p className="text-base leading-relaxed text-foreground/80">
                <strong className="text-foreground font-medium">Gestão de arquivos:</strong> materiais espalhados no Drive, cada vendedor salvando em uma pasta diferente. Isso gerava retrabalho constante — pessoas pedindo pro marketing recriar apresentações que já existiam, só que ninguém sabia onde estavam.
              </p>
            </li>
          </ul>
          <p className="text-base leading-relaxed text-foreground/80 sm:text-lg">
            Esse segundo ponto é o que torna o case mais interessante: não era só um problema de design, era um problema de processo e descoberta de informação que o design (e depois a plataforma) resolveu.
          </p>
        </CaseSection>

        {/* ── 3. Decisões de design ── */}
        <CaseSection label="Decisões de design" tinted>
          {/* 3.1 */}
          <div className="flex flex-col gap-4">
            <h3 className="text-base font-semibold uppercase tracking-[0.15em] text-foreground">
              Sistema de templates
            </h3>
            <p className="text-base leading-relaxed text-foreground/80">
              Criação de uma estrutura de templates com variações, cobrindo os principais formatos de apresentação usados pelos vendedores.
            </p>
            <Image
              src="/cobli-templates.png"
              alt="Templates Cobli — capa, slide de conteúdo, slide de dados"
              width={1600}
              height={900}
              quality={90}
              className="h-auto w-full rounded-lg"
              sizes="(max-width: 768px) 100vw, (max-width: 1400px) 100vw, 1400px"
            />
          </div>

          {/* 3.2 */}
          <div className="flex flex-col gap-4 pt-8 border-t border-border">
            <h3 className="text-base font-semibold uppercase tracking-[0.15em] text-foreground">
              Reformulação de conteúdo, não só visual
            </h3>
            <p className="text-base leading-relaxed text-foreground/80">
              O trabalho não foi só reskinning. Tom de voz e estrutura de conteúdo também foram revistos junto com o padrão visual — isso é uma decisão que mostra profundidade além do "deixar bonito".
            </p>
          </div>

          {/* 3.3 */}
          <div className="flex flex-col gap-4 pt-8 border-t border-border">
            <h3 className="text-base font-semibold uppercase tracking-[0.15em] text-foreground">
              A plataforma (hub)
            </h3>
            <p className="text-base leading-relaxed text-foreground/80">
              Identificado o problema de dispersão de arquivos, a solução foi centralizar tudo em uma plataforma única, com um link único de acesso — eliminando a lógica de pastas soltas no Drive.
            </p>
            <div className="w-full overflow-hidden rounded-lg" style={{ aspectRatio: "16/9" }}>
              <video
                src="/cobli-hub.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="h-full w-full object-cover"
                style={{ transform: "scale(1.13)", transformOrigin: "center center" }}
                ref={(el) => { if (el) el.playbackRate = 2; }}
              />
            </div>
          </div>

          {/* 3.4 */}
          <div className="flex flex-col gap-4 pt-8 border-t border-border">
            <h3 className="text-base font-semibold uppercase tracking-[0.15em] text-foreground">
              Camada de dados
            </h3>
            <p className="text-base leading-relaxed text-foreground/80">
              Implementação de uma planilha de rastreamento: nome de quem acessava, horário e qual apresentação estava sendo usada. Isso permitiu identificar os materiais mais usados pelos vendedores e quem chamar para coletar feedback — decisão de design orientada por dado de uso real, não achismo.
            </p>
            <SpreadsheetPreview />
          </div>
        </CaseSection>

        {/* ── 4. Resultado ── */}
        <CaseSection label="Resultado">
          <ul className="flex flex-col gap-8">
            <li className="flex gap-4 border-b border-border pb-8">
              <span className="mt-3 h-2 w-2 shrink-0 rounded-full bg-foreground/30" />
              <p className="leading-snug text-foreground" style={{ fontSize: "24px", letterSpacing: "-0.02em" }}>
                <strong className="font-semibold">Aumento de 37%</strong> de adesão aos materiais.
              </p>
            </li>
            <li className="flex gap-4 border-b border-border pb-8">
              <span className="mt-3 h-2 w-2 shrink-0 rounded-full bg-foreground/30" />
              <p className="leading-snug text-foreground" style={{ fontSize: "24px", letterSpacing: "-0.02em" }}>
                <strong className="font-semibold">Redução de retrabalho</strong> do time de marketing (materiais deixaram de ser recriados do zero por estarem perdidos).
              </p>
            </li>
            <li className="flex gap-4 border-b border-border pb-8">
              <span className="mt-3 h-2 w-2 shrink-0 rounded-full bg-foreground/30" />
              <p className="leading-snug text-foreground" style={{ fontSize: "24px", letterSpacing: "-0.02em" }}>
                <strong className="font-semibold">Validação</strong> via dado de uso (planilha), não só opinião subjetiva.
              </p>
            </li>
            <li className="flex gap-4">
              <span className="mt-3 h-2 w-2 shrink-0 rounded-full bg-foreground/30" />
              <p className="leading-snug text-foreground" style={{ fontSize: "24px", letterSpacing: "-0.02em" }}>
                <strong className="font-semibold">Autonomia</strong> para os vendedores montarem seus próprios materiais.
              </p>
            </li>
          </ul>
          <ImagePlaceholder label="Antes / depois — apresentação antiga vs. novo padrão" aspect="16/7" />
        </CaseSection>

        {/* ── 5. Próximos passos ── */}
        <CaseSection label="Próximos passos" tinted>
          <p className="text-base leading-relaxed text-foreground/80 sm:text-lg">
            O hub nasceu focado em materiais de vendas, mas abriu precedente para expansão: centralizar também materiais internos e conteúdos ricos da empresa, não só apresentações comerciais.
          </p>
        </CaseSection>

        {/* ── Próximo projeto ── */}
        <div className="mx-auto mt-16 w-full max-w-[1400px] border-t border-border px-4 pt-8 pb-16 sm:px-6 md:mt-32 md:px-10 md:pt-16 md:pb-32">
          <Link
            href="/projetos/inter"
            className="group flex flex-col gap-3 transition-opacity hover:opacity-90"
          >
            <span className="text-base uppercase tracking-[0.2em] text-muted-foreground">
              Próximo projeto
            </span>
            <span
              className="font-display flex flex-wrap items-center gap-3 leading-[1] tracking-tight transition-colors group-hover:text-accent md:gap-4"
              style={{ fontSize: "clamp(2rem, 8vw, 7rem)" }}
            >
              Inter
              <ArrowUpRight className="h-6 w-6 sm:h-10 sm:w-10 md:h-16 md:w-16" />
            </span>
          </Link>
        </div>

      </main>
      <Footer />
    </>
  );
}

// ── Gate de senha ─────────────────────────────────────────────
export default function CobliPage() {
  const [value, setValue] = useState("");
  const [unlocked, setUnlocked] = useState(false);
  const [error, setError] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (sessionStorage.getItem(SESSION_KEY) === "1") {
      setUnlocked(true);
    } else {
      inputRef.current?.focus();
    }
  }, []);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (value === PASSWORD) {
      sessionStorage.setItem(SESSION_KEY, "1");
      setUnlocked(true);
      setError(false);
    } else {
      setError(true);
      setValue("");
      inputRef.current?.focus();
    }
  }

  if (unlocked) return <CaseContent />;

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black px-6">
      <form onSubmit={handleSubmit} className="flex w-full max-w-xs flex-col gap-6">
        <input
          ref={inputRef}
          type="password"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
            setError(false);
          }}
          placeholder="Senha"
          className="w-full border-b border-white/50 bg-transparent py-3 text-center text-sm text-white placeholder-white/40 outline-none transition-colors focus:border-white"
          autoComplete="off"
        />
        {error && (
          <p className="text-center text-xs text-white/60">Senha incorreta</p>
        )}
      </form>

      <Link
        href="/#projetos"
        className="mt-12 text-xs text-white/50 transition-colors hover:text-white"
      >
        ← Voltar
      </Link>
    </main>
  );
}
