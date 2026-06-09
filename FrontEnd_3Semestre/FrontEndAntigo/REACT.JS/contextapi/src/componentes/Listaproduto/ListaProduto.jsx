import { useContext } from "react";
import { ProdutoContext } from "../../context/ProdutoContext";

const ListarProduto = () => {
    const {listaProduto} = useContext(ProdutoContext)
    return (
        <>
        <h2>Pagina de Listar Produto</h2>
        {listaProduto.map((item) => {
            return (
                <p>{item}</p>
            )
        })} 
        </>
    )
}

export default ListarProduto