// 04) Crie um componente chamado Botao que receba:
// texto
// cor
// O botão deve:
// Mostrar o texto recebido
// Alterar a cor de fundo conforme a prop cor

import './botao.css'

const Botao = ({ texto, cor }) => {
    return(
        <button className="botao" style={{ backgroundColor: cor }}>
            {texto}
        </button>
    )
}

export default Botao