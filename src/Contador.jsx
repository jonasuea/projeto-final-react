import { useState } from 'react';

function Contador() {
  // 1. Declara a variável 'numero' iniciando em 0 e a função 'setNumero'
  const [numero, setNumero] = useState(0);

  // 2. Função acionada pelo clique do usuário
  function incrementar() {
    setNumero(numero + 1); // Atualiza o valor e força o redesenho da tela
  }

  return (
    <div>
      <h2>Total: {numero}</h2>
      {/* Passamos a função sem parênteses no onClick */}
      <button onClick={incrementar}>👍</button>
    </div>
  );
}
export default Contador;