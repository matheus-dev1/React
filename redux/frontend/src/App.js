import Paragrafo from './components/Paragrafo/Paragrafo.js'
import ButtonAddSub from './components/ButtonAddSub/ButtonAddSub.js'

function App() {
  // Redux e uma biblioteca separada do React porem seu uso junto e muito comum e Redux e React.
  return (
    <div>
      <Paragrafo />
      <ButtonAddSub />
    </div>
  );
}

export default App
