import React from 'react';

function Pessoa({marca, lancamento}){
    return(
        <div>
            <li>{marca} - {lancamento}</li>
        </div>
    )
}

export default Pessoa