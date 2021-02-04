import React from 'react';

//IMPORTANTE: O que a gente ter que estar na mentalidade e que este arquivo nao RODA aqui e sim no arquivo App.js

function ListItem (props) {
    return (<li>{props.value}</li>);
    // Eu crio uma funcao aqui com o props value para facilitar a manutencao.
};

function NumberList (props) {
    const numbers = props.numbers;
    const ListItens = numbers.map((number) => <ListItem key={number.toString()} value={number}/>);
    // ItemList me retorna um <li> e dentro da tag eu coloco as propriedades key e values, sendo que ambas recebem o valor do props.numbers.
    // Neste map eu estou atribundo a cada indice da minha varaivel ListItens uma chave e um valor associado a esta chave. Exemplo: '1' = ou : 1.
    // OBS: Key e props sao paravras reservadas.
    // OBS: No Google Chrome tem uma aba chamada "Components" em que a gente consegue ver os nosso componentes react. E na variavel ListItens ele nos mostra o valor de key="" de cada Item. 
    console.log(numbers);
    // Como eu estou executando este arquivo na outra pagina o meu props.numbers recebe a variavel do tipo array de indice na rederizacao do componente.
    console.log(ListItens['2']);
    // Entao se por exemplo eu quero resgatar o indice de numero 2 eu consigo.
    return (<ul>{ListItens}</ul>);
}

export default NumberList
