import React from 'react';

function RenderizacaoCondicionalPorElemento (props) {
    const Verificacao = props.Verificacao
    if (Verificacao === true){
        return (
            <h1>Verificacao igual a true</h1>
        );
    }
    else{
        return (
            <h1>Verificacao igual a false</h1>
        );
    }
}

export default RenderizacaoCondicionalPorElemento
