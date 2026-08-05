let pedido = ["Hambúrguer","Batata Frita","Refrigerante"];
console.log(pedido);

pedido.push("Milk Shake");

console.log(pedido);

pedido.shift();

console.log(pedido);

console.log(pedido.length);

for(let pedidos of pedido){
    console.log(pedidos);
}

for(let indice in pedido){
    console.log(indice);
    console.log(pedido[indice]);
}