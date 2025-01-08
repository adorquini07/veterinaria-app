import React, { useEffect } from 'react';
import useHttp from '../hooks/useHttp';
import '../styles/App.css';

const Productos = () => {
  // const { data: productos, fetchData } = useHttp('http://localhost:8081/productos');

  const productos = [
    { id: 1, nombre: 'Juan', email: 'adorqui@gmail.com', precio: 100 },
    { id: 2, nombre: 'Pedro', email: 'ahsjhdas', precio: 100 },
    { id: 3, nombre: 'Maria', email: 'ahsjhdas', precio: 100 },
    { id: 4, nombre: 'Jose', email: 'ahsjhdas', precio: 100 },
  ];

  // useEffect(() => {
  //   fetchData();
  // }, []);

  return (
    <div className="container">
      <h2 className="text-3xl font-bold text-center mb-8">Productos</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {productos.map(producto => (
          <div class="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
            <div class="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white bg-clip-border rounded-xl h-96">
              <img
                src="https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=927&amp;q=80"
                alt="card-image" class="object-cover w-full h-full" />
            </div>
            <div class="p-6">
              <div class="flex items-center justify-between mb-2">
                <p class="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                  {producto.nombre}
                </p>
                <p class="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                  {producto.precio}
                </p>
              </div>
              <p class="block font-sans text-sm antialiased font-normal leading-normal text-gray-700 opacity-75">
                {producto.email}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Productos;