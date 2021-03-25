// Vou exportar tudo dentro de module.exports ao colocar tudo isso dentro de module.exports eu ja digo ao JavaScript que isso nao sera executado aqui, eu tambem passo crio um parametro chamado app que eu ser chadamado dever receber um parametro.
module.exports = app => {
    const produto = require("../controllers/produto.controller")
  
    // Instanciando o servidor nas rotas, eu preciso importa-lo neste arquivo para usar a funcao de rotas.
    const server = require("express")

    // A funcao de rotas igual no React.
    const router = server.Router()
  
    // Definindo uma rota e qual objeto ele vai executar!
    router.get("/produtos", produto.findProdutos)
  
    // Configurando esta rota dentro do servidor express "app"
    app.use(router)
  }