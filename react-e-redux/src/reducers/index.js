import { clickReducer } from './clickReducer'
import { combineReducers } from 'redux'

// Funções puras (pure functions)
// Não muda qualquer estado na aplicação, ou seja, não provoca nenhum efeito colateral; Não depende de uma variável externa e não altera nada exterior a ela; Gera sempre os mesmos resultados com os mesmos argumentos.
// Funções puras sao apenas funcoes que dependem dos proprios parametros.

export const Reducers = combineReducers({
    clickState: clickReducer 
})