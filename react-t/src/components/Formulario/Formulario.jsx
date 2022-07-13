import React, { Component } from 'react';
import './form.css'
export default class Formulario extends Component {
    constructor(){
        super()
        this.titulo = '';
        this.nota = '';

    }
    handleMudancaTitulo(evento){
        this.titulo = evento.target.value
    }
    handleMudancaNota(evento){
        this.nota = evento.target.value
    }
    render() {
        return (
            <section className='border'>
                <form className='Form-cadastro'>
                    <input onChange={this.handleMudancaTitulo.bind(this)} className='Titulo-input' type="text" placeholder="Título" />
                    <textarea onChange={this.handleMudancaNota.bind(this)} className='text-input' placeholder="Escreva sua nota..."></textarea>
                    <button>Criar Nota</button>
                </form>
            </section>
        );
    }
}

