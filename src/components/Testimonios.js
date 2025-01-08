import React from 'react';
import '../styles/App.css';

const Testimonios = () => {
    return (
        <section id="testimonios" className="container mx-auto px-4 py-16 bg-gray-200">
        <h2 className="text-3xl font-bold text-center mb-8">Testimonios</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white shadow p-8">
                <blockquote className="text-lg text-gray-600 mb-4">
                La veterinaria Paws es increíble. Mi gata Luna está en excelentes manos.
                </blockquote>
                <p className="text-gray-800 text-right">- Juan Perez</p>
            </div>
            <div className="bg-white shadow p-8">
                <blockquote className="text-lg text-gray-600 mb-4">
                El personal es muy amable y Bruno siempre se siente cómodo aquí.
                </blockquote>
                <p className="text-gray-800 text-right">- Maria Lopez</p>
            </div>
            <div className="bg-white shadow p-8">
                <blockquote className="text-lg text-gray-600 mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, dolorum.
                </blockquote>
                <p className="text-gray-800 text-right">- Pedro Perez</p>
            </div>
            <div className="bg-white shadow p-8">
                <blockquote className="text-lg text-gray-600 mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, dolorum.
                </blockquote>
                <p className="text-gray-800 text-right">- Jose Perez</p>
            </div>
        </div>
      </section>
    );
};

export default Testimonios;