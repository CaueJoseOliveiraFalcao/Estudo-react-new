//import { useState } from "react";
//import Statelif from "./components/Statelif";
import "./style.css";
//import Stasau from "./components/Stasau";
//import Papaia from "./components/Papaia"
import Contato from "./pages/Contato";
import Empresa from "./pages/Empresa";
import Home from "./pages/Home";
import {BrowserRouter as Router, Routes , Route , Link} from 'react-router-dom'
import {FaBeer} from 'react-icons/fa'

function App() {
    //const array = ['React' , 'Vue' , 'Angular']
    //const [nome, setNome] = useState()
    return ( 
    <div className = "App" >
        <Router>
            <ul>
                <li><Link to='/'>Home <FaBeer/></Link></li>
                <li><Link to='/empresa'>Empresa</Link></li>
                <li><Link to='/contato'>Contato</Link></li>
                <Routes>
                    <Route exact path="/" element={<Home/>}/>
                    <Route path='/empresa' element={<Empresa/>} />
                    <Route path="/contato" element={<Contato/>}/>
                </Routes>
            </ul>
        </Router>
    </div>
    );
}

export default App;