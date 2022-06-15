import React, { Component } from 'react';
import './form.css'
export default class Formulario extends Component {
    render() {
        return (
            <section className='border'>
                <section className='container-form'>
                    <input type="text" placeholder="Título" />
                    <textarea placeholder="Escreva sua nota..."></textarea>
                    <button>Criar Nota</button>
                </section>
            </section>
        );
    }
}

