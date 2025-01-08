import React, { useEffect, useState } from 'react';
import useHttp from '../hooks/useHttp';
import '../styles/App.css';

const Productos = () => {
  const [productos, setProductos] = useState([]);
  const { fetchData, loading, error } = useHttp('http://localhost:49775/api/producto/listar');
  const { fetchData: deleteProducto } = useHttp('http://localhost:49775/api/producto/eliminar/');
  const { fetchData: buscarProductoApi } = useHttp('http://localhost:49775/api/producto/buscar/nombre/');

  useEffect(() => {
    const fetchClientes = async () => {
      const response = await fetchData();
      if (response) {
        setProductos(response);
      }
    };
    fetchClientes();
  }, []);

  const handleDelete = async (id) => {
    console.log('id', id);
    try {
      const response = await deleteProducto('DELETE', { id });
      if (response === 'Producto eliminado') {
        window.location.reload();
      } else {
        console.error('Error al eliminar el cliente:', response);
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
    }
  };

  const handleBuscar = async () => {
    const nombre = document.getElementById('buscarProducto').value;
    if (nombre) {
      try {
        const response = await buscarProductoApi('GET', { nombre }, `/${nombre}`);
        if (response) {
          setProductos(response);
        } else {
          setProductos([]);
        }
      } catch (error) {
        console.error('Error al buscar el producto:', error);
        setProductos([]);
      }
    } else {
      const response = await fetchData();
      if (response) {
        setProductos(response);
      }
    }
  };

  return (
    <div className="container">
      <h2 className="text-3xl font-bold text-center mb-8">Productos</h2>

      <div class="flex items-center max-w-md mx-auto bg-white rounded-lg " x-data="{ search: '' }">
        <div class="w-full">
          <input type="search" class="w-full px-4 py-1 text-gray-800 rounded-full focus:outline-none border" placeholder="search" x-model="search" id='buscarProducto' />
        </div>
        <div>
          <button type="submit" class="flex items-center bg-blue-500 justify-center w-12 h-12 text-white rounded-r-lg" onClick={() => handleBuscar()}>
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </button>
        </div>
      </div>

      {loading && <p className="text-center">Cargando productos...</p>}
      {error && <p className="text-center text-red-500">Error: {error}</p>}

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {productos && productos.length > 0 ? (
          productos.map((producto) => (
            <div
              key={producto.id}
              className="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96"
            >
              <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white bg-clip-border rounded-xl h-96">
                <img
                  src={producto.imagen || 'https://via.placeholder.com/300'}
                  alt={producto.nombre}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                    {producto.nombre}
                  </p>
                  <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                    ${producto.precio}
                  </p>
                </div>
                <p className="block font-sans text-sm antialiased font-normal leading-normal text-gray-700 opacity-75">
                  {producto.descripcion || 'Sin descripción'}
                </p>
                <button
                  onClick={() => handleDelete(producto.id)}
                  className="mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Eliminar
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center">No hay productos disponibles.</p>
        )}
      </div>
    </div >
  );
};

export default Productos;
