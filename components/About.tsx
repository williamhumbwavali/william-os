import CodeFrame from "./CodeFrame";

export default function About() {
  return (
    <section id="about" className="scroll-mt-16 border-b border-line px-5 py-16 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-3xl">
        <p className="mb-2 font-mono text-xs uppercase tracking-[0.2em] text-cyan">
          about/bio.md
        </p>
        <h2 className="mb-8 font-display text-3xl font-semibold text-ink">
          Sobre mim
        </h2>
        <CodeFrame filename="bio.md">
          <div className="space-y-5 font-body text-[15px] leading-relaxed text-muted">
            <p>
              <span className="text-ink">Sou o William</span> — estudante de
              Engenharia Informática na UGS, em Angola, e alguém que aprende
              construindo. Passei um ano na{" "}
              <span className="font-mono text-cyan">42 Luanda</span>, onde não
              há professores nem aulas: só projetos, prazos e pares a corrigir
              o teu código. Foi ali que aprendi a resolver problemas sozinho e
              a não ter medo de uma folha em branco.
            </p>
            <p>
              Desde então tenho construído software com um fio condutor:
              começar do zero. Criei o{" "}
              <span className="text-purple">Lithe</span>, um framework PHP
              meu, publicado e usado por outras pessoas. Cofundei o{" "}
              <span className="text-cyan">Baza</span>, um produto de
              mobilidade que nasceu de um problema real em Luanda. Construí a{" "}
              <span className="text-amber">Rialse</span>, uma loja online de
              ponta a ponta. E continuo a experimentar — a plataforma de
              música é o meu laboratório mais recente.
            </p>
            <p>
              O que procuro agora é uma equipa onde possa continuar a
              aprender depressa, resolver problemas com impacto real e trazer
              esta forma de trabalhar — construir, publicar, iterar.
            </p>
          </div>
        </CodeFrame>
      </div>
    </section>
  );
}
