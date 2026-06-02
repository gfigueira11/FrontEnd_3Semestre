import { useState, useContext } from "react"
import { UsuarioContext } from "./UsuarioContext"


// disponibiliza o state do usuario de forma global para
// todos os seus componentes filhos ( children )
export const UsuarioProvider = ({children}) => {
    const [usuario, setUsuario] = useState("Eduardo")

    return(
        <UsuarioContext.Provider
            value={{
                usuario, 
                setUsuario
            }}
        >
            {children}
        </UsuarioContext.Provider>
    )
}