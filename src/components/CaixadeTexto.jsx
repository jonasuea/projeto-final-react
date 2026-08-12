import { useState } from 'react';

export default function CaixadeTexto() {
  const [nome, setNome] = useState("");

  return (
    <div>
      <input 
        type="text" 
        value={nome} 
        onChange={(e) => setNome(e.target.value)} 
        placeholder="Digite seu nome"
      />
      <h3>Seu nome é: {nome}</h3>
    </div>
  );
}