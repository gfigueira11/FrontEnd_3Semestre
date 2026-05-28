import "./App.css";
import"./componentes/exercicio03/perfil.css"
import"./componentes/exercicio04/botao.css"
import"./componentes/exercicio06/aluno.css"
import"./componentes/exercicio07/card.css"
import"./componentes/exercicio08/contato.css"
import"./componentes/exercicio09/jogo.css"
import"./componentes/exercicio10/loja.css"
import"./componentes/exercicio11/pessoa.css"
import Saudacao from "./componentes/exercicio01/saudacao"
import Produto from "./componentes/exercicio02/produto";
import Perfil from "./componentes/exercicio03/perfil";
import Botao from "./componentes/exercicio04/botao";
import Filme from "./componentes/exercicio05/filme";
import Aluno from "./componentes/exercicio06/aluno";
import Card from "./componentes/exercicio07/card";
import Contato from "./componentes/exercicio08/contato";
import Jogo from "./componentes/exercicio09/jogo";
import ItemLoja from "./componentes/exercicio10/loja";
import Pessoa from "./componentes/exercicio11/pessoa";


const App = () => {
  // return (
    <>
    {/* // <Saudacao nome="Eduardo" />
    // <Saudacao nome="Maria" />
    // <Saudacao nome="Lucas" />
    // </> */}

    
    {/* <Produto 
    nome = "Geladeira" 
    preco = {2500.00} 
    descricao = "Geladeira frost free de 400 litros" /> */}


      {/* <Perfil
      nome = "Maria"
      idade = {30}
      profissao = "Engenheira de Software"
      /> */}


        {/* <Botao texto="Botao" cor="red" 
        /> */}



        {/* <Filme
        titulo = "Madasgascar"
        ano = {2005}
        genero = "Animação"
        nota = {8.0}/>

        <Filme
        titulo = "O Rei Leão"
        ano = {1994}
        genero = "Animação"
        nota = {9.0}/>


        <Filme
        titulo = "Toy Story"
        ano = {1995}
        genero = "Animação"
        nota = {8.5}/> */}
        

        {/* <Aluno
        nome = "João"
        curso = "Engenharia de Software"
        imagem = "https://cdn-icons-png.flaticon.com/512/149/149071.png" /> */}

        
        {/* <Card>
          <h2>Conteúdo do Card</h2>
          <p>Este é um exemplo de conteúdo dentro do Card.</p>
        </Card> */}

        
        {/* <Contato
        nome = "Maria"
        telefone = "(11) 98765-4321"
        email = "maria@example.com"
        />

        <Contato
        nome = "Julia"
        telefone = "(11) 98765-4321"
        email = "julia@example.com"
        />

        <Contato
        nome = "Carlos"
        telefone = "(11) 98765-4321"
        email = "carlos@example.com"
        />

        <Contato
        nome = "Eduardo"
        telefone = "(11) 98765-4321"
        email = "eduardo@example.com"
        />

        <Contato
        nome = "Pedro"
        telefone = "(11) 98765-4321"
        email = "pedro@example.com"
        /> */}
          


        {/* <Jogo
        nome = "Homem Aranha"
        plataforma = "PlayStation 4"
        preco = {199.99}
        imagem = "https://cdn-icons-png.flaticon.com/512/149/149071.png"
        />

        <Jogo
        nome = "God of War"
        plataforma = "PlayStation 4"
        preco = {199.99}
        imagem = "https://cdn-icons-png.flaticon.com/512/149/149071.png"
        /> */}


        {/* <ItemLoja
        nome = "Notebook"
        preco = {3500.00}
        categoria = "Eletrônicos"
        estoque = {10}
        />

        <ItemLoja
        nome = "Celular"
        preco = {2000.00}
        categoria = "Eletrônicos"
        estoque = {0}
        /> */}

      
      


        

        
    </>



  // )

  const pessoas = [
        {
          id: 1,
          nome: "Maria Silva",
          idade: 28,
          cidade: "São Paulo",
          foto: "https://cdn-icons-png.flaticon.com/512/149/149071.png"
        },
        {
          id: 2,
          nome: "João Santos",
          idade: 35,
          cidade: "Rio de Janeiro",
          foto: "https://cdn-icons-png.flaticon.com/512/149/149071.png"
        },
        {
          id: 3,
          nome: "Ana Oliveira",
          idade: 22,
          cidade: "Belo Horizonte",
          foto: "https://cdn-icons-png.flaticon.com/512/149/149071.png"
        }
      ];

       return (
        <div>
            {pessoas.map((pessoa) => (
                <Pessoa
                    key={pessoa.id}
                    nome={`${pessoa.nome} ${pessoa.sobrenome}`}
                    idade={pessoa.idade}
                    cidade={pessoa.cidade}
                    foto={pessoa.foto}
                />
            ))}
        </div>
    );
}

export default App;
