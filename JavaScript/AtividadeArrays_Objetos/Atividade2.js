let filmes = [
    {
        id: 1,
        titulo: "O homem forte",
        genero: "Acao",
        ano: 2018
    },
    {
        id: 2,
        titulo: "O homem fraco",
        genero: "Drama",
        ano: 2020
    },
    {
        id: 3,
        titulo: "O homem",
        genero: "Terror",
        ano: 2011
    },
]

console.log(filmes);

console.log(filmes[0].titulo);

console.log(filmes[1].genero);

for(let i = 0; i < filmes.length; i++){
    console.log(filmes[i]);
}

for(let i = 0; i < filmes.length; i++){
    console.log(filmes[i].titulo);
}