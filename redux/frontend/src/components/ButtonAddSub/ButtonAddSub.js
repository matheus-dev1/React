import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { SUB_BUTTON, ADD_BUTTON } from '../../actions/index.js'

function ButtonAddSub() {
    const dispatch = useDispatch();
    const numberState = useSelector((state) => {
        return(state.ButtonAddSub)
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
            { numberState }
            <button onClick={Add}>Adicionar</button>
            <button onClick={Sub}>Subtrair</button>
        </>
    )
}

export default ButtonAddSub