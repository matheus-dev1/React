import * as actionType from './actionTypes'

export function ADD_TO_CART(idItem){
    return({
        type: actionType.ADD_TO_CART,
        id: idItem
    })
}

export function REMOVE_TO_CART(idItem){
    return({
        type: actionType.REMOVE_TO_CART,
        id: idItem
    })
}

export function CLEAR_CART(){
    return({
        type: actionType.CLEAR_CART
    })
}