import React, { Component } from 'react'
import CardNota from '../CardNota/index';
import './style.css'
export default class ListaDeNotas extends Component {
    render() {
        return (
            <section className='div-cards'>
                <ul>
                    {this.props.notas.map((notas , index) => {
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

