const numeros = [
    50,
    200,
    250,
    800,
    992.87,
    800,
    500,
    9876,
    99,
    134
]

//Rodar o map gerando um novo array com os números multiplicados por 2
//apos, exiba o valores do array dobro no console utilizandpo o foreach

const numerosDobro = numeros.map((num) => {
    return num * 2;
});

numerosDobro.forEach((num) => {
    console.log(num);
});


console.log('Array Modificado: ');
console.log();

//apos, exiba os valores do array dobro no console utilizandpo o foreach
let textoResultado = "";
numerosDobro.forEach((num) => {
    textoResultado += `${num} | `; // Acumula texto em uma string sem pular linha 
});


//remover o ultimo pipe
textoResultado = textoResultado.substring(0, textoResultado.length - 3); // Remove os últimos 3 caracteres (pipe e espaço)
console.log(textoResultado); // mostra o texto completo