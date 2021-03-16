// Aqui eu estou importanto todos os tipos de acoes, isso deve ocorrer para evitar erros.
import * as actionType from '../actions/actionTypes'

// Normalmente antes de criar um reducer nos criamos uma variavel initialState para definir um estado inicial para este reducer!
let initialState = "Escreva algo para alterar este campo!"
// Como no React.useState(0) nos ja temos que definir um valor de inicilaizacao para o estado no reducer e a mesma coisa.
// Quando voce esta trabalhando com um state que e um objeto voce tem que desestruturar ele para sempre pegar o que ja tem e depois adicionar com o um novo valor para criar um novo estado.
// Exemplo: let initialState = allProducts.map(item => ({...item, qtd: 0, total: 0}))

// Ao criar um reducer voce tem que passar dois parametro para ele.
// O primeiro e um estado e deve atribuir um valor inicial para ele.
// O segundo e uma acao, que pode receber tanto o tipo da acao como o valor da acao.
function Paragrafo(state = initialState, action) {
    // Aqui eu tenho o objeto action.type que recebe o tipo da acao pelo usuario e apos receber o tipo ele verifica se o tipo da acao recebido e igual a acao solicitada, no caso actionType.UPDATE_PARAGRAFO
    // Um reducer recebe um estado atual(state) e uma acao(action) a se fazer. E pode receber mais acoes.
    if(action.type === actionType.UPDATE_PARAGRAFO){
        return(action.payload)
        // O parametro action de um reducer possui o objeto {type: "varios bagulho."}.
    } else {
        return(state)
        // Um reducer sempre tem que retornar algo.
    }
}

// Exportando reducer Paragrafo.
export default Paragrafo