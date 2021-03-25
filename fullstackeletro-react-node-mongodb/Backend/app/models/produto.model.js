// Vou exportar tudo dentro de module.exports ao colocar tudo isso dentro de module.exports eu ja digo ao javascript que isso nao sera executado aqui, eu tambem passo crio um parametro chamado mongoose que eu ser chadamado dever receber um parametro.
module.exports = mongoose => {
    const ProdutoSchema = mongoose.Schema({
      idproduto: {
        type: Number
      },
      data_inclusao: {
        type: String
      },
      categoria: {
        type: String
      },
      descricao: {
        type: String
      },
      preco: {
        type: Number
      },
      precofinal: {
        type: Number
      },
      imagem: {
        type: String
      }
    });
  
    // Aqui eu crio um model a partir do Schema passado(ProdutoSchema) que basicamente eh a estrutura que eu quero trabalhar
    const Produto = mongoose.model("produtos", ProdutoSchema)
    // E vou retonar
    return(
        Produto
    )
  }