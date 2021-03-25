// Aqui eu vou criar tudo o que cada rota ira fazer.
// Vou importar o arquivo index de models que contem todos os 
const db = require("../models")
// Do objeto db de models eu vou armazenar em produtos apenas o modelo e produtos
const Produtos = db.produtos

exports.findProdutos = async (request, response) => {
  // "Schema de Produtos".find() metodo de buscar dados como se fosse o SELECT do SQL
  const Result = await Produtos.find()
  return (
    response.json(Result)
    )
  }