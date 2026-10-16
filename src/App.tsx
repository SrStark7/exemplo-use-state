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

      case 3:
        return <p>Opção 3</p>
        break;

      case 4:
        return <p>Opção 4</p>
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
          <button onClick={()=>setContador(1)} > Opção 1</button>
          <button onClick={()=>setContador(2)} > Opção 2</button>
          <button onClick={()=>setContador(3)} > Opção 3</button>
          <button onClick={()=>setContador(4)} > Opção 4</button>
        </ul>
        <br/>
        {renderMain()}
      </section>
    </>
  )
}

export default App;