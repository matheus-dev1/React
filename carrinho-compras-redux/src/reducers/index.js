import { combineReducers } from 'redux'

import Products from './Products'
import Cart from './Cart'

const Reducers = combineReducers({
    Products,
    Cart,
})

export default Reducers