import CodeFrame from "./CodeFrame";

export default function About() {
  return (
    <section
      id="about"
      className="scroll-mt-16 border-b border-line px-5 py-16 sm:px-10 lg:px-16"
    > <div className="mx-auto max-w-3xl"> <p className="mb-2 font-mono text-xs uppercase tracking-[0.2em] text-cyan">
      about/bio.md </p>
        <h2 className="mb-8 font-display text-3xl font-semibold text-ink">
          Sobre mim
        </h2>

        <CodeFrame filename="bio.md">
          <div className="space-y-5 font-body text-[15px] leading-relaxed text-muted">
            <p>
              <span className="text-ink">Sou o William</span>, desenvolvedor de
              software de Angola, com mais de 6 anos de experiência.
            </p>

            <p>
              Nos últimos anos, tenho construído software em diferentes níveis — de
              aplicações e plataformas a frameworks e ferramentas para developers.
              Criei o <span className="text-purple">Lithe</span>, um framework PHP
              open-source construído do zero, e o{" "}
              <span className="text-cyan">Bando CMS</span>, um CMS headless open-source.
              Cofundei o <span className="text-cyan">Baza</span>, uma plataforma de
              mobilidade criada para Luanda, e criei e operei a{" "}
              <span className="text-amber">Rialse</span>, uma loja online que esteve em
              funcionamento em Angola entre dezembro de 2024 e o final de 2025.
            </p>

            <p>
              Também desenvolvi uma plataforma de música full-stack e outros projetos
              independentes, trabalhando desde a arquitetura e desenvolvimento até à
              implementação e operação.
            </p>

            <p>
              Cada projeto trouxe um contexto, tecnologias e desafios diferentes. É esse
              percurso — entre criar software do zero, colocá-lo em funcionamento e
              lidar com o que acontece depois — que define o meu trabalho como developer.
            </p>
          </div>

        </CodeFrame>
      </div>
    </section>
  )
}
