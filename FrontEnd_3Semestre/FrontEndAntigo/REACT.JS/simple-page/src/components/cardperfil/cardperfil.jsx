import './cardperfil.css';
import people from "../../assets/react.svg";

function Cardperfil() {
    return (

         <div className="card-perfil">

        <img className="card-perfil_img"
         src= {people}
          alt="Foto de Perfil"/>
    </div>

    )
};
export default Cardperfil;


// ReactJs
// Componentes
// Podem receber dados como parametros (props)
// Separar os componentes e montar nossa interface com os componentes reutilizaveis
