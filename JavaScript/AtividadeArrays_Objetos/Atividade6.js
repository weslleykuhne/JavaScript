let jogo = {
    nome: "Forza ",
    categoria: "Corrida",
    lancamento: 2026
}

console.log(jogo);

let jogos = [
    {
        id: 1,
        nome: "GTA V",
        categoria: "Ação",
        lancamento: 2013
    },
    {
        id: 2,
        nome: "Fifa 26",
        categoria: "Ação",
        lancamento: 2025
    },
    {
        id: 3,
        nome: "Fortnite",
        categoria: "Ação",
        lancamento: 2019
    }
]

jogos.push(
    {
    id: 4,
    nome:"God of War",
    categoria: "Ação",
    lancamento: 2018
    }
    )

    console.log(jogos);

    for(let i = 0; i < jogos.length; i++){
        console.log(jogos[i]);
    }

    for(let i = 0; i < jogos.length; i++){
        if(jogos[i].id == 1){
            console.log(jogos[i]);
        }
    }

    for(let i = 0; i < jogos.length; i++){
        console.log(jogos[i].nome, jogos[i].categoria);
    }