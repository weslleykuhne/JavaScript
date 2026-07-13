let alunos = [
    {
        matricula: 11111,
        nome: "Gedian",
        nota: 9.0
    },
    {
        matricula: 22222,
        nome: "Cenoura",
        nota: 10.0
    },
    {
        matricula: 33333,
        nome: "Weslley",
        nota: 7.0
    },
    {
        matricula: 44444,
        nome: "Willian",
        nota: 6.0
    }
]

console.log(alunos);

alunos.push(
    {
        matricula: 55555,
        nome: "Rafa",
        nota: 8.0
    },
)

console.log(alunos);

alunos.pop();
console.log(alunos);

for(let i = 0; i < alunos.length; i++){
    console.log(alunos[i].nome);
}