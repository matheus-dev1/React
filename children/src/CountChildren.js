import React from 'react'

function CountChildren(props){
    return(
        // Aqui eu vou contar quantos elementos filhos o componente Count Children possui
        <p>{React.Children.count(props.children)}</p>
    )
}

export default CountChildren