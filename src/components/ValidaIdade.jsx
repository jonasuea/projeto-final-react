export default function ValidaIdade({nome, idade}) {
    function validar (status){
       return (idade >= 18 ? "Maior de idade ✅" : "Menor de idade ❌")
    }
  return (
    <div className="ValidaIdade">
        <p><strong>Nome:</strong> {nome}</p>
        <p><strong>Idade:</strong> {idade}</p>
       <p><strong>Status:</strong>: {validar(status)} </p>
    </div>
  );
}