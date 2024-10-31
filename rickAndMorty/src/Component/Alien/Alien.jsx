import React, { useEffect, useState } from 'react';
import Card from '../Card/Card'; 
import './Alien.css';
export default function Alien() {
  const [humanos, setHumanos] = useState([]);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character/')
      .then(response => response.json())
      .then(data => {
        const soloAliens = data.results.filter(personaje => personaje.species === 'Alien');
        setHumanos(soloAliens);
      });
  }, []);

  return (
    <div className="humano-page">
      <h1>Personajes Aliens de Rick y Morty</h1>
      <div className="card-container">
        {humanos.map(personaje => (
          <Card key={personaje.id} personaje={personaje} />
        ))}
      </div>
    </div>
  );
}
