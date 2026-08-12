export default function CartaoAluno(props) {
  return (
    <div className="card">
      <h3>Aluno: {props.nome}</h3>
      <p>Série: {props.serie}</p>
      <p>Média: {props.media}</p>
    </div>
  );
}