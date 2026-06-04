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
    category: "Interface / Produto",
    year: "2025",
    description:
      "Campanha Orange Friday em parceria com o Banco Inter — descontos exclusivos para clientes Acerto, com pesquisa de benchmarking e interface orientada por dados.",
    coverImage: `/inter-capa.png`,
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
    coverImage: `${BASE}/2025/07/capa-efi-2.png`,
    size: "small",
    role: "Marketing Product Designer",
    responsibilities: "Campanhas visuais para Pix e Bolix, posts e carrosséis de onboarding, e-mails transacionais, cartões e materiais de parceiros.",
    problem: "O EFÍ Bank precisava comunicar de forma clara e eficiente seus meios de pagamento — Pix e Bolix — para novos e atuais clientes, mantendo consistência visual em todos os touchpoints.",
    objectives: "Desenvolver um conjunto de materiais visuais coesos que acelerassem o onboarding dos clientes e aumentassem a adoção dos meios de pagamento da plataforma.",
    progress: "Estruturei um fluxo de criação que partia da identidade visual do EFÍ Bank e se desdobrava em diferentes formatos: posts, carrosséis, e-mails e materiais para parceiros.",
    blocks: [
      { type: "image-full", src: `${BASE}/2025/08/Efi-cover-1.png`, alt: "EFI Cover" },
      { type: "image-small", src: `${BASE}/2025/07/logo-laranja-01-6.png`, alt: "Logo EFI" },
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
    category: "Interface / Produto",
    year: "2022",
    description:
      "Interface da maior plataforma de criptoativos da América Latina, com foco em fluxos de onboarding e trade para novos e experientes investidores.",
    coverImage: `${BASE}/2023/11/Capa-MB-1.png`,
    size: "small",
    role: "Product Designer",
    responsibilities: "Design de interface para fluxos de onboarding e trade, voltado para novos e experientes investidores.",
    problem: "A maior plataforma de criptoativos da América Latina precisava simplificar a experiência de entrada para novos usuários sem comprometer a profundidade exigida por investidores experientes.",
    objectives: "Redesenhar os fluxos de onboarding e trade para reduzir a fricção de entrada, aumentar a conversão e manter a confiança de quem já opera na plataforma.",
    progress: "Mapeamos os principais pontos de abandono no funil de onboarding e realizamos testes com usuários de diferentes perfis para validar as soluções de interface propostas.",
    blocks: [
      { type: "image-full", src: "/mb-cloud.png", alt: "Mercado Bitcoin" },
      { type: "image-full", src: "/mb-case.png", alt: "Mercado Bitcoin case" },
    ],
  },
  {
    slug: "hugny",
    title: "Hugny",
    category: "Interface / Produto",
    year: "2021",
    description:
      "Case study completo: redesign de website para uma agência em transição — da pesquisa UX com survey e affinity mapping até o MVP final.",
    coverImage: `${BASE}/2020/11/Grupo-44-1024x683.jpg`,
    size: "large",
    role: "UX/UI Designer",
    responsibilities: "Pesquisa com usuários, affinity mapping, criação de personas, análise de competidores, wireframe e MVP do website.",
    problem: "A Hugny estava se preparando para evoluir e dar o próximo passo. Precisavam de um website que representasse essa mudança de negócio e maturidade da empresa — alinhando expectativas do negócio com as necessidades dos usuários.",
    objectives: "Criar um website que comunicasse a nova identidade da Hugny, com foco em experiências personalizadas e humanas, equilibrando os objetivos de negócio com os dados da pesquisa de usuário.",
    progress: "Iniciamos com um kickoff para entender as dores do cliente. Um survey gerou insights que alimentaram um affinity mapping, levando à criação de personas. Também realizamos um Lightning Demo onde o cliente apresentou referências visuais.",
    blocks: [
      { type: "image-full", src: `${BASE}/2020/11/note-home2-1-1024x674.png`, alt: "Hugny hero" },
      {
        type: "toolbox",
        items: ["Survey", "Affinity Mapping", "Persona", "Análise de competidores", "Customer Journey"],
      },
      { type: "text-section", title: "Survey" },
      {
        type: "image-row",
        cols: 2,
        images: [
          `${BASE}/2020/12/Prancheta-%E2%80%93-1-1024x700.jpg`,
          `${BASE}/2020/12/Prancheta-%E2%80%93-2-1024x700.jpg`,
          `${BASE}/2020/12/Prancheta-%E2%80%93-6-1-1024x700.jpg`,
          `${BASE}/2020/12/Prancheta-%E2%80%93-5-1024x700.jpg`,
        ],
      },
      { type: "text-section", title: "Affinity Mapping" },
      {
        type: "image-row",
        cols: 2,
        images: [
          `${BASE}/2020/12/afinnity-mapping-new-1.jpg`,
          `${BASE}/2020/12/afinnity-mapping-new-2.jpg`,
        ],
      },
      { type: "text-section", title: "Personas" },
      {
        type: "image-row",
        cols: 2,
        images: [
          `${BASE}/2020/12/Grupo-16.png`,
          `${BASE}/2020/12/Grupo-15.png`,
        ],
      },
      { type: "text-section", title: "Análise de competidores" },
      {
        type: "image-row",
        cols: 3,
        images: [
          `${BASE}/2020/12/Grupo-38.jpg`,
          `${BASE}/2020/12/Grupo-39.jpg`,
          `${BASE}/2020/12/Grupo-40.jpg`,
        ],
      },
      { type: "text-section", title: "Customer Journey" },
      { type: "image-full", src: `${BASE}/2020/12/Imagem-11-1024x302.jpg`, alt: "Customer Journey" },
      { type: "text-section", title: "Wireframe" },
      { type: "image-full", src: `${BASE}/2020/12/wireframe.jpg`, alt: "Wireframe" },
      { type: "text-section", title: "MVP" },
      {
        type: "image-row",
        cols: 2,
        images: [
          `${BASE}/2020/12/Hugny-home-parte-1-635x1024.jpg`,
          `${BASE}/2020/12/Hugny-home-parte-2-485x1024.jpg`,
        ],
      },
      {
        type: "text-section",
        title: "Próximos passos",
        body: "Conduzir testes de usabilidade validando a funcionalidade do website. Inicialmente lançar como site de uma página conforme requisito do cliente. Planejar subpáginas futuras que necessitarão de documentação de fluxo de usuário.",
      },
      {
        type: "text-section",
        title: "Resultados e aprendizados",
        body: "Foi uma grande experiência participar desse projeto. Pude aplicar muitas técnicas gerando dados mais consistentes para a resolução do problema. O principal aprendizado foi equilibrar os objetivos de negócio com os dados da pesquisa de usuário.",
      },
    ],
  },
  {
    slug: "crype",
    title: "Crype",
    category: "Interface / Produto",
    year: "2023",
    description:
      "App mobile de carteira cripto com Design System completo, interfaces funcionais e protótipos interativos — desenvolvido durante o curso de Figma da @feux.",
    coverImage: `${BASE}/2025/06/Capa-5.png`,
    size: "small",
    role: "UI Designer",
    responsibilities: "Design System completo, interfaces funcionais para app mobile e landing page responsiva.",
    problem: "Criar um aplicativo de carteira cripto que fosse intuitivo para usuários iniciantes sem abrir mão da profundidade necessária para quem já opera com criptomoedas.",
    objectives: "Desenvolver um Design System robusto e um app mobile com interfaces funcionais e protótipos interativos, seguindo as melhores práticas do mercado de criptoativos.",
    progress: "Iniciei com um benchmarking de competidores e referências de mercado, analisando interfaces de partes específicas dos produtos e a interação entre os elementos de UI.",
    blocks: [
      { type: "image-small", src: `${BASE}/2025/06/Logo.png`, alt: "Crype logo" },
      { type: "image-full", src: `${BASE}/2025/06/telass.png`, alt: "Crype telas" },
      { type: "image-full", src: `${BASE}/2025/06/Pesquisa-crype-.png`, alt: "Pesquisa Crype" },
      { type: "image-full", src: `${BASE}/2025/06/Primeiro-3.png`, alt: "Crype tela 1" },
      { type: "image-full", src: `${BASE}/2025/06/Segundo-3.png`, alt: "Crype tela 2" },
      { type: "image-full", src: `${BASE}/2025/06/Terceito.png`, alt: "Crype tela 3" },
      { type: "image-full", src: `${BASE}/2025/06/Quarta.png`, alt: "Crype tela 4" },
      { type: "image-full", src: `${BASE}/2025/06/Quinta.jpg`, alt: "Crype tela 5" },
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
