import { useContext } from "react"
import { useState } from "react"
import { UsuarioContext } from "../../context/UsuarioContext"
import { ProdutoContext } from "../../context/ProdutoContext"


const Produto = () => {
    const { listaProduto } = useContext(ProdutoContext)

    //states
    const [novoproduto, setNovoProduto] = useState()


    return (
        <div>
            <h2>Pagina de Produtos</h2>


            <input type="text"
                placeholder="Digite o novo produto"
                onChange={(e) => {
                    setNovoProduto(e.target.value)
                }}
            />


            <p>Lista de Produtos:</p>
            <ul>
                {listaProduto.map((produto, index) => (
                    <li key={index}>{produto}</li>
                ))}
            </ul>




            <button
                onClick={() => {
                    setListaProduto([...listaProduto, novoproduto])
                    setNovoProduto("")
                }}
            >Adicionar Produto</button>

            <p>Novo Produto: {novoproduto}</p>



        </div>
    )
}

export default Produto