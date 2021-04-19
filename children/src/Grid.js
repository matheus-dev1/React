import React from 'react';

function Grid(props) {
    return (
        <div style={{backgroundColor: "lightblue"}}>
            {/* A propriedade(props) recebe uma propriedade como parametro, porem temos uma variavel reservada com o nome "children" que vai receber o valor/elemento do filho deste componente(Grid)*/}
            {/* Usando um container como expressão (expression container, termo técnico do JSX para os colchetes) */}
            {props.children}
        </div>
    )
}

export default Grid