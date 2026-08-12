import { useState } from 'react';

function Painel() {
  // Inicia como 'false' (escondido)
  const [exibir, setExibir] = useState(false);

  return (
    <div>
      {/* Inverte o estado true/false a cada clique */}
      <button onClick={() => setExibir(!exibir)}>
        {exibir ? "Ocultar Senha" : "Mostrar Senha"}
      </button>

      {/* Renderização condicional simples */}
      {exibir && <p>MinhaSenha123</p>}
    </div>
  );
}
export default Painel;