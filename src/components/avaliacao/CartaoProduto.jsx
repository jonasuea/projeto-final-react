// GABARITO QUESTÃO 5: CartaoProduto.jsx


export default function CartaoProduto({ produto }) {
  return (
    <div className="card">
      <h3>{produto.nome}</h3>
      <p>Preço: R$ {produto.preco.toFixed(2)}</p>
      <p style={{ color: produto.emEstoque ? '#16a34a' : '#e11d48', fontWeight: 'bold' }}>
        {produto.emEstoque ? "Disponível ✅" : "Esgotado ❌"}
      </p>
    </div>
  );
}