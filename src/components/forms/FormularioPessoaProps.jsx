import { useState } from 'react';
//import './Pessoas.css';

const PESSOA_VAZIA = {
  nome: '',
  email: '',
  telefone: '',
  idade: '',
};

// Repare na diferença em relação à versão com Context: agora este
// componente não sabe NADA sobre onde os dados vão parar. Ele só
// recebe uma função pronta via props ("aoAdicionarPessoa") e a chama
// quando o formulário é enviado. Quem decide o que fazer com os
// dados é sempre o componente PAI que está usando este formulário.
export default function FormularioPessoaProps({ aoAdicionarPessoa }) {
  const [dados, setDados] = useState(PESSOA_VAZIA);
  const [erro, setErro] = useState('');

  function handleChange(e) {
    const { name, value } = e.target;
    setDados((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setErro('');

    if (!dados.nome.trim()) {
      setErro('Informe o nome.');
      return;
    }

    if (!dados.email.trim() || !dados.email.includes('@')) {
      setErro('Informe um e-mail válido.');
      return;
    }

    const novaPessoa = {
      id: crypto.randomUUID(),
      nome: dados.nome.trim(),
      email: dados.email.trim(),
      telefone: dados.telefone.trim(),
      idade: dados.idade ? Number(dados.idade) : null,
    };

    // Chama a função que veio de fora, via props. Este componente
    // não tem ideia de que existe uma lista, um array, ou onde
    // esse array está guardado — ele só "avisa" o pai.
    aoAdicionarPessoa(novaPessoa);

    setDados(PESSOA_VAZIA);
  }

  return (
    <form className="pessoa-form" onSubmit={handleSubmit}>
      <h2>Cadastro de pessoa</h2>

      <div className="pessoa-form-campo">
        <label htmlFor="nome">Nome</label>
        <input id="nome" name="nome" type="text" value={dados.nome} onChange={handleChange} />
      </div>

      <div className="pessoa-form-campo">
        <label htmlFor="email">E-mail</label>
        <input id="email" name="email" type="email" value={dados.email} onChange={handleChange} />
      </div>

      <div className="pessoa-form-campo">
        <label htmlFor="telefone">Telefone</label>
        <input id="telefone" name="telefone" type="tel" value={dados.telefone} onChange={handleChange} />
      </div>

      <div className="pessoa-form-campo">
        <label htmlFor="idade">Idade</label>
        <input id="idade" name="idade" type="number" min="0" value={dados.idade} onChange={handleChange} />
      </div>

      {erro && <p className="pessoa-form-erro">{erro}</p>}

      <button type="submit" className="pessoa-form-botao">
        Cadastrar
      </button>
    </form>
  );
}
