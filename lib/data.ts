export type NavFile = {
  id: string;
  label: string;
  path: string;
  ext: "md" | "php" | "tsx" | "ts" | "json";
};

export const files: NavFile[] = [
  {
    id: "about",
    label: "bio.md",
    path: "about/",
    ext: "md",
  },
  {
    id: "experience",
    label: "experience.md",
    path: "experience/",
    ext: "md",
  },
  {
    id: "baza",
    label: "README.md",
    path: "projects/baza/",
    ext: "tsx",
  },
  {
    id: "bvf",
    label: "music.ts",
    path: "projects/bvf/",
    ext: "ts",
  },
  {
    id: "lithe",
    label: "framework.php",
    path: "projects/lithe-php/",
    ext: "php",
  },
  {
    id: "bando",
    label: "cms.ts",
    path: "projects/bando/",
    ext: "ts",
  },
  {
    id: "rialse",
    label: "store.php",
    path: "projects/rialse/",
    ext: "php",
  },
  {
    id: "skills",
    label: "stack.json",
    path: "skills/",
    ext: "json",
  },
  {
    id: "education",
    label: "timeline.md",
    path: "education/",
    ext: "md",
  },
  {
    id: "contact",
    label: "contact.md",
    path: "./",
    ext: "md",
  },
];

export const extColor: Record<NavFile["ext"], string> = {
  md: "text-cyan",
  php: "text-purple",
  tsx: "text-cyan",
  ts: "text-cyan",
  json: "text-amber",
};

export type Project = {
  id: string;
  fileId: string;
  name: string;
  tagline: string;
  description: string;
  stack: string[];
  stats?: {
    label: string;
    value: string;
  }[];
  links: {
    label: string;
    href: string;
  }[];
  cover: string;
  accent: "cyan" | "purple" | "amber" | "green" | "black";
};

export const site = {
  name: "William Humbwavali",
  role: "Software Developer",

  headline: "Criar software que se torna algo mais.",

  description:
    "Sou William Humbwavali, Software Developer de Angola. Construo software, produtos e ferramentas para web e mobile. Explora o meu trabalho, projetos e experiência através do terminal.",
  sessionStarted: "software.developer — sessão iniciada",

  terminalClosed: "terminal.app — fechado. clica para abrir.",

  openProjects: "$ open ./projects",

  viewExperience: "$ cat experience.md",

  openContact: "$ open contact.md",

  primaryStack: [
    "TypeScript",
    "React",
    "Next.js",
    "React Native",
    "NestJS",
    "PostgreSQL",
  ],

  copyright:
    "© 2026 William Humbwavali · Construído com Next.js & Tailwind CSS.",
};

export const about = {
  label: "about/bio.md",
  title: "Sobre mim",
  paragraphs: [
    "Sou o William, Software Developer de Angola, focado em construir produtos digitais full-stack, com experiência em aplicações web, mobile, APIs e ferramentas para developers.",
    "Nos últimos anos, tenho construído software em diferentes níveis — de aplicações e plataformas a frameworks e ferramentas para developers. Trabalho principalmente com TypeScript, React, Next.js, React Native e NestJS.",
    "Criei o Lithe, um framework PHP open-source construído do zero, e o Bando CMS, um CMS headless open-source. Cofundei o Baza, uma plataforma de mobilidade criada para Luanda, com aplicações web e mobile, e criei e operei a Rialse, uma loja online que esteve em funcionamento em Angola entre dezembro de 2024 e o final de 2025.",
    "Também desenvolvi uma plataforma de música full-stack e outros projetos independentes, trabalhando desde a arquitetura e desenvolvimento até à implementação, deployment e operação. Aos 19 anos, assumi a liderança do desenvolvimento na Njila, coordenando a equipa e participando nas decisões técnicas e no roadmap do produto.",
    "Cada projeto trouxe um contexto, tecnologias e desafios diferentes. É esse percurso — entre criar software do zero, colocá-lo em produção e lidar com o que acontece depois — que define o meu trabalho como developer.",
  ],
};

