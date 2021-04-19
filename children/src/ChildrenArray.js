import React from 'react'

function ChildrenArray(props){
    // Aqui eu vou carpturar todos os elementos filhos na chamda do coponente ChildrenArray e passar como parametro para a funcao React.Children.toArray() que vai tranformar o nosso elementos filhos em arrays
    const children = React.Children.toArray(props.children)
    // Aquo eu vou pegar todos o array com todos os elementos filhos e vou ordenar e exibilos
    return (<p>{children.sort().join(' ')}</p>)
}

export default ChildrenArray