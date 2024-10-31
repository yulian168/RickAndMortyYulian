import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className='Navbar-n'>
      <ul>
        <li>
          <Link to="/">
            <button className="home-button">INICIO</button>
          </Link>
        </li>
        <li>
          <Link to="/humanos">
            <button className="home-button">HUMANOS</button>
          </Link>
        </li>
        <li>
          <Link to="/aliens">
            <button className="home-button">ALIENS</button>
          </Link>
        </li>
        <li>
          <Link to="/acerca-de">
            <button className="home-button">ACERCA DE</button>
          </Link>
        </li>
      </ul>
    </div>
  );
}