export const experienceSection = {
  label: "work/experience.md",
  title: "Experiência",
};

export const projects: Project[] = [
  {
    id: "baza",
    fileId: "baza",
    name: "Baza",
    tagline:
      "Plataforma de mobilidade urbana construída com NestJS e React Native",
    description:
      "Uma plataforma de mobilidade por assinatura criada para estudantes e trabalhadores em Luanda. O Baza permite reservar um lugar antecipadamente e utilizar transporte com rota e horário definidos, através de planos semanais ou mensais. Como cofundador e CEO, conduzo o projeto desde a concepção da ideia até à construção do produto, participando da estratégia, arquitetura, desenvolvimento e experiência do utilizador. O ecossistema inclui aplicações para passageiros e motoristas, painel administrativo, backend e infraestrutura, além do site de pré-lançamento.",
    stack: [
      "Next.js",
      "TypeScript",
      "NestJS",
      "React Native",
      "MySQL",
      "Docker",
      "TypeORM",
      "Tailwind CSS",
    ],
    stats: [
      {
        label: "Fase",
        value: "Pré-lançamento",
      },
      {
        label: "Mercado",
        value: "Luanda, Angola",
      },
    ],
    links: [
      {
        label: "Ver site →",
        href: "https://bazaja.vercel.app/",
      },
    ],
    cover: "/projects/baza_1.png",
    accent: "black",
  },

  {
    id: "bvf",
    fileId: "bvf",
    name: "Bad Vibes Forever",
    tagline: "Plataforma de música full-stack com NestJS",
    description:
      "Plataforma de música desenvolvida de ponta a ponta, com autenticação, perfis de utilizador, artistas, seguidores, álbuns, playlists, favoritos, reprodução, histórico, downloads e upload de músicas. O projeto inclui frontend, API REST, base de dados, autenticação e armazenamento de ficheiros através do Cloudflare R2.",
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Zustand",
      "NestJS",
      "Node.js",
      "PostgreSQL",
      "TypeORM",
      "Docker",
      "Cloudflare R2",
    ],
    stats: [
      {
        label: "Status",
        value: "Concluído",
      },
      {
        label: "Arquitetura",
        value: "Full-Stack",
      },
      {
        label: "API",
        value: "REST",
      },
    ],
    links: [
      {
        label: "Frontend →",
        href: "https://github.com/williamhumbwavali/bvf-frontend",
      },
      {
        label: "API →",
        href: "https://github.com/williamhumbwavali/bvf-api",
      },
    ],
    cover: "/projects/bvf.png",
    accent: "green",
  },

  {
    id: "lithe",
    fileId: "lithe",
    name: "Lithe PHP",
    tagline: "Framework PHP open-source, inspirado em Express.js",
    description:
      "Framework próprio, escrito do zero, focado em simplicidade e velocidade de desenvolvimento. Publicado no Packagist como lithephp/framework, com mais de duas dezenas de estrelas no GitHub e um pequeno ecossistema de pacotes satélite que resolvem problemas comuns de forma isolada e reutilizável.",
    stack: [
      "PHP 8.2+",
      "Composer",
      "PSR",
      "Symfony Console",
      "PHPUnit",
    ],
    stats: [
      {
        label: "Estrelas GitHub",
        value: "25+",
      },
      {
        label: "Pacotes no ecossistema",
        value: "10+",
      },
      {
        label: "Licença",
        value: "MIT",
      },
    ],
    links: [
      {
        label: "Packagist →",
        href: "https://packagist.org/packages/lithephp/framework",
      },
      {
        label: "GitHub →",
        href: "https://github.com/lithephp/framework",
      },
      {
        label: "Documentação →",
        href: "https://pt-lithephp.vercel.app/",
      },
    ],
    cover: "/projects/lithe.png",
    accent: "purple",
  },

  {
    id: "bando",
    fileId: "bando",
    name: "Bando CMS",
    tagline: "CMS headless open-source para developers",
    description:
      "Um CMS headless open-source e self-hosted criado para developers que precisam construir sites e plataformas de conteúdo sem ter de desenvolver um backend de CMS do zero. O Bando permite modelar collections, definir campos e relacionamentos, gerir conteúdo através de um Studio e consumir os dados através de um client tipado.",
    stack: [
      "TypeScript",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "React",
      "Next.js",
      "REST API",
      "Docker",
    ],
    stats: [
      {
        label: "Tipo",
        value: "Headless CMS",
      },
      {
        label: "Licença",
        value: "Open Source",
      },
      {
        label: "Arquitetura",
        value: "Self-hosted",
      },
    ],
    links: [
      {
        label: "GitHub →",
        href: "https://github.com/Bando-CMS/bando-cms",
      },
      {
        label: "Website →",
        href: "https://bando-cms.vercel.app/",
      },
      {
        label: "npm →",
        href: "https://www.npmjs.com/package/bando-cms",
      },
    ],
    cover: "/projects/bando-studio.png",
    accent: "amber",
  },

  {
    id: "rialse",
    fileId: "rialse",
    name: "Rialse",
    tagline: "Do framework ao produto real",
    description:
      "Uma plataforma de comércio eletrônico desenvolvida para o mercado angolano, com catálogo de produtos, categorias, carrinho, contas de utilizador, checkout, histórico de encomendas e suporte. A Rialse foi um dos primeiros produtos construídos com o Lithe, framework PHP open source que criei, transformando uma tecnologia própria em uma aplicação de e-commerce completa.",
    stack: [
      "E-commerce",
      "PHP",
      "Lithe",
      "Eloquent",
      "Blade",
      "MySQL",
      "Checkout",
    ],
    stats: [
      {
        label: "Categorias",
        value: "9",
      },
      {
        label: "Mercado",
        value: "Angola",
      },
      {
        label: "Framework",
        value: "Lithe",
      },
    ],
    links: [],
    cover: "/projects/rialse.png",
    accent: "cyan",
  },
];

