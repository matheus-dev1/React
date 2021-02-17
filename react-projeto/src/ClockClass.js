/*Todo o processo roda em torno de montar o componente, depois desmontar, armazenar em this.setState, depois rendenrizar e retornar o JSX e depois ficar fazendo isso infinitamente.*/

import React from 'react';  

export class ClockClass extends React.Component {
    constructor(props){
        super(props);
        // Aqui eu estou definindo que o valor inicial do meu estado eh a hora atual, isso ocorre uma vez durante a execucao desta classe, depois disso a alteracao do estado sera responsavel o setState({date: new Date()})
        this.state = {
            date: new Date(),
            nome: "Matheus"
        };
        //Estou declarando uma variavel "date" aonde eu passo o objeto Date() que e a data atual e 
        //Armazeno em this.state que e o estado.
    }

    componentDidMount(){
        this.Timer = setInterval(() => this.atualizar2(), 1000);
        //Ou seja aqui eu monto, ou seja eu atualizo o estado do meu Date para o horario atual.
    }

    componentWillUnmount() {
        // Zera o temporizador de Timer para ele comecar a contar novamente.
        clearInterval(this.Timer);
        //Neste eu desmonto para que o estado PARE que atualizar.
        //Porem, depois de um segundo(no metodo atualizar2()) ele e montado novamente porque o metodo atualizar2 altera o valor de state, montando o relogio novamente.
        //E ele fica neste ciclo montanto e desmontado ou seja, mostrando o horario novo a cada segundo.
    }

    atualizar2(){
        // Eu tenho que usar o {date: new Date()} porque ele que tem a nova hora sempre, entao eu estou sempre atulizando o meu estado atravez dela, por isso quando uso console.log(this.state) eu vejo no console a hora atulizadno porque o meu set State esta recebendo o valor do meu {date: new Date()}.
        this.setState({
            date: new Date()
        });
        //Quando o estado de um objeto e alterado ele e renderizado novamente, e isso que causa um "loop" que nao e um loop de verdade.
    }

    render() {
        console.log(this.state)
        return (
            <>
                <p>Ola, {this.state.nome}</p>
                <p>Relogio: {this.state.date.toLocaleTimeString()}.</p>
                {/* Aqui eu estou pegando o estado atual(a hora atual neste caso) e exibindo no paragrafo. */}
            </>
        );
    }
}
