import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom'

import './styles.css'

import Error from './Error'
import Home from './Home'
import Produtos from './Produtos'
import Sobre from './Sobre'
import Contato from './Contato'

function App() {
  // @next serve para dizer que eu quero a ultima versao deste modulo
  return (
    // BrowserRouter eh quem engloba tudo, ele eh o elemento pai de todas as rotas
    <BrowserRouter>
      {/* Como se fosse uma tag <a/> */}
      {/* <Link to="/sobre">Sobre </Link> */}
      {/* <Link to="/">Home </Link> */}

      {/* O componente NavLink funciona de forma semelhante ao Link porem ele nos traz propriedades melhoradas. */}
      {/* A prorpiedade "end" serve para dizer que este path e exato e o que tiver depois dele nao faz parte desta rota. */}
      {/* Umas das novidades que que a rota que estever sendo renderizada recebe a classe active.
      Para saber o que a classe active faz va no arquivo styles.css */}
      {/* A propriedade  */}
      {/* A propriedade activeClassName verificar se esta rota esta com a classe active, se tiver ele faz determinada tarefa, no meu caso ele muda a cor do backgroud activeClassName={{backgroundColor: "lightblue"}}*/}
      <NavLink to="/" end>Home </NavLink>
      <NavLink to="/sobre">Sobre </NavLink>
      <NavLink to="/contato">Contato </NavLink>
      {/* Onde contem todas as nossas rotas */}
      <Routes>
        {/* Rota individual. */}
        {/* Path e a rota em que eu quero que ele acesse! */}
        {/* A propriedade element eh o que ira renderizar neste caminho (path/url) */}
        {/*  */}
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        {/* Aqui eu estou usando o useParams, basicamente eu estou colocando um valor em uma rota ja existente. Exemplo eu colocar produto/80 eu estou passando o valor 80 na url que subentende que eh o produto 80. */}
        {/* Para definir um parametro na url basicamente nos temos que colocar : e um nome para o objeto. */}
        {/* Quando eu por exemplo usar o useParams, eu vou saber que o valor depois de /produtos/ eh um parametro e eu posso resgata-lo. */}
        <Route path="/produtos/:id" element={<Produtos />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
