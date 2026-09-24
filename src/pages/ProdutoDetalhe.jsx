import { Link, useParams } from 'react-router-dom';
import { produtos } from './Produtos';

export default function ProdutoDetalhe() {
  const { id } = useParams();
  const produtoEncontrado = produtos.find(
    (produto) => produto.id === parseInt(id, 10),
  );

  if (!produtoEncontrado) {
    return (
      <section className="page-container">
        <span className="eyebrow">Erro</span>
        <h1>Produto não encontrado!</h1>
        <p>Não existe um produto cadastrado com o identificador informado.</p>
        <Link className="back-link" to="/produtos">
          ← Voltar para a lista
        </Link>
      </section>
    );
  }

  return (
    <section className="page-container">
      <span className="eyebrow">Produto #{produtoEncontrado.id}</span>
      <h1>Detalhes do Produto</h1>

      <div className="product-detail-card">
        <h2>{produtoEncontrado.nome}</h2>
        <p>Preço: {produtoEncontrado.preco}</p>
      </div>

      <Link className="back-link" to="/produtos">
        ← Voltar para a lista
      </Link>
    </section>
  );
}
