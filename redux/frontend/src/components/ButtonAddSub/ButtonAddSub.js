import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
// Em react tudo o que tiver "use" eh um Hook
import { SUB_BUTTON, ADD_BUTTON } from '../../actions/index.js'

function ButtonAddSub() {
    const dispatch = useDispatch();
    // O hook useDispatch vai chamar o nosso reducer e nos podemos passar para ele um objeto com a propriedade type: e o valor igual ao nome da action que voce quer chamar no reducer!
    const numberState = useSelector((state) => {
        return(state.ButtonAddSub)
        // Para retornar o valor de um state nos temos que usar a funcao useSelector do react-redux, que recebe como parametro um funcao de callback que tem como parametro todos os estados da nossa store, porem eu posso selecionar o estado de qual reducer eu quero, exemplo state.reducer1
        // Obs: Quando temos apenas um nao precisamos passar .nome do reducer!!!
    })

    function Add(event){
        // event.preventDefault()
        dispatch(ADD_BUTTON())
    }

    function Sub(event){
        // event.preventDefault()
        dispatch(SUB_BUTTON())                                                                                                                                                                  
    }

    return(
        <>
            <br />
            <button onClick={Add}>Adicionar</button>
            { numberState }
            <button onClick={Sub}>Subtrair</button>
        </>
    )
}

export default ButtonAddSub