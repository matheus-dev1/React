import * as actionType from '../actions/actionTypes'

let initialState = 0

function ButtonAddSub(state = initialState, action) {
    // Cada estado(state) apenas pode ter um reducer e um reducer pode ter varias acoes(actions) e eu posso chamar o dispatch varias vezes.
    if(action.type === actionType.ADD_BUTTON){
        return(state + 1)
        // No redux como regra eu nao posso retornar o mesmo estado eu tenho que enviar um estado NOVO.
    } else if (action.type === actionType.SUB_BUTTON){
        // O objeto action.type sempre em MAIUSCULO!
        return(state - 1)
    } else {
        return(state)
    }
}

export default ButtonAddSub