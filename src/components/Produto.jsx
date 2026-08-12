export default function Produto({produto}) {
    return (
    <div>
        {produto.map((index) => (
            <div>
                <p>Produto: {index.id}</p>
                <p>Nome: {index.nome}</p>
                <p>Preço: {index.preco}</p>
                <hr/>
            </div>
            ))}
        </div>
  );
}