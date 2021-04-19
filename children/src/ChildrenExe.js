import React from 'react';

function ChildrenExe(props) {
    return (
        <div>
            {/* Nós podemos passar qualquer expressão JavaScript como elemento filho. Isso inclui funções. */}
            {/* Resumindo como filho eu tenho que passar uma funcao. */}
            {props.children()}
        </div>
    )
}

export default ChildrenExe