export const timeline = [
  {
    period: "Em curso",
    title: "Engenharia Informática",
    place: "UGS — Universidade em Angola",
    description:
      "Formação formal em engenharia informática: fundamentos de algoritmos, estruturas de dados, redes e engenharia de software.",
  },
  {
    period: "1 ano",
    title: "42 Luanda",
    place: "Piscine & projetos peer-to-peer",
    description:
      "Metodologia sem professores nem aulas: aprendizagem por projetos, revisão entre pares e resolução de problemas sob pressão — de C a algoritmos de sistema.",
  },
  {
    period: "Contínuo",
    title: "Produtos em produção",
    place:
      "Lithe PHP · Baza · Rialse · Bad Vibes Forever · Bando CMS",
    description:
      "A verdadeira escola: construir, publicar e manter software que pessoas reais usam.",
  },
];

export const education = {
  label: "education/timeline.md",
  title: "Formação",
};

export const experience = [
  {
    period: "2025",
    title: "Líder de Desenvolvimento / Desenvolvedor Full-Stack",
    company: "Njila",
    location: "Angola",
    description:
      "Aos 19 anos, assumi a liderança do desenvolvimento de uma startup de mobilidade urbana focada em estudantes. Coordenei a equipe de desenvolvimento, participei da definição do roadmap e das decisões de arquitetura, segurança e performance, além de desenvolver funcionalidades como rastreamento em tempo real e agendamento.",
    stack: ["Laravel", "PHP", "Vue.js", "Inertia.js", "NestJS", "React Native", "Next.JS"],
  },
  {
    period: "Freelance",
    title: "Desenvolvedor Front-End",
    company: "Cubicou.ao",
    location: "Angola",
    description:
      "Desenvolvimento do frontend da plataforma Cubicou.ao, criando interfaces responsivas e componentes reutilizáveis, além da integração com APIs do backend para comunicação e consumo de dados da aplicação.",
    stack: ["Next.js", "React", "Tailwind CSS", "REST APIs", "TypeScript"],
  },
];

