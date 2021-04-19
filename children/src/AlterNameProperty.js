import React from 'react'

function AlterNameProperty(props){
    // A funcao renderChildren vai ser a funcao em que iremos renderizar os nosso elementos filhos, porem nesta funcao estes elementos sobre a alteracao da sua proprieda name conforme o valor de props.name passado na chamada do componente em App.js
    function renderChildren(){
        // Este e o nosso return principal onde iremos retornar tudo.
        return(
            // Aqui eu vou atraves do props.children pegar todos os elementos filhos de AlterNameProperty e colocar em um React.Children.map() para fazer a varedura inutariamente.
            React.Children.map(props.children, (child, index) => {
                // Dentro do seu bloco de comando esta um return com React.cloneElement() que basicamente vai clonar o elemento na sua determinada posicao e dentro dele nos podemos modificar uma propriedade usando o objeto name: props.name passado em AlterNameProperty
                
                // Obs: Eu tenho que usar o return aqui porque eu vou clonar e alterar a propriedade de um elemento filho
                // 1. Eu tenho que retonar isso porque eu estou usando a propriedade map, que me obriga a retonar algo.
                // 2. Porque eu estou criando um novo elemento a partir de um elemento anterior e por map e faz isso deforma unitaria entao a cada interacao eu preciso enviar isso para o meu return principal ate que a iteracoes de map acabe. 
                return(
                    // O que esta em seu parametro no caso "child" e o elemento que sera clonado.
                    React.cloneElement(child, {
                        // Alterando a propriedade "name"
                        name: props.name
                }))
        }))
    }

    return(
        <div>
            {renderChildren()}
        </div>
    )
}

export default AlterNameProperty