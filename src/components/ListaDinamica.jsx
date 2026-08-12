import { useState } from 'react';

function ListaDinamica() {
  const [texto, setTexto] = useState("");
  const [itens, setItens] = useState([]);

  function adicionar() {
    setItens([...itens, texto]); // Copia o array e insere o texto novo
    setTexto(""); // Limpa o input
  }

  return (
    <div>
      <input value={texto} onChange={(e) => setTexto(e.target.value)} />
      <button onClick={adicionar}>Adicionar</button>
      <ul>{itens.map((it) => <li>{it}</li>)}</ul>
    </div>
  );
}
export default ListaDinamica;