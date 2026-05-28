let frutasVermelhas = new Array();
let frutasCitricas = ["Limao", "Abacaxi", "Maracuja", "Tangerina", "Acerola"];

//frutasCitricas[0] = "Morango";
frutasVermelhas.push("Morango");
frutasVermelhas.push("Maçã");
frutasVermelhas.push("Framboesa");
frutasVermelhas.push("Cereja");
frutasVermelhas.push("Tomate");

console.log(frutasVermelhas);
console.log(frutasCitricas);

let frutaRemovida = frutasVermelhas.pop(); // Remove o último elemento do array
console.log(frutaRemovida);
console.log(frutasVermelhas);

