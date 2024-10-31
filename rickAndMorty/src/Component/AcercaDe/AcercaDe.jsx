import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './AcercaDe.css';

export default function AcercaDe() {
  const { id } = useParams(); 
  const [personaje, setPersonaje] = useState(null);
  console.log(id)

  useEffect(() => {
    if (id) {
      fetch(`https://rickandmortyapi.com/api/character/${id}`)
        .then(response => {
          if (!response.ok) {
            throw new Error('Personaje no encontrado');
          }
          return response.json();
        })
        .then(data => setPersonaje(data))
        .catch(err => console.error("Error fetching character:", err));
    }
  }, [id]);

  

  if (!personaje) return <div>Cargando...</div>;

  return (
    <div className="acerca-de">
      <h1>Informacion de {personaje.name}</h1>
      <div className="details-card">
        <img src={personaje.image} alt={personaje.name} className="details-image" />
        <div className="details-content">
          <p><strong>ID:</strong> {personaje.id}</p>
          <p><strong>Nombre:</strong> {personaje.name}</p>
          <p><strong>Estado:</strong> {personaje.status}</p>
          <p><strong>Especie:</strong> {personaje.species}</p>
          <p><strong>Género:</strong> {personaje.gender}</p>
          <p><strong>Origen:</strong> {personaje.origin.name}</p>
        </div>
      </div>
    </div>
  );
}
