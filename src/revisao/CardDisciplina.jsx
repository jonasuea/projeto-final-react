export default function CardDisciplina({ nome, cargaHoraria }) {
  return (
    <div>
      <h3>Disciplina: {nome}</h3>
      <p>Carga Horária: {cargaHoraria} horas</p>
    </div>
  );
}