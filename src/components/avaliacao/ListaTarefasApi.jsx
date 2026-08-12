// GABARITO QUESTÃO 4: ListaTarefasApi.jsx

import { useState, useEffect } from 'react';

export default function ListaTarefasApi() {
  const [tarefas, setTarefas] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(res => res.json())
      .then(dados => setTarefas(dados.slice(0, 5)));
  }, []);

  return (
    <ul>
      {tarefas.map(item => (
        <li key={item.id} style={{ color: item.completed ? 'green' : 'red', listStyle: 'none'}}>{item.title}</li>
      ))}
    </ul>
  );
}