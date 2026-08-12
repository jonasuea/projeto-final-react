// GABARITO QUESTÃO 2: StatusFrequencia.jsx

export default function StatusFrequencia({ nome, porcentagem }) {
  return (
    <div>
      <h3>Aluno: {nome}</h3>
      <p>Presença: {porcentagem}%</p>
      <p>Status: {porcentagem >= 75 ? "Aprovado por Frequência ✅" : "Reprovado por Frequência ❌"}</p>
    </div>
  );
}