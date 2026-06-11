import { BrowserRouter, Link, Route, Routes } from "react-router-dom"
import Login from "../pages/login/Login"
import CadastroFilme from "../pages/cadastroFilme/CadastroFilme"
import CadastroGenero from "../pages/cadastroGenero/CadastroGenero"
import PrivateRoute from "./PrivateRoutes"


const Rotas = () => {
    
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Login />} path="/" />

                <Route element={
                    <PrivateRoute>
                        <CadastroFilme />
                    </PrivateRoute>
                } path="/filme"
                />

                <Route element={<CadastroGenero />} path="/genero" />
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas