import React, { useState } from 'react';
import useHttp from '../hooks/useHttp';

const ClienteForm = () => {
    const [formData, setForm] = useState({
        nombre: '',
        apellido: '',
        email: '',
        contrasena: '',
        repetirContrasena: '',
    });

    const [error, setError] = useState('');
    const { fetchData, loading } = useHttp('http://localhost:53856/api/usuario');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (formData.contrasena !== formData.repetirContrasena) {
            setError('Las contraseñas no son iguales');
            return;
        }

        const requestData = {
            nombre: formData.nombre,
            apellido: formData.apellido,
            email: formData.email,
            password: formData.contrasena
        };


        try {
            const response = await fetchData('POST', requestData, {
                'Content-Type': 'application/json',
            });
            if (response.id) {
                console.log('Usuario guardado exitosamente');
                window.location.href = '/#/clientes/ver';
            } else {
                console.error('Error al guardar el usuario:', response.statusText);
                setError('No se pudo guardar el usuario. Verifica los datos ingresados.');
            }
        } catch (error) {
            console.error('Error en la solicitud:', error);
            setError('Ocurrió un error al intentar guardar el usuario.');
        }
    };


    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-center">Crear Cliente</h2>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">
                    Nombre
                </label>
                <input
                    type="text"
                    name="nombre"
                    id="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    required
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="apellido">
                    Apellido
                </label>
                <input
                    type="text"
                    name="apellido"
                    id="apellido"
                    value={formData.apellido}
                    onChange={handleChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    required
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                    Email
                </label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    required
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="contrasena">
                    Contraseña
                </label>
                <input
                    type="password"
                    name="contrasena"
                    id="contrasena"
                    value={formData.contrasena}
                    onChange={handleChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    required
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="repetirContrasena">
                    Repetir Contraseña
                </label>
                <input
                    type="password"
                    name="repetirContrasena"
                    id="repetirContrasena"
                    value={formData.repetirContrasena}
                    onChange={handleChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    required
                />
            </div>
            {error && <p className="text-red-500 text-xs italic">{error}</p>}
            <div className="flex items-center justify-between">
                <button type="submit" disabled={loading} className="px-4 py-2 bg-blue-500 text-white rounded-md btn">
                    {loading ? 'Enviando...' : 'Enviar'}
                </button>
            </div>
        </form>
    );
};

export default ClienteForm;