module.exports = app => {
    const mensagem = require("../controllers/mensagem.controller")

    const server = require('express')

    const router = server.Router()

    router.get("/mensagens", mensagem.findMensagens)

    app.use(router)
}