const BASE = "https://www.freddieburti.com.br/wp-content/uploads";

// ── Block types ────────────────────────────────────────────────
export type Block =
  | { type: "image-full"; src: string; alt?: string }
  | { type: "image-small"; src: string; alt?: string }
  | { type: "image-row"; images: string[]; cols?: 2 | 3 | 4 }
  | { type: "text-section"; title: string; body?: string }
  | { type: "text-bilingual"; ptTitle: string; enTitle: string; ptBody: string; enBody: string }
  | { type: "toolbox"; items: string[] };

export type Project = {
  slug: string;
  title: string;
  category: string;
  year: string;
  description: string;
  coverImage: string;
  internalImage?: string;
  disabled?: boolean;
  size?: "large" | "small";
  role?: string;
  responsibilities?: string;
  problem?: string;
  objectives?: string;
  progress?: string;
  blocks?: Block[];
};

// ── Projects ───────────────────────────────────────────────────
export const projects: Project[] = [
  {
    slug: "inter",
    title: "Inter",
    category: "Interface",
    year: "2025",
    description:
      "Campanha Orange Friday em parceria com o Banco Inter — descontos exclusivos para clientes Acerto, com pesquisa de benchmarking e interface orientada por dados.",
    coverImage: `/card-inter.png`,
    internalImage: `/capa-inter-interna.png`,
    size: "large",
    role: "Product Designer",
    responsibilities: "Interface design, benchmarking de competidores e desenvolvimento da campanha Orange Friday.",
    problem: "A Acerto precisava de uma campanha de Black Friday que se destacasse no mercado financeiro, conectando a identidade do banco Inter com descontos exclusivos para seus clientes.",
    objectives: "Criar uma campanha Orange Friday que comunicasse claramente os benefícios exclusivos para clientes Acerto, com uma interface orientada por dados e métricas de conversão.",
    progress: "Iniciamos o projeto com um benchmarking de vários competidores diretos e indiretos, analisando a interface e a organização visual dos elementos para embasar as decisões de design.",
    blocks: [
      { type: "image-full", src: `/inter-pesquisa-web.png`, alt: "Pesquisa web" },
      { type: "text-section", title: "", body: "Após analises visuais da hierarquia de informação utilizada nos competidores diretos e indiretos, começamos a construir alguns wireframes para esboçar algumas ideias até chegarmos no resultado final" },
      { type: "image-full", src: `/inter-interface-1.png`, alt: "Interface 1" },
      { type: "image-full", src: `/inter-interface-2.png`, alt: "Interface 2" },
      { type: "image-full", src: `/inter-interface-3.png`, alt: "Interface 3" },
    ],
  },
  {
    slug: "efi",
    title: "EFÍ Bank",
    category: "Campanhas",
    year: "2024",
    description:
      "No EFÍ Bank, atuei como Marketing Product Designer com foco em meios de pagamento. Desenvolvi campanhas visuais para Pix e Bolix — desde posts e carrosséis de onboarding até e-mails transacionais, cartões e materiais de parceiros.",
    coverImage: `/card-efi.png`,
    internalImage: `/capa-efi-interna.png`,
    size: "small",
    role: "Marketing Product Designer",
    responsibilities: "Campanhas visuais para Pix e Bolix, posts e carrosséis de onboarding, e-mails transacionais, cartões e materiais de parceiros.",
    problem: "O EFÍ Bank precisava comunicar de forma clara e eficiente seus meios de pagamento — Pix e Bolix — para novos e atuais clientes, mantendo consistência visual em todos os touchpoints.",
    objectives: "Desenvolver um conjunto de materiais visuais coesos que acelerassem o onboarding dos clientes e aumentassem a adoção dos meios de pagamento da plataforma.",
    progress: "Estruturei um fluxo de criação que partia da identidade visual do EFÍ Bank e se desdobrava em diferentes formatos: posts, carrosséis, e-mails e materiais para parceiros.",
    blocks: [
      {
        type: "image-row",
        cols: 3,
        images: [
          `/efi-post-1.png`,
          `/efi-post-2.png`,
          `/efi-post-3.png`,
          `/efi-post-4.png`,
          `/efi-post-5.png`,
        ],
      },
      {
        type: "image-row",
        cols: 4,
        images: [
          `/efi-cartao-1.png`,
          `/efi-cartao-2.png`,
          `/efi-cartao-3.png`,
          `/efi-cartao-4.png`,
        ],
      },
      {
        type: "image-row",
        cols: 2,
        images: [
          `/efi-parceiros-pix.png`,
          `/efi-parceiros-bolix.png`,
        ],
      },
      { type: "image-full", src: `/efi-emails.png`,  alt: "E-mails EFI" },
      { type: "image-full", src: `/efi-frame.png`,   alt: "Frame final" },
    ],
  },
  {
    slug: "mercado-bitcoin",
    title: "Mercado Bitcoin",
    category: "Interface",
    year: "2022",
    description:
      "Interface da maior plataforma de criptoativos da América Latina, com foco em fluxos de onboarding e trade para novos e experientes investidores.",
    coverImage: `/card-mb.png`,
    internalImage: `/capa-mb-interna.png`,
    size: "small",
    role: "Designer",
    responsibilities: "Landing page institucional voltada para novos e experientes investidores.",
    problem: "A maior plataforma de criptoativos da América Latina precisava simplificar a experiência de entrada para novos usuários sem comprometer a profundidade exigida por investidores experientes.",
    objectives: "Criar uma landing page institucional para o MB Cloud — solução white-label do Mercado Bitcoin que permite empresas como bancos, fintechs e corretoras oferecerem criptoativos para seus próprios clientes. O projeto teve foco em comunicar credibilidade e proposta de valor para um público corporativo.",
    progress: "Desenvolvi uma hierarquia de informação clara e uma linguagem visual voltada para decisores de negócio, transmitindo solidez tecnológica e confiança institucional em cada seção da página.",
    blocks: [
      { type: "image-full", src: `/mb-cloud-portfolio.png`, alt: "MB Cloud — Nova Landing Page do Mercado Bitcoin" },
    ],
  },
  {
    slug: "cobli",
    title: "Cobli",
    category: "Materiais de vendas",
    year: "2026",
    description: "Materiais de vendas para a Cobli.",
    coverImage: `/card-cobli.png`,
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
