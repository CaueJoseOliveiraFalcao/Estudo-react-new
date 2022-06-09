import React from 'react';
import './App.css';
import Formulario from './components/Formulario/Formulario';
import ListaDeNotas from './components/CardNota/ListaDeNotas';
function App() {
  return (
    <section className='div-f'>
      <Formulario></Formulario>
      <ListaDeNotas></ListaDeNotas>
    </section>
    
  );
}

export default App;
