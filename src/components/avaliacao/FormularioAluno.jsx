// GABARITO QUESTÃO 6: FormularioAluno.jsx

import { useState } from 'react';

export default function FormularioAluno() {
  // Estados para controlar cada campo do formulário
  const [nome, setNome] = useState("");
  const [curso, setCurso] = useState("");
  const [media, setMedia] = useState("");

  // Estado que armazena a lista/array de alunos
  const [listaAlunos, setListaAlunos] = useState([]);

  function salvarAluno(e) {
    e.preventDefault(); // Impede a página de recarregar

    if (!nome || !curso || !media) return; // Impede cadastro se algum campo estiver vazio

    // Cria o objeto do novo aluno
    const novoAluno = {
      id: Date.now(), // Gera um ID único baseado no timestamp
      nome: nome,
      curso: curso,
      media: Number(media)
    };

    // Imutabilidade: copia a lista anterior com ... e insere o novo aluno
    setListaAlunos([...listaAlunos, novoAluno]);

    // Limpa os campos do formulário
    setNome("");
    setCurso("");
    setMedia("");
  }

  return (
    <div>
      <h2>Cadastro de Estudantes</h2>

      <form onSubmit={salvarAluno} style={{padding: '10px', border: '1px solid #ccc', borderRadius: '5px', backgroundColor: '#f8f8f8', display: 'flex', flexDirection: 'column', maxWidth: '300px', margin: '0 auto'}}>
        <label htmlFor="nome">Nome: 
        <input 
          type="text" 
          placeholder="Nome do Estudante" 
          value={nome} 
          onChange={(e) => setNome(e.target.value)} 
        /></label>
        <label htmlFor="curso">Curso: 
        <input 
          type="text" 
          placeholder="Curso" 
          value={curso} 
          onChange={(e) => setCurso(e.target.value)} 
        /></label>
        <label htmlFor="media">Média Final: 
        <input 
          type="number" 
          placeholder="Média Final" 
          value={media} 
          onChange={(e) => setMedia(e.target.value)} 
        /></label><br />
        <button type="submit">Cadastrar Aluno</button>
      </form>

      <hr />

      <h3>Alunos Cadastrados ({listaAlunos.length})</h3>
      <ul>
        {listaAlunos.map((aluno) => (
          <li key={aluno.id}>
            <strong>{aluno.nome}</strong><br />
            Curso: {aluno.curso}<br />
            Média: {aluno.media.toFixed(1)}
          </li>
        ))}
      </ul>
    </div>
  );
}