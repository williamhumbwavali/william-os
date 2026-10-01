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
    id: "oplayer",
    label: "player.tsx",
    path: "projects/oplayer/",
    ext: "ts",
  },
  {
    id: "lithechat",
    label: "chat.php",
    path: "projects/lithechat/",
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
  headline: "Build software that becomes something more.",
  description:
    "I'm William Humbwavali, a Software Developer from Angola. I build software, products, and systems for web and mobile. Explore my work, projects, and experience through the terminal.",
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
    "I'm William, a Software Developer from Angola. I work on full-stack development, building web and mobile applications and complete systems with TypeScript, JavaScript, and PHP.",

    "My work covers products built from the ground up, from architecture and backend systems to interfaces, databases, APIs, and deployment. I primarily work with React, Next.js, React Native, NestJS, and PHP.",

    "I created Lithe, an open-source PHP framework built from scratch, and Bando CMS, an open-source headless CMS. I also created and operated Rialse, an online store that was active in Angola from December 2024 through the end of 2025. I am currently developing Baza, an urban mobility startup initiative that is still being prepared for launch.",

    "In 2025, I was part of Njila, an urban mobility startup that operated in Luanda, providing organized transportation for students from institutions such as ISPTEC. I took the lead on development, coordinating the team, defining tasks, and contributing to the product roadmap and technical decisions.",

    "Across my own projects and real-world products, I have taken responsibility for different stages of software development, from architecture and implementation to deploying systems to production.",
  ],
};

export const experienceSection = {
  label: "work/experience.md",
  title: "Experience",
};

export const projects: Project[] = [
  {
    id: "baza",
    fileId: "baza",
    name: "Baza",
    tagline:
      "Urban mobility platform built with NestJS and React Native",
    description:
      "A startup project in the mobility space, designed for students and workers in Luanda. Baza proposes a subscription-based transportation model with advance reservations, defined routes, and weekly or monthly plans. As a co-founder, I am developing the project from the initial concept, working across strategy, architecture, development, and user experience. The project includes passenger and driver applications, an admin dashboard, backend, and pre-launch website, and is currently in development and preparation for launch.",
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
    accent: "black",
  },

  {
    id: "bvf",
    fileId: "bvf",
    name: "Bad Vibes Forever",
    tagline: "Full-stack music platform built with NestJS",
    description:
      "A full-stack music platform built end to end, featuring authentication, user profiles, artists, followers, albums, playlists, favorites, playback, history, downloads, and music uploads. The project includes a frontend, REST API, database, authentication, and file storage powered by Cloudflare R2.",
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
      "A custom framework written from scratch, focused on simplicity and development speed. Published on Packagist as lithephp/framework, with more than two dozen GitHub stars and a small ecosystem of satellite packages designed to solve common problems in isolated and reusable ways.",
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
      "An open-source, self-hosted headless CMS built for developers who need to build websites and content platforms without having to develop a CMS backend from scratch. Bando allows developers to model collections, define fields and relationships, manage content through a Studio, and consume data through a typed client.",
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
    accent: "amber",
  },

  {
    id: "rialse",
    fileId: "rialse",
    name: "Rialse",
    tagline: "From framework to real-world product",
    description:
      "An e-commerce platform built for the Angolan market, featuring product catalogs, categories, shopping cart, user accounts, checkout, order history, and support. Rialse was one of the first products built with Lithe, the open-source PHP framework I created, turning a custom technology into a complete e-commerce application.",
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
    accent: "cyan",
  },

  {
    id: "oplayer",
    fileId: "oplayer",
    name: "OPlayer",
    tagline: "Offline music player for your personal library",
    description:
      "A mobile music player focused on local and offline playback. OPlayer lets users import music from their device, manage a personal library, and play tracks through a modern interface without streaming, accounts, or ads.",
    stack: [
      "React Native",
      "Expo",
      "Expo Router",
      "TypeScript",
      "NativeWind",
      "Zustand",
      "Expo Audio",
    ],
    stats: [
      {
        label: "Type",
        value: "Music Player",
      },
      {
        label: "Platform",
        value: "Mobile",
      },
      {
        label: "Architecture",
        value: "Local-first",
      },
    ],
    links: [
      {
        label: "GitHub →",
        href: "https://github.com/williamhumbwavali/offline-player",
      },
    ],
    cover: "/projects/oplayer.png",
    accent: "cyan",
  },

  {
    id: "lithechat",
    fileId: "lithechat",
    name: "LitheChat",
    tagline: "Real-time private messaging platform",
    description:
      "A real-time private messaging platform built on the Lithe ecosystem. The project combines a Next.js frontend with an HTTP API powered by LithePHP and a WebSocket server built with Workerman, using Redis Pub/Sub for event distribution and MySQL for persistent storage of users, conversations, and messages.",
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "PHP",
      "LithePHP",
      "MySQL",
      "Redis",
      "WebSocket",
      "Workerman",
    ],
    stats: [
      {
        label: "Type",
        value: "Real-time Chat",
      },
      {
        label: "Architecture",
        value: "Full Stack",
      },
      {
        label: "Communication",
        value: "REST + WebSocket",
      },
    ],
    links: [
      {
        label: "Frontend →",
        href: "https://github.com/williamhumbwavali/lithechat-frontend",
      },
      {
        label: "Backend →",
        href: "https://github.com/williamhumbwavali/lithechat-backend",
      },
    ],
    cover: "/projects/lithechat.png",
    accent: "purple",
  },
];

