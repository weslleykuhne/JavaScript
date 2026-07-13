const express = require('express');

const server = express();

server.use(express.json());

const livros = ['O Senhor dos Anéis', 'Harry Potter', 'O Hobbit'];

//O get lista todos os livros
server.get('/livro', (req, res) => {
    return res.json(livros);
});

//O get lista um livro específico
server.get('/livro/:id', (req, res) => {
    const id = req.params.id;
    return res.json(livros[id]);
});

//O post cria um novo livro
server.post('/livro', (req, res) => {
    const nome = req.body.nome;
    livros.push(nome);
    return res.json(livros);
});

//O put atualiza um livro existente
server.put('/livro/:id', (req, res) => {
    const id = req.params.id;
    const nome = req.body.nome;
    livros[id] = nome;
    return res.json(livros);
});

//O delete remove um livro existente
server.delete('/livro/:index', (req, res) => {
    const index = req.params.index;
    livros.splice(index, 1);
    return res.json(livros);
});

server.listen(3055, () => {
    console.log('Servidor iniciado na porta 3055');
});