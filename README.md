# Portfólio — William Humbwavali

Portfólio pessoal construído com **Next.js 14 (App Router)**, **TypeScript**
e **Tailwind CSS**, com uma estética de editor de código: barra lateral tipo
explorador de ficheiros, separadores no topo e cada secção apresentada como
um ficheiro aberto (`bio.md`, `README.md`, `app.tsx`, `store.ts`, `stack.json`...).

## Correr localmente

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Build de produção

```bash
npm run build
npm run start
```

## Estrutura

```
app/
  layout.tsx      # fontes (Space Grotesk, Inter, JetBrains Mono) + metadata
  page.tsx         # monta a página: sidebar, tabs, secções, scroll-spy
  globals.css      # tema global (cores, animações, scrollbar)
components/
  CodeFrame.tsx    # "janela" de editor reutilizada em cada secção
  Sidebar.tsx       # árvore de ficheiros (navegação desktop)
  TabBar.tsx        # separadores no topo (navegação mobile + desktop)
  Hero.tsx          # terminal animado de introdução
  About.tsx
  ProjectSection.tsx
  Skills.tsx
  Education.tsx
  Contact.tsx
lib/
  data.ts          # TODO O CONTEÚDO do site (projetos, skills, timeline, links)
public/
  projects/*.svg   # capas ilustrativas
