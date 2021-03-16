import { useParams } from 'react-router-dom'

function Produtos(){

    const produto = useParams()

    return(
        <>
            <h1>
                Lista de Produtos
            </h1>
            <h2>
                {/* Nesta rota eu ja indentifico que ".id" e um parametro da minha url, entao como eu coloquei o nome do meu useParams() como produtos eu aprenas precisoa passar este nome . id */}
                Produto {produto.id}
            </h2>
        </>
    )
}

export default Produtos