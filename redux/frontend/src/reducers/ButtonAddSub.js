import * as actionType from '../actions/actionTypes'

let initialState = 0

function ButtonAddSub(state = initialState, action) {
    if(action.type === actionType.ADD_BUTTON){
        return(state + 1)
    } else if (action.type === actionType.SUB_BUTTON){
        return(state - 1)
    } else {
        return(state)
    }
}

export default ButtonAddSub