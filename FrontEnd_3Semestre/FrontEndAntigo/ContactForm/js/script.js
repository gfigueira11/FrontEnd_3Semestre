async function CadastrarContato(objetoContato) {
   console.log(objetoContato)

  const resposta = fetch("http://localhost:3000/contatos", {

    method: "POST",
    body: JSON.stringify(objetoContato),
    headers: {"Content-Type": "application/json; charset=UTF-8",

    },
  });
   
  return await resposta;
}


async function BuscarEndereco(cep) {
    
    
    if (cep.trim().length < 8) {
        alert("O CEP deve ter 8 numeros");
        return false;
    }


    try {
        aguardandoCampos();

        let retorno = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        let dados = await retorno.json();


        document.getElementById("rua").value = dados.logradouro;
        document.getElementById("bairro").value = dados.bairro;
        document.getElementById("cidade").value = dados.localidade;
        
    } catch (error) {
        console.log(error);   
    }


    function aguardandoCampos() {
        document.getElementById("rua").value = "aguarde ...";
        document.getElementById("bairro").value = "aguarde ...";
        document.getElementById("cidade").value = "aguarde ...";
        }
    
}

function validarFormulario() {
    let nome = document.getElementById("nome").value;

    let sobrenome = document.getElementById("sobrenome").value;

    let email = document.getElementById("email").value;

    let telefone = document.getElementById("telefone").value;

    let ddd = document.getElementById("ddd").value;

    let numero = document.getElementById("numero").value;

    let cep = document.getElementById("cep").value;

    let rua = document.getElementById("rua").value;

    let numerocasa = document.getElementById("numerocasa").value;

    let apto = document.getElementById("apto").value;

    let complemento = document.getElementById("complemento").value;

    let bairro = document.getElementById("bairro").value;

    let cidade = document.getElementById("cidade").value;

    let anotacoes = document.getElementById("anotacoes").value;

    let quantidadedeErros = 0;

    if (nome.trim().length == 0) {
        formError("nome");
        quantidadedeErros++;
        /*alert("O campo nome é obrigatorio!");*/
    } else {
        reiniciaBorda("nome");
    }


    if (sobrenome.trim().length == 0) {
        formError("sobrenome");
        quantidadedeErros++;
        /*alert("O campo nome é obrigatorio!");*/
    } else {
        reiniciaBorda("sobrenome");
    }


    if (email.trim().length == 0) {
        formError("email");
        quantidadedeErros++;
        /*alert("O campo nome é obrigatorio!");*/
    } else {
        reiniciaBorda("email");
    }


    if (telefone.trim().length == 0) {
        formError("telefone");
        quantidadedeErros++;
        /*alert("O campo nome é obrigatorio!");*/
    } else {
        reiniciaBorda("telefone");
    }

    if (ddd.trim().length == 0) {
        formError("ddd");
        quantidadedeErros++;
        /*alert("O campo nome é obrigatorio!");*/
    } else {
        reiniciaBorda("ddd");
    }


    if (numero.trim().length == 0) {
        formError("numero");
        quantidadedeErros++;
        alert("O campo nome é obrigatorio!");
    } else {
        reiniciaBorda("numero");
    }


    if (cep.trim().length == 0) {
        formError("cep");
        quantidadedeErros++;
        /*alert("O campo nome é obrigatorio!");*/
    } else {
        reiniciaBorda("cep");
    }


    if (rua.trim().length == 0) {
        formError("rua");
        quantidadedeErros++;
        /*alert("O campo nome é obrigatorio!");*/
    } else {
        reiniciaBorda("rua");
    }


    if (numerocasa.trim().length == 0) {
        formError("numerocasa");
        quantidadedeErros++;
        /*alert("O campo nome é obrigatorio!");*/
    } else {
        reiniciaBorda("numerocasa");
    }

    if (apto.trim().length == 0) {
        formError("apto");
        quantidadedeErros++;
        /*alert("O campo nome é obrigatorio!");*/
    } else {
        reiniciaBorda("apto");
    }


    if (complemento.trim().length == 0) {
        formError("complemento");
        quantidadedeErros++;
        /*alert("O campo nome é obrigatorio!");*/
    } else {
        reiniciaBorda("complemento");
    }


    if (bairro.trim().length == 0) {
        formError("bairro");
        quantidadedeErros++;
        /*alert("O campo nome é obrigatorio!");*/
    } else {
        reiniciaBorda("bairro");
    }


    if (cidade.trim().length == 0) {
        formError("cidade");
        quantidadedeErros++;
        /*alert("O campo nome é obrigatorio!");*/
    } else {
        reiniciaBorda("cidade");
    }

    if (anotacoes.trim().length == 0) {
        formError("anotacoes");
        quantidadedeErros++;
        /*alert("O campo nome é obrigatorio!");*/
    } else {
        reiniciaBorda("anotacoes");
    }


    if (quantidadedeErros > 0) {
        alert("Existem " + quantidadedeErros + "erros no formulario!");
        quantidadedeErros = 0
    } else {

       /* alert("Formulario enviado com sucesso!");*/

        let objetoContato = {
            email: email,
            telefone: telefone,
            numero: numero,
            ddd: ddd,
            apto: apto,
            complemento: complemento,
            rua: rua,
            cep: cep,
            anotacoes: anotacoes,
            bairro: bairro,
            cidade: cidade,
            numerocasa: numerocasa,

            nome: nome,
            sobrenome: sobrenome
        }


        let cadastrado = CadastrarContato(objetoContato);


        reiniciaTodasAsBordas();

    
    }
}



function formError(idCampo) {
    document.getElementById(idCampo).style.border = "2px solid red";
}



function reiniciaBorda(idCampo) {
    document.getElementById(idCampo).style.border = "transparent";
}