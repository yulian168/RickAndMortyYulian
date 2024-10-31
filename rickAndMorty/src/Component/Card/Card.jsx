import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css';

export default function Card({ personaje }) {
  return (
    <Link to={`/acerca-de/${personaje.id}`} className="card">
      <img src={personaje.image} alt={personaje.name} className="card-image" />
      <div className="card-content">
        <h2 className="card-name">{personaje.name}</h2>
        <p className="card-description">Especie: {personaje.species}</p>
        <p className="card-description">Estado: {personaje.status}</p>
      </div>
    </Link>
  );
}
