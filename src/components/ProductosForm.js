import React, { useState } from 'react';
import useHttp from '../hooks/useHttp';

const ProductosForm = () => {
    const [form, setForm] = useState({
        nombre: '',
        cantidad: '',
        precio: '',
        descripcion: '',
        imagen: null,
    });

    const [errors, setErrors] = useState({});
    const { fetchData, loading } = useHttp('http://localhost:49775/api/producto');

    const handleChange = (e) => {
        const { name, value, files } = e.target;

        if (name === 'imagen') {
            setForm({
                ...form,
                [name]: files[0],
            });
        } else {
            if (document.getElementById(name)) {
                document.getElementById(name).style.display = 'none';
            }
            setForm({
                ...form,
                [name]: value,
            });
        }
    };

    const validate = () => {
        let errors = {};
        if (!form.nombre) {
            if (document.getElementById('nombre')) {
                document.getElementById('nombre').style.display = 'block';
            }
            errors.nombre = 'El nombre es requerido';
        }
        if (!form.cantidad) {
            if (document.getElementById('cantidad')) {
                document.getElementById('cantidad').style.display = 'block';
            }
            errors.cantidad = 'La cantidad es requerida';
        } else if (isNaN(form.cantidad)) {
            errors.cantidad = 'La cantidad debe ser un número';
        }
        if (!form.precio) {
            if (document.getElementById('precio')) {
                document.getElementById('precio').style.display = 'block';
            }
            errors.precio = 'El precio es requerido';
        } else if (isNaN(form.precio)) {
            errors.precio = 'El precio debe ser un número';
        }
        if (!form.descripcion) {
            if (document.getElementById('descripcion')) {
                document.getElementById('descripcion').style.display = 'block';
            }
            errors.descripcion = 'La descripción es requerida';
        }
        if (!form.imagen) {
            if (document.getElementById('imagen')) {
                document.getElementById('imagen').style.display = 'block';
            }
            errors.imagen = 'La imagen es requerida';
        }
        return errors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length === 0) {
            const formData = new FormData();
            formData.append('nombre', form.nombre);
            formData.append('cantidad', form.cantidad);
            formData.append('precio', form.precio);
            formData.append('descripcion', form.descripcion);
            formData.append('imagePath', form.imagen);

            await fetchData('POST', formData, {
                'Content-Type': 'multipart/form-data',
            });

            console.log('Formulario enviado');
            window.location.href = '/#/productos/ver';
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
                {errors.nombre && <p id="nombre" className="text-red-500 text-sm">{errors.nombre}</p>}
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
                {errors.cantidad && <p id="cantidad" className="text-red-500 text-sm">{errors.cantidad}</p>}
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
                {errors.precio && <p id="precio" className="text-red-500 text-sm">{errors.precio}</p>}
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
                {errors.descripcion && <p id="descripcion" className="text-red-500 text-sm">{errors.descripcion}</p>}
            </div>
            <div className="flex flex-col">
                <label className="mb-2 font-semibold">Imagen:</label>
                <input
                    type="file"
                    name="imagen"
                    onChange={handleChange}
                    className="p-2 border border-gray-300 rounded-md"
                />
                {errors.imagen && <p id="imagen" className="text-red-500 text-sm">{errors.imagen}</p>}
            </div>
            <div className="pt-4">
                <button type="submit" disabled={loading} className="px-4 py-2 bg-blue-500 text-white rounded-md btn">
                    {loading ? 'Enviando...' : 'Enviar'}
                </button>
            </div>
        </form>
    );
};

export default ProductosForm;
