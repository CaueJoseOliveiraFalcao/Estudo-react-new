import Papaia from "./components/Papaia";
import "./style.css";

function App() {
    const array = ['React' , 'Vue' , 'Angular']
    return ( 
    <div className = "App" >
        <h1>Redenrização de Listas</h1>
        <Papaia array={array} />
    </div>
    );
}

export default App;