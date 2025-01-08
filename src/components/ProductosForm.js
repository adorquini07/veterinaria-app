import React, { useState } from 'react';
const ProductosForm = () => {
    const [form, setForm] = useState({
        nombre: '',
        cantidad: '',
        precio: '',
        descripcion: '',
        imagen: ''
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value
        });
    };

    const validate = () => {
        let errors = {};
        if (!form.nombre) errors.nombre = 'El nombre es requerido';
        if (!form.cantidad) {
            errors.cantidad = 'La cantidad es requerida';
        } else if (isNaN(form.cantidad)) {
            errors.cantidad = 'La cantidad debe ser un número';
        }
        if (!form.precio) {
            errors.precio = 'El precio es requerido';
        } else if (isNaN(form.precio)) {
            errors.precio = 'El precio debe ser un número';
        }
        if (!form.descripcion) errors.descripcion = 'La descripción es requerida';
        if (!form.imagen) errors.imagen = 'La imagen es requerida';
        return errors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length === 0) {
            console.log('Formulario enviado', form);
            // Aquí puedes agregar la lógica para enviar el formulario
        } else {
            setErrors(validationErrors);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-center">Crear Producto</h2>
            <div className="flex flex-col">
                <label className="mb-2 font-semibold">Nombre:</label>
                <input
                    type="text"
                    name="nombre"
                    value={form.nombre}
                    onChange={handleChange}
                    className="p-2 border border-gray-300 rounded-md"
                />
                {errors.nombre && <p className="text-red-500 text-sm">{errors.nombre}</p>}
            </div>
            <div className="flex flex-col">
                <label className="mb-2 font-semibold">Cantidad:</label>
                <input
                    type="number"
                    name="cantidad"
                    value={form.cantidad}
                    onChange={handleChange}
                    className="p-2 border border-gray-300 rounded-md"
                />
                {errors.cantidad && <p className="text-red-500 text-sm">{errors.cantidad}</p>}
            </div>
            <div className="flex flex-col">
                <label className="mb-2 font-semibold">Precio:</label>
                <input
                    type="number"
                    name="precio"
                    value={form.precio}
                    onChange={handleChange}
                    className="p-2 border border-gray-300 rounded-md"
                />
                {errors.precio && <p className="text-red-500 text-sm">{errors.precio}</p>}
            </div>
            <div className="flex flex-col">
                <label className="mb-2 font-semibold">Descripción:</label>
                <input
                    type="text"
                    name="descripcion"
                    value={form.descripcion}
                    onChange={handleChange}
                    className="p-2 border border-gray-300 rounded-md"
                />
                {errors.descripcion && <p className="text-red-500 text-sm">{errors.descripcion}</p>}
            </div>
            <div className="flex flex-col">
                <label className="mb-2 font-semibold">Imagen:</label>
                <input
                    type="file"
                    name="imagen"
                    value={form.imagen}
                    onChange={handleChange}
                    className="p-2 border border-gray-300 rounded-md"
                />
                {errors.imagen && <p className="text-red-500 text-sm">{errors.imagen}</p>}
            </div>
            <div className='pt-4'>
                <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md btn">Enviar</button>
            </div>

        </form>
    );
};

export default ProductosForm;