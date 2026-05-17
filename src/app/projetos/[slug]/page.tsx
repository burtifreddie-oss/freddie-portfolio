import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { projects, getProject } from "@/lib/projects";
import type { Block, Project } from "@/lib/projects";
import type { Metadata } from "next";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Projeto não encontrado" };
  return {
    title: `${project.title} — Freddie Burti`,
    description: project.description,
  };
}

// ── Block renderers ───────────────────────────────────────────

function BlockImageFull({ src, alt }: { src: string; alt?: string }) {
  return (
    <div className="w-full">
      <Image
        src={src}
        alt={alt ?? ""}
        width={1600}
        height={900}
        quality={90}
        className="h-auto w-full rounded-xl sm:rounded-2xl"
        sizes="(max-width: 768px) 100vw, (max-width: 1400px) 100vw, 1400px"
      />
    </div>
  );
}

function BlockImageSmall({ src, alt }: { src: string; alt?: string }) {
  return (
    <div className="flex justify-center">
      <Image
        src={src}
        alt={alt ?? ""}
        width={200}
        height={200}
        quality={90}
        className="h-auto rounded-xl object-contain"
        sizes="200px"
      />
    </div>
  );
}

function BlockImageRow({ images, cols = 2 }: { images: string[]; cols?: 2 | 3 | 4 }) {
  const gridCols =
    cols === 4 ? "grid-cols-2 sm:grid-cols-4" :
    cols === 3 ? "grid-cols-1 sm:grid-cols-3" :
    "grid-cols-1 sm:grid-cols-2";

  return (
    <div className={`grid gap-4 ${gridCols}`}>
      {images.map((src, i) => (
        <Image
          key={i}
          src={src}
          alt={`imagem ${i + 1}`}
          width={800}
          height={600}
          quality={90}
          className="h-auto w-full rounded-xl"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 500px"
        />
      ))}
    </div>
  );
}

function BlockTextSection({ title, body }: { title: string; body?: string }) {
  return (
    <div className="grid grid-cols-1 gap-4 py-8 md:grid-cols-12 md:gap-12 md:py-12">
      <div className={body ? "md:col-span-4" : "md:col-span-8"}>
        {/* section title — semibold/600 */}
        <h2 className="font-display text-xl font-semibold tracking-tight sm:text-2xl md:text-3xl">{title}</h2>
      </div>
      {body && (
        <div className="md:col-span-8">
          <p className="text-base leading-relaxed text-muted-foreground md:text-lg">{body}</p>
        </div>
      )}
    </div>
  );
}

function BlockTextBilingual({
  ptTitle,
  enTitle,
  ptBody,
  enBody,
}: {
  ptTitle: string;
  enTitle: string;
  ptBody: string;
  enBody: string;
}) {
  return (
    <div className="grid grid-cols-1 gap-10 py-12 md:grid-cols-2 md:gap-16">
      <div>
        <h2 className="font-display mb-4 text-2xl font-semibold tracking-tight md:text-3xl">{ptTitle}</h2>
        <p className="text-base font-normal leading-relaxed text-muted-foreground">{ptBody}</p>
      </div>
      <div>
        <h2 className="font-display mb-4 text-2xl font-semibold tracking-tight text-muted-foreground/60 md:text-3xl">
          {enTitle}
        </h2>
        <p className="text-base font-normal leading-relaxed text-muted-foreground/60">{enBody}</p>
      </div>
    </div>
  );
}

function BlockToolbox({ items }: { items: string[] }) {
  return (
    <div className="py-12">
      <h2 className="font-display mb-6 text-2xl font-semibold tracking-tight md:text-3xl">Toolbox</h2>
      <div className="flex flex-wrap gap-3">
        {items.map((item) => (
          <span
            key={item}
            className="rounded-full border border-border px-4 py-2 text-sm text-muted-foreground"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

function renderBlock(block: Block, i: number) {
  switch (block.type) {
    case "image-full":
      return <BlockImageFull key={i} src={block.src} alt={block.alt} />;
    case "image-small":
      return <BlockImageSmall key={i} src={block.src} alt={block.alt} />;
    case "image-row":
      return <BlockImageRow key={i} images={block.images} cols={block.cols} />;
    case "text-section":
      return <BlockTextSection key={i} title={block.title} body={block.body} />;
    case "text-bilingual":
      return (
        <BlockTextBilingual
          key={i}
          ptTitle={block.ptTitle}
          enTitle={block.enTitle}
          ptBody={block.ptBody}
          enBody={block.enBody}
        />
      );
    case "toolbox":
      return <BlockToolbox key={i} items={block.items} />;
  }
}

// ── Page ──────────────────────────────────────────────────────

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const next: Project = projects[(currentIndex + 1) % projects.length];

  return (
    <>
      <Header />
      <main className="relative z-10 pb-16 pt-24 md:pb-40 md:pt-40">

        {/* ── Page header ── */}
        <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 md:px-10">
          <Link
            href="/#projetos"
            className="mb-8 inline-flex min-h-[44px] items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-foreground md:mb-12"
          >
            <ArrowLeft className="h-3 w-3" />
            Voltar
          </Link>

          <div className="flex flex-col gap-4 border-b border-border pb-8 md:gap-6 md:pb-16">
            <div className="flex flex-wrap items-center gap-4">
              <span className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground">
                {project.category}
              </span>
              <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                {project.year}
              </span>
            </div>
            {/* project title — extrabold/800 */}
            <h1
              className="font-display leading-[0.93] tracking-tight"
              style={{ fontSize: "clamp(2rem, 8vw, 4rem)", fontWeight: 400 }}
            >
              {project.title}
            </h1>
            {/* description — regular/400 */}
            <p className="max-w-2xl text-base font-normal leading-relaxed text-muted-foreground md:text-lg">
              {project.description}
            </p>
          </div>
        </div>

        {/* ── Blocks ── */}
        <div className="mx-auto mt-16 flex w-full max-w-[1400px] flex-col gap-8 px-4 sm:px-6 md:mt-24 md:gap-16 md:px-10">
          {project.blocks?.map((block, i) => renderBlock(block, i))}
        </div>


        {/* ── Next project ── */}
        <div className="mx-auto mt-16 w-full max-w-[1400px] border-t border-border px-4 pt-8 sm:px-6 md:mt-32 md:px-10 md:pt-16">
          <Link
            href={`/projetos/${next.slug}`}
            className="group flex flex-col gap-3 transition-opacity hover:opacity-90"
          >
            <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Próximo projeto
            </span>
            <span className="font-display flex flex-wrap items-center gap-3 text-[clamp(2rem,8vw,7rem)] leading-[1] tracking-tight transition-colors group-hover:text-accent md:gap-4">
              {next.title}
              <ArrowUpRight className="h-8 w-8 sm:h-12 sm:w-12 md:h-20 md:w-20" />
            </span>
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
