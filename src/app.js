import express from "express";
import db from "./config/dbConnect.js"

//evento e arrow function
db.on("error", console.log.bind(console, 'Erro de conexão'));
db.once("open", () => {
    console.log('Conexão com o cando feita com sucesso');
})

const app = express();

app.use(express.json());

const livros = [
    {id: 1, "titulo": "Senhor dos Aneis"},
    {id: 2, "titulo": "O Hobbit"}
]

app.get('/', (req, res) => {
    res.status(200).send('Curso de Node.js');
})

app.get('/livros', (req, res) => {
    res.status(200).json(livros);
})

app.get('/livros/:id', (req, res) => {
    let index = findLivro(req.params.id);
    res.json(livros[index]);
})

app.post('/livros', (req, res) => {
    livros.push(req.body);
    res.status(201).send('Livro foi cadastrado com sucesso');
})

app.put('/livros/:id', (req, res) => {
    let index = findLivro(req.params.id);
    livros[index].titulo = req.body.titulo;
    res.json(livros);
})

app.delete('/livros/:id', (req, res) => {
    //via desestruturação
    let {id} = req.params;
    let index = findLivro(id);
    livros.splice(index, 1); //index e quantidade
    res.status(204).send(`Livro ${id} removido com sucesso`);
})

function findLivro(id){
    //lambda = predicate
    return livros.findIndex(livro => livro.id == id); 
}

export default app