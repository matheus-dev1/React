import React from 'react';
// O hook useDispath vai chamar o nosso reducer e nos podemos passar para ele um objeto com a propriedade type: e o valor igual ao nome da action que voce quer chamar no reducer!
import { useDispatch, useSelector } from 'react-redux'

// import UPDATE_PARAGRAFO
import { UPDATE_PARAGRAFO } from '../../actions'

function Paragrafo(){
    // Instanciando o dispatch
    const dispatch = useDispatch();

    // O useSelector vai nos retornar todos os estados de todos os nossos reducers e ao passar um funcao de callback nos podemos regatar um estado especifico.
    const paragrafoState = useSelector((state) => {
            return(state.Paragrafo)
        })

    function alterarParagrafo(event){
        // O event.preventDefault faz com a nossa pagina nao seja carregada.
        event.preventDefault()
        // Aqui eu estou passajndo para dispatch uma funcao que contem um objeto com a action que ele quer executar e com um parametro que recebe o valor e aqui eu estou passando como valor event.target.value
        dispatch(UPDATE_PARAGRAFO(event.target.value))
    }    

    return (
        <>
            <label>Texto: </label>
            <input placeholder="Escreva algo aqui..." type="text" onChange={alterarParagrafo}/>
            { paragrafoState }
        </>
    );
}

export default Paragrafo