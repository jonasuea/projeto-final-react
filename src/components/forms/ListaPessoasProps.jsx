//import './Pessoas.css';

// Este componente também não sabe de onde vieram os dados nem como
// eles são alterados. Ele só recebe, via props:
// - "pessoas": o array pronto para exibir
// - "aoRemoverPessoa": a função a chamar quando o usuário clicar
//   em "Remover"
export default function ListaPessoasProps({ pessoas, aoRemoverPessoa }) {
  if (pessoas.length === 0) {
    return <p className="pessoa-lista-vazia">Nenhuma pessoa cadastrada ainda.</p>;
  }

  return (
    <table className="pessoa-tabela">
      <thead>
        <tr>
          <th>Nome</th>
          <th>E-mail</th>
          <th>Telefone</th>
          <th>Idade</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {pessoas.map((pessoa) => (
          <tr key={pessoa.id}>
            <td>{pessoa.nome}</td>
            <td>{pessoa.email}</td>
            <td>{pessoa.telefone || '—'}</td>
            <td>{pessoa.idade ?? '—'}</td>
            <td>
              <button
                className="pessoa-tabela-remover"
                onClick={() => aoRemoverPessoa(pessoa.id)}
              >
                Remover
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
