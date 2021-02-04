import React from 'react'

function Mailbox (props) {
    const unreadMessages = props.unreadMessages;
    // O props e o parametros em que vamos receber, e todo parametro deve ser chamado de props, porque ele e um json que vai receber todos os dados hoerarquizados dentro deste props e props vai sempre ser a raiz de tudo.
    // Exemplo da chamada de um componente onde eu tenho que passar um argumento: ano={2020} o acho que o "props.ano" e o valor entre chaves e o valor da propriedade ano e todos os parametros sao passados assim.
    // Entao neste exemplo de unreadMessages, a gente esta criadno a propriedade unreadMessages que no momento da renderizacao do componente e esta propridade fo colocado no componente, ele devera receber um valor exemplo: unreadMessages={messages} (onde messages e igual a const messages = [1, 2, 3])
        return (
            <React.Fragment>
                {unreadMessages.length > 0 &&
                //Neste eu verifico se o tamanho do array de unreadMessages e maior que 0.
                <h2>Voce tem {unreadMessages.length} mensagens pendentes.</h2>}
                {/* Aqui como e um texto simples, ele sempre vai dar verdadeiro. */}
            </React.Fragment>
            // Este componente so e renderizado se a comparacao der true.
        );
    }

export default Mailbox