export const contact = {
  label: "contact.md",
  title: "Vamos falar",
  description:
    "Software precisa funcionar. Eu construo, resolvo e entrego.",
  links: [
    {
      label: "GitHub",
      value: "github.com/williamhumbwavali",
      href: "https://github.com/williamhumbwavali",
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/williamhumbwavali",
      href: "https://www.linkedin.com/in/williamhumbwavali/",
    },
    {
      label: "Email",
      value: "williamhumbwavali@gmail.com",
      href: "mailto:williamhumbwavali@gmail.com",
    },
    {
      label: "Baza",
      value: "bazaja.vercel.app",
      href: "https://bazaja.vercel.app/",
    },
    {
      label: "Lithe",
      value: "lithephp.vercel.app",
      href: "https://lithephp.vercel.app/",
    },
  ],
};

export const ui = {
  locale: "pt-PT" as const,
  terminal: "terminal",
  openTerminal: "Abrir terminal",
  closeTerminal: "Fechar terminal",
  language: "Idioma",
};

export const bootLog = [
  "a carregar whEnv v1.1...",
  "a montar /about",
  "a montar /projects (lithe-php, bando, baza, rialse, bvf)",
  "a iniciar terminal interativo...",
  "pronto.",
];

export const terminal = {
  closeLabel: "Fechar terminal",
  ariaLabel: "Escreve um comando do terminal",
  placeholder: "escreve um comando... (tenta: help)",
  quickLabel: "novo por aqui? experimenta:",
  home: "~/william — zsh",
  bootScript: [
    { prompt: true, text: "whoami" },
    { prompt: false, text: "William Humbwavali", tone: "ink" as const },
    {
      prompt: false,
      text: "> Software Developer · Luanda, Angola",
      tone: "muted" as const,
    },
    { prompt: true, text: "cat focus.txt" },
    {
      prompt: false,
      text: "Construo produtos digitais, sistemas e negócios — do zero à produção.",
      tone: "muted" as const,
    },
    { prompt: true, text: "ls ./projects" },
    {
      prompt: false,
      text: "lithe-php/  bando/  baza/  rialse/  bvf/",
      tone: "cyan" as const,
    },
  ],
};

export const skillsSection = {
  label: "skills/stack.json",
  title: "Competências",
  labels: {
    linguagens: "linguagens",
    frontend: "frontend",
    backend: "backend",
    bancosDeDados: "bancosDeDados",
    infraestrutura: "infraestrutura",
    ferramentas: "ferramentas",
    engenharia: "engenharia",
    devops: "devops",
    marketingDigital: "marketingDigital",
  },
};

export const skills = {
  linguagens: [
    "JavaScript",
    "TypeScript",
    "PHP",
    "Python",
    "C",
  ],

  frontend: [
    "React",
    "Next.js",
    "React Native",
    "Vue.js",
    "Tailwind CSS",
  ],

  backend: [
    "Node.js",
    "NestJS",
    "Laravel",
    "Django",
    "REST APIs",
  ],

  bancosDeDados: [
    "PostgreSQL",
    "MySQL",
    "MongoDB",
    "Redis",
  ],

  infraestrutura: [
    "Docker",
    "Linux",
    "Nginx",
    "Cloudflare",
  ],

  ferramentas: [
    "Git",
    "GitHub",
    "VS Code",
    "Figma",
  ],

  engenharia: [
    "Arquitetura de software",
    "APIs",
    "Sistemas distribuídos",
  ],

  devops: [
    "CI/CD",
    "Docker Compose",
    "Deploy",
    "Monitoramento",
  ],

  marketingDigital: [
    "SEO",
    "Google Ads",
    "Google Analytics",
    "Social Media",
  ],
};

export const data = {
  ui,
  terminal,
  site,
  about,
  projects,
  skillsSection,
  skills,
  experienceSection,
  experience,
  education,
  timeline,
  contact,
  files,
  extColor,
  bootLog,
};