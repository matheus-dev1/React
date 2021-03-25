module.exports = mongoose => {
    const PedidoSchema = mongoose.Schema({
        idpedidos: {
            type: Number,
            required: true
        },
        nome_cli: {
            type: String,
            required: true
        },
        telefone: {
            type: Number,
            required: true
        },
        produto: {
            type: String,
            required: true
        },
        valor_uni: {
            type: Number,
            required: true
        },
        qtd_prod: {
            type: Number,
            required: true
        },
        valor_total: {
            type: Number,
            require: true
        }
    })

    const Pedido = mongoose.model("pedidos", PedidoSchema)
    return(
        Pedido
    )
}