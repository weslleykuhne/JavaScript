const expresse = require('express');

const server = expresse();

server.get('/aluno', (req, res) => {
    res.json({
        "Nome": "Maria",
        "Curso": "Desenvolvimento de sistemas"});
    });

server.get('/professor', (req, res) => {
    res.json({
        "Nome": "Carlos",
        "Disciplina": "Node.js"});
    });

server.get('/escola', (req, res) => {
    res.json({
        "Nome": "Tech School",
        "Cidade": "Joinville"
    });
});

    server.listen(3001, () => {
        console.log('Servidor rodando na porta 3001');
});