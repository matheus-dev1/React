// Importo a url do banco
const dbConfig = require("../config/db.config.js")

// Impoto o Mongoose
const mongoose = require("mongoose")

// Aqui eu crio um objeto vazio, onde eu vou armazenar diversas funcoes nela.
const db = {}
// Por exemplo eu estou passando para o objeto mongoose o modulo mongoose propriamente dito.
db.mongoose = mongoose
// No objeto url eu estou armazenando a ulr do banco
db.url = dbConfig.url
// Aqui eu estou importando o model de produto e passando como parametro o modulo mongoose, que quando eu exportar "db", este objeto ja vai conter o modulo nele.

// Sempre que eu quiser adicionar um model e um controller eu primeiramente preciso criar um Schema em models, improta-lo no index do model e criar um controller para este model e no final criar um arquivo de rotas para este controller.
// Exportando tudo isso, onde sera usado para todos os controllers e no server!
db.produtos = require("./produto.model")(mongoose)
db.mensagens = require("./mensagem.model")(mongoose)
db.pedidos = require("./pedido.model")(mongoose)
// Exportando as configuracoes dos models.
module.exports = db