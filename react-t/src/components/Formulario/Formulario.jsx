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
    CriarCard(evento){
        evento.preventDefault();
        evento.stopPropagation();
        console.log(`Um novo Card Foi Criado ${this.titulo} , ${this.nota}`)
        document.getElementById('form').reset()
    }
    render() {
        return (
            <section className='border'>
                <form id='form' className='Form-cadastro' onSubmit={this.CriarCard.bind(this)}>
                    <input onChange={this.handleMudancaTitulo.bind(this)} className='Titulo-input' type="text" placeholder="Título" />
                    <textarea onChange={this.handleMudancaNota.bind(this)} className='text-input' placeholder="Escreva sua nota..."></textarea>
                    <button>Criar Nota</button>
                </form>
            </section>
        );
    }
}

