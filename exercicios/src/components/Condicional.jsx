
import React, { useState } from 'react';

function Condicional(){
    const [email, setEmail] = useState()

    function EnviarEmail(e) {
        e.preventDefault(e)
        console.log(email)
    }
    return(
        <section>
            <h2>Cadastre seu e-mail</h2>
            <form>
                <input type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)} />
                <button onClick={EnviarEmail}>Enviar Email</button>
            </form>
        </section>
    )
}

export default Condicional