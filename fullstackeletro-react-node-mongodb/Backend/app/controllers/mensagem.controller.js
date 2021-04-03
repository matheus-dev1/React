const db = require("../models")

var ObjectId = require('mongoose').Types.ObjectId

const Mensagens = db.mensagens

exports.findMensagens = async (request, response) => {
    const Result = await Mensagens.find()
    return(
        response.json(Result)
    )
}

exports.registerMensagens = async (request, response) => {
    let { nome, email, assunto, mensagem } = request.body
    const Result = await Mensagens.create({
        nome: nome,
        email: email,
        assunto: assunto,
        mensagem: mensagem
    })
    return(
        response.json(
            Result
        )
    )
}

exports.updateMensagens = async (request, response) => {
    let { nome, email, assunto, mensagem, idPut } = request.body
    const Result = await Mensagens.update(
        {_id : ObjectId(idPut)},
        {$set: {nome : nome,
        email: email,
        assunto: assunto,
        mensagem: mensagem
    }})
    return(
        response.json(Result)
    )
}

exports.deleteMensagens = async (request, response) => {
    let { idDelete } = request.body
    const Result = await Mensagens.deleteOne({_id : ObjectId(idDelete)})
    return(
        response.json(Result)
    )
}