export const timeline = [
  {
    period: "Ongoing",
    title: "Computer Engineering",
    place: "UGS — University in Angola",
    description:
      "Formal education in computer engineering, covering algorithms, data structures, computer networks, and software engineering fundamentals.",
  },
  {
    period: "1 year",
    title: "42 Luanda",
    place: "Piscine & peer-to-peer projects",
    description:
      "A learning model without teachers or traditional classes, focused on project-based learning, peer evaluation, and problem solving under pressure — from C to system-level algorithms.",
  },
  {
    period: "Ongoing",
    title: "Products in production",
    place:
      "Lithe PHP · Baza · Rialse · Bad Vibes Forever · Bando CMS",
    description:
      "The real school: building, shipping, and maintaining software used by real people.",
  },
];

export const education = {
  label: "education/timeline.md",
  title: "Education",
};

export const experience = [
  {
    period: "2025",
    title: "Development Lead / Full-Stack Developer",
    company: "Njila",
    location: "Angola",
    description:
      "I led the development of Njila, an urban mobility startup that operated in Luanda in 2025, focused on student transportation, including students from ISPTEC. I coordinated the development team, contributed to the product roadmap and decisions around architecture, security, and performance, and developed core platform features including real-time tracking and trip scheduling.",
    stack: [
      "Laravel",
      "PHP",
      "Vue.js",
      "Inertia.js",
      "NestJS",
      "React Native",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "PostgreSQL",
      "Redis",
      "Docker",
      "REST API",
      "WebSockets",
      "Git",
    ],
  },

  {
    period: "Freelance",
    title: "Front-End Developer",
    company: "Cubicou.ao",
    location: "Angola",
    description:
      "I developed the frontend of Cubicou, an Angolan real estate platform built to centralize property listings and connect property owners, agents, and people looking for houses, apartments, land, and commercial spaces. I was responsible for building interfaces, reusable components, and backend API integrations, including property search, listing presentation, and other platform flows.",
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "REST APIs",
    ],
  },
];

export const contact = {
  label: "contact.md",
  title: "Let's talk",
  description:
    "Software needs to work. I build, solve, and ship.",
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
  "loading whEnv v1.1...",
  "mounting /about",
  "mounting /projects (lithe-php, bando, baza, rialse, bvf)",
  "starting interactive terminal...",
  "ready.",
];

export const terminal = {
  closeLabel: "Close terminal",
  ariaLabel: "Enter a terminal command",
  placeholder: "type a command... (try: help)",
  quickLabel: "new here? try:",
  home: "~/william — zsh",
  bootScript: [
    { prompt: true, text: "whoami" },
    {
      prompt: false,
      text: "William Humbwavali",
      tone: "ink" as const,
    },
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
    "Software Architecture",
    "APIs",
    "Distributed Systems",
  ],
  devops: [
    "CI/CD",
    "Docker Compose",
    "Deployment",
    "Monitoring",
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