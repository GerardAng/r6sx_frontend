import { PersonajeProvider } from './context/PersonajeContext';
import ListaPersonajes from './pages/ListaPersonajes';
import './App.css';

function App() {
    return (
        <PersonajeProvider>
            <ListaPersonajes />
        </PersonajeProvider>
    );
}

export default App;