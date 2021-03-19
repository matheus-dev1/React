import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ADD_TO_CART, REMOVE_TO_CART, CLEAR_CART } from '../../actions'

import './styles.css'

function CartS(){

    let totalProducts = 0

    const dispatch = useDispatch()
    const CartStates = useSelector((state) => {
        return(
            state.Cart.filter(
                item => {
                    return(
                        item.qtd > 0
                    )}))})


    console.log(CartStates)

    function Clear(event){
        event.preventDefault()
        dispatch(CLEAR_CART())
    }

    // eslint-disable-next-line no-lone-blocks
    {CartStates.map((item) => {
        return(
            totalProducts += item.total
            )
    })}

    return(
        <div>
            <h1 className="text-center mt-3">Carrinho ({CartStates.length})</h1>
            <div className="row d-flex justify-content-center">
                <button onClick={Clear} className="btn btn-fs text-white align-center">Clear Products</button>
            </div>
            {totalProducts !== 0 && <h1 className="text-center mt-3">Valor total: R${totalProducts}</h1>}
            {totalProducts === 0 && <h1 className="text-center mt-3">Nenhum produto no carrinho...</h1>}
            <div className="wrap-carrinho">
        {CartStates.map((item) => (
                <div key={item.idproduto} className="card card-bg-cart">
                    <div className="card-body">
                        <img className="card-img-top zoom" src={require(`../../imgs/Produtos/${item.imagem}`).default} alt={item.categoria}></img>
                        <h5 className="card-title text-dark">{item.descricao}</h5>
                        <h6 className="card-subtitle mt-2 mb-2 text-dark">R${item.total}</h6>
                        <button onClick={() => dispatch(ADD_TO_CART(item.idproduto))} className="btn btn-fs text-white ">Add</button>
                        <p className="text-dark">{item.qtd}</p>
                        <button onClick={() => dispatch(REMOVE_TO_CART(item.idproduto))} className="btn btn-fs text-white">Remove</button>
                    </div>
                </div>
        ))}
        </div>
        </div>
    )
}



export default CartS