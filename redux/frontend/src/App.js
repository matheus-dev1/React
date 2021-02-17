import Paragrafo from './components/Paragrafo/Paragrafo.js'
import ButtonAddSub from './components/ButtonAddSub/ButtonAddSub.js'

function App() {
  return (
    <div>
      <Paragrafo />
      <ButtonAddSub />
    </div>
  );
}

export default App

/* Redux e uma biblioteca separada do React porem seu uso junto e muito comum e Redux e JavaScript.

O objeto store nos retornar uma seria de funcoes/metodos.

O store armazena e tambem disponibilida diversas funcoes referente aos estados e reducers armazenados nele.

Redux possui apenas uma Store.

O reducer controla os estados da dele. Simplificando um reducer e uma funcao que altera um o estado contido nele atraves das actions.

Um reducer recebe um estado atual(state) e uma acao(action) a se fazer. E pode receber mais acoes.

Como no React.useState(0) nos ja temos que definir um valor de inicilaizacao para o estado no reducer e a mesma coisa.

O parametro action de um reducer possui o objeto {type: "varios bagulho."}.

Um reducer sempre tem que retornar algo.

action.type tudo em MAIUSCULO

O dispatch vai chamar o reducer e alterar o estado do reducer em que voce passou sendo que este action.type tem que ser True e tambem sendo que se voce apenas tem um reducer ele vai alterar o unico existente.

No dispatch nos temos que passar um objeto, que contenha um objeto type: que define no nosso reducer qual e a action que eu estou passando.

Voce pode executar o dispatch varias vezes.

Cada estado(state) apenas pode ter um reducer e um reducer pode ter varias acoes(actions) e eu posso chamar o dispatch varias vezes.

Configuracao neecssaria para usar a Extensao "Redux Dev Tools" - window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

Redux CDN - https://unpkg.com/redux@4.0.5/dist/redux.js

Nos podemos chamar os nossos reducers com getState(), dispatch() ????

No react-redux tem uma funcao chamada <Provider /> que recebe como parametro a nossa Store e coloca no nosso <App />.
- Exemplo: <Provider store={store}> <App /> </Provider>

Para retornar o valor de um state nos temos que usar a funcao useSelector do react-redux, que recebe como parametro um funcao de callback que tem como parametro todos os estados da nossa store, porem eu posso selecionar o estado de qual reducer eu quero, exemplo state.reducer1
Obs: Quando temos apenas um nao precisamos passar .nome do reducer!!!

Em react tudo o que tiver "use" eh um hook

O hook useDispatch vai chamar o nosso reducer e nos podemos passar para ele um objeto com a propriedade type: e o valor igual ao nome da action que voce quer chamar no reducer!

A funcao combineReducers e uma funcao que recebe um objeto que contem todos os nossos reducers.

No redux como regra eu nao posso retornar o mesmo estado eu tenho que enviar um estado NOVO.

O objeto action.type sempre em MAIUSCULO!

Quando voce esta trabalhando com um state que e um objeto voce tem que desestruturar ele para sempre pegar o que ja tem e depois adicionar com o um novo valor para criar um novo estado.

Na funcao useSelector quando voce tem mais de um reducer voce vai primeiro pegar o estado depois o reducer deste estado e se tiver algum objeto voce passa tambem. Exemplo state.reducerAddNomes.nomes

1. Instalar Redux - npm install redux
2. instalar React-Redux - npm install react-redux
3. Criar um Store.
4. Criar um Reducer.
5. Provider
6. useSelector
7. useDispatch

const initialState = {
	frutas: [
  	{ nome: "banana" },
    { nome: "maca"}
  ]
}
console.log(initialState.frutas[0].nome)*/