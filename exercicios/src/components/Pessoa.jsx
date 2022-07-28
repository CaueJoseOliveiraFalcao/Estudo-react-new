import React from 'react';

function Pessoa(){
    return(
        <div>
            <img src={props.foto}/>
            <h2>Nome : {props.nome}</h2>
            <h2>Idade: {props.idade}</h2>
            <h1>Profissao : {props.profissao}</h1>
        </div>
    )
}

export default Pessoa