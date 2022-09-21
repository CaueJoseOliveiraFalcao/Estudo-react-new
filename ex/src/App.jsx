import { useState } from "react";
import Statelif from "./components/Statelif";
import "./style.css";
import Stasau from "./components/Stasau";
import Papaia from "./components/Papaia"

function App() {
    const array = ['React' , 'Vue' , 'Angular']
    const [nome, setNome] = useState()
    return ( 
    <div className = "App" >
        <Statelif setNome={setNome} />
        <Stasau nome={nome}/>
        <Papaia array={array}/>
    </div>
    );
}

export default App;