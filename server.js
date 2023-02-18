/*
servidor nativo e local
com arrow function
*/
/*const http = require("http")*/

import app from './src/app.js';

//porta em ambiente de PROD ou fixa
const port = process.env.PORT || 3000;

/*
//chave e valor
const routes = {
    '/': 'Curso de Node.js',
    '/livros': 'Entrei na pag de livros',
    '/autores': 'Listagem de autores',
    '/editora': 'Pag de editora',
    '/sobre': 'Info sobre o projeto'
}

//função de callback
const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(routes[req.url]);
})
*/

/*
server.listen(port, () => {
    console.log(`Servidor escutando em http:localhost:${port}`)
})
*/

app.listen(port, () => {
    console.log(`Servidor escutando em http:localhost:${port}`);
})