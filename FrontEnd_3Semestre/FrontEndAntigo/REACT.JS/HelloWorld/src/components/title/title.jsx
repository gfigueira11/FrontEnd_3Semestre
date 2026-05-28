
function Titulo({ nome, sobrenome, texto }) {
    return (
        <h1>{texto}
        <br />
        {nome} <br />
         {sobrenome}
        </h1>
    );
}

export default Titulo;