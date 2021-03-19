import * as actionType from '../actions/actionTypes'
import allProducts from '../allProducts'

let initialState = allProducts.map((item) => ({...item}))

function Products(state = initialState, action){
    return (
        state
        )
}

export default Products