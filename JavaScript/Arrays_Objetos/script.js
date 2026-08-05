//Array de objeto no JS

//Objetos
//Criando um objeto chamado usuario

let usuario = {
    //Propriedade : valor
    nome: "Fulano",
    idade: 20,
    cidade: "Joinville"
}
console.log(usuario);

//Acessando uma propriedade de objeto
console.log(usuario.nome);
console.log(usuario.idade);
console.log(usuario.cidade);

//Adicionando uma nova propriedade
usuario.email = "fulano@email.com";
console.log(usuario);

//Removendo uma propriedade
delete usuario.cidade;
console.log(usuario);

//Array de objetos
let usuarios = [
    {
        id: 1,
        nome: "Carlos",
        idade: 20
    },

    {
        id: 2,
        nome: "Dedé",
        idade: 37
    },

    {
        id: 3,
        nome: "Gedian",
        idade: 17
    },
]

//Mostrando o Array Usuarios
console.log(usuarios);

//Acessando usuario por posicao no Array
console.log(usuarios[1]);

//Acessando dados especificos
console.log(usuarios[0]. nome);

//Percorrendo arrays com for
for(let i = 0; i <usuarios.length; i++){
    console.log(usuarios[i].nome);   
}

//Adiciona usuario no final do Array
usuarios.push(
    {
        id: 4,
        nome: "Cenoura",
        idade: 24
    }
)
console.log(usuarios);

//Remove o ultimo item
usuarios.pop();
console.log(usuarios);

//Procurando usuario pelo id
for(let i = 0; i< usuarios.length; i++){
    if(usuarios[i].id === 2 ){
        console.log("Usuário encontrado");
    }
}