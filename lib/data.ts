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
    id: "lithe",
    label: "README.md",
    path: "projects/lithe-php/",
    ext: "php",
  },
  {
    id: "baza",
    label: "app.tsx",
    path: "projects/baza/",
    ext: "tsx",
  },
  {
    id: "rialse",
    label: "store.php",
    path: "projects/rialse/",
    ext: "ts",
  },
  {
    id: "music",
    label: "player.ts",
    path: "projects/music-app/",
    ext: "ts",
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
  stats?: { label: string; value: string }[];
  links: { label: string; href: string }[];
  cover: string;
  accent: "cyan" | "purple" | "amber" | "green";
};

export const projects: Project[] = [
  {
    id: "lithe",
    fileId: "lithe",
    name: "Lithe PHP",
    tagline: "Framework PHP open-source, inspirado em Express.js",
    description:
      "Framework próprio, escrito do zero, focado em simplicidade e velocidade de desenvolvimento. Publicado no Packagist como lithephp/framework, com mais de duas dezenas de estrelas no GitHub e um pequeno ecossistema de pacotes satélite (lithemod/env, lithemod/upload, lithemod/log, lithemod/validator, lithemod/session-support, lithemod/jwt-auth, entre outros) que resolvem problemas comuns de forma isolada e reutilizável.",
    stack: ["PHP 8.2+", "Composer", "PSR", "Symfony Console", "PHPUnit"],
    stats: [
      { label: "Estrelas GitHub", value: "24+" },
      { label: "Pacotes no ecossistema", value: "10+" },
      { label: "Licença", value: "MIT" },
    ],
    links: [
      { label: "Packagist →", href: "https://packagist.org/packages/lithephp/framework" },
      { label: "GitHub →", href: "https://github.com/lithephp/framework" },
      { label: "Documentação →", href: "https://pt-lithephp.vercel.app/" },
    ],
    cover: "/projects/lithe.svg",
    accent: "purple",
  },
  {
    id: "baza",
    fileId: "baza",
    name: "Baza",
    tagline: "Mobilidade urbana por assinatura em Angola",
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
      "Tailwind CSS"
    ],
    stats: [
      { label: "Fase", value: "Pré-lançamento" },
      { label: "Mercado", value: "Luanda, Angola" }
    ],
    links: [
      { label: "Ver site →", href: "https://bazaja.vercel.app/" }
    ],
    cover: "/projects/baza_1.png",
    accent: "cyan",
  },
  {
    id: "music",
    fileId: "music",
    name: "Bad Vibes Forever",
    tagline: "Uma plataforma para descobrir, viver e se conectar com a música independente",
    description:
      "Plataforma musical focada em artistas independentes e na cena underground. O BVF busca ir além do simples streaming, criando um espaço onde as pessoas possam descobrir novos artistas, explorar suas músicas, acompanhar seus trabalhos e conhecer as histórias por trás de cada criação. O projeto reúne descoberta musical, perfis de artistas, playlists, interação e uma experiência construída para aproximar o ouvinte da cena.",
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "NestJS",
      "Node.js",
      "PostgreSQL",
      "TypeORM",
      "Docker"
    ],
    links: [],
    cover: "/projects/bvf.png",
    accent: "green",
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
      "Checkout"
    ],
    stats: [
      { label: "Categorias", value: "9" },
      { label: "Mercado", value: "Angola" },
      { label: "Framework", value: "Lithe" }
    ],
    links: [],
    cover: "/projects/rialse.png",
    accent: "amber",
  }

];

export const skills = {
  linguagens: [
    "PHP",
    "TypeScript",
    "JavaScript",
    "C",
    "SQL",
    "HTML",
    "CSS",
    "Python"
  ],

  frontend: [
    "React",
    "Next.js",
    "React Native",
    "Tailwind CSS",
    "Blade",
    "Inertia.js",
    "Vue.js",
    "Bootstrap",
    "JQuery"
  ],

  backend: [
    "Node.js",
    "NestJS",
    "Express.js",
    "Laravel",
    "Lithe (autoral)",
    "REST APIs",
  ],

  bancosDeDados: [
    "PostgreSQL",
    "MySQL",
    "MongoDB",
    "TypeORM",
    "Eloquent",
  ],

  infraestrutura: [
    "Docker",
    "Docker Compose",
    "Vercel",
  ],

  ferramentas: [
    "Git",
    "GitHub",
    "Composer",
    "Swagger / OpenAPI",
    "Postman",
  ],

  engenharia: [
    "API Design",
    "Authentication & Authorization",
    "JWT",
    "Database Modeling",
    "MVC",
    "Middleware",
    "Routing",
    "Modular Architecture",
  ],
};

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
    place: "Lithe PHP · Baza · Rialse · Bad Vibes Forever",
    description:
      "A verdadeira escola: construir, publicar e manter software que pessoas reais usam.",
  },
];

export const experience = [
  {
    period: "2025",
    title: "Development Lead / Full-Stack Developer",
    company: "Njila",
    location: "Angola",
    description:
      "Startup de mobilidade urbana focada em estudantes. Coordenei a equipe de desenvolvimento, participei da definição do roadmap e das decisões técnicas, além de desenvolver funcionalidades da plataforma como rastreamento em tempo real e agendamento.",
    stack: ["Laravel", "PHP", "Vue.js", "Inertia.js"],
  },
  {
    period: "Freelance",
    title: "Front-End Developer",
    company: "Cubicou.ao",
    location: "Angola",
    description:
      "Desenvolvimento do frontend da plataforma Cubicou.ao, criando interfaces responsivas e componentes reutilizáveis, além da integração com APIs do backend para comunicação e consumo de dados da aplicação.",
    stack: ["Next.js", "React", "Tailwind CSS", "REST APIs", "TypeScript"],
  },
];