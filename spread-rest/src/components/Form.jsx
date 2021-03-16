import React from 'react';

function Form(props) {
    return (
        <div>
            <form action={props.action} method={props.method}>
                {/* Children eh para o conteudo que esta entre as tags de abertura e fechamento */}
                {props.children}
            </form>
        </div>
    );
}

export default Form;