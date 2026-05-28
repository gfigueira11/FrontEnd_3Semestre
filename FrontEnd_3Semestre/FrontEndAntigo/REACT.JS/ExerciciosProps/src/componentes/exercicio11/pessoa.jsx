// DESAFIO EXTRA:

// Crie um componente chamado Pessoa que receba:
// nome
// idade
// cidade
// foto
// Depois:
// Crie um array de objetos pessoas com pelo menos 3 pessoas cadastradas com id, nome, sobrenome, idade, cidade, foto (utilize os avatares em anexo).
// Utilize .map() para renderizar várias pessoas dinamicamente a partir de um array.
import "./pessoa.css"

const Pessoa = ({ nome, idade, cidade, foto }) => {
    return(
        <div className="pessoa">
            <img className="foto" src={foto} alt={nome} />

            <div className="info">
                <p>Nome: {nome}</p>
                <p>Idade: {idade}</p>
                <p>Cidade: {cidade}</p>
            </div>
        </div>
    )
}

export default Pessoa;