let produto = {
    nome: "Banana",
    preco: 100,
    quantidade: 10000
}
console.log(produto);

console.log(produto.nome);

produto.preco = 200;
console.log(produto);

produto.categoria = "Fruta";
console.log(produto);

delete produto.quantidade;
console.log(produto);