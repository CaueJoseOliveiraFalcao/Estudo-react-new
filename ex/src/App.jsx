import { useState } from "react";
import Statelif from "./components/Statelif";
import "./style.css";
import Stasau from "./components/Stasau";
import Papaia from "./components/Papaia"
import Contato from "./pages/Contato";
import Empresa from "./pages/Empresa";
import Home from "./pages/Home";
import {BrowserRouter as Router, Switch , Route , Link} from 'react-router-dom'

function App() {
    const array = ['React' , 'Vue' , 'Angular']
    const [nome, setNome] = useState()
    return ( 
    <div className = "App" >
        <Router>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/empresa'>Empresa</Link></li>
                <li><Link to='/contato'>Contato</Link></li>
                <Switch>
                    <Route exact path="/">
                        <Home/>
                    </Route>
                    <Route path="/empresa">
                        <Empresa/>
                    </Route>
                    <Route path="/contato">
                        <Contato/>
                    </Route>
                </Switch>
            </ul>
        </Router>
    </div>
    );
}

export default App;