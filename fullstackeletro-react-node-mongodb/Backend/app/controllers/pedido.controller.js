const db = require("../models")

var ObjectId = require('mongoose').Types.ObjectId

const Pedidos = db.pedidos

exports.findPedidos = async (request, response) => {
    const Result = await Pedidos.find()
    return(
        response.json(Result)
    )
}

exports.registerPedido = async (request, response) => {
    let { nome, endereco, telefone, produto, valor_uni, qtd_produto } = request.body
    let valor_total = valor_uni * qtd_produto
    const Result = await Pedidos.create({
        nome_cli: nome,
        endereco: endereco,
        telefone: telefone,
        produto: produto,
        valor_uni: valor_uni,
        qtd_prod: qtd_produto,
        valor_total: valor_total})
    return(
        response.json(
            Result
        )
    )
}

exports.updatePedido = async (request, response) => {
    let { nome, endereco, telefone, produto, valor_uni, qtd_produto, idPost } = request.body
    let valor_total = valor_uni * qtd_produto
    const Result = await Pedidos.update(
        {_id : ObjectId(idPost)},
        {$set: {nome_cli : nome,
        endereco: endereco,
        telefone: telefone,
        produto: produto,
        valor_uni: valor_uni,
        qtd_prod: qtd_produto,
        valor_total : valor_total
    }})
    return(
        response.json(Result)
    )
}

exports.deletePedido = async (request, response) => {
    let { idPost } = request.body
    const Result = await Pedidos.deleteOne({_id : ObjectId(idPost)})
    return(
        response.json(Result)
    )
}