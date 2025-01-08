import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Bienvenida from './components/ImgeBienvenida';
import Clientes from './components/Clientes';
import Testimonios from './components/Testimonios';
import Footer from './components/Footer';
import Productos from './components/Productos';
import ClienteForm from './components/ClienteForm';
import ProductosForm from './components/ProductosForm';
import Servicios from './components/Servicios';
import Nosotros from './components/Nosotros';
import './styles/App.css';


const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Bienvenida />
                <Testimonios />
                <Servicios />
                <Nosotros />
              </>
            }
          />
          <Route path="/clientes/ver" element={<Clientes />} />
          <Route path="/productos/ver" element={<Productos />} />
          <Route path="/clientes/crear" element={<ClienteForm />} />
          <Route path="/productos/crear" element={<ProductosForm />} />
          {/* <Route path="/search" element={<Search />} /> */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
