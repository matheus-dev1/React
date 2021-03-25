module.exports = app => {
    const pedido = require("../controllers/pedido.controller")

    const server = require('express')

    const router = server.Router()

    router.get("/pedidos", pedido.findPedidos)

    app.use(router)
}