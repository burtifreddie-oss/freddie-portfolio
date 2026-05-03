const BASE = "https://www.freddieburti.com.br/wp-content/uploads";

// ── Block types ────────────────────────────────────────────────
export type Block =
  | { type: "image-full"; src: string; alt?: string }
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
    coverImage: `${BASE}/2024/04/9.png`,
    size: "large",
    blocks: [
      { type: "image-full", src: `${BASE}/2024/04/9.png`, alt: "Inter — hero" },
      {
        type: "text-bilingual",
        ptTitle: "Objetivos",
        enTitle: "Goals",
        ptBody:
          "A Acerto realizou uma campanha de Black Friday em parceria com o banco Inter, a Orange Friday, no qual disponibilizamos descontos exclusivos nesse período.",
        enBody:
          "Acerto carried out a Black Friday campaign in partnership with Inter bank called Orange Friday, in which exclusive discounts were offered for a limited time.",
      },
      {
        type: "text-bilingual",
        ptTitle: "Pesquisa",
        enTitle: "Research",
        ptBody:
          "Iniciamos o projeto com um benchmarking de vários competidores diretos e indiretos, analisando a interface e a organização visual dos elementos.",
        enBody:
          "We started the project with a benchmarking of various direct and indirect competitors to analyze the interface and the visual organization of the elements.",
      },
      { type: "image-full", src: `${BASE}/2025/03/PESQUISA-WEB.png`, alt: "Pesquisa web" },
      { type: "image-full", src: `${BASE}/2024/04/Inter-e-acerto-logo-1.png`, alt: "Inter e Acerto logos" },
      { type: "image-full", src: `${BASE}/2025/03/2-2-1.png`, alt: "Interface 1" },
      { type: "image-full", src: `${BASE}/2025/03/3.png`, alt: "Interface 2" },
      { type: "image-full", src: `${BASE}/2025/03/4.png`, alt: "Interface 3" },
      { type: "image-full", src: `${BASE}/2024/04/pattern-1.png`, alt: "Pattern" },
    ],
  },
  {
    slug: "efi",
    title: "EFI",
    category: "Interface / Produto",
    year: "2024",
    description:
      "Marketing Product Design no Efí Bank: campanhas focadas em meios de pagamento, Pix e comunicação visual para e-mails, posts e materiais de campanha.",
    coverImage: `${BASE}/2025/07/capa-efi-2.png`,
    size: "small",
    blocks: [
      { type: "text-section", title: "Campanhas focadas em meios de pagamentos" },
      { type: "image-full", src: `${BASE}/2025/07/logo-laranja-01-6.png`, alt: "Logo EFI" },
      { type: "image-full", src: `${BASE}/2025/07/Frame-26765-1.png`, alt: "Frame EFI" },
      { type: "image-full", src: `${BASE}/2025/08/Efi-cover-1.png`, alt: "EFI Cover" },
      { type: "image-full", src: `${BASE}/2025/08/post-carrossel-onboard-pix-1.png`, alt: "Carrossel Pix 1" },
      { type: "image-full", src: `${BASE}/2025/07/post-carrossel-onboard-pix-2.png`, alt: "Carrossel Pix 2" },
      { type: "image-full", src: `${BASE}/2025/07/post-carrossel-onboard-pix-3.png`, alt: "Carrossel Pix 3" },
      { type: "image-full", src: `${BASE}/2025/07/post-carrossel-onboard-pix-4.png`, alt: "Carrossel Pix 4" },
      { type: "image-full", src: `${BASE}/2025/07/post-carrossel-onboard-pix-5.png`, alt: "Carrossel Pix 5" },
      { type: "image-full", src: `${BASE}/2025/07/pix-icon-950x1024.png`, alt: "Ícone Pix" },
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
    blocks: [
      { type: "image-full", src: `${BASE}/2024/04/MB-cloud-portif%C3%B3lio.png`, alt: "Mercado Bitcoin" },
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
    blocks: [
      { type: "text-section", title: "Hugny case study" },
      { type: "image-full", src: `${BASE}/2020/11/note-home2-1-1024x674.png`, alt: "Hugny hero" },
      {
        type: "text-section",
        title: "Sobre a empresa",
        body: "Nosso objetivo é criar experiências para que os clientes se sintam próximos, mesmo que através de canais digitais. Experiências que sejam personalizadas, únicas, mas que tenham significado e sejam humanas. Fazemos isso através de estratégia, tecnologia e comunicação, pensando na diversidade crescente e sabendo que criar vínculos com os clientes, é a única forma de ter relacionamentos de longo prazo.",
      },
      {
        type: "text-section",
        title: "Problema",
        body: "A Hugny estava se preparando para evoluir e dar o próximo passo. Com isso, precisavam de um website que representasse essa mudança de negócio e maturidade da empresa — alinhando expectativas do negócio com as necessidades dos usuários.",
      },
      {
        type: "toolbox",
        items: ["Survey", "Affinity Mapping", "Persona", "Análise de competidores", "Customer Journey"],
      },
      {
        type: "text-section",
        title: "Processo",
        body: "Iniciamos com um kickoff para entender as dores do cliente. Em seguida, um survey gerou insights que alimentaram um affinity mapping, levando à criação de personas. Também realizamos um Lightning Demo onde o cliente apresentou sites de referência.",
      },
      { type: "image-full", src: `${BASE}/2020/11/Grupo-22-1024x318.png`, alt: "Diamante duplo" },
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
    blocks: [
      { type: "image-full", src: `${BASE}/2025/06/Logo.png`, alt: "Crype logo" },
      { type: "image-full", src: `${BASE}/2025/06/telass.png`, alt: "Crype telas" },
      {
        type: "text-bilingual",
        ptTitle: "Objetivos",
        enTitle: "Goals",
        ptBody:
          "Este projeto foi desenvolvido durante o Curso de Figma, ministrado pela @feux, uma formação completa voltada para a criação de um Design System, interfaces funcionais e protótipos interativos. A entrega incluiu o desenvolvimento completo de um aplicativo mobile e uma landing page responsiva, seguindo os princípios do DS.",
        enBody:
          "This project was developed during the Figma Course, led by @feux, a comprehensive program focused on building Design Systems, functional interfaces, and interactive prototypes. The final delivery included the complete development of a mobile app and a responsive landing page, following the core principles of the Design System.",
      },
      {
        type: "text-bilingual",
        ptTitle: "Pesquisa",
        enTitle: "Research",
        ptBody:
          "Iniciei o projeto com um benchmarking de alguns competidores e referências de mercado, analisando a interface de partes específicas dos websites e a interação dos elementos entre si.",
        enBody:
          "I started the project with a benchmark analysis of some competitors and market references, examining specific parts of their websites and the interaction between interface elements.",
      },
      { type: "image-full", src: `${BASE}/2025/06/Pesquisa-crype-.png`, alt: "Pesquisa Crype" },
      { type: "image-full", src: `${BASE}/2025/06/Primeiro-3.png`, alt: "Crype tela 1" },
      { type: "image-full", src: `${BASE}/2025/06/Segundo-3.png`, alt: "Crype tela 2" },
      { type: "image-full", src: `${BASE}/2025/06/Terceito.png`, alt: "Crype tela 3" },
      { type: "image-full", src: `${BASE}/2025/06/Quarta.png`, alt: "Crype tela 4" },
      { type: "image-full", src: `${BASE}/2025/06/Quinta.jpg`, alt: "Crype tela 5" },
      { type: "image-full", src: `${BASE}/2025/06/Quinta-1.jpg`, alt: "Crype tela 6" },
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
