/* import React, { Component } from 'react';

class Header extends Component {
    constructor(props) {
        super(props)
    }
}
*/

import React from 'react';

import './styles.css';

const Header = () => {
    return (
        <header>
            <p>Header</p>
            <button className="btn btn-info">Botao</button>
        </header>
    );
}

export default Header
