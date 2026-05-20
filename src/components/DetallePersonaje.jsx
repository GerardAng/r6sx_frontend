const DetallePersonaje = ({ personaje }) => {
    if (!personaje) {
        return (
            <div className="detalle-vacio">
                <p>Selecciona un operador para ver sus detalles</p>
            </div>
        );
    }

    return (
        <div className="detalle-personaje">
            <h2>{personaje.nombre_personaje}</h2>
            {personaje.imagen ? (
                <img
                    src={`http://127.0.0.1:8000${personaje.imagen}`}
                    alt={personaje.nombre_personaje}
                    className="detalle-imagen"
                />
            ) : (
                <div className="detalle-sin-imagen">Sin imagen</div>
            )}
            <div className="detalle-info">
                <p><strong>Organización:</strong> {personaje.organizacion}</p>
                <p><strong>Rol:</strong> {personaje.rol}</p>
                <p><strong>Velocidad:</strong> {personaje.velocidad}</p>
                <p><strong>Dificultad:</strong> {personaje.dificultad}</p>
                <p><strong>Descripción:</strong> {personaje.descripcion}</p>
                <p><strong>Fecha de creación:</strong> {personaje.fecha_creacion}</p>
            </div>
        </div>
    );
};

export default DetallePersonaje;