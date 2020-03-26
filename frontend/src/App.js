import React from 'react';
// import { useState } from 'react';
import './global.css';

// Um componente é uma função que retorna html;
// jsx - é o html integrado dentro do Javascript;

//import Header from './Header';
import Routes from './routes';
/*
function App() {
  const [counter, setCounter] = useState(0);

  // Quando usamos a função useState, esta retorna um
  // Array [valor, funcaoDeAtualizacao]

  function increment(){
    setCounter(counter + 1);
    //console.log(counter);
  }

  return (
    // Como o componente Header não tem nenhum contéudo nele
    // podemos fechar a tag nela mesma. Exemplo: <Header />
    <div>
      <Header>Contador: { counter } </Header>
      <button onClick= { increment } >Incrementar</button>
    </div>
  );
}
*/
function App(){
  return (
    <Routes />
  );
}

export default App;
