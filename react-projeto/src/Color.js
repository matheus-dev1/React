import React from 'react'; 

export class Car extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Marca: "Ford",
            Modelo: "Mustang",
            Color: "Red",
            Ano: 1964
        };
    }

    ColorCar = () => {this.setState({Color: "Blue"});}
    //Aqui nos queremos dizer que Color recebe uma Arrow Function sem nome que seta o nome da priopriedade "color" do "this.state" de "blue" 

    render() {
        return (
            <div>
                <h1>Meu {this.state.Marca}</h1>
                <p>E um {this.state.Modelo} {this.state.Color} do ano {this.state.Ano}</p>
                <button class="BotaoColor" type="button" onClick={this.ColorCar}>Alterar a cor</button>
                {/* Quando eu clicar no butao eu alterar o estado a propriedade "Ano" de "this.state" fazendo com que meu componente seja renderizado novamente com o novo valor. */}
            </div>
        );
    }
}
