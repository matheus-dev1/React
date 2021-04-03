module.exports = app => {
    const mensagem = require("../controllers/mensagem.controller")

    const server = require('express')

    const router = server.Router()

    router.get("/mensagens", mensagem.findMensagens)

    router.post("/mensagens", mensagem.registerMensagens)

    router.put("/mensagens", mensagem.updateMensagens)

    router.delete("/mensagens", mensagem.deleteMensagens)

    app.use(router)
}