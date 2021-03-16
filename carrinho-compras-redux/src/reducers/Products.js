import * as actionType from '../actions/actionTypes'
import allProducts from '../allProducts'

let initialState = allProducts.map((item) => ({...item}))
// Aqui eu estou passando por todos os itens de "allProducts" e tambem passando o operador "rest" que vai fazer com que cada item seja armazenado em initialState no formato que ele eh, no caso um objeto literal e vai juntar todos os valores, entao se por exemplo eu adicione um produto no array do "allProducts" ele vai atualizar e pegar todos os dados, inclusive o que foi adicionado!!!

// console.log(typeof(initialState))

function Products(state = initialState, action){
    return (state)
    // Aqui eu apenas quero que ele retorne o state que basicamente sao os produtos e nada mais!
}

export default Products