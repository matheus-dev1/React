/*Todo o processo roda em torno de montar o componente, depois desmontar, armazenar em this.setState, depois rendenrizar e retornar o JSX e depois ficar fazendo isso infinitamente.*/

import React from 'react';  

export class ClockClass extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            date: new Date()
        };
        //Estou declarando uma variavel "date" aonde eu passo o objeto Date() que e a data atual e 
        //Armazeno em this.state que e o estado.
    }

    componentDidMount(){
        this.Timer = setInterval(() => this.atualizar2(), 1000);
        //Ou seja aqui eu monto, ou seja eu atualizo o estado do meu Date para o horario atual.
    }

    componentWillUnmount() {
        clearInterval(this.Timer);
        //Neste eu desmonto para que o estado para que atualizar.
        //Porem, depois de um segundo ele e montado novamente.
        //E ele fica neste ciclo montanto e desmontado ou seja, mostrando o horario novo a cada segundo.
    }

    atualizar2(){
        this.setState({date: new Date()});
        //Quando o estado de um objeto e alterado ele e renderizado novamente, e isso que causa um "loop" que nao e um loop de verdade.
    }

    render() {
        return (
            <p>Relogio: {this.state.date.toLocaleTimeString()}.</p>
            //Aqui eu estou pegando o estado atual(a hora atual neste caso) e exibindo no paragrafo.
        );
    }
}
