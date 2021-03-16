// Aqui eu estou importanto todos os tipos de acoes.
import * as actionType from './actionTypes.js'

// Eu estou criando esta funcao para facilitar na chamada do dispatch, porque assim eu nao preciso passar o paraemtro type com o nome da acao toda a vez que eu preciso usa-la criando um padrao e evitando erros.
// REDUCER Paragrafo.js
export function UPDATE_PARAGRAFO(updateParagrafo) {
    return({
        // Quando eu passar esta funcao no meu dispatch ele ja vai receber o type.
        type: actionType.UPDATE_PARAGRAFO,
        // E o valor de payload que basicamente e o valor do body(input) em que usuario digitou. 
        payload: updateParagrafo
    })
}
// REDUCER buttonAddSub.js
export function ADD_BUTTON() {
    return({
        // Quando eu passar esta funcao no meu dispatch ele ja vai receber o type.
        type: actionType.ADD_BUTTON
    })
}

// REDUCER buttonAddSub.js
export function SUB_BUTTON() {
    return({
        // Quando eu passar esta funcao no meu dispatch ele ja vai receber o type.
        type: actionType.SUB_BUTTON
    })
}