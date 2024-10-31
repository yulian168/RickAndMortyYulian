import React, { useEffect, useState } from 'react';
import './HomePage.css';
import Card from '/src/Component/Card/Card'; 

export default function HomePage() {
  const [personajes, setPersonajes] = useState([]);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character/')
      .then(response => response.json())
      .then(data => setPersonajes(data.results));
  }, []);

  return (
    <div className="home-page">
      <h1>Personajes de Rick y Morty</h1>
      <div className="card-container">
        {personajes.map(personaje => (
          <Card key={personaje.id} personaje={personaje} /> 
        ))}
      </div>
    </div>
  );
}
