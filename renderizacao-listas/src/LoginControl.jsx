import React from 'react';

class LoginControl extends React.Component {
    constructor(props) {
      super(props);
    //Eu tenho que passar para o constructor e o super os parametros dos atributos tanto da classe pai como da filha que e esta no caso e pai e a React.Component. No React eu apenas uso a propriedade props.
    //A palavra-chave super é usada para acessar o objeto pai de um objeto, em outros casos, é usada para acessar a classe pai de uma classe.
      this.handleLoginClick = this.handleLoginClick.bind(this);
        //Bind Ao contrário dos outros, o método bind() não executa uma função, mas retorna uma outra com um novo contexto. O primeiro argumento recebe o valor do this a ser usado na função, e os demais argumentos são os parâmetros que terão valores atribuídos dentro da mesma.

        // fun.bind(thisArg[, arg1[, arg2[, ...]]])
      this.handleLogoutClick = this.handleLogoutClick.bind(this);
      this.state = {isLoggedIn: false};
    }
  
    handleLoginClick() {
      this.setState({isLoggedIn: true});
    }
  
    handleLogoutClick() {
      this.setState({isLoggedIn: false});
    }
  
    render() {
        // render () {} e return() sempre serao executados em uma classe, mesmo quando o estado de alguma coisa for alterado.
      const isLoggedIn = this.state.isLoggedIn;
      let button;
  
      if (isLoggedIn) {
        button = <LogoutButton onClick={this.handleLogoutClick} />;
      } else {
        button = <LoginButton onClick={this.handleLoginClick} />;
      }
  
      return (
        <React.Fragment>
          <Greeting isLoggedIn={isLoggedIn} />
          {button}
        </React.Fragment>
      );
    }
  }
  
  function UserGreeting(props) {
    return <h1>Bem vindo, novamente!</h1>;
  }
  
  function GuestGreeting(props) {
    return <h1>Por favor, conecte-se.</h1>;
  }
  
  function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
      return <UserGreeting />;
    }
    return <GuestGreeting />;
  }
  
  function LoginButton(props) {
    return (
      <button onClick={props.onClick}>
        Login
      </button>
    );
  }
  
  function LogoutButton(props) {
    return (
      <button onClick={props.onClick}>
        Logout
      </button>
    );
  }

  export default LoginControl