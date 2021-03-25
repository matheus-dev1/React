// Este eh o nosso arquivo principal, onde ira rodar o servidor node.

// Ordem de funcionamento Backend.
// Tudo comeca pelo Server
// Faz os imports das dependencias
// instancia o app express
// libera o cors e transferencia e recebimento de dados via json
// import todas as configuracoes de models
// faco a conexao com o banco de dados
// importo as rotas e ao importas as rotas eu ja estou importando os controllers
// inicio o server

// Importado Express
const express = require("express")

// Importando Body-Parser
const bodyParser = require("body-parser")

// Importando Cors
const cors = require("cors")

// Instanciando "app"
const app = express()

// Fazer com que o nossa aplicacao possa se comunicar com outra aplicacao, no caso a Frontend
app.use(cors())

// Fazer com os nosso arquivo sejam passados e recebidos vida Json()
app.use(bodyParser.json())

// Fazer com os nosso arquivo sejam passados e recebidos vida Json()
app.use(bodyParser.urlencoded({ extended: true }))

// Vou pegar todas as configuracoes de Models.
const db = require("./app/models")

// db.mongoose e basicamente o modulo do mongoose com a propriedade connect
db.mongoose.connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Conexao bem sucedida!")
  })
  .catch(err => {
    console.log("Conexao mal sucedida", err)
    // Se a conexao falhar ele executa esta funcao que encerra a conexao com o banco de dados.
    // process.exit()
  })

// Aqui eu estou fazendo o require das rotas e nao atribuindo a nenhuma variavel porque eu quero que os codigos de produtos.routes estivessem nesta linha abaixo.
require("./app/routes/produtos.routes")(app)
require('./app/routes/pedidos.routes')(app)
require('./app/routes/mensagens.routes')(app)

const PORT = 5000
app.listen(PORT, () => {
  console.log(`O servidor esta rodando na porta: ${PORT}.`)
})