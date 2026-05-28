import { useState } from "react";
import "./cadFruta.css"


function CadFruta() {

    const [fruta, setFruta] = useState("")
    const [quantidade, setQuantidade] = useState("")
    const [arrFrutas, setArrFrutas] = useState([
        { id: 1, nome: "Abacaxi", quantidade: 10 },
        { id: 2, nome: "Mamao", quantidade: 20 },
    ])//cria um array vazio


    function Cadastrar(e) {
        e.preventDefault();// evida o submit do formulario
        // Cadastra os dados no state
        setArrFrutas([...arrFrutas, { id: Date.now(), nome: fruta, quantidade: quantidade }])
        
        limpaFormulario()// apos cadastrar, limpar os campos do formulario
        return false;
    }


    // Limpa os state
    function limpaFormulario() {
       setFruta("")
       setQuantidade(0) 
    }



    return (
        <section className="sessao-cadastro">
            <h1>
                Cadastro
            </h1>
            
            <form action="" method = "post" onSubmit={Cadastrar}>

            <fieldset className="cadastro">
                <label htmlFor="fruta" className="cadastro__rotulo"></label>
                <label htmlFor="quantidade" className="cadastro__rotulo"></label><br />
                <input placeholder="Digite o nome da fruta"
                    type="text"
                    id="fruta"
                    className="cadastro__entrada"
                    onChange={(e) => {
                        setFruta(e.target.value)
                    }}
                />

                <input placeholder="Digite a quantidade de fruta"
                    type="text"
                    id="quantidade"
                    className="cadastro__entrada"
                    onChange={(e) => {
                        setQuantidade(e.target.value)
                    }}
                />

                <button className="cadastro__btn-cadastrar"
                >Cadastrar</button>
                <br />
                <label htmlFor="">{fruta}</label>
            </fieldset>

            </form>


            <ul className="listagem">
                {arrFrutas.map((f) => {
                    return <li key={f.id}> Fruta: {f.nome} | Quantidade: {f.quantidade}</li>
                })}
            </ul>
        </section>



    )
}


export default CadFruta;