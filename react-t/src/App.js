import React, { Component } from 'react';
import './App.css';
import Formulario from './components/Formulario';
import ListaDeNotas from './components/CardNota/ListaDeNotas';
class App extends Component {
  constructor(){
    super();
    this.notas = []
  }
  criarNota(titulo, nota) {
    const novaNota = {titulo, nota};
    this.notas.push(novaNota);
    console.log(this.notas.length)
  }
  render() {
    return (
      <section className='div-f'>
        <Formulario criarNota={this.criarNota.bind(this)}></Formulario>
        <ListaDeNotas notas={this.notas}></ListaDeNotas>
      </section>
    )
  }
}
export default App;
