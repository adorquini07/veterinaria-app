import React from 'react';

const Nosotros = () => {
    return (
        <section className="bg-gray-100 py-12">
            <hr/>
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-4xl font-bold text-gray-800 mb-4">Sobre Nosotros</h2>
                <p className="text-lg text-gray-600 mb-8">
                    En nuestra veterinaria, nos dedicamos a proporcionar el mejor cuidado para tus mascotas. 
                    Nuestro equipo de profesionales está comprometido con la salud y el bienestar de tus amigos peludos.
                </p>
                <div className="flex justify-center">
                    <img 
                        src="https://via.placeholder.com/400" 
                        alt="Veterinaria" 
                        className="rounded-lg shadow-lg"
                    />
                </div>
            </div>
        </section>
    );
};

export default Nosotros;