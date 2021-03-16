import * as actionType from '../actions/actionTypes'

import allProducts from '../allProducts'

let initialState = allProducts.map(item => ({...item, qtd: 0, total: 0}))
// Estou armazenando todos os itens de allProducts e como estou utilizando o operador 'rest' eu estou adicionando uma chave(qtd) e valor(0) a cada item, me formando um novo valor para cada objeto.
// Eu estou adicionando uma chave total a todos os objetos porqu eu quero que este total apenas exista durante a execucao do programa e nao no arquivo "allProducts", fazendo com que eu possa usar este arquivo em outros lugares que nao usaria este "total"

console.log(initialState)

function Cart(state = initialState, action){
    switch(action.type){
        case actionType.ADD_TO_CART:
            return(
                state.map((item) => {
                    if(item.id === action.id){
                        item.qtd++
                        item.total += item.price
                    // Se o id do item for igual ao id da acao entao a quantidad e do item recebe +1 
                    }
                    return (item)
                    // Obs: Eu faco a operacao no IF e fora do ir eu faco o retorno de item que eh basicamente todos os produtos com o qtd do item + 1
                })
            )

        case actionType.REMOVE_TO_CART:
            return(
                state.map((item) => {
                    if(item.id === action.id){
                        item.qtd--
                        item.total -= item.price
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