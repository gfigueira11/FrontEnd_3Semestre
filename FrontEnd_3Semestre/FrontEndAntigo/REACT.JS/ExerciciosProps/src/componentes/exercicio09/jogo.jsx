// 09 ) Crie um componente chamado Jogo que receba:
// nome
// plataforma
// preco
// imagem
// Exiba todas as informações em formato de card.

import "./jogo.css";

const Jogo = ({ nome, plataforma, preco, imagem }) => {
  return (
    <p className="jogo-card">
        <p>{nome}</p>
        <p>{plataforma}</p>
        <p>{preco}</p>
        <img className="jogo-imagem" src={imagem} alt={nome} />

    </p>
    
)
    
}

export default Jogo;