import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './componentes/home/Home'
import Perfil from './componentes/perfil/Perfil'
import Header from './componentes/header/Header'
import Produto from './componentes/produto/Produto'
import CadastrarProduto from './componentes/CadastroProduto/CadastroProduto'
import ListarProduto from './componentes/Listaproduto/ListaProduto'
import { useState } from 'react'
import PrivateRoute from './routes/PrivateRoutes'

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {/* Rotas Publicas */}
        <Route path='/' element={<Home />} />
        <Route path='/perfil' element={<Perfil />} />

        {/* Rotas Privadas */}
        <Route path='/produto'
          element=
          {<PrivateRoute>
            <Produto />
          </PrivateRoute>

          } />


        <Route path='/cadastrar-produto'
          element={
            <PrivateRoute>
              <CadastrarProduto />
            </PrivateRoute>

          } />


        <Route path='/listar-produto'
          element={
            <PrivateRoute>
              <ListarProduto />
            </PrivateRoute>
          } />

      </Routes>
    </BrowserRouter>
  )
}

export default App;