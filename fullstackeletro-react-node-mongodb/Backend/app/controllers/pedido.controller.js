const db = require("../models")

const Pedidos = db.pedidos

exports.findPedidos = async (request, response) => {
    const Result = await Pedidos.find()
    return(
        response.json(Result)
    )
}