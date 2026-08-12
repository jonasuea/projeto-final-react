import { useState, useEffect } from 'react';

function ListaUsuarios() {
  const [artigo, setArtigo] = useState([]);
  
  useEffect(() => {
    fetch("https://api.nasa.gov/planetary/apod?api_key=9gKcnhqhXBhzioLJt0SqESl5AGVTGBZxoWfgWrJA")
      .then(res => res.json()) // Converte a resposta em JSON
      .then(dados => setArtigo(dados)); // Salva no estado
  }, []);
  return (
    <ul>
      {console.log(artigo)}
      {artigo.map((item) => (
        <li>
          <h2>{item.title}</h2>
          <p>{item.explanation}</p>
          <img src={item.url} alt={item.title} />
        </li>
      ))}
    </ul>
  );
}
export default ListaUsuarios;