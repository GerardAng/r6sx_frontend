import { deletePersonaje } from '../services/api';
import { usePersonaje } from '../context/PersonajeContext';

const Tabla = ({ personajes, onSeleccionar, onEditar }) => {
    const { filtros, fetchPersonajes } = usePersonaje();

    const handleEliminar = async (id) => {
        if (confirm('¿Estás seguro de eliminar este operador?')) {
            await deletePersonaje(id);
            fetchPersonajes(filtros);
        }
    };

    return (
        <div className="contenedor-tabla">
            <table className="tabla-personajes">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Organización</th>
                        <th>Rol</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {personajes.map((p) => (
                        <tr key={p.id}>
                            <td>{p.id}</td>
                            <td>{p.nombre_personaje}</td>
                            <td>{p.organizacion}</td>
                            <td>{p.rol}</td>
                            <td className="acciones">
                                <button className="btn-ver" onClick={() => onSeleccionar(p)}>Ver</button>
                                <button className="btn-editar" onClick={() => onEditar(p)}>Editar</button>
                                <button className="btn-eliminar" onClick={() => handleEliminar(p.id)}>Eliminar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Tabla;