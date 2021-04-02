module.exports = app => {
    const pedido = require("../controllers/pedido.controller")

    const server = require('express')

    const router = server.Router()

    router.get("/pedidos", pedido.findPedidos)

    router.post("/pedidos", pedido.registerPedido)
    
    router.put("/pedidos", pedido.updatePedido)

    router.delete("/pedidos", pedido.deletePedido)

    app.use(router)
}