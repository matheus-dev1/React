import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ADD_TO_CART, REMOVE_TO_CART, CLEAR_CART } from '../../actions'

import './styles.css'

function CartS(){

    let totalProducts = 0

    const dispatch = useDispatch()
    const CartStates = useSelector((state) => {
    // O useSelector vai me buscar o valor do estado do reducer "Cart" com o metodo .filter eu estou filtrando que eu apenas quero puxar os objetos que tenham o valor da chave "qtd" maior que 0.
        return(
            state.Cart.filter(
                item => {
                    return(
                        item.qtd > 0
                    )}))})


    // console.log(CartStates)

    function Clear(event){
        event.preventDefault()
        dispatch(CLEAR_CART())
    }

    {CartStates.map((item) => {
        return(totalProducts += item.total)
    })}

    return(
        <div>
            <h1>Carrinho ({CartStates.length})</h1>
            <button onClick={Clear} className="btn btn-info text-white">Clear Products</button>
            {totalProducts && <h1>Valor total: R${totalProducts}</h1>}
        {CartStates.map((item) => (
                <div key={item.id} className="card card-bg-cart">
                    <div className="card-body">
                        <h5 className="card-title">{item.name}</h5>
                        <h6 className="card-subtitle mt-2 mb-2">R${item.total}</h6>
                        <button onClick={() => dispatch(ADD_TO_CART(item.id))} className="btn btn-info text-white">Add</button>
                        <p>{item.qtd}</p>
                        <button onClick={() => dispatch(REMOVE_TO_CART(item.id))} className="btn btn-info text-white">Remove</button>
                    </div>
                </div>
        ))}
        </div>
    )
}



export default CartS