import React from 'react'

function LoopingChildren(props){
    const children = props.children

    return(
        <div>
            {/* React.Children.map() pegar todos os elementos dentro deste componente e fazer um map ou seja passar de um por um */}
            {/* O primeiro argumento do map vai ser a variavel children com props.children onde contem todos elementos filhos contidos na chamada do compontonente*/}
            {/* Depois eu tenho que coloca em chaves o child(a palavra no singular) para cada interacao ser feito alguma coisa com ela. E index para saber em qual interacao eu estou. */}
            {React.Children.map(children, (child, index) => {
                if(index < 1){
                    return
                } else {
                    // Tudo o que retonar sera exibido.
                    // Obs: Os returns funcionam de foram hierarquica ou seja o primeiro return la em cima vai se o que vai retornar tudo, porem se este bloco for verdadeiro ele vai retornar isso para aquele return que vai retonar tudo.
                    // Exemplo: <div><span>2</span></div>
                    return child
                }
            })}
        </div>
    )
}

export default LoopingChildren