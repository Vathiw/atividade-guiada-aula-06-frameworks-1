import { Link } from 'react-router-dom';

export const produtos = [
  { id: 1, nome: 'Notebook Gamer', preco: 'R$ 5.000' },
  { id: 2, nome: 'Mouse sem fio', preco: 'R$ 150' },
  { id: 3, nome: 'Teclado Mecânico', preco: 'R$ 350' },
];

export default function Produtos() {
  return (
    <section className="page-container">
      <span className="eyebrow">Catálogo</span>
      <h1>Nossos Produtos</h1>
      <p>Selecione um item para abrir sua página de detalhes.</p>

      <ul className="product-list">
        {produtos.map((produto) => (
          <li key={produto.id}>
            <Link to={`/produtos/${produto.id}`}>
              <span>
                <strong>{produto.nome}</strong>
                <small>Produto #{produto.id}</small>
              </span>
              <span className="product-price">{produto.preco}</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
