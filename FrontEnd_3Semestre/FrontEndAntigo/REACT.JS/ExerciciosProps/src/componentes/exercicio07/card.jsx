// 07) Crie um componente chamado Card utilizando props.children. O componente deve criar uma caixa estilizada e mostrar qualquer conteúdo dentro dela.
import "./card.css"

const Card  = (props) => {
    return(
        <div className="container">
            {props.children}
        </div>
    )

}

export default Card;