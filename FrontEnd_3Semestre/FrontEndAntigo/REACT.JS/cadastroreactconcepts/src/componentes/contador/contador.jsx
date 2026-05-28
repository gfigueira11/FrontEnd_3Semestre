import "./contador.css";
import {useState} from "react"

const Contador = () => {
    const[valor, setValor] = useState(0);

    function incremento() {
        if (valor < 10) {
            setValor(valor + 1)
        }else{
            setValor(0)
        }
    }
    // Criar uma funcao decremento()
    // toda vez que o contador chegar em 10 voce deve reiniciar 
    // o contador nao pode fazer contagem

    function decremento() {
        if (valor > 0) {
            setValor(valor - 1)
        }else{
            setValor(0)
        }
        
    }


    return(
        <>
        
        <p>Contagem: {valor}</p>
        <button onClick={incremento}>++</button>
        <button onClick={decremento}>--</button>

        </>
    )
}

export default Contador;