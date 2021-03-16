export function Footer (props) {
    //Componente!!!
    //Props e o parametro em que nos vamos receber.
    //Todo componente vai ser chamado props, e ele e um Json ele vai receber todos este dados hierarquizados dentro deste props.
    //Props vai ser sempre a raiz de tudo.
    return (
        <footer>
            <p>Recode Copyrigth -  Com Componente Funcional - {props.ano}</p> 
        </footer>
    );
}

export function Footer2 (props) {
    return (
        <footer>
            <p>Recode Copyrigth -  Com Componente Funcional - {props.dados.ano}/{props.dados.mes}/{props.dados.dia}</p>
        </footer>
    );
}

export function Footer3 () {
    return (
        <Footer2 
            dados={ 
                {ano: 2020, mes: 12, dia: 19}
        } />
        //Meu componente Footer3 e um componente do tipo Footer e o Footer e um componente funcional.
    );
}

export function Footer4 (props) {
    return (<p>Footer com propriedade e valor, {props.name} </p>);
}

//export default Footer
//Neste caso eu apenas estou exportanto Footer()

//Para por exemplo utilizar um outra funcao, eu preciso remover o export default Footer.
//E vou adicionar um export no inicio da funcao, porem caso eu queira exportar varios eu preciso nomear todas
//as funcoes no import do arquivo, vefifique no arquivo App.js
