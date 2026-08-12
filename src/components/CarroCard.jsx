export default function CarroCard ({dados}) {
  return (
    <div className="cardcarro">
      <h3>Modelo: {dados.modelo}</h3>
      <p>Ano: {dados.ano}</p>
    </div>
  );
}