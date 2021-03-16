// Importando o metodo combineReducers que armazena todos os nosso reducers na Store.
import { combineReducers } from 'redux'
// Importando o Reducer criado.
import Paragrafo from './Paragrafo'
import ButtonAddSub from './ButtonAddSub'

// Eu armazeno todos os reducer na variavel Reducers.
// A funcao combineReducers recebe como parametro um objeto com todos os reducers.
const Reducers = combineReducers({
    // A funcao combineReducers e uma funcao que recebe um objeto que contem todos os nossos reducers.
    Paragrafo,
    // O reducer controla os estados da dele. Simplificando um reducer e uma funcao que altera um o estado contido nele atraves das actions.
    ButtonAddSub
})

// Exportando todos os Reducers
export default Reducers