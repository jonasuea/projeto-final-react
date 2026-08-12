// GABARITO QUESTÃO 1: CartaoCurso.jsx

export default function CartaoCurso({ titulo, instrutor, horas }) {
  return (
    <div className="card">
      <h3>{titulo}</h3>
      <p>Instrutor: {instrutor}</p>
      <p>Carga Horária: {horas} horas</p>
    </div>
  );
}