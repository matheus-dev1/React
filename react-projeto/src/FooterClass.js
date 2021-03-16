import React from 'react';  

export class FooterClass extends React.Component {
    constructor(props) {
        //Props(parametro) nunca vai mudar
        super(props);
        //Como FooterClass e uma classe filha tudo o que ela recebe ela tem que mandar para classe pai,
        // ou seja, React.Component
        this.state = props;
        //this.state vai ter os mesmo dados de props.
    }

    componentDidMount() {
        this.atualizar();
        //Sempre que o componentDidMount for executado ou seja, sempre que o nosso render for montado 
        //ele executa, neste caso ele ja comeca a executar infinitamente porque quando iniciamos a pagina
        //ele ja e montado e depois disso ele segue o looping infino de adicionar + 1
        this.Timer = setInterval(() => this.atualizar(), 1000);
        //Dois parametros, uma funcao de Callback e o tempo.
    }
    //Componente de Classe - Passado -- Igual aos eventos do DOM no JavaScript, por exempl o onclick, 
    //onload, onmouseover e etc.
    //Entrar/Montar entao executa este metodo de classe.

    componentWillUnmount(){
        clearInterval(this.Timer);
        //Componente de Classe - Futuro
        //Sair/Parar execucao entao executa este metodo de classe.
    }

    atualizar() {
        //Criar um metodo chamado atualizar que sempre que ele e executado a gente usa o this.setState
        //Que muda o estado atual de no caso o dado do nao para neste dado + 1
        this.setState(
        //Neste setState eu estrou atribuindo um Estado de forma "Forcada", para que rode o 
        //componentDidMount() uma primeira vez assim criando a minha rotacao.
            {
                dados: {ano: this.state.dados.ano + 1, mes: this.state.dados.mes, dia: this.state.dados.dia}
                //A cada segundo os dados em que a gente esta pasando como parametro recebe uma 
                //Atualizacao, neste caso apenas o ano eh atalizado porem, nos precisamos 
                //passar o mes e o dia porque ele tem que entra na atualizacao. 
            }
        );
    }

    render() {
        return (
            <footer>
                <p>Recode Copyrigth -  Com Componente de Classe - {this.state.dados.ano} / {this.state.dados.mes} / {this.state.dados.dia}</p>
                {/*No lugar de props usamos this.state */}
            </footer>
        );
    }
}
