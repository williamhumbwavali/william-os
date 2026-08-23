import { experience, projects, skills, timeline } from "@/lib/data";

export type OutputLine = {
  text: string;
  tone?: "ink" | "muted" | "cyan" | "amber" | "purple" | "green" | "red";
};

export type CommandResult = {
  lines: OutputLine[];
  navigateTo?: string;
  action?: "clear" | "close";
};

const toneCls: Record<NonNullable<OutputLine["tone"]>, string> = {
  ink: "text-ink",
  muted: "text-muted",
  cyan: "text-cyan",
  amber: "text-amber",
  purple: "text-purple",
  green: "text-green",
  red: "text-red",
};

export function toneClass(tone?: OutputLine["tone"]) {
  return toneCls[tone ?? "muted"];
}

const aliases: Record<string, string> = {
  lithe: "lithe",
  "lithe-php": "lithe",
  lithephp: "lithe",

  baza: "baza",

  rialse: "rialse",

  music: "music",
  musica: "music",
  "música": "music",

  about: "about",
  sobre: "about",
  bio: "about",

  experience: "experience",
  experiencia: "experience",
  "experiência": "experience",

  skills: "skills",
  stack: "skills",

  education: "education",
  formacao: "education",
  "formação": "education",

  contact: "contact",
  contacto: "contact",
};

const HELP_LINES: OutputLine[] = [
  {
    text: "comandos disponíveis:",
    tone: "ink",
  },
  {
    text: "  help                 — mostra esta lista",
    tone: "muted",
  },
  {
    text: "  whoami               — quem sou eu",
    tone: "muted",
  },
  {
    text: "  about                — um resumo sobre mim",
    tone: "muted",
  },
  {
    text: "  experience           — experiência profissional",
    tone: "muted",
  },
  {
    text: "  ls                   — lista as pastas do site",
    tone: "muted",
  },
  {
    text: "  ls projects          — lista os projetos",
    tone: "muted",
  },
  {
    text: "  projects             — resumo de todos os projetos",
    tone: "muted",
  },
  {
    text: "  open <nome>          — abre um projeto ou secção",
    tone: "muted",
  },
  {
    text: "  cat <ficheiro>       — mostra o conteúdo",
    tone: "muted",
  },
  {
    text: "  skills               — stack técnica",
    tone: "muted",
  },
  {
    text: "  education            — percurso académico",
    tone: "muted",
  },
  {
    text: "  contact              — formas de contacto",
    tone: "muted",
  },
  {
    text: "  clear                — limpa o ecrã",
    tone: "muted",
  },
  {
    text: "  exit                 — fecha o terminal",
    tone: "muted",
  },
  {
    text:
      "dica: não precisas de saber comandos — usa os botões abaixo ou o menu à esquerda.",
    tone: "cyan",
  },
];

function projectOutput(id: string): CommandResult {
  const p = projects.find((pr) => pr.id === id);

  if (!p) {
    return {
      lines: [
        {
          text: "projeto não encontrado.",
          tone: "red",
        },
      ],
    };
  }

  return {
    navigateTo: id,
    lines: [
      {
        text: `a abrir projects/${
          id === "lithe"
            ? "lithe-php"
            : id === "music"
              ? "music-app"
              : id
        }/...`,
        tone: "green",
      },
      {
        text: p.name,
        tone: "ink",
      },
      {
        text: p.tagline,
        tone: "cyan",
      },
      {
        text:
          p.description.slice(0, 160) +
          (p.description.length > 160 ? "…" : ""),
        tone: "muted",
      },
    ],
  };
}

