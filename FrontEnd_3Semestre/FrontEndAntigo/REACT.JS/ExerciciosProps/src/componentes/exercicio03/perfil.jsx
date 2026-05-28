// 03) Crie um componente chamado Perfil que receba:
// nome
// idade
// profissao
// O componente deve exibir os dados em formato de cartão.

import './perfil.css';

const Perfil = ({nome, idade, profissao}) => {
    return(
        <p className="perfil">
            Nome: {nome} <br />
            Idade: {idade} <br />
            Profissão: {profissao}
        </p>
    )

}

export default Perfil