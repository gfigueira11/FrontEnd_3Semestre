async function calcular() {
    //Pegar os valores dos campos
    //nome
    const nome = document.getElementById("nome").value;
    //altura
    const altura = parseFloat(document.getElementById("altura").value);
    //peso
    const peso = parseFloat(document.getElementById("peso").value);


    //verificar se os campos estão preenchidos
    if (nome.trim().length === 0 || isNaN(altura) || isNaN(peso)) {
        alert("Por favor, preencha todos os campos com valores válidos.");
        return;
    }

    console.log("Liberado para Cadastrar ");
    //calcular o imc
    const IMC = calcularIMC(peso, altura);

    //gerar o texto da situacao
    const situacao = geraSituacao(IMC);

    const objIMC = {
        nome: nome,
        altura: altura,
        peso: peso,
        IMC: IMC,
        situacao: situacao
    };

    const dadosGravados = await cadastrarNaAPI(objIMC);
    console.log(dadosGravados);

    if ("error" in dadosGravados) {
        alert("Erro ao cadastrar na API: " + dadosGravados.error)
    } else {
        carregarCadastros();
    }

}


async function carregarCadastros() {
    // alert("Carregando os dados ...");
    const retorno = await fetch("http://localhost:3000/imc");
    const dadosCadastrados = await retorno.json();

    console.log(dadosCadastrados);

    dadosCadastrados.sort((a, b) => a.nome.localeCompare(b.nome) );


    document.getElementById("cadastro").innerHTML = "";
    await dadosCadastrados.forEach(objCadastro => {
        document.getElementById("cadastro").innerHTML += `<tr>
    
        <td>${objCadastro.nome}</td>
                <td>${objCadastro.altura}</td>
                <td>${objCadastro.peso}</td>
                <td>${objCadastro.IMC.toFixed(2)}</td>
                <td>${objCadastro.situacao}</td>
    </tr>`
    });


}




async function cadastrarNaAPI(objCadastro) {
    try {

        const retorno = await fetch("http://localhost:3000/imc", {
            method: "POST",
            body: JSON.stringify(objCadastro),
            headers: {
                "Content-Type": "application/json; charset=UTF-8"
            }
        });

        const dadosGravados = await retorno.json();
        console.log(dadosGravados);
        return dadosGravados;

    } catch (error) {

        console.error("Erro ao cadastrar na API:", error);
        return { error: "Problemas para Gravar na API" };
    }
}


function mostrarNaTela(objCadastro) {
    document.getElementById("cadastro").innerHTML += `<tr>
    
        <td>${objCadastro.nome}</td>
                <td>${objCadastro.altura}</td>
                <td>${objCadastro.peso}</td>
                <td>${objCadastro.IMC}</td>
                <td>${objCadastro.situacao}</td>
    </tr>`
}





function calcularIMC(peso, altura) {
    return peso / (altura * altura);
}



/*Menor que 16 – Magreza grave;

16 a menor que 17 – Magreza moderada;

17 a menor que 18,5 – Magreza leve;

18,5 a menor que 25 – Saudável;

25 a menor que 30 – Sobrepeso;

30 a menor que 35 – Obesidade Grau I;

35 a menor que 40 – Obesidade Grau II (considerada severa);

Maior que 40 – Obesidade Grau III (considerada mórbida).*/

function geraSituacao(IMC) {
    if (IMC < 16) {
        return "Magreza grave";
    } else if (IMC >= 16 && IMC < 17) {
        return "Magreza moderada";
    } else if (IMC >= 17 && IMC < 18.5) {
        return "Magreza leve";
    } else if (IMC >= 18.5 && IMC < 25) {
        return "Saudável";
    } else if (IMC >= 25 && IMC < 30) {
        return "Sobrepeso";
    } else if (IMC >= 30 && IMC < 35) {
        return "Obesidade Grau I";
    } else if (IMC >= 35 && IMC < 40) {
        return "Obesidade Grau II (considerada severa)";
    } else {
        return "Obesidade Grau III (considerada mórbida)";
    }
}