import { useState } from 'react';

export default function ListaCompras() {
  const [produto, setProduto] = useState("");
  const [carrinho, setCarrinho] = useState([]);

  function adicionar() {
    setCarrinho([...carrinho, produto]);
    setProduto("");
  }

  return (
    <div>
      <input value={produto} onChange={(e) => setProduto(e.target.value)} />
      <button onClick={adicionar}>Adicionar</button>
      <ul style={{listStyle: "none", padding: 0, margin: 0}}>{carrinho.map((item) => <li>{item}</li>)}</ul>
    </div>
  );
}