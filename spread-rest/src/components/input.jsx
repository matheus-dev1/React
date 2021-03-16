import React from 'react';

// Fazemos a desestruturacao do label para que ele seja usado em uma tag label especifica.
// Metafora: "Pegue o label e o resto..."
const Input = ({label, ...props}) => {
    // Isto e um componente generico, servindo para varias necessidades.
    return (
        <div>
            <label>{label}</label>
            {/* Se na chamada deste componente eu chamar propriedades inexistentes ela nao ira aparecer no meu arquivo HTML, entao nos podemos usar o Operado Rest para juntar todas as propriedades usadas na chamda da funcao, nao necessitando definir no componente determinadas propriedades. */}
            <input {...props} className="form-control"></input>
        </div>
    );
}

export default Input;