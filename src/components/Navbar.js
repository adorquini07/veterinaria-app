import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/App.css';

const Navbar = () => {
    const [isOpenCliente, setIsOpenCliente] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdownCliente = () => {
        setIsOpenCliente(!isOpenCliente);
        setIsOpen(false);
    };


    const toggleDropdown = () => {
        setIsOpen(!isOpen);
        setIsOpenCliente(false);
    }

    return (
        <nav className="bg-red shadow-md">
            <div className="container mx-auto px-4 py-2 flex justify-between items-center">
                <h1 className="text-2xl font-bold text-gray-800">Veterinaria las 3Q</h1>
                <ul className="flex space-x-4">
                    <li><a href="/" className="text-gray-600 hover:text-gray-800">Inicio</a></li>
                    <li className="relative">
                        <button 
                            onClick={toggleDropdownCliente} 
                            className=" items-center w-full text-sm text-left bg-transparent rounded-lg hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        >
                            <span>Clientes</span>
                            <svg fill="currentColor" viewBox="0 0 20 20" className="inline w-4 h-4 mt-1 ml-1 transition-transform duration-200 transform md:-mt-1">
                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
                            </svg>
                        </button>
                        {isOpenCliente && (
                            <div className="absolute right-0 w-full mt-2 origin-top-right rounded-md shadow-lg md:w-48">
                                <div className="px-2 py-2 bg-white rounded-md shadow">
                                    <Link to="/clientes/ver" className="block px-4 py-2 mt-2 text-sm bg-transparent rounded-lg hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" onClick={toggleDropdownCliente}>Ver clientes</Link>
                                    <Link to="/clientes/crear" className="block px-4 py-2 mt-2 text-sm bg-transparent rounded-lg hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" onClick={toggleDropdownCliente}>Crear Cliente</Link>
                                </div>
                            </div>
                        )}
                    </li>
                    <li className="relative">
                        <button 
                            onClick={toggleDropdown} 
                            className=" items-center w-full text-sm text-left bg-transparent rounded-lg hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        >
                            <span>Productos</span>
                            <svg fill="currentColor" viewBox="0 0 20 20" className="inline w-4 h-4 mt-1 ml-1 transition-transform duration-200 transform md:-mt-1">
                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
                            </svg>
                        </button>
                        {isOpen && (
                            <div className="absolute right-0 w-full mt-2 origin-top-right rounded-md shadow-lg md:w-48">
                                <div className="px-2 py-2 bg-white rounded-md shadow">
                                    <Link to="/productos/ver" className="block px-4 py-2 mt-2 text-sm bg-transparent rounded-lg hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" onClick={toggleDropdown} >Ver Productos</Link>
                                    <Link to="/productos/crear" className="block px-4 py-2 mt-2 text-sm bg-transparent rounded-lg hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" onClick={toggleDropdown} >Crear Producto</Link>
                                </div>
                            </div>
                        )}
                    </li>
                    <li><a href="/services" className="text-gray-600 hover:text-gray-800">Servicios</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;