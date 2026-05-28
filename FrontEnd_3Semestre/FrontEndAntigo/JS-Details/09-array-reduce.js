const estoque = [
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





// Reduz o array a um valor único, que pode ser um número, string, objeto, etc.
let totalEstoque = estoque.reduce((total, produto) => {
    return total + produto.quantidade;
}, 0)

console.log(`Voce tem ${totalEstoque} produtos no estoque.`);







let valorTotalEstoque = estoque.reduce((total, produto) => {
    return total + (produto.preco * produto.quantidade);
}, 0)

console.log(`O valor total do estoque é R$ ${valorTotalEstoque.toFixed(2)}`);