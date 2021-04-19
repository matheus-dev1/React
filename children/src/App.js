import React from 'react';

import Grid from './Grid'
import Row from './Row'
import ChildrenUnique from './ChildrenUnique'
import ChildrenExe from './ChildrenExe'
import Fetch from './Fetch'
import LoopingChildren from './LoopingChildren'
import CountChildren from './CountChildren'
import ChildrenArray from './ChildrenArray'
import OnlyOneChild from './OnlyOneChild'
import AlterNameProperty from './AlterNameProperty'

function App(){
    return(
        <>
            <h1>Grid e Text</h1>
            <Grid>Elemento 1</Grid>
            <Grid>Elemento 2</Grid>
            <Grid>Elemento 3</Grid>

            <h1>Grid e Componente Row</h1>
            <Grid>
                <Row/>
            </Grid>

            <h1>Unique Children</h1>
            <ChildrenUnique/>

            <h1>Funcao como Elemento</h1>
            <ChildrenExe>
                {/* Aqui eu estou colocando dentro de {props.children()} o elemento <h3>Funcao</h3> */}
                {() => <h3>Funcao</h3>}
            </ChildrenExe>
            
            <h1>Funcao como Elemento de Retorno</h1>
            <Fetch>
                {/* Aqui eu estou recebendo o retorno de {props.children(cep)} e pasando para a minha funcao filha {(cep) => <>...</>} */}
                {(cep) => 
                    <>
                        {cep.cep}
                        <br/>
                        {cep.logradouro}
                        <br/>
                        {cep.bairro}
                        <br/>
                        {cep.localidade}
                    </>}   
            </Fetch>

            <br/><br/>

            <h1>Looping com Children</h1>
            <LoopingChildren>
                {/* Aqui eu vou passar tres elementos filhos onde pela logica do meu componente eu nao quero exibir o primeiro elemento. */}
                <span>1</span>
                <span>2</span>
                <br/>
                <span>3</span>
            </LoopingChildren>

            <h1>Contando elementos</h1>
            <CountChildren>
                {/* Tres elementos filhos ou seja valor = 3 */}
                <p>1</p>
                <p>2</p>
                <p>3</p>
            </CountChildren>

            <h1>Array de Elementos Filhos</h1>
            <ChildrenArray>
                {/* Aqui passei tres string usado as chaves para mostrar que e um codigo javaScript, onde este elementos filhos serao recebidos pelo componente ChildrenArray, tranformados em um array e ordenados pelo metodo .sort()*/}
                {/* props.children, podem ser qualquer tipo de objeto JavaScript, assim como arrays, funções ou objetos. */}
                {'2'}
                {'3'}
                {'1'}
            </ChildrenArray>

            <h1>Apenas um Elemento Filho</h1>
            <OnlyOneChild>
                <p>Apenas um</p>
                {/* <p>Erro</p> */}
            </OnlyOneChild>

            <h1>Alterando todas a propriedades name dos elementos filhos de uma so vez</h1>
            <AlterNameProperty name="g1">
                <input type="radio" id="1" value="1"></input>
                <label for="1">1</label>
                <input type="radio" id="2" value="2"></input>
                <label for="2">2</label>
                <input type="radio" id="3" value="3"></input>
                <label for="3">3</label>
            </AlterNameProperty>
        </>
    )
}

export default App  