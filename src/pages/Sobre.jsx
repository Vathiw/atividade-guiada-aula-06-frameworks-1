export default function Sobre() {
  return (
    <section className="page-container">
      <span className="eyebrow">Sobre</span>
      <h1>Sobre Nós</h1>
      <p>
        Esta aplicação demonstra navegação em uma SPA, organização por componentes e
        criação de rotas estáticas e dinâmicas com React Router.
      </p>
      <div className="info-grid">
        <article className="info-card">
          <h2>React</h2>
          <p>Componentes reutilizáveis para construir a interface.</p>
        </article>
        <article className="info-card">
          <h2>React Router</h2>
          <p>Navegação entre páginas e leitura de parâmetros da URL.</p>
        </article>
      </div>
    </section>
  );
}
