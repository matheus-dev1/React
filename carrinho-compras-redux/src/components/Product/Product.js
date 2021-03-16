import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ADD_TO_CART } from '../../actions'

import './styles.css'

function Product(){
    const dispatch = useDispatch()
    // O dispatch eu vou enviar tanto uma action como tambem posso enviar um valor!!!

    const products = useSelector((state) => {
        // O useSelector eu vou resgatar o valor do estado de um reducer
        return(
            state.Products
            // Isso aqui e basicamente estado.reducer
        )
    })

    console.log(products)
    // Aqui ele me retorna o valor do estado do reducer "Products"

    return(
        <div>
            {products.map((item) => (
                // Eu passo os meus produtos aqui porque ele e um estado e sempre que este estado for alterado ou seja se for tirado ou entrar um produto a pagina e atualizado com a nova lista de produtos.
                // Map apenas funciona com Arrays
                // console.log(item.name)
                <div key={item.id} className="card card-bg-product mt-3">
                    <div className="card-body">
                        <h5 className="card-title">{item.name}</h5>
                        <h6 className="card-subtitle mt-2 mb-2">R${item.price}</h6>
                        <p className="card-text">{item.text}</p>
                        <button onClick={() => dispatch(ADD_TO_CART(item.id))} className="btn btn-info text-white">Add To Cart</button>
                    </div>
                </div>
            ))}
        </div>
    )
}



export default Product