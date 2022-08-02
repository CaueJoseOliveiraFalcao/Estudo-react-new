import React from 'react';
import {useState} from 'react';
import Button from './Button';
function Evento(){
    function cadastrarUsuario(event){
        console.log(name)
        console.log(password)
        event.preventDefault(event)
    }
    function muda(e){
        e.preventdefault(e)
        console.log('fudeuse')
    }
    const [name , setName] = useState()
    const [password , setPassword] = useState()
    return(
        <section>
            <form onSubmit={cadastrarUsuario}>
                <input onChange={(e) => setName(e.target.value)} type="text" name="s" id="s" placeholder='Digite seu Nome' />
                <input onChange={(e) => setPassword(e.target.value)}type="password" name="sa" id="sa" placeholder='Digite sua senha' />
                <input type="submit" />
            </form>
            <p>Clique para disparar um evento</p>
            <Button text='primeiro Evento'/>
            <button onClick={muda}></button>
        </section>
    )
}

export default Evento