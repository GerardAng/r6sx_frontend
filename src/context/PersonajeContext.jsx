import { createContext, useContext, useState } from 'react';
import { getPersonajes } from '../services/api';

const PersonajeContext = createContext();

export const PersonajeProvider = ({ children }) => {
    const [personajes, setPersonajes] = useState([]);
    const [count, setCount] = useState(0);
    const [loading, setLoading] = useState(false);
    const [filtros, setFiltros] = useState({
        nombre: '',
        organizacion: '',
        rol: '',
        ordering: '',
        page: 1,
        page_size: 3,
    });

    const fetchPersonajes = async (params) => {
        setLoading(true);
        try {
            const response = await getPersonajes(params);
            setPersonajes(response.data.results);
            setCount(response.data.count);
        } catch (error) {
            console.error('Error al obtener personajes:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <PersonajeContext.Provider value={{
            personajes,
            count,
            loading,
            filtros,
            setFiltros,
            fetchPersonajes,
        }}>
            {children}
        </PersonajeContext.Provider>
    );
};

export const usePersonaje = () => useContext(PersonajeContext);