import React from 'react';
//Para poder usar o React.Component

export class CursoHeader extends React.Component {
    //React .Component e uma classe!
    render () {
        return (
            <h1>{this.props.header}</h1>
            //O this normalmente e referente a esta linha h1.
        );
    }
}

export class CursoContent extends React.Component {
    render () {
        return (
            <p><b>{this.props.title}</b> {this.props.content}</p>
            //Duas propriedades ou seja, na chamada do componente com as propriedades eu preciso
            //passar duas propriedades e um valor para cada.
        );
    }
}