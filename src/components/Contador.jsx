import { useState } from 'react';

export default function Contador() {
  const [numero, setNumero] = useState(0);

  function incrementar() {
    setNumero(numero + 1);
  }
  function decrementar() {
    setNumero(numero - 1);
  }
  return (
    <div>
      <h2>Total: {numero}</h2>
      <button onClick={incrementar}>+1</button>
      <div></div>
      <button onClick={decrementar}>-1</button>
    </div>
  );
}