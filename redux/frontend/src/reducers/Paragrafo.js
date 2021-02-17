// Aqui eu estou importanto todos os tipos de acoes, isso deve ocorrer para evitar erros.
import * as actionType from '../actions/actionTypes'

// Normalmente antes de criar um reducer nos criamos uma variavel initialState para definir um estado inicial para este reducer!
let initialState = "Escreva algo para alterar este campo!"

// Ao criar um reducer voce tem que passar dois parametro para ele.
// O primeiro e um estado e deve atribuir um valor inicial para ele.
// O segundo e uma acao, que pode receber tanto o tipo da acao como o valor da acao.
function Paragrafo(state = initialState, action) {
    // Aqui eu tenho o objeto action.type que recebe o tipo da acao pelo usuario e apos receber o tipo ele verifica se o tipo da acao recebido e igual a acao solicitada, no caso actionType.UPDATE_PARAGRAFO
    if(action.type === actionType.UPDATE_PARAGRAFO){
        return(action.payload)
    } else {
        return(state)
    }
}

// Exportando reducer Paragrafo.
export default Paragrafo