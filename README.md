# Portfólio — William Humbwavali

Portfólio pessoal construído com **Next.js 16 (App Router)**, **TypeScript** e **Tailwind CSS**, com uma estética inspirada em editores de código: barra lateral tipo explorador de ficheiros, separadores no topo, terminal interativo e cada secção apresentada como um ficheiro aberto (`bio.md`, `README.md`, `experience.md`, `stack.json`...).

O portfólio está disponível em português e inglês:

- `/` — Português
- `/en` — English

A interface é compartilhada entre os dois idiomas, enquanto o conteúdo é separado por ficheiros de dados (`data.ts` e `data-en.ts`).

## Correr localmente

```bash
npm install
npm run dev
````

Abre [http://localhost:3000](http://localhost:3000).

## Build de produção

```bash
npm run build
npm run start
```

## Estrutura

```text
app/
├── layout.tsx
├── page.tsx
└── en/
    └── page.tsx

components/
├── Home.tsx
├── CodeFrame.tsx
├── Sidebar.tsx
├── TabBar.tsx
├── Hero.tsx
├── InteractiveTerminal.tsx
├── BootScreen.tsx
├── About.tsx
├── Experience.tsx
├── ProjectSection.tsx
├── Skills.tsx
├── Education.tsx
├── Contact.tsx
└── ...

lib/
├── data.ts
├── data-en.ts
└── terminal-commands.ts

public/
└── projects/
    └── *.svg
```

## Tecnologias

* **Next.js 16**
* **React**
* **TypeScript**
* **Tailwind CSS**
* **Lucide React**
* **Next.js App Router**

## Arquitetura

A interface e o conteúdo são separados.

Os componentes são compartilhados entre as versões portuguesa e inglesa, enquanto cada idioma possui o seu próprio conjunto de dados.

```text
data.ts
   │
   ├──> Home.tsx
   │
   └──> componentes compartilhados

data-en.ts
   │
   ├──> Home.tsx
   │
   └──> componentes compartilhados
```

Essa abordagem evita a duplicação de componentes e permite adicionar novos idiomas ou conteúdos sem alterar a estrutura da interface.

## Licença

Este projeto é um portfólio pessoal de William Humbwavali.