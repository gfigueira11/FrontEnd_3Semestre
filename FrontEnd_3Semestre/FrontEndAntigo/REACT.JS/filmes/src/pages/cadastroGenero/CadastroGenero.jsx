import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import "./CadastroGenero.css";
import Cadastro from "../../components/cadastro/Cadastro";
import Lista from "../../components/lista/Lista";
import { useEffect, useState } from "react";
import api from "../../services/services";
import { isRouteErrorResponse } from "react-router-dom";

// import Swal from "sweetalert2"; // biblioteca de alertas APAGAR
import { Alerta } from "../../components/alerta/Alerta"; // Sweet Alert Personalizado

const CadastroGenero = () => {
  // states e variáveis
  const [valor, setValor] = useState("");
  const [idEditar, setIdEditar] = useState(0);

  const [editar, setEditar] = useState(false);
  const [listaGeneros, setListaGeneros] = useState([]);

  // ciclo de vida e funções
  //
  // POST
  const cadastrarGenero = async (e) => {
    e.preventDefault();

    // validação dos dados preenchidos
    if (valor.trim().length == 0) {
      Alerta({
        title: "Cadastro de Gênero",
        text: "Gênero deve ser preenchido antes de cadastrar!",
        icon: "warning",
        confirmButtonText: "Ok",
      });
      return false;
    }

    const objCadastro = {
      nome: valor,
    };

    try {
      // Cadastra na api, no endpoint do swagger
      const retornoAPI = await api.post("/Genero", objCadastro);

      if (retornoAPI.status == 201) {
        Alerta({
          title: "Cadastro de Gênero",
          text: `${objCadastro.nome} foi cadastrado!`,
          icon: "success",
          confirmButtonText: "Ok",
        });

        // limpar os campos
        limparFormulario();
        // chamar o getGeneros
        getGeneros();
      } else {
        Alerta({
          title: "Cadastro de Gênero",
          text: "Erro na chamada da API",
          icon: "error",
          confirmButtonText: "Ok",
        });
        // alert("Houve algum prolema ao cadastrar!");
      }

      // chamar o get!
    } catch (error) {
      Alerta({
        title: "Cadastro de Gênero",
        text: "Erro na chamada da API",
        icon: "error",
        confirmButtonText: "Ok",
      });
      // console.log(error);
    }
  }; //fim função cadastrarGenero

  // Reseta o formulário e esconde o botão
  const limparFormulario = () => {
    setValor("");
    setEditar(false); // reiniciar o editar
    setIdEditar(0); // zerar o idEditar
  };

  // mostrar os dados no formulário
  const preEditar = (item) => {
    //  jogar os dados no formuário
    // setIdEditar(item.idGenero);
    setEditar(true);
    setIdEditar(item.id);
    setValor(item.nome);
    console.log(item);
  };

  const editarGenero = async (e) => {
    e.preventDefault();
    // alert(`Agora sim: Gênero: ${valor} | id: ${idEditar}`);
    // validar o formulário
    const objEditar = {
      nome: valor,
    };
    // chamar a api e salvar os dados
    try {
      const retornoAPI = await api.put(`/Genero/${idEditar}`, objEditar);

      if (retornoAPI.status == 200) {
        Alerta({
          title: "Cadastro de Gênero",
          text: "Gênero editado com sucesso!",
          icon: "success",
        });
        limparFormulario();
        getGeneros();
      } else {
        Alerta({
          title: "Cadastro de Gênero",
          text: "Algum problema aconteceu ao editar",
          icon: "error",
        });
      }
    } catch (error) {
      Alerta({
        title: "Cadastro de Gênero",
        text: "Erro ao chamar a API",
        icon: "error",
      });
      // console.log(error);
    }
  }; //fim função editarGenero

  const excluirGenero = async (item) => {
    // Validação do formulário
    const result = await Alerta({
      title: "Cadastro de Gênero",
      text: `Deseja realmente apagar ${item.nome} ?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Confirmar Exclusão",
      cancelButtonText: "Cancelar",

      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
    });

    // Clicou no botão cancelar
    if (!result.isConfirmed) {
      return false;
    }

    try {
      const retornoAPI = await api.delete(`/Genero/${item.id}`);
      // const retornoAPI = await api.delete(`/Genero/${item.idGenero}`)//pra rodar com api local

      if (retornoAPI.status == 204 || retornoAPI.status == 200) {
        console.log(retornoAPI);
        Alerta({
        title: "Cadastro de Gênero",
        text: "Apagado com sucesso!",
        icon: "success",
        confirmButtonText: "Ok",
      });
        getGeneros(); //atualiza a lista
      }
    } catch (error) {}
  };

  useEffect(() => {
    // chamar os dados da api
    getGeneros();
  }, []);

  const getGeneros = async () => {
    try {
      const retornoAPI = await api.get("/Genero"); //chama a api
      const dados = retornoAPI.data; //extrai os dados retornados
      setListaGeneros(dados); //guarda os dados no state (já exibe na lista)
    } catch (error) {
      Alerta({
        title: "Cadastro de Gênero",
        text: "Erro ao retornar os dados",
        icon: "error",
        confirmButtonText: "Ok",
      });
    }
  };
  // O jsx
  return (
    <>
      <Header />
      <main>
        {/* Formulário de cadastrar / editar */}
        <Cadastro
          tituloCadastro="Cadastro de Gêneros"
          visibilidade="none"
          placeholder="gênero"
          valor={valor}
          // função pra cancelar a pré edição
          cancelarEdicao={limparFormulario}
          setValor={setValor}
          funcCadastro={editar ? editarGenero : cadastrarGenero}
          btnEditar={editar}
          listaGeneros={[]} // <-- ADICIONE ESTA LINHA AQUI
        />

        <Lista
          tituloLista="Lista de Gêneros"
          visibilidade="none"
          //Chama o método para validar:
          lista={listaGeneros}
          //Identifica o tipo de lista:
          tipoLista="genero"
          funcExcluir={excluirGenero}
          funcEditar={preEditar}
        />
      </main>
      <Footer />
    </>
  );
};

export default CadastroGenero;