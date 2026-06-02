import { useContext } from "react"
import { UsuarioContext } from "../../context/UsuarioContext"
import { useState } from "react"

const Perfil = () => {
  // destyructuring

  // context
  const {usuario, setUsuario} = useContext(UsuarioContext)

  // states e variaveis
  const [novousuario, setNovoUsuario] = useState()

  // ciclo de vida e funcoes


  // JSX
  return (
    <div>
    <h2>Pagina de Perfil ( {usuario} ) </h2>

    <input type="text" 
      placeholder="Digite o novo usuario"
      onChange={(e) => {
        setNovoUsuario(e.target.value)
      }}
    />

    <button
      onClick={() => {
        setUsuario(novousuario)
      }}
    >
      Trocar Usuario </button>
      <p>Novo Usuario: {novousuario}</p>
    </div>
  )
}

export default Perfil