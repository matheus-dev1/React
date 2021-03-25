const db = require("../models")

const Mensagens = db.mensagens

exports.findMensagens = async (request, response) => {
    const Result = await Mensagens.find()
    return(
        response.json(Result)
    )
}