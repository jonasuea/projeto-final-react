export default function Perfil() {
  const nome = 'Jonas';

  function mostrarAlerta() {
    alert("Estudante matriculado!");
  }

  return (
    <div className="cartao">
      <h3>Aluno: {nome}</h3>
      <button onClick={mostrarAlerta}>Verificar</button>
    </div>
  );
}