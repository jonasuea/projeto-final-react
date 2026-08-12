// GABARITO QUESTÃO 3: ListaParticipantes.jsx

import { useState } from 'react';

export default function ListaParticipantes() {
  const [nome, setNome] = useState("");
  const [lista, setLista] = useState([]);

  function adicionar() {
    if (nome.trim() === "") return;
    setLista([...lista, nome]);
    setNome("");
  }

  return (
    <div>
      <input value={nome} onChange={(e) => setNome(e.target.value)} placeholder="Nome do participante" />
      <button onClick={adicionar}>Adicionar</button>
      <ul>
        {lista.map((item, id) => (
          <li key={id} style={{ listStyle: 'none'}}>{item}</li>
        ))}
      </ul>
    </div>
  );
}