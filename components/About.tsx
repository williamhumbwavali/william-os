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
              <span className="text-ink">Sou o William</span> — developer e
              estudante de Engenharia Informática na UGS, em Angola. Aprendo
              principalmente construindo: gosto de entender como as coisas funcionam e construir minhas próprias soluções — de produtos e aplicações a frameworks e ferramentas para developers.
            </p>

            <p>
              Passei um ano na{" "}
              <span className="font-mono text-cyan">42 Luanda</span>, num
              ambiente baseado em projetos, revisão entre pares e resolução
              independente de problemas. Essa experiência mudou a forma como
              penso sobre desenvolvimento: quando não existe uma solução pronta,
              começo a investigar, construir e testar.
            </p>

            <p>
              Desde então, tenho criado software de diferentes tipos. Criei o{" "}
              <span className="text-purple">Lithe</span>, um framework PHP
              open-source construído do zero. Criei o{" "}
              <span className="text-cyan">Bando CMS</span>, um CMS headless
              open-source pensado para developers construírem plataformas de
              conteúdo sem precisarem começar um backend de CMS do zero.
              Cofundei o <span className="text-cyan">Baza</span>, uma plataforma
              de mobilidade baseada em um problema real em Luanda. Também criei e geri produtos que chegaram a operar no mundo real. A <span className="text-amber">Rialse</span> foi uma loja online que criei e operei em Angola entre dezembro de 2024 e o final de 2025, desde a construção da plataforma até à gestão do negócio. Também desenvolvi uma plataforma de música full-stack.
            </p>

            <p>
              Gosto especialmente de trabalhar na fronteira entre produto e
              engenharia — não apenas implementar funcionalidades, mas pensar
              em como uma ideia pode ser estruturada, construída e transformada
              em algo que realmente possa ser usado.
            </p>
          </div>
        </CodeFrame>
      </div>
    </section>
  )
}
