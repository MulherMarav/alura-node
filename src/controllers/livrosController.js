import livros from "../models/Livro.js";

class LivrosController {

    static listarLivros = (req, res) => {
        livros.find()
        .populate('autor')
        .exec((err, livros) => {
            res.status(200).send(livros);
        });
    }

    static listarLivroPorId = (req, res) => {
        const id = req.params.id;
        livros.findById(id)
        .populate('autor', 'nome')
        .exec((err, livro) => {
            if(!err){
                res.status(200).send(livro);
            } else {
                res.status(400).send({message: `${err.message} - Id do livro não localizado.`});
            }
        })
    }

    static cadastrarLivro = (req, res) => {
        let livro = new livros(req.body);
        livro.save((err) => {
            if(err) {
                res.status(400).send({message: `${err.message} - Falha ao cadastrar livro.`});
            }else {
                res.status(201).send(livro.toJSON());
            }
        });
    }

    static atualizarLivro = (req, res) => {
        const id = req.params.id;
        livros.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if(!err){
                res.status(200).send({message: 'Livro atualizado com sucesso.'});
            } else {
                res.status(409).send({message: err.message});
            }
        })
    }

    static excluirLivro = (req, res) => {
        const id = req.params.id;
        livros.findByIdAndDelete(id, (err) => {
            if(!err){
                res.status(204).send({message: 'Livro removido com sucesso.'})
            } else {
                res.status(409).send({message: err.message})
            }
        })
    }

    static listarLivroPorEditora = (req, res) => {
        const editora = req.query.editora;
        livros.find({'editora': editora}, {}, (err, livros) => {
            if(!err){
                if(!livros.length){
                    res.status(204).send();
                } else {
                    res.status(200).send(livros);
                }                 
            } else {
                res.status(400).send({message: `${err.message} - Falha ao listar livros por editora.`});
            }
        });
    }

}

export default LivrosController;