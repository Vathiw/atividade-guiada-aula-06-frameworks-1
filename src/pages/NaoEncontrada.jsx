import { Link } from 'react-router-dom';

export default function NaoEncontrada() {
  return (
    <section className="page-container">
      <span className="eyebrow">404</span>
      <h1>Página não encontrada</h1>
      <p>O endereço informado não corresponde a nenhuma rota da aplicação.</p>
      <Link className="back-link" to="/">
        ← Voltar para a página inicial
      </Link>
    </section>
  );
}
