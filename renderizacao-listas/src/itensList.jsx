import React from 'react';

const numbers = [1, 3, 5, 7, 9, 11];

const itensList = numbers.map((number) => <li>{number}</li>);
// O metodo map() pode retornar um resultado(valor) da funcao de callback(funcao como argumento dentro de map.).

// Como boa pratica nos devemos colocar o argumento da funcao de callback de map no singular.

export default itensList
