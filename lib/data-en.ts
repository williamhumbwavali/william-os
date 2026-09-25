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
  accent: "cyan" | "purple" | "amber" | "green";
};

export const site = {
  name: "William Humbwavali",
  role: "Software Developer",

  headline: "I build software, tools, and platforms.",

  description:
    "I'm William Humbwavali, a Software Developer from Angola, focused on building modern web applications with React, Next.js, React Native, and NestJS. I've led development at 19, built my own products, and created open-source software. Here you can explore my work, projects, and experience through the terminal.",

  sessionStarted: "software.developer — session started",

  terminalClosed: "terminal.app — closed. click to open.",

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
    "© 2026 William Humbwavali · Built with Next.js & Tailwind CSS.",
};

export const about = {
  label: "about/bio.md",
  title: "About me",
  paragraphs: [
    "I'm William, a Software Developer from Angola focused on building full-stack digital products, with experience across web and mobile applications, APIs, and developer tools.",
    "Over the past few years, I've built software at different levels — from applications and platforms to frameworks and developer tools. I mainly work with TypeScript, React, Next.js, React Native, and NestJS.",
    "I created Lithe, an open-source PHP framework built from scratch, and Bando CMS, an open-source headless CMS. I co-founded Baza, a mobility platform built for Luanda with web and mobile applications, and created and operated Rialse, an online store that was active in Angola from December 2024 through the end of 2025.",
    "I also built a full-stack music platform and other independent projects, working across architecture, development, implementation, deployment, and operations. At 19, I took on the development leadership role at Njila, coordinating the team and contributing to technical decisions and the product roadmap.",
    "Every project brought a different context, technology stack, and set of challenges. That journey — from building software from scratch to putting it into production and dealing with what happens afterward — defines how I work as a developer.",
  ],
};

export const projects: Project[] = [
  {
    id: "baza",
    fileId: "baza",
    name: "Baza",
    tagline:
      "Urban mobility platform built with NestJS and React Native",
    description:
      "A subscription-based mobility platform built for students and workers in Luanda. Baza allows users to reserve a seat in advance and use transportation with defined routes and schedules through weekly or monthly plans. As co-founder and CEO, I lead the project from its early concept through product development, contributing to strategy, architecture, development, and user experience. The ecosystem includes passenger and driver applications, an admin dashboard, backend infrastructure, and a pre-launch website.",
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
        label: "Stage",
        value: "Pre-launch",
      },
      {
        label: "Market",
        value: "Luanda, Angola",
      },
    ],
    links: [
      {
        label: "View website →",
        href: "https://bazaja.vercel.app/",
      },
    ],
    cover: "/projects/baza_1.png",
    accent: "cyan",
  },

  {
    id: "bvf",
    fileId: "bvf",
    name: "Bad Vibes Forever",
    tagline: "Full-stack music platform built with NestJS",
    description:
      "An end-to-end music platform featuring authentication, user profiles, artists, followers, albums, playlists, favorites, playback, history, downloads, and music uploads. The project includes the frontend, REST API, database, authentication system, and file storage powered by Cloudflare R2.",
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
        value: "Completed",
      },
      {
        label: "Architecture",
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
    tagline: "Open-source PHP framework inspired by Express.js",
    description:
      "A custom framework built from the ground up, focused on simplicity and development speed. Published on Packagist as lithephp/framework, with more than two dozen GitHub stars and a small ecosystem of satellite packages such as lithemod/env, lithemod/upload, lithemod/log, lithemod/validator, lithemod/session-support, and lithemod/jwt-auth, each solving common problems in an isolated and reusable way.",
    stack: [
      "PHP 8.2+",
      "Composer",
      "PSR",
      "Symfony Console",
      "PHPUnit",
    ],
    stats: [
      {
        label: "GitHub Stars",
        value: "25+",
      },
      {
        label: "Ecosystem Packages",
        value: "10+",
      },
      {
        label: "License",
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
        label: "Documentation →",
        href: "https://lithephp.vercel.app/",
      },
    ],
    cover: "/projects/lithe.png",
    accent: "purple",
  },

  {
    id: "bando",
    fileId: "bando",
    name: "Bando CMS",
    tagline: "Open-source headless CMS for developers",
    description:
      "An open-source, self-hosted headless CMS built for developers who need to create content-driven websites and platforms without building a CMS backend from scratch. Bando allows developers to model collections, define fields and relationships, manage content through a Studio, and consume data through a typed client, making it easier to build blogs, corporate websites, portals, and other content-driven platforms.",
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
        label: "Type",
        value: "Headless CMS",
      },
      {
        label: "License",
        value: "Open Source",
      },
      {
        label: "Architecture",
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
        href: "https://bando-cms.vercel.app/en",
      },
      {
        label: "npm →",
        href: "https://www.npmjs.com/package/bando-cms",
      },
    ],
    cover: "/projects/bando-studio.png",
    accent: "cyan",
  },

  {
    id: "rialse",
    fileId: "rialse",
    name: "Rialse",
    tagline: "From framework to real-world product",
    description:
      "An e-commerce platform built for the Angolan market, featuring product catalogs, categories, cart, user accounts, checkout, order history, and support. Rialse was one of the first products built with Lithe, the open-source PHP framework I created, turning a custom technology into a complete e-commerce application.",
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
        label: "Categories",
        value: "9",
      },
      {
        label: "Market",
        value: "Angola",
      },
      {
        label: "Framework",
        value: "Lithe",
      },
    ],
    links: [],
    cover: "/projects/rialse.png",
    accent: "amber",
  },
];

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
    "Estruturas de dados",
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
    "Estratégia de conteúdo",
  ],
};

