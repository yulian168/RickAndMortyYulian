import React from 'react'
import './Header.css'
import NavBar from '../Navbar/Navbar';
export default function Header() {
  return (
    <div className='Header-1'>
      
      <img className='img-logo' src="https://cdn.sktorrent.eu/obrazky/110c604eaafc9ce4ab7edf7d5a66df265f459fec.jpg" alt="" />
      <h1>Rick and Morty</h1>
      <p>-Movie App-</p>
    <NavBar/>
    </div>
  )
}
