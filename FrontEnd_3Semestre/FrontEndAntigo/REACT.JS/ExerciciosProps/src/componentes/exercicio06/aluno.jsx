// 06) Crie um componente chamado Aluno que receba:
// nome
// curso
// imagem
// Exiba:
// A imagem do aluno
// O nome
// O curso

const Aluno = ({ nome, curso, imagem }) => {
    return(
        <p>
            <img className="imagem" src={imagem} alt={nome} />
            Nome: {nome} 
            Curso: {curso}
        </p>
    )

}
export default Aluno