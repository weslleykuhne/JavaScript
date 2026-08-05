//importa o framework express
const express = require('express');

//cria uma aplicação express
//a variavel server representa o backend que recebe as requisições
const server = express();

//define uma rota do tipo get
server.get('/curso', (req, res) => {
    res.json({curso: 'Curso de Node.js'});
});

//linten() faz o servidor comecar a escutar as requisições na porta determinada
server.listen(3001, () => {
    console.log('Servidor rodando na porta 3001');
});
