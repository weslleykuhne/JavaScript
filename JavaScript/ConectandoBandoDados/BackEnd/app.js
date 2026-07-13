//Importa o framework express
const express = require('express');
const connection = require('./db'); // Importa a conexão com o banco de dados
const cors = require('cors');
const server = express();

//Middleware que permite o servidor entender requisições com JSON no corpo (req.body)
server.use(express.json());
server.use(cors());


//===================================
//Método HTTP: GET
//LISTAR TODOS OS CURSOS
//localhost:3000/cursos
server.get('/cursos', (req, res) => {

   const sql = 'SELECT * FROM cursos'; // Consulta SQL para selecionar todos os cursos

   connection.query(sql, (erro, resultados) => {
       if (erro) {
           console.error('Erro ao consultar cursos:', erro);
           return res.status(500).json({ error: erro.message });
       }
       return res.json(resultados);
   });
});

//Método HTTP: GET
//LISTAR UM UNICO CURSO
//localhost:3000/curso/2
server.get('/cursos/:id', (req, res) => {

    const id = req.params.id; // Desestrutura o parâmetro "id" da URL

    const sql = 'SELECT * FROM cursos WHERE id = ?'; // Consulta SQL para selecionar um curso específico

    connection.query(sql, [id], (erro, resultado) => {
        if (erro) {
            return res.status(500).json({ error: erro.message });
        }
        return res.json(resultado[0]); // Retorna o primeiro resultado encontrado
    });
});

//Método HTTP: POST
//CRIAR UM NOVO CURSO
//localhost:3000/cursos
//{ "name": "Curso de Python" }
server.post('/cursos', (req, res)=> {

    // Desestrutura a propriedade "name" enviada no corpo da requisição
    const nome = req.body.nome;

    const sql = 'INSERT INTO cursos (nome) VALUES (?)'; // Consulta SQL para inserir um novo curso

    connection.query(sql, [nome], (erro, resultado) => {
        if (erro) {
            console.log(erro);
            return res.status(500).json({ error: erro.message });
        }
    return res.json({ mensagem: 'Curso cadastrado com sucesso', id: resultado.insertId, nome: nome});
    });
});

//Método HTTP: PUT
//ATUALIZAR UM CURSO
//localhost:3000/cursos/0
server.put('/cursos/:id', (req, res) => {

    // Obtém o índice do curso a ser atualizado pela URL
    const id = req.params.id;

    // Obtém o novo nome do curso enviado no corpo da requisição
    const nome = req.body.nome;

    const sql = 'UPDATE cursos SET nome = ? WHERE id = ?'; // Consulta SQL para atualizar o curso
    connection.query(sql, [nome, id], (erro, resultado) => {
        if (erro) {
            console.error(erro);
            return res.status(500).json({ error: erro.message });
        }

    // Retorna a lista de cursos atualizada
    return res.json({ mensagem: 'Curso atualizado com sucesso', id: id, nome: nome });
    });
});

//Método HTTP: DELETE
//DELETAR UM CURSO
//localhost:3000/cursos/1
server.delete('/cursos/:id', (req, res) => {

    // Obtém o índice do curso a ser removido
    const id = req.params.id;

    const sql = 'DELETE FROM cursos WHERE id = ?'; // Consulta SQL para deletar o curso

    connection.query(sql, [id], (erro) => {
        if (erro) {
            console.error(erro);
            return res.status(500).json({ error: erro.message });
        }

    // Retorna a lista de cursos após a exclusão
    return res.json({ mensagem: 'Curso removido com sucesso', id: id });
    });
});



//O metodo listen() faz o servidor começar a escutar
// requisiçoes em uma determinada porta.
server.listen(3023 , () => {
    console.log("Servidor rodando na porta 3002");
});
