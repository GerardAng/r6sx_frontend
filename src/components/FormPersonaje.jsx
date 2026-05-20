import { useState, useEffect } from 'react';
import { createPersonaje, updatePersonaje } from '../services/api';
import { usePersonaje } from '../context/PersonajeContext';

const FormPersonaje = ({ personajeEditar, onCerrar }) => {
    const { filtros, fetchPersonajes } = usePersonaje();
    const [form, setForm] = useState({
        nombre_personaje: '',
        descripcion: '',
        organizacion: '',
        rol: 'Atacante',
        velocidad: 2,
        dificultad: 'Fácil',
        imagen: null,
    });

    useEffect(() => {
        if (personajeEditar) {
            setForm({
                nombre_personaje: personajeEditar.nombre_personaje,
                descripcion: personajeEditar.descripcion,
                organizacion: personajeEditar.organizacion,
                rol: personajeEditar.rol,
                velocidad: personajeEditar.velocidad,
                dificultad: personajeEditar.dificultad,
                imagen: null,
            });
        }
    }, [personajeEditar]);

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setForm({ ...form, [name]: files ? files[0] : value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData();
        Object.entries(form).forEach(([key, value]) => {
            if (value !== null) data.append(key, value);
        });

        try {
            if (personajeEditar) {
                await updatePersonaje(personajeEditar.id, data);
            } else {
                await createPersonaje(data);
            }
            fetchPersonajes(filtros);
            onCerrar();
        } catch (error) {
            console.error('Error al guardar:', error);
        }
    };

    return (
        <div className="modal-overlay">
            <div className="modal">
                <h2>{personajeEditar ? 'Editar Operador' : 'Nuevo Operador'}</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="nombre_personaje"
                        placeholder="Nombre del operador"
                        value={form.nombre_personaje}
                        onChange={handleChange}
                        required
                    />
                    <textarea
                        name="descripcion"
                        placeholder="Descripción"
                        value={form.descripcion}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="text"
                        name="organizacion"
                        placeholder="Organización"
                        value={form.organizacion}
                        onChange={handleChange}
                        required
                    />
                    <select name="rol" value={form.rol} onChange={handleChange}>
                        <option value="Atacante">Atacante</option>
                        <option value="Defensor">Defensor</option>
                    </select>
                    <select name="velocidad" value={form.velocidad} onChange={handleChange}>
                        <option value={1}>Velocidad 1</option>
                        <option value={2}>Velocidad 2</option>
                        <option value={3}>Velocidad 3</option>
                    </select>
                    <select name="dificultad" value={form.dificultad} onChange={handleChange}>
                        <option value="Fácil">Fácil</option>
                        <option value="Medio">Medio</option>
                        <option value="Difícil">Difícil</option>
                    </select>
                    <input
                        type="file"
                        name="imagen"
                        accept="image/*"
                        onChange={handleChange}
                    />
                    <div className="modal-botones">
                        <button type="submit" className="btn-ver">
                            {personajeEditar ? 'Guardar cambios' : 'Crear operador'}
                        </button>
                        <button type="button" className="btn-eliminar" onClick={onCerrar}>
                            Cancelar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default FormPersonaje;