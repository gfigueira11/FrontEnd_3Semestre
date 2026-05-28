const nome = 'Eduardo';

let sobrenome = "Felix";

{
    const nome = "Lucas"; 
    let sobrenome = "Costa"; // Variável de escopo de bloco, só existe dentro deste bloco
    console.log(`Nome Completo: ${nome} ${sobrenome}`);
}

sobrenome = 600.97
sobrenome = true;

console.log(`Nome Completo: ${nome} ${sobrenome}`);


const nomes = ['Eduardo', 'Lucas'];
for (var i = 0; i < nomes.length; i++) {
    console.log(`Nome ${i}: ${nomes[i]}`);
    
}

console.log(i);//??