export function runCommand(raw: string): CommandResult {
  const cmd = raw.trim();

  if (!cmd) {
    return {
      lines: [],
    };
  }

  const lower = cmd.toLowerCase();
  const [base, ...rest] = lower.split(/\s+/);
  const arg = rest.join(" ").replace(/^["']|["']$/g, "");

  switch (base) {
    case "help":
    case "ajuda":
    case "?":
      return {
        lines: HELP_LINES,
      };

    case "whoami":
      return {
        lines: [
          {
            text: "william",
            tone: "ink",
          },
          {
            text: "Engenheiro de Software · Luanda, Angola",
            tone: "muted",
          },
        ],
      };

    case "about":
      return {
        navigateTo: "about",
        lines: [
          {
            text: "a abrir about/bio.md...",
            tone: "green",
          },
          {
            text:
              "Estudante de Engenharia Informática (UGS) e ex-42 Luanda. Construo produtos do zero: um framework PHP, uma app de mobilidade, uma loja online.",
            tone: "muted",
          },
        ],
      };

    case "experience":
    case "experiencia":
    case "experiência":
      return {
        navigateTo: "experience",
        lines: [
          {
            text: "a abrir experience/experience.md...",
            tone: "green",
          },
          ...experience.map((item) => ({
            text: `  [${item.period}] ${item.title} — ${item.company}`,
            tone: "muted" as const,
          })),
        ],
      };

    case "ls": {
      if (
        arg === "projects" ||
        arg === "./projects" ||
        arg === "projects/"
      ) {
        return {
          lines: [
            {
              text: "projects/",
              tone: "amber",
            },
            ...projects.map((p) => ({
              text: `  ${
                p.id === "lithe"
                  ? "lithe-php"
                  : p.id === "music"
                    ? "music-app"
                    : p.id
              }/ — ${p.tagline}`,
              tone: "muted" as const,
            })),
          ],
        };
      }

      return {
        lines: [
          {
            text: "about/",
            tone: "amber",
          },
          {
            text: "experience/",
            tone: "amber",
          },
          {
            text: "projects/",
            tone: "amber",
          },
          {
            text: "skills/",
            tone: "amber",
          },
          {
            text: "education/",
            tone: "amber",
          },
          {
            text: "contact.md",
            tone: "cyan",
          },
        ],
      };
    }

    case "projects":
      return {
        lines: [
          {
            text: "os meus projetos:",
            tone: "ink",
          },
          ...projects.map((p) => ({
            text: `  ${p.name.padEnd(20, " ")} ${p.tagline}`,
            tone: "muted" as const,
          })),
          {
            text: 'usa "open <nome>" para veres mais, ex: open lithe',
            tone: "cyan",
          },
        ],
      };

    case "open": {
      const target = aliases[arg];

      if (!target) {
        return {
          lines: [
            {
              text: `não encontrei "${arg}".`,
              tone: "red",
            },
            {
              text:
                "tenta: open lithe | open baza | open rialse | open music | open experience",
              tone: "muted",
            },
          ],
        };
      }

      if (
        target === "skills" ||
        target === "education" ||
        target === "experience" ||
        target === "contact" ||
        target === "about"
      ) {
        return {
          navigateTo: target,
          lines: [
            {
              text: `a abrir ${target}...`,
              tone: "green",
            },
          ],
        };
      }

      return projectOutput(target);
    }

    case "cat": {
      if (!arg) {
        return {
          lines: [
            {
              text: "uso: cat <ficheiro>",
              tone: "red",
            },
          ],
        };
      }

      const found = Object.keys(aliases).find((key) =>
        arg.includes(key)
      );

      const target = found ? aliases[found] : undefined;

      if (!target) {
        return {
          lines: [
            {
              text: `ficheiro não encontrado: ${arg}`,
              tone: "red",
            },
            {
              text:
                "tenta: cat about.md | cat experience.md | cat contact.md | cat lithe",
              tone: "muted",
            },
          ],
        };
      }

      if (
        target === "skills" ||
        target === "education" ||
        target === "experience" ||
        target === "contact" ||
        target === "about"
      ) {
        return {
          navigateTo: target,
          lines: [
            {
              text: `a abrir ${target}...`,
              tone: "green",
            },
          ],
        };
      }

      return projectOutput(target);
    }

    case "skills":
      return {
        navigateTo: "skills",
        lines: [
          {
            text: "a abrir skills/stack.json...",
            tone: "green",
          },
          {
            text: `linguagens: ${skills.linguagens.join(", ")}`,
            tone: "muted",
          },
          {
            text: `frontend: ${skills.frontend.join(", ")}`,
            tone: "muted",
          },
          {
            text: `backend: ${skills.backend.join(", ")}`,
            tone: "muted",
          },
          {
            text: `bancos de dados: ${skills.bancosDeDados.join(", ")}`,
            tone: "muted",
          },
          {
            text: `infraestrutura: ${skills.infraestrutura.join(", ")}`,
            tone: "muted",
          },
          {
            text: `ferramentas: ${skills.ferramentas.join(", ")}`,
            tone: "muted",
          },
          {
            text: `engenharia: ${skills.engenharia.join(", ")}`,
            tone: "muted",
          },
        ],
      };

    case "education":
      return {
        navigateTo: "education",
        lines: [
          {
            text: "a abrir education/timeline.md...",
            tone: "green",
          },
          ...timeline.map((t) => ({
            text: `  [${t.period}] ${t.title} — ${t.place}`,
            tone: "muted" as const,
          })),
        ],
      };

    case "contact":
    case "contacto":
      return {
        navigateTo: "contact",
        lines: [
          {
            text: "a abrir contact.md...",
            tone: "green",
          },
          {
            text: "LinkedIn: linkedin.com/in/williamhumbwavali",
            tone: "cyan",
          },
          {
            text: "Baza: bazaja.vercel.app",
            tone: "cyan",
          },
        ],
      };

    case "clear":
    case "cls":
      return {
        lines: [],
        action: "clear",
      };

    case "date":
      return {
        lines: [
          {
            text: new Date().toLocaleString("pt-PT", {
              dateStyle: "full",
              timeStyle: "short",
            }),
            tone: "muted",
          },
        ],
      };

    case "echo":
      return {
        lines: [
          {
            text: arg || "",
            tone: "ink",
          },
        ],
      };

    case "sudo":
      return {
        lines: [
          {
            text: "permissão negada.",
            tone: "red",
          },
          {
            text:
              "boa vontade não se instala com sudo — mas um email funciona 🙂",
            tone: "muted",
          },
        ],
      };

    case "exit":
    case "close":
      return {
        action: "close",
        lines: [
          {
            text: "a fechar terminal...",
            tone: "muted",
          },
        ],
      };

    default: {
      if (aliases[base]) {
        const target = aliases[base];

        if (
          [
            "skills",
            "education",
            "experience",
            "contact",
            "about",
          ].includes(target)
        ) {
          return {
            navigateTo: target,
            lines: [
              {
                text: `a abrir ${target}...`,
                tone: "green",
              },
            ],
          };
        }

        return projectOutput(target);
      }

      return {
        lines: [
          {
            text: `comando não encontrado: ${cmd}`,
            tone: "red",
          },
          {
            text: 'escreve "help" para ver os comandos disponíveis.',
            tone: "muted",
          },
        ],
      };
    }
  }
}