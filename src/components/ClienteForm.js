import React, { useState } from 'react';

const ClienteForm = () => {
    const [formData, setFormData] = useState({
        nombre: '',
        apellido: '',
        email: '',
        contrasena: '',
        repetirContrasena: '',
    });

    const [error, setError] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.contrasena !== formData.repetirContrasena) {
            setError('Las contraseñas no son iguales');
        } else {
            setError('');
            // Aquí puedes manejar el envío del formulario
            console.log('Formulario enviado', formData);
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
                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                    Enviar
                </button>
            </div>
        </form>
    );
};

export default ClienteForm;