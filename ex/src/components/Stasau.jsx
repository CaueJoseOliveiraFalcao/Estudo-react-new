import React from 'react'

export default function Stasau({nome}){
    function gerarsau(nome){
        return `Ola ${nome}`
    };
    return(
        <section>
            <>{nome && <p>{gerarsau(nome)}</p>}</>
        </section>
    )
}