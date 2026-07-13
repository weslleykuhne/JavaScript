let livros = ["Dom Casmurro","O Pequeno Príncipe","1984","Harry Potter"];
console.log(livros);

console.log(livros.includes("1984"));
console.log(livros.indexOf("Harry Potter"));

livros.shift();
console.log(livros);

livros.push("Senhor dos Anéis");

livros.sort();
console.log(livros);

for(let i = 0; i < livros.length; i++){
    console.log(i);
    console.log(livros[i]);
}

console.log(livros.length);