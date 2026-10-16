import { useState } from 'react';
import './App.css'

function App() {
  const [contador, setContador] = useState(66);

  function renderizarMain() {
    
  }

  return(
    <>
      <section>
        <h1>Exemplo de uso do useState</h1>
        <input type='text' />
        <p>{contador}</p>
        <br/>
        <input type='button' value='Clique' onClick={()=>{
        
          setContador(contador+1) 
        
        }}/>
      </section>
    </>
  )
}

export default App;