export default function Boletin({nome, componente, n1, n2, n3, n4}) {
  
  function media(media) {
    return (n1+n2+n3+n4)/4;
  }

  return (
    <div className="container">
        <div className="boletin">
            <p><strong>Nome:</strong> {nome}</p>
            <p><strong>Componente:</strong> {componente}</p>
            <p><strong>N1:</strong> {n1}</p>
            <p><strong>N2:</strong> {n2}</p>
            <p><strong>N3:</strong> {n3}</p>
            <p><strong>N4:</strong> {n4}</p>
            <p><strong>Média:</strong> {media(media)}</p>
            <p>Situacao: {media(media) >= 7 ? "Aprovado ✅" : "Reprovado ❌"}</p>
        </div>
    </div>
  );
}