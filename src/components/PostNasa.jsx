import { useState, useEffect } from 'react';
import './PostNasa.css';

function PostNasa() {
  const [artigos, setArtigos] = useState([]);
  const [expandidos, setExpandidos] = useState({});

  useEffect(() => {
    fetch("https://api.nasa.gov/planetary/apod?api_key=9gKcnhqhXBhzioLJt0SqESl5AGVTGBZxoWfgWrJA&count=10")
      .then(res => res.json())
      .then(dados => setArtigos(dados));
  }, []);

  const toggleExpandido = (date) => {
    setExpandidos((prev) => ({ ...prev, [date]: !prev[date] }));
  };

  if (artigos.length === 0) return <p className="carregando">Carregando...</p>;

  return (
    <div className="galeria">
      {artigos.map((item) => (
        <div className="card" key={item.date}>
          <div className="card-imagem">
            {item.media_type === "video" ? (
              <iframe
                src={item.url}
                title={item.title}
                allowFullScreen
              />
            ) : (
              <img src={item.url} alt={item.title} loading="lazy" />
            )}
          </div>

          <div className="card-corpo">
            <span className="card-registro">APOD · {item.date}</span>
            <h2 className="card-titulo">{item.title}</h2>

            <p className={`card-descricao ${expandidos[item.date] ? "expandido" : ""}`}>
              {item.explanation}
            </p>
            <button className="card-leia-mais" onClick={() => toggleExpandido(item.date)}>
              {expandidos[item.date] ? "mostrar menos" : "leia mais"}
            </button>

            <span className="card-copyright">
              {item.copyright ? `© ${item.copyright.trim()}` : "domínio público"}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PostNasa;