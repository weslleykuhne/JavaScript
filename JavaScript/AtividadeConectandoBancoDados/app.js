const express = require('express');
const connection = require('./DB');
const server = express();

server.use(express.json());

server.get('/destinos', (req, res) => {

    const id = req.params.id;

    const sql = 'SELECT * FROM destinos';
    
    connection.query(sql, (erro, resultado) => {
        if (erro) {
            return res.status(500).json({ error: erro.message });
        }
        return res.json(resultado);
    });
});

server.get('/destinos/:id', (req, res) => {

    const id = req.params.id;

    const sql = 'SELECT * FROM destinos WHERE id = ?';

    connection.query(sql, [id], (erro, resultado) => {
        if (erro) {
            return res.status(500).json({ error: erro.message });
        }
        return res.json(resultado[0]);
    });
});

server.get('/destinos/pais/:pais', (req, res) => {

    const pais = req.params.pais;

    const sql = 'SELECT * FROM destinos WHERE pais = ?';

    connection.query(sql, [pais], (erro, resultado) => {
        if (erro) {
            return res.status(500).json({ error: erro.message });
        }
        return res.json(resultado);
    });
});

server.post('/destinos', (req, res) => {

    const nome = req.body.nome;

    const pais = req.body.pais;

    const sql = 'INSERT INTO destinos (nome, pais) VALUES (?, ?)';

    connection.query(sql, [nome, pais], (erro, resultado) => {
        if (erro) {
            console.log(erro);
            return res.status(500).json({ error: erro.message });
        }
        return res.json({ mensagem: 'Destino cadastrado com sucesso', id: resultado.insertId, nome: nome, pais: pais });
    });
});

server.put('/destinos/:id', (req, res) => {

    const id = req.params.id;

    const nome = req.body.nome;

    const pais = req.body.pais;

    const sql = 'UPDATE destinos SET nome = ?, pais = ? WHERE id = ?';

    connection.query(sql, [nome, pais, id], (erro, resultado) => {
        if (erro) {
            console.error(erro);
            return res.status(500).json({ error: erro.message });
        }
        return res.json({ mensagem: 'Destino atualizado com sucesso', id: id, nome: nome, pais: pais });
    });
});

server.delete('/destinos/:id', (req, res) => {

    const id = req.params.id;

    const sql = 'DELETE FROM destinos WHERE id = ?';

    connection.query(sql, [id], (erro) => {
        if (erro) {
            console.error(erro);
            return res.status(500).json({ error: erro.message });
        }
        return res.json({ mensagem: 'Destino excluído com sucesso', id: id });
    });
});

//--------------------------------Parte 02---------------------------------------

server.get('/clientes', (req, res) => {

    const sql = 'SELECT * FROM clientes';

    connection.query(sql, (erro, resultado) => {
        if (erro) {
            return res.status(500).json({ error: erro.message });
        }
        return res.json(resultado);
    });
});

server.get('/clientes/:id', (req, res) => {

    const idCli = req.params.id;

    const sql = 'SELECT * FROM clientes WHERE idCli = ?';

    connection.query(sql, [idCli], (erro, resultado) => {
        if (erro) {
            return res.status(500).json({ error: erro.message });
        }
        return res.json(resultado[0]);
    });
});

server.post('/clientes', (req, res) => {

    const nomeCLi = req.body.nomeCLi;

    const Email = req.body.Email;

    const telefone = req.body.telefone;

    const sql = 'INSERT INTO clientes (nomeCLi, Email, telefone) VALUES (?, ?, ?)';

    connection.query(sql, [nomeCLi, Email, telefone], (erro, resultado) => {
        if (erro) {
            console.log(erro);
            return res.status(500).json({ error: erro.message });
        }
        return res.json({ mensagem: 'Cliente cadastrado com sucesso', id: resultado.insertId, nomeCLi: nomeCLi, Email: Email, telefone: telefone });
    });
});

server.put('/clientes/:id', (req, res) => {
    
    const idCli = req.params.id;

    const nomeCLi = req.body.nomeCLi;

    const Email = req.body.Email;

    const telefone = req.body.telefone;

    const sql = 'UPDATE clientes SET nomeCLi = ?, Email = ?, telefone = ? WHERE idCli = ?';

    connection.query(sql, [nomeCLi, Email, telefone, idCli], (erro, resultado) => {
        if (erro) {
            console.error(erro);
            return res.status(500).json({ error: erro.message });
        }
        return res.json({ mensagem: 'Cliente atualizado com sucesso', id: idCli, nomeCLi: nomeCLi, Email: Email, telefone: telefone });
    });
});

