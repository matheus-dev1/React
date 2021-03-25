module.exports = mongoose => {
    const MensagemSchema = mongoose.Schema({
        id: {
            type: Number,
            required: true
        },
        nome: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        assunto: {
            type: String,
            required: true
        },
        mensagem: {
            type: String,
            required: true
        },
        data_post: {
            type: Date,
            default: new Date()
        }
    })

    const Mensagem = mongoose.model("mensagens", MensagemSchema)
    return(
        Mensagem
    )
}