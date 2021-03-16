import { createStore } from 'redux'
import { Reducers } from '../reducers'

// console.log(createStore)
// console.log(Reducers)

export const Store = createStore(Reducers)
