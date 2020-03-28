const express = require('express');
const routes = require('./routes');
const cors = require('cors');
const { errors } = require('celebrate');

const app = express();

app.use(cors());

// indico para o express que o json deve ser entendido pelo JS
app.use(express.json());

app.use(routes);

app.use(errors());
/**
 * Rota
 * 
 */

 /*
 * Metodos HTTP:
    GET:    Buscar/Listar uma informação do back-end
    POST:   Criar uma informação do back-end
    PUT:    Alterar uma informação do back-end
    DELETE: Deletar uma informação do back-end
 */

 /*
    Tipos de parametros:

    Query: 
        Parâmetros nomeados enviados na rota após "?", geralmente
        usados par filtros, paginação;
        Exemplo: http://localhost:3333/users?name=Andre
    Route: 
        Parâmetros utilizados para identificar recursos;
        Exemplo: http://localhost:3333/users/1
    Request Body:
        Corpo da requisição, utilizado para criar ou alterar recursos
*/
/*
app.get('/users', (request, response)=> {
    return  response.json({
        evento: 'Teste',
        aluno: 'Andre Serudo'
    })
});
*/

/*
//    ---------------- Exemplo de Route ----------------------------
app.get('/users/:id', (request, response)=> {
    const params = request.params;

    console.log(params);

    return  response.json({
        evento: 'Teste',
        aluno: 'Andre Serudo'
    })
});
*/

/*
    Exemplo de Request Query passando parametros no GET

app.get('/users', (request, response)=> {
    const params = request.query;

    console.log(params);

    return  response.json({
        evento: 'Teste',
        aluno: 'Andre Serudo'
    })
});
*/

/*
    Exemplo de Request Body utilizando o POST

app.post('/users', (request, response)=> {
    const body = request.body;

    console.log(body);

    return  response.json({
        evento: 'Teste',
        aluno: 'Andre Serudo 2'
    })
});
*/

//app.listen(3333);
module.exports = app;