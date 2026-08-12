import { useState } from 'react';
import FormularioPessoaProps from './FormularioPessoaProps';
import ListaPessoasProps from './ListaPessoasProps';

// Esta é a diferença central em relação à versão com Context:
// aqui o array de pessoas mora NESTE componente, que é PAI direto
// tanto do formulário quanto da lista. Essa técnica se chama
// "lifting state up" (levantar o estado): quando dois componentes
// filhos precisam compartilhar dados, o estado sobe para o
// componente pai mais próximo que os contém.
export default function CadastroPessoasProps() {
  // O "banco de dados" em memória continua sendo um array de objetos,
  // exatamente como na versão com Context — só muda ONDE ele mora
  // e COMO os outros componentes o alcançam (props, não Context).
  const [pessoas, setPessoas] = useState([]);

  function adicionarPessoa(novaPessoa) {
    setPessoas((prev) => [...prev, novaPessoa]);
  }

  function removerPessoa(id) {
    setPessoas((prev) => prev.filter((p) => p.id !== id));
  }

  return (
    <div>
      {/* Passamos a FUNÇÃO adicionarPessoa como prop. O formulário
          não guarda nenhum dado definitivo — ele só chama essa
          função quando o usuário envia o formulário. */}
      <FormularioPessoaProps aoAdicionarPessoa={adicionarPessoa} />

      {/* Passamos o ARRAY pessoas e a função removerPessoa como props.
          Sempre que "pessoas" mudar aqui em cima, o React redesenha
          este componente e a nova lista desce automaticamente pra
          ListaPessoasProps através da prop. */}
      <ListaPessoasProps pessoas={pessoas} aoRemoverPessoa={removerPessoa} />
    </div>
  );
}