export const skillsSection = {
  label: "skills/stack.json",
  title: "Skills",
  labels: {
    linguagens: "languages",
    frontend: "frontend",
    backend: "backend",
    bancosDeDados: "databases",
    infraestrutura: "infrastructure",
    ferramentas: "tools",
    engenharia: "engineering",
    devops: "devops",
    marketingDigital: "digitalMarketing",
  },
};

export const timeline = [
  {
    period: "In progress",
    title: "Computer Engineering",
    place: "UGS — University in Angola",
    description:
      "Formal education in computer engineering, covering algorithms, data structures, computer networks, and software engineering.",
  },
  {
    period: "1 year",
    title: "42 Luanda",
    place: "Piscine & peer-to-peer projects",
    description:
      "A learning methodology without teachers or traditional classes, focused on projects, peer reviews, and problem-solving under pressure — from C to system-level algorithms.",
  },
  {
    period: "Ongoing",
    title: "Products in production",
    place:
      "Lithe PHP · Baza · Rialse · Bad Vibes Forever · Bando CMS",
    description:
      "The real school: building, shipping, and maintaining software for real users.",
  },
];

export const education = {
  label: "education/timeline.md",
  title: "Education",
};

export const experienceSection = {
  label: "work/experience.md",
  title: "Experience",
};

export const experience = [
  {
    period: "2025",
    title: "Development Lead / Full-Stack Developer",
    company: "Njila",
    location: "Angola",
    description:
      "At 19, I took on development leadership at an urban mobility startup focused on students. I coordinated the development team, contributed to roadmap and architecture decisions, and worked on security and performance, as well as features such as real-time tracking and scheduling.",
    stack: ["Laravel", "PHP", "Vue.js", "Inertia.js"],
  },
  {
    period: "Freelance",
    title: "Front-End Developer",
    company: "Cubicou.ao",
    location: "Angola",
    description:
      "Developed the frontend of the Cubicou.ao platform, building responsive interfaces and reusable components while integrating REST APIs for communication with the backend and application data.",
    stack: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "REST APIs",
      "TypeScript",
    ],
  },
];

export const contact = {
  label: "contact.md",
  title: "Let's talk",
  description: "Software needs to work. I build, solve, and deliver.",
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
  locale: "en-US" as const,
  terminal: "terminal",
  openTerminal: "Open terminal",
  closeTerminal: "Close terminal",
  language: "Language",
};

export const bootLog = [
  "loading whOS v1.0...",
  "mounting /about",
  "mounting /projects (lithe-php, bando, baza, rialse, bvf)",
  "starting interactive terminal...",
  "ready.",
];

export const terminal = {
  closeLabel: "Close terminal",
  ariaLabel: "Type a terminal command",
  placeholder: "type a command... (try: help)",
  quickLabel: "new here? try:",
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
      text: "I build digital products, systems, and businesses — from zero to production.",
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