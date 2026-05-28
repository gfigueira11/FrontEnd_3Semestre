const produtos = [
    {
        descricao: "Camisa Polo",
        cor: "Vermelho",
        preco: 67.67,
        perfil: "M",
        quantidade: 20,
        promocao: true
    },

    {
        descricao: "Camiseta Listrada",
        cor: "Azul",
        preco: 67.67,
        perfil: "M",
        quantidade: 50,
        promocao: true
    },

    {
        descricao: "Cropped",
        cor: "Amarela",
        preco: 67.67,
        perfil: "F",
        quantidade: 10,
        promocao: false
    },

    {
        descricao: "Vestido",
        cor: "Roxa",
        preco: 67.67,
        perfil: "F",
        quantidade: 10,
        promocao: false
    }
];  



// const produtosFemininos = produtos.filter((produto) => {
//     return produto.perfil == "F";
// });

// console.log(produtosFemininos);






// let qtdPromocao = 0;
// const produtosPromocao = produtos.filter((produto) => {
//     if (produto.promocao == true) {
//         qtdPromocao += produto.quantidade;
//     }
//     return produto.promocao == true;
// });

// console.log(produtosPromocao);

// console.log(`Quantidade de produtos em promoção: ${qtdPromocao} `);













// const camisaModelo = produtos.filter((produto) => {
//     return produto.descricao == "Camisa Polo";
// });

// console.log(camisaModelo);