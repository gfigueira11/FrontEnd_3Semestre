import { useContext, useEffect, useState } from "react"
import { EmailContext } from "./EmailContext"

//disponibiliza o state do usuário de forma global para
// todos os seus componentes filhos ( children )
export const EmailProvider = ({ children }) => {
    const [Email, setEmail] = useState(JSON.parse(localStorage.getItem("Email") || null))

    // ciclo de vida e funções
    useEffect(() => {
        const EmailLogado = JSON.parse(localStorage.getItem("Email"))
        setEmail(EmailLogado)
    }, [])

    // guarda o usuário no localStorage no formato JSON
    return (
        <EmailContext.Provider
            value={{
                Email,
                setEmail
            }}
        >
            {children}
        </EmailContext.Provider>
    )
}