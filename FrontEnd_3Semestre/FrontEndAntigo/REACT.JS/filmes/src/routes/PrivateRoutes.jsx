import { useContext } from "react"
import { Navigate } from "react-router-dom"
import { EmailContext } from "../context/email/EmailContext.jsx"

const PrivateRoute = ({ children }) => {
    const {email} = useContext(EmailContext)

    // logado? renderiza o componente privado
    // Nao logado? volta pra pagina inicial
    return email ? children : <Navigate to="/" />

   
}

export default PrivateRoute