import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './componentes/home/Home'
import Perfil from './componentes/perfil/Perfil'
import Header from './componentes/header/Header'
import Produto from './componentes/produto/Produto'
import CadastrarProduto from './componentes/CadastroProduto/CadastroProduto'
import ListarProduto from './componentes/Listaproduto/ListaProduto'
import { useState } from 'react'

function App() {

  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/perfil' element={<Perfil />} />
      <Route path='/produto' element={<Produto />} />
      <Route path='/cadastrar-produto' element={<CadastrarProduto />} />
      <Route path='/listar-produto' element={<ListarProduto />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App;