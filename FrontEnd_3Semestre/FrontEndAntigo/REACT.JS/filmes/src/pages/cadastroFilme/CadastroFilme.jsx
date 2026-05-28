import "./CadastroFilme.css"
import Header from "../../components/header/Header"
import Footer from "../../components/footer/Footer";
import Cadastro from "../../components/cadastro/Cadastro";
import Lista from "../../components/lista/Lista";
import { useEffect, useState } from "react";
import api from "../../services/services";
import { Alerta } from "../../components/alerta/Alerta"; // Sweet Alert Personalizado

const CadastroFilme = () => {
    // states e variáveis
    const [valor, setValor] = useState("");
    const [idEditar, setIdEditar] = useState(0);
    const [listaGeneros, setListaGeneros] = useState([
        { id: 1, nome: "Ação", },
        { id: 2, nome: "Comédia", },
        { id: 3, nome: "Terror", },
        { id: 4, nome: "Romance", },
    ]);

    const [IdGenero, setIdGenero] = useState("");
    const [editar, setEditar] = useState(false);
    const [listaFilmes, setListaFilmes] = useState([{
        titulo: "Carros",
        nome: "Animação",
        id: "",
        genero: { nome: "Animação" }
    }]);

    // ---------------------------------------------
    // FUNÇÕES QUE ESTAVAM FALTANDO
    // ---------------------------------------------

    const cadastrarFilme = async (e) => {
        e.preventDefault();

        if (valor.trim().length === 0) {
            Alerta({
                title: "Cadastro de Filme",
                text: "O Filme deve ser preenchido antes de cadastrar!",
                icon: "warning",
                confirmButtonText: "Ok",
            });
            return false;
        }

        const objCadastro = { titulo: valor, IdGenero: IdGenero };

        try {
            const retornoAPI = await api.post("/Filme", objCadastro); // Rota /Filme

            if (retornoAPI.status === 201) {
                Alerta({
                    title: "Cadastro de Filme",
                    text: `${objCadastro.nome} foi cadastrado!`,
                    icon: "success",
                    confirmButtonText: "Ok",
                });
                limparFormulario();
                getFilmes();
            } else {
                Alerta({
                    title: "Cadastro de Filme",
                    text: "Erro na chamada da API",
                    icon: "error",
                    confirmButtonText: "Ok",
                });
            }
        } catch (error) {
            Alerta({
                title: "Cadastro de Filme",
                text: "Erro na chamada da API",
                icon: "error",
                confirmButtonText: "Ok",
            });
        }
    };

    const limparFormulario = () => {
        setValor("");
        setIdGenero("");
        setEditar(false);
        setIdEditar(0);
    };

    const preEditar = (item) => {
        setEditar(true);
        setIdEditar(item.id);
        setValor(item.titulo);
    };

    const editarFilme = async (e) => {
        e.preventDefault();
        const objEditar = { titulo: valor, IdGenero: IdGenero };

        try {
            const retornoAPI = await api.put(`/Filme/${idEditar}`, objEditar); // Rota /Filme

            if (retornoAPI.status === 200) {
                Alerta({
                    title: "Cadastro de Filme",
                    text: "Filme editado com sucesso!",
                    icon: "success",
                });
                limparFormulario();
                getFilmes();
            } else {
                Alerta({
                    title: "Cadastro de Filme",
                    text: "Algum problema aconteceu ao editar",
                    icon: "error",
                });
            }
        } catch (error) {
            Alerta({
                title: "Cadastro de Filme",
                text: "Erro ao chamar a API",
                icon: "error",
            });
        }
    };

    const excluirFilme = async (item) => {
        const result = await Alerta({
            title: "Cadastro de Filme",
            text: `Deseja realmente apagar ${item.titulo} ?`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Confirmar Exclusão",
            cancelButtonText: "Cancelar",
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
        });

        if (!result.isConfirmed) {
            return false;
        }

        try {
            const retornoAPI = await api.delete(`/Filme/${item.id}`); // Rota /Filme

            if (retornoAPI.status === 204 || retornoAPI.status === 200) {
                Alerta({
                    title: "Cadastro de Filme",
                    text: "Apagado com sucesso!",
                    icon: "success",
                    confirmButtonText: "Ok",
                });
                getFilmes();
            }
        } catch (error) { }
    };

    const getFilmes = async () => {
        try {
            const retornoAPI = await api.get("/Filme"); // Rota /Filme
            const dados = retornoAPI.data;
            setListaFilmes(dados);
        } catch (error) {
            Alerta({
                title: "Cadastro de Filme",
                text: "Erro ao retornar os dados",
                icon: "error",
                confirmButtonText: "Ok",
            });
        }
    };

    const getGeneros = async () => {
        try {
            const retornoAPI = await api.get("/Genero"); // Rota /Genero
            const dados = retornoAPI.data;
            setListaGeneros(dados);
        } catch (error) {
            console.log("Erro ao buscar generos", error);
        }
    };

    useEffect(() => {
        getFilmes();
        getGeneros();
    }, []);

    // ---------------------------------------------
    // O JSX 
    // ---------------------------------------------
    return (
        <>
            <Header />
            <main>
                <Cadastro
                    tituloCadastro="Cadastro de Filmes"
                    //   visibilidade="none"
                    placeholder="título do filme"
                    valor={valor}
                    cancelarEdicao={limparFormulario}
                    setValor={setValor}
                    funcCadastro={editar ? editarFilme : cadastrarFilme}
                    btnEditar={editar}
                    listaGeneros={listaGeneros} // Passando a lista de gêneros para o componente Lista
                    IdGenero={IdGenero}       
                    setIdGenero={setIdGenero} 
                />

                <Lista
                    tituloLista="Lista de Filmes"
                    //visibilidade="none"
                    lista={listaFilmes}
                    tipoLista="filme" 
                    funcExcluir={excluirFilme}
                    funcEditar={preEditar}

                />
            </main>
            <Footer />
        </>
    );
};

export default CadastroFilme;