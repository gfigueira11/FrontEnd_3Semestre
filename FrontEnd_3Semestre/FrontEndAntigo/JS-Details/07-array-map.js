const hobbies = [
    "Correr",
    "Nadar",
    "Jogar Bola",
    "Viajar",
    "Lutar",
    "Conversar Muito",
    "Ler Livro",
    "Malhar na Academia",
    "Maratonar Séries",
    "Dormir",
    "Jogar Basquete"

]

//Utilizado para criar um novo array a partir de um array existente, aplicando uma função a cada elemento do array original e retornando um novo array com os resultados.

const novosHobbies = hobbies.map((hob) => {
    return `<p>${hob}</p>`;
});

console.log(novosHobbies);