import React from 'react';
// O hook useDispath vai chamar o nosso reducer e nos podemos passar para ele um objeto com a propriedade type: e o valor igual ao nome da action que voce quer chamar no reducer!
import { useDispatch, useSelector } from 'react-redux'

// import UPDATE_PARAGRAFO
import { UPDATE_PARAGRAFO } from '../../actions'

function Paragrafo(){
    // Instanciando o dispatch
    const dispatch = useDispatch();
    // O dispatch vai chamar o reducer e alterar o estado do "state" em que voce passou sendo que este action.type tem que ser True e tambem sendo que se voce apenas tem um reducer ele vai alterar o unico existente.

    // O useSelector vai nos retornar todos os estados de todos os nossos reducers e ao passar um funcao de callback nos podemos regatar um estado especifico.
    const paragrafoState = useSelector((state) => {
            return(state.Paragrafo)
            // Na funcao useSelector quando voce tem mais de um reducer voce vai primeiro pegar o estado depois o reducer deste estado e se tiver algum objeto voce passa tambem.
            // const initialState = {
            //     frutas: [
            //       { nome: "banana" },
            //       { nome: "maca"}
            //      ]
            //  }
            // console.log(initialState.frutas[0].nome)
            // Exemplo: state.reducerAddNomes.nomes
        })

    function alterarParagrafo(event){
        // O event.preventDefault faz com a nossa pagina nao seja carregada.
        event.preventDefault()
        // Aqui eu estou passajndo para dispatch uma funcao que contem um objeto com a action que ele quer executar e com um parametro que recebe o valor e aqui eu estou passando como valor event.target.value
        dispatch(UPDATE_PARAGRAFO(event.target.value))
        // No dispatch nos temos que passar um objeto, que contenha um objeto type: que define no nosso reducer qual e a action que eu estou passando.
        // Voce pode executar o dispatch varias vezes.
    }    

    console.log(paragrafoState.getState())
    // Nos podemos chamar os nossos reducers com getState(), dispatch()

    return (
        <>
            <label>Texto: </label>
            <input placeholder="Escreva algo aqui..." type="text" onChange={alterarParagrafo}/>
            { paragrafoState }
        </>
    );
}

export default Paragrafo