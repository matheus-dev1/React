import * as actionType from '../actions/actionTypes'

import allProducts from '../allProducts'

let initialState = allProducts.map(item => ({...item, qtd: 0, total: 0}))

console.log(initialState)

function Cart(state = initialState, action){
    switch(action.type){
        case actionType.ADD_TO_CART:
            return(
                state.map((item) => {
                    if(item.idproduto === action.id){
                        item.qtd++
                        item.total += item.precofinal
                    }
                    return (item)
                })
            )

        case actionType.REMOVE_TO_CART:
            return(
                state.map((item) => {
                    if(item.idproduto === action.id){
                        item.qtd--
                        item.total -= item.precofinal
                    }
                    return (item)
                })
            )
        
        case actionType.CLEAR_CART:
            return(
                state.map((item) => {
                    item.qtd = 0
                    item.total = 0
                    return(
                        item
                    )
                })
            )

        default:
            return(
                state
            )
    }
}

export default Cart