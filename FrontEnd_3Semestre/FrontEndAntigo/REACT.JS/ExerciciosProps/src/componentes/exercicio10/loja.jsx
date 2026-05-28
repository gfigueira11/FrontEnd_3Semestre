// 10 ) Crie um componente chamado ItemLoja que receba:
// nome
// preco
// categoria
// estoque
// Regras:
// Se o estoque for maior que 0, mostrar: Produto disponível
// Caso contrário: Produto indisponível

import "./loja.css"

const ItemLoja = ({ nome, preco, categoria, estoque }) => { 
    

    return(

        <div className="item">
            <h2>{nome}</h2>

            <p>Preço: R$ {preco}</p>
            <p>Categoria: {categoria}</p>
            <p>Estoque: {estoque}</p>

            {
                estoque > 0
                ? <p className="disponivel">Produto disponível</p>
                : <p className="indisponivel">Produto indisponível</p>
            }
        </div>     
            
    )
}

export default ItemLoja;