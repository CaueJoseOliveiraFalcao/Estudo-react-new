import React, { Component } from 'react'
import CardNota from './CardNota';
import './style.css'
export default class ListaDeNotas extends Component {
    render() {
        return (
            <section className='div-cards'>
                <ul>
                    {Array.of("Trabalho", "Trabalho", "Estudos").map((categoria , index) => {
                        return (
                            <li key={index}>
                                <CardNota />
                            </li>
                        );
                    })}
                </ul>
            </section>
        );
    }
}

