// 08) Crie um componente chamado Contato que receba:
// nome
// telefone
// email
// Depois:
// Crie uma lista com 5 contatos
// Exiba todos utilizando o componente

import "./contato.css"

const Contato = ({nome, telefone, email}) => {
    return(
            <p className="contato">
                Nome: {nome} <br />
                Telefone: {telefone} <br />
                Email: {email}
            </p>
    )
}

export default Contato;