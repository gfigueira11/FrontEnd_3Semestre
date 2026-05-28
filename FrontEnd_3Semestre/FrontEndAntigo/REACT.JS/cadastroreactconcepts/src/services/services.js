import axio from "axios"

// define a porta onde a API local esta rodando
const apiPort = "3000"

// define o endereco/endpoint da api local
const localApi = `http://localhost:${apiPort}`

// define o endereco para apis externas
const externaApi = null

// cria o objeto do axios com a URL base apontando para a api local
const api = axio.create({
    baseURL: localApi
})



export default api