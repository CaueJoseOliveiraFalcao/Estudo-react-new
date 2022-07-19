import React, { Component } from 'react';
import './style.css'
export default class CardNota extends Component {
    render() {
        return (
            <section className='card-name'>
                <section>
                    <header >
                        <h3 className='card-titulo'></h3>
                    </header>
                    <p className='card-text'></p>
                </section>
            </section>
        );
    }
}
