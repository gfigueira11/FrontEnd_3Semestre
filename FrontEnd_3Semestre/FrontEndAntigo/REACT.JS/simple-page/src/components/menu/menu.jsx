 import Cardperfil from '../cardperfil/cardperfil';
import './menu.css';
 
 function Menu() {
    return (  

 <nav className="mae">
        <a href="#" className="mae__filho">Home</a>
        <a href="#" className="mae__filho">Quem Somos</a>
        <a href="#" className="mae__filho">Contato</a>
        <a href="#" className="mae__filho mae__filho--success">Entrar</a>
        <a href="#" className="mae__filho mae__filho">Cadastrar</a>


        <Cardperfil />
    </nav>

    )

};

export default Menu;