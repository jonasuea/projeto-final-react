import { useState } from 'react';
import './CadastroAluno.css';

export default function CadastroAluno() {
    const [id, setId] = useState("");
    const [nome, setNome] = useState("");
    const [curso, setCurso] = useState("");
    const [n1, setN1] = useState("");
    const [n2, setN2] = useState("");
    const [n3, setN3] = useState("");
    const [n4, setN4] = useState("");
function 
function cadastrarAluno() {
    const aluno = {
        id: { id },
        nome: nome,
        curso: curso,
        n1: n1,
        n2: n2,
        n3: n3,
        n4: n4
    };
    console.log(aluno);
}


  return (
    <div className="cadastro-aluno">
        <p>ID: 1</p>
        <input placeholder="Nome" onChange={(e) => setNome(e.target.value)} />
        <input placeholder="Curso" onChange={(e) => setCurso(e.target.value)} />
        <input placeholder="Nota 1" onChange={(e) => setN1(e.target.value)} />
        <input placeholder="Nota 2" onChange={(e) => setN2(e.target.value)} />
        <input placeholder="Nota 3" onChange={(e) => setN3(e.target.value)} />
        <input placeholder="Nota 4" onChange={(e) => setN4(e.target.value)} />
        <p>Aluno: {nome} - Curso: {curso}</p>
        <p>Notas: {n1}, {n2}, {n3}, {n4}</p>
    </div>
  );
}