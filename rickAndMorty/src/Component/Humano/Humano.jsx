import React, { useEffect, useState } from 'react';
import Card from '../Card/Card'; 
import './Humano.css';
export default function Humano() {
  const [humanos, setHumanos] = useState([]);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character/')
      .then(response => response.json())
      .then(data => {
        const soloHumanos = data.results.filter(personaje => personaje.species === 'Human');
        setHumanos(soloHumanos);
      });
  }, []);

  return (
    <div className="humano-page">
      <h1>Personajes Humanos de Rick y Morty</h1>
      <div className="card-container">
        {humanos.map(personaje => (
          <Card key={personaje.id} personaje={personaje} />
        ))}
      </div>
    </div>
  );
}
