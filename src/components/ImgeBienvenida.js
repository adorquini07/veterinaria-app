import React from 'react';
import '../styles/App.css';

const ImgeBienvenida = () => {
    return (
        <section className="bg-cover bg-center h-screen" style={{ backgroundImage: 'url(https://thumbs.dreamstime.com/z/imagen-de-dibujos-animados-una-cl%C3%ADnica-veterinaria-pr%C3%A1ctica-composici%C3%B3n-interiores-con-animales-cr%C3%ADa-veterinarios-paw-228423288.jpg?ct=jpeg)' }}>
            <div className="container mx-auto px-4 flex items-center justify-center h-full">
                <div className="text-center text-blue">
                    <h1 className="text-5xl font-bold mb-4">Bienvenido a Veterinaria las 3Q</h1>
                    <p className="text-2xl mb-8">Cuidando de tu mejor amigo y ventas de productos para tu campo</p>
                </div>
            </div>
        </section>
    );
}

export default ImgeBienvenida;