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
    coverImage: `/capa-inter-nova.png`,
    size: "large",
    role: "Product Designer",
    responsibilities: "Interface design, benchmarking de competidores e desenvolvimento da campanha Orange Friday.",
    problem: "A Acerto precisava de uma campanha de Black Friday que se destacasse no mercado financeiro, conectando a identidade do banco Inter com descontos exclusivos para seus clientes.",
    objectives: "Criar uma campanha Orange Friday que comunicasse claramente os benefícios exclusivos para clientes Acerto, com uma interface orientada por dados e métricas de conversão.",
    progress: "Iniciamos o projeto com um benchmarking de vários competidores diretos e indiretos, analisando a interface e a organização visual dos elementos para embasar as decisões de design.",
    blocks: [
      { type: "image-full", src: `${BASE}/2025/03/PESQUISA-WEB.png`, alt: "Pesquisa web" },
      { type: "text-section", title: "", body: "Após analises visuais da hierarquia de informação utilizada nos competidores diretos e indiretos, começamos a construir alguns wireframes para esboçar algumas ideias até chegarmos no resultado final" },
      { type: "image-full", src: `${BASE}/2025/03/2-2-1.png`, alt: "Interface 1" },
      { type: "image-full", src: `${BASE}/2025/03/3.png`, alt: "Interface 2" },
      { type: "image-full", src: `${BASE}/2025/03/4.png`, alt: "Interface 3" },
    ],
  },
  {
    slug: "efi",
    title: "EFÍ",
    category: "Campanhas",
    year: "2024",
    description:
      "No EFÍ Bank, atuei como Marketing Product Designer com foco em meios de pagamento. Desenvolvi campanhas visuais para Pix e Bolix — desde posts e carrosséis de onboarding até e-mails transacionais, cartões e materiais de parceiros.",
    coverImage: `/capa-efi-nova.png`,
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
          `${BASE}/2025/08/post-carrossel-onboard-pix-1.png`,
          `${BASE}/2025/07/post-carrossel-onboard-pix-2.png`,
          `${BASE}/2025/07/post-carrossel-onboard-pix-3.png`,
          `${BASE}/2025/07/post-carrossel-onboard-pix-4.png`,
          `${BASE}/2025/07/post-carrossel-onboard-pix-5.png`,
        ],
      },
      {
        type: "image-row",
        cols: 4,
        images: [
          `${BASE}/2025/08/cartao-1.png`,
          `${BASE}/2025/08/cartao-2-1.png`,
          `${BASE}/2025/08/cartao-3.png`,
          `${BASE}/2025/08/cartao-4-2.png`,
        ],
      },
      {
        type: "image-row",
        cols: 2,
        images: [
          `${BASE}/2025/08/Parceiros-Pix-1.png`,
          `${BASE}/2025/08/Parceiros-Bolix-1.png`,
        ],
      },
      { type: "image-full", src: `${BASE}/2025/08/E-mails-efi-scaled.png`, alt: "E-mails EFI" },
      { type: "image-full", src: `${BASE}/2025/08/Frame.png`, alt: "Frame final" },
    ],
  },
  {
    slug: "mercado-bitcoin",
    title: "Mercado Bitcoin",
    category: "Interface",
    year: "2022",
    description:
      "Interface da maior plataforma de criptoativos da América Latina, com foco em fluxos de onboarding e trade para novos e experientes investidores.",
    coverImage: `/capa-mb-nova.png`,
    size: "small",
    role: "Product Designer",
    responsibilities: "Design de interface para fluxos de onboarding e trade, voltado para novos e experientes investidores.",
    problem: "A maior plataforma de criptoativos da América Latina precisava simplificar a experiência de entrada para novos usuários sem comprometer a profundidade exigida por investidores experientes.",
    objectives: "Redesenhar os fluxos de onboarding e trade para reduzir a fricção de entrada, aumentar a conversão e manter a confiança de quem já opera na plataforma.",
    progress: "Mapeamos os principais pontos de abandono no funil de onboarding e realizamos testes com usuários de diferentes perfis para validar as soluções de interface propostas.",
    blocks: [
      { type: "image-full", src: `/mb-cloud-portfolio.png`, alt: "MB Cloud — Nova Landing Page do Mercado Bitcoin" },
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
