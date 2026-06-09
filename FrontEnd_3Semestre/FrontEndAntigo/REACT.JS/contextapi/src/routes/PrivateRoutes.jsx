import { useContext } from "react"
import { Navigate } from "react-router-dom"
import { UsuarioContext } from "../context/UsuarioContext"

const PrivateRoute = ({ children }) => {
    const {usuario} = useContext(UsuarioContext)

    // logado? renderiza o componente privado
    // Nao logado? volta pra pagina inicial
    return usuario ? children : <Navigate to="/" />
}

export default PrivateRoute