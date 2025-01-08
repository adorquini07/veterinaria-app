import React from 'react';

const Servicios = () => {
    return (
        <div className="bg-gray-100 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-extrabold text-gray-900 text-center">Nuestros Servicios</h2>
                <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-white shadow-lg rounded-lg p-6">
                        <h3 className="text-xl font-semibold text-gray-800">Venta de Productos</h3>
                        <p className="mt-4 text-gray-600">Ofrecemos una amplia gama de productos para animales y artículos para el campo. Encuentra todo lo que necesitas para el cuidado de tus mascotas y el mantenimiento de tu granja.</p>
                    </div>
                    <div className="bg-white shadow-lg rounded-lg p-6">
                        <h3 className="text-xl font-semibold text-gray-800">Vacunación</h3>
                        <p className="mt-4 text-gray-600">Proveemos servicios de vacunación para mantener a tus mascotas saludables y protegidas contra diversas enfermedades. Nuestro equipo de profesionales está listo para ayudarte.</p>
                    </div>
                    <div className="bg-white shadow-lg rounded-lg p-6">
                        <h3 className="text-xl font-semibold text-gray-800">Consultas</h3>
                        <p className="mt-4 text-gray-600">Ofrecemos consultas veterinarias para diagnosticar y tratar cualquier problema de salud que puedan tener tus mascotas. Confía en nuestros expertos para el mejor cuidado de tus animales.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Servicios;