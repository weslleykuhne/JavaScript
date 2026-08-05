//importa o framework express
const express = require('express');

//cria uma aplicação express
//a variavel server representa o backend que recebe as requisições
const server = express();

//Permite que o express entenda requisições com corpo no formato JSON
server.use(express.json());

const cursos = ['Node.js', 'Python', 'Java'];

server.get('/curso', (req, res) => {
    const nome = req.query.nome;
    return res.json({curso: `Aprendendo ${nome}`});
});

//Rota2 com : Route Parameters
server.get('/curso/:id', (req, res) => {
    const id = req.params.id;
    return res.json(cursos[id]);
});


//=============================================================================

//Método HTTP: Get, Post, Put, Delete
//Listar todos os cursos
//localhost:3055/curso

server.get('/cursos', (req, res) => {
    return res.json(cursos);
});

//Método HTTP: Post
//Criar um novo curso
//localhost:3055/curso
//{"Nome": "React"}

server.post('/cursos', (req, res) => {
    //Desestrutura a propriedade enviada no corpo da requisição
    const nome = req.body.nome;

    //Adiciona o novo curso no array cursos
    cursos.push(nome);

    //Retorna a lista de cursos atualizada com status 201
    return res.json(cursos);
});

//Método HTTP: Put
//Atualizar um curso existente
//localhost:3055/curso/0

server.put('/cursos/:id', (req, res) => {
    //Obtém o índice do curso a ser atualizado a pela URL
    const id = req.params.id;

    //Obtém o novo nome do curso a partir do corpo da requisição
    const nome = req.body.nome;

    //Atualiza o curso no índice informado
    cursos[id] = nome;

    //Retorna a lista de cursos atualizada
    return res.json(cursos);
});

//Método HTTP: Delete
//Deletar um curso
//Localhost: 3055/cursos/1

server.delete('/cursos/:index', (req, res) =>{
    //Obtém o índice do curso removido
    const index= req.params.index;
    
    //Remove 1 elemento do array cursos a partir do índice informado
    cursos.splice(index, 1);

    //Retorna a lista de cursos atualizada
    return res.json(cursos);

});

server.listen(3030, () => {
    console.log('Servidor rodando na porta 3030');
});