import React from 'react';
import '../styles/App.css';

const Footer = () => {
    return (
        <footer class="p-4 bg-white shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
            <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2025 Veterinaria las 3Q. Todos los derechos reservados.
            </span>
            <ul class="flex flex-wrap items-center mt-3 sm:mt-0">
                <li>
                    <h4 class="mr-4 text-sm text-gray-500 hover:underline md:mr-6 dark:text-gray-400"> 312 123 4567</h4>
                </li>
                <li>
                    <h4 class="mr-4 text-sm text-gray-500 hover:underline md:mr-6 dark:text-gray-400"> 123 Calle Falsa, Bogotá</h4>
                </li>
                <li>
                    <h4 class="mr-4 text-sm text-gray-500 hover:underline md:mr-6 dark:text-gray-400">Politica de privacidad</h4>
                </li>
                <li>
                    <h4 class="text-sm text-gray-500 hover:underline dark:text-gray-400">Terminos y condiciones</h4>
                </li>
            </ul>
        </footer>
    );
};


export default Footer;