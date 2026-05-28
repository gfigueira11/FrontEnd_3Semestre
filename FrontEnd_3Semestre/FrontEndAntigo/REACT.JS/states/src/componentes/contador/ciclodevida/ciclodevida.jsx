import { useEffect, useState } from "react"
import "./ciclodevida.css"

function CicloDeVida() {
    const [contador, setContador] = useState(0)

    useEffect(() => {
        //quando o componente e montado
        console.log("Componente MONTADO");

        return () => {
            console.log("Componente DESMONTADO");
        }
        
    }, [])



    useEffect(() => {
        //quando o componente e montado
        console.log("Componente ATUALIZADO");
        console.log(`Valor do contador ${contador}`);

    }, [contador])



    


   return (
    <>
    <h1>Contador: {contador}</h1>
    <button onClick={() => {
        setContador(contador + 1);
    }}>Contar</button>
     </>
   )
}

export default CicloDeVida