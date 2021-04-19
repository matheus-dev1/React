import React from 'react'

function OnlyOneChild(props){
    // React.Children trabalha em cima dos elementos filhos do componente OnlyOneChild, e aqui eu estou setando duas coisas eu primeiro estou setando que React.Children eh o meu gerneciado de children e o metodo props vai garantir que apenas um elemento entre como filho.
    return (React.Children.only(props.children))
}

export default OnlyOneChild