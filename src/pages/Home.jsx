import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <section className="page-container hero">
      <span className="eyebrow">Atividade Guiada</span>
      <h1>Página Inicial</h1>
      <p className="lead">
        Bem-vindo à aplicação de exemplo construída com React, Vite e React Router.
      </p>
      <p>
        Use o menu para navegar entre as páginas sem recarregar o navegador e visite a
        área de produtos para testar as rotas dinâmicas.
      </p>
      <Link className="primary-button" to="/produtos">
        Ver produtos
      </Link>
    </section>
  );
}
