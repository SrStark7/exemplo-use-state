import { useState } from 'react';
import './App.css'

function App() {
  const [contador, setContador] = useState(66);

  function renderMain() {
    switch (contador) {
      case 1: 
        return <p>Opção 1</p>        
        break;

      case 2:
        return <p>Opção 2</p>
        break;

      default: 
        return <p>Opção Inválida</p>
        break;
    }

  }

  return(
    <>
      <section>
        <h1>Exemplo de uso do useState</h1>
        <ul>
          <li onClick={()=>setContador(1)} > Opção 1</li>
          <li onClick={()=>setContador(2)} > Opção 2</li>
        </ul>
        <br/>
        {renderMain()}
      </section>
    </>
  )
}

export default App;