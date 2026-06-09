import { useState, useContext, useEffect } from "react"
import { EmailContext } from "./EmailContext.Jsx"

// disponibiliza o state do email de forma global para
// todos os seus componentes filhos ( children )
export const EmailProvider = ({children}) => {
    const [email, setEmail] = useState(null)
    

    useEffect(() => {
        const emailLogado = JSON.parse(localStorage.getItem("email"))
        setEmail(emailLogado)

    }, [])

    return(
        <EmailContext.Provider
            value={{
                email,
                setEmail
            }}
        >
            {children}
        </EmailContext.Provider>
    )
}