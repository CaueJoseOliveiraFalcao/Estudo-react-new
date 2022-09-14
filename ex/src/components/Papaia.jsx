import React from 'react';

export default function Papaia({ array }){
    return(
        <section>
            <h1>Lista:</h1>
            {
                array.length > 0 ?(
                    array.map((itens , index) => {
                       return <p key={index}>{itens}</p>
                    })
                ) : (
                    <p>VAMO</p>
                )
            }
        </section>
    )
}

