import Paragrafo from './components/paragrafo/paragrafo';
import Titulo from './components/title/title';
import './App.css'

function App() {
 return (
  <div>
    <Titulo nome="Gabriel" sobrenome="Santos" texto="Bem Vindo, sou Titulo" />
    <Titulo texto="Eu sou outro titulo" />
    <Paragrafo textoParagrafo="Lorem ipsum dolor sit amet, consectetur adipiscing elit." /> 
  </div>
  
 );
}

export default App
