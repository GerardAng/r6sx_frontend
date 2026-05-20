import { usePersonaje } from '../context/PersonajeContext';

const Filtros = () => {
    const { filtros, setFiltros } = usePersonaje();

    const handleChange = (e) => {
        setFiltros({
            ...filtros,
            [e.target.name]: e.target.value,
            page: 1,
        });
    };

    return (
        <div className="contenedor-filtros">
            <div className="filtros">
                <h3>Filtros</h3>
                <input
                    type="text"
                    name="nombre"
                    placeholder="Buscar por nombre..."
                    value={filtros.nombre}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="organizacion"
                    placeholder="Organización..."
                    value={filtros.organizacion}
                    onChange={handleChange}
                />
                <select name="rol" value={filtros.rol} onChange={handleChange}>
                    <option value="">Todos los roles</option>
                    <option value="Atacante">Atacante</option>
                    <option value="Defensor">Defensor</option>
                </select>
            </div>
            <div className="ordenamiento">
                <h3>Ordenamiento</h3>
                <select name="ordering" value={filtros.ordering} onChange={handleChange}>
                    <option value="">Sin ordenar</option>
                    <option value="nombre_personaje">Nombre A-Z</option>
                    <option value="-nombre_personaje">Nombre Z-A</option>
                    <option value="velocidad">Velocidad ↑</option>
                    <option value="-velocidad">Velocidad ↓</option>
                </select>
            </div>
        </div>
    );
};

export default Filtros;