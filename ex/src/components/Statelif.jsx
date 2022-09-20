import React from 'react';


export default function Statelif({setNome}){
    
    return(
        <section>
            <h1>Statelif</h1>
            <p>Digite Seu Nome:</p>
            <input type="text" placeholder='Digite seu nome' onChange={(e) => {setNome(e.target.value)}} />
        </section>
    )
}