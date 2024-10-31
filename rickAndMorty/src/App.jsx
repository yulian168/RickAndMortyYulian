import { useState } from 'react';
import './App.css';
import Header from './Component/Header/Header/Header';
import Navbar from './Component/Header/Navbar/Navbar';
import Home from './Page/Home/HomePage';
import Humano from './Component/Humano/Humano';
import Alien from './Component/Alien/Alien';
import AcercaDe from './Component/AcercaDe/AcercaDe';
import SinSeleccionar from './Component/SinSeleccionar/SinSeleccionar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className='container-1'>
        <Header className='encabezado'/>
        
        <Routes className='Muñecos'>
          <Route path="/" element={<Home />} />
          <Route path="/humanos" element={<Humano/>} />
          <Route path="/aliens" element={<Alien/>} />
          <Route path="/aliens" element={<Alien/>} />
          <Route path="/acerca-de/:id" element={<AcercaDe/>} />
          <Route path="/acerca-de" element={<SinSeleccionar />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
