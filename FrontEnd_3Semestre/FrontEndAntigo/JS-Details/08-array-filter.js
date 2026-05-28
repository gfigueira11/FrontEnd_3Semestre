// Utilizado para filtrar elementos de um array com base em uma condição específica, retornando um novo array contendo apenas os elementos que atendem a essa condição.

const numeros = [5, 10, 14, 50, 10, 900, 100, 10];

const numerosEncontrados = numeros.filter((n) => {
    return n == 10;
});

const serasa = ["Walyson", "Davi", "Edu", "Laura", "Livia", "Amy", "Marcos", "Felipe", "Fontes", "Paulo", "Gabriel"];
const nomesEncontrados = serasa.filter((nome) => {
    const primeiraLetra = nome.substring(0, 1);// Comeca no carater zero e tras somente 1 caracter
    return primeiraLetra == "F" || primeiraLetra == "L"; // Retorna os nomes que começam com F ou L
});

console.log(numerosEncontrados);
console.log(nomesEncontrados);