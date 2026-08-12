import './Cracha.css';

export default function Cracha({nome, funcao, email, telefone}) {
  return (
    <div className="container">
        <div className="cracha">
            <h1>React Corporation</h1>
            <img src="https://img.magnific.com/psd-gratuitas/ilustracao-3d-de-avatar-ou-perfil-humano_23-2150671122.jpg"/>
            <h2>Colaborador: {nome}</h2>
            <h3>Função: {funcao}</h3>
            <p>E-mail: {email}</p>
            <p>Telefone: {telefone}</p>
        </div>
    </div>
  );
}