server.delete('/clientes/:id', (req, res) => {

    const idCli = req.params.id;

    const sql = 'DELETE FROM clientes WHERE idCli = ?';

    connection.query(sql, [idCli], (erro) => {
        if (erro) {
            console.error(erro);
            return res.status(500).json({ error: erro.message });
        }
        return res.json({ mensagem: 'Cliente excluído com sucesso', id: idCli });
    });
});

//--------------------------------Reservas---------------------------------------

server.get('/reservas', (req, res) => {

    const sql = 'SELECT * FROM reservas';

    connection.query(sql, (erro, resultado) => {
        if (erro) {
            return res.status(500).json({ error: erro.message });
        }
        return res.json(resultado);
    });
});

server.get('/reservas/:idRes', (req, res) => {

    const idRes = req.params.idRes;

    const sql = 'SELECT * FROM reservas WHERE idRes = ?';

    connection.query(sql, [idRes], (erro, resultado) => {
        if (erro) {
            return res.status(500).json({ error: erro.message });
        }
        return res.json(resultado[0]);
    });
});

server.post('/reservas', (req, res) => {

    const idCliente = req.body.idCliente;

    const idDestino = req.body.idDestino;

    const dataRe = req.body.dataRe; 

    const sql = 'INSERT INTO reservas (idCliente, idDestino, dataRe) VALUES (?, ?, ?)';

    connection.query(sql, [idCliente, idDestino, dataRe], (erro, resultado) => {
        if (erro) {
            console.log(erro);
            return res.status(500).json({ error: erro.message });
        }
        return res.json({ mensagem: 'Reserva cadastrada com sucesso', idRes: resultado.insertId, idCliente: idCliente, idDestino: idDestino, dataRe: dataRe });
    });
});

server.put('/reservas/:idRes', (req, res) => {

    const idRes = req.params.idRes;

    const idCliente = req.body.idCliente;

    const idDestino = req.body.idDestino;

    const sql = 'UPDATE reservas SET idCliente = ?, idDestino = ? WHERE idRes = ?';

    connection.query(sql, [idCliente, idDestino, idRes], (erro, resultado) => {
        if (erro) {
            console.error(erro);
            return res.status(500).json({ error: erro.message });
        }
        return res.json({ mensagem: 'Reserva atualizada com sucesso', idRes: idRes, idCliente: idCliente, idDestino: idDestino });
    });
});

server.delete('/reservas/:idRes', (req, res) => {

    const idRes = req.params.idRes;

    const sql = 'DELETE FROM reservas WHERE idRes = ?';

    connection.query(sql, [idRes], (erro) => {
        if (erro) {
            console.error(erro);
            return res.status(500).json({ error: erro.message });
        }
        return res.json({ mensagem: 'Reserva excluída com sucesso', idRes: idRes });
    });
});

//--------------------------------Consultas---------------------------------------

server.get('/consultas/reservas-cliente/:id', (req, res) => {
    const idCliente = req.params.id;

    const sql = 'SELECT * FROM reservas WHERE idCliente = ?';

    connection.query(sql, [idCliente], (erro, resultado) => {
        if (erro) {
            return res.status(500).json({ error: erro.message });
        }
        return res.json(resultado);
    });
});

server.get('/consultas/reservas-destino/:id', (req, res) => {
    const idDestino = req.params.id;

    const sql = 'SELECT * FROM reservas WHERE idDestino = ?';

    connection.query(sql, [idDestino], (erro, resultado) => {
        if (erro) {
            return res.status(500).json({ error: erro.message });
        }
        return res.json(resultado);
    });
});

server.get('/consultas/clientes-ordenados', (req, res) => {
    const sql = 'SELECT * FROM clientes ORDER BY nomeCLi ASC';

    connection.query(sql, (erro, resultado) => {
        if (erro) {
            return res.status(500).json({ error: erro.message });
        }
        return res.json(resultado);
    });
});

server.listen(2026, () => {
    console.log('Servidor rodando na porta 2026');
});