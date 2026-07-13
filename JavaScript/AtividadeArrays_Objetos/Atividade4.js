let funcionarios = [
{
    id: 1,
    nome: "Gedian",
    cargo: "Engenheiro de Software"
},
{
     id: 2,
    nome: "Cenoura",
    cargo: "Engenheiro de Software"
},
{
     id: 3,
    nome: "Weslley",
    cargo: "Empresário"
},
{
     id: 4,
    nome: "Willian",
    cargo: "Engenheiro de Software"
}
]

console.log(funcionarios);

for(let i = 0; i < funcionarios.length; i++){
    if(funcionarios[i].id == 3){
        console.log("Funcionario encontrado");
        console.log(funcionarios[i]);
    }
}