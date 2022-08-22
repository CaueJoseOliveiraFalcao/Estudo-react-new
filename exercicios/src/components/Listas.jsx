import React from 'react';
 function Listas(){
    const meusItens = ['React','Angular','Vue']
    return(
        <section>
            <h1>tha best you have</h1>
            {meusItens.length > 0 ? (
                meusItens.map((item, index) => (
                <p key={index}>{item}</p>))) : (
                    <p>Nao tem items</p>
                )
            }
        </section>
    )
 }

 export default Listas