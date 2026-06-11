import Logo from "../../assets/img/logo.svg";
import "./Login.css";
import Botao from "../../components/botao/Botao.jsx";
import { useContext, useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { EmailContext } from "../../context/email/EmailContext.jsx";
import { SenhaContext } from "../../context/senha/SenhaContext.jsx";



const Login = () => {
    const {Email, setEmail} = useContext(EmailContext)
    const {Senha, setSenha} = useContext(SenhaContext)
    const [novoEmail, setnovoEmail] = useState() 
    const [novoSenha, setnovoSenha] = useState()
    const navigation = useNavigate()

    const Perfil = () => {

        if (email.trim().lenght == 0 || senha.trim().lenght == 0) {
            alert("Preencha os campos de email e senha")
            return false;
        }

        localStorage.setItem("Email", JSON.stringify(novoEmail))
        localStorage.setItem("Senha", JSON.stringify(novoSenha))
        setEmail(novoEmail)
        setSenha(novoSenha)
        setnovoEmail("")
        setnovoSenha("")

    }


    const dadosLogin = {
        email: Email,
        senha: Senha
    }


    try {
        const retornoAPI = await api.post("/login", dadosLogin)
        const token = retornoAPI.data.token
        const usuarioDecoded = jwt_decode(token)
        setUsuario(usuarioDecoded)
        localStorage.setItem("usuario", JSON.stringify(usuarioDecoded));
        setEmail("");
        setSenha("");
    } catch (error) {
        alert("Email ou senha inválidos")   
    }


    const verificarLogin = () => {
        const logado = JSON.parse(localStorage.getItem("usuario"))

        if (logado != undefined || logado != null) {
            setUsuario(logado)
            Navigate("/filme")
        }
    }


    useEffect(() => {


    }, [])



    return(
        <main className= "main_login">
          <div className="banner"></div>
          <section className="section_login">
            <img src={Logo} alt="Logo do Filmoteca"/>
            <form action="" className="form_login">
                <h1>Login</h1>
                <div className="campos_login">
                    <div className="campo_input">
                        <label htmlFor="email">Email:</label>
                        <input onChange={(e) => {setnovoEmail(e.target.value)}} value={novoEmail} type="email" name="email" placeholder="Digite seu e-mail"/>
                    </div>
                    <div className="campo_input">
                        <label htmlFor="senha">Senha:</label>
                        <input onChange={(e) => {setnovoSenha(e.target.value)}} value={novoSenha} type="password" name="senha" placeholder="Digite sua senha"/>
                    </div>
                </div>
                <button  onClick={() => {
                    Perfil()
                    navigation("/filme")
                }}>Entrar</button>
            </form>
          </section>
        </main>
    )
}

export default Login;