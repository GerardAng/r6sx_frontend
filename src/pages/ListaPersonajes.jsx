import { useEffect, useState } from 'react';
import { usePersonaje } from '../context/PersonajeContext';
import Filtros from '../components/Filtros';
import Tabla from '../components/Tabla';
import Paginacion from '../components/Paginacion';
import DetallePersonaje from '../components/DetallePersonaje';
import FormPersonaje from '../components/FormPersonaje';

const ListaPersonajes = () => {
    const { personajes, count, loading, filtros, fetchPersonajes } = usePersonaje();
    const [personajeSeleccionado, setPersonajeSeleccionado] = useState(null);
    const [personajeEditar, setPersonajeEditar] = useState(null);
    const [mostrarForm, setMostrarForm] = useState(false);

    useEffect(() => {
        fetchPersonajes(filtros);
    }, [filtros]);

    const handleEditar = (personaje) => {
        setPersonajeEditar(personaje);
        setMostrarForm(true);
    };

    const handleNuevo = () => {
        setPersonajeEditar(null);
        setMostrarForm(true);
    };

    const handleCerrar = () => {
        setMostrarForm(false);
        setPersonajeEditar(null);
    };

    return (
        <div className="contenedor-principal">
            <h1 className="titulo-principal">Rainbow Six Siege X — Operadores</h1>
            <div className="contenido">
                <div className="panel-izquierdo">
                    <Filtros />
                    <button className="btn-nuevo" onClick={handleNuevo}>
                        + Nuevo Operador
                    </button>
                    {loading ? (
                        <p>Cargando...</p>
                    ) : (
                        <>
                            <Tabla
                                personajes={personajes}
                                onSeleccionar={setPersonajeSeleccionado}
                                onEditar={handleEditar}
                            />
                            <Paginacion
                                count={count}
                                pageSize={filtros.page_size}
                            />
                        </>
                    )}
                </div>
                <div className="panel-derecho">
                    <DetallePersonaje personaje={personajeSeleccionado} />
                </div>
            </div>
            {mostrarForm && (
                <FormPersonaje
                    personajeEditar={personajeEditar}
                    onCerrar={handleCerrar}
                />
            )}
        </div>
    );
};

export default ListaPersonajes;