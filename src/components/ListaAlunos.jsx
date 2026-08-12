export default function ListaAlunos() {
  const alunos = ["Ana", "Bruno", "Carla"];

  return (
    <div>
      {alunos.map((item) => (
        <p>Aluno: {item}</p>
      ))}
    </div>
  );
}