import { usePersonaje } from '../context/PersonajeContext';

const Paginacion = ({ count, pageSize }) => {
    const { filtros, setFiltros } = usePersonaje();
    const totalPaginas = Math.ceil(count / pageSize);

    const handlePagina = (nuevaPagina) => {
        setFiltros({ ...filtros, page: nuevaPagina });
    };

    return (
        <div className="contenedor-paginacion">
            <button
                onClick={() => handlePagina(filtros.page - 1)}
                disabled={filtros.page === 1}
                className="btn-paginacion"
            >
                ← Anterior
            </button>
            <span className="pagina-actual">
                Página {filtros.page} de {totalPaginas}
            </span>
            <button
                onClick={() => handlePagina(filtros.page + 1)}
                disabled={filtros.page === totalPaginas}
                className="btn-paginacion"
            >
                Siguiente →
            </button>
        </div>
    );
};

export default Paginacion;