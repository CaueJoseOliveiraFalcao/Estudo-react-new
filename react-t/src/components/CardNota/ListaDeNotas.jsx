import React, { Component } from 'react'
import CardNota from './CardNota';
import './style.css'
export default class ListaDeNotas extends Component {
    render() {
        return (
            <section className='div-cards'>
                <ul className='ul-d'>
                    {Array.of("Trabalho", "Trabalho", "Estudos").map((categoria , index) => {
                        return (
                            <li className='card-name' key={index}>
                                <CardNota />
                            </li>
                        );
                    })}
                </ul>
            </section>
        );
    }
}

