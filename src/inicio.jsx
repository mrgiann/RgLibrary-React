import React from 'react'
import { Link } from 'react-router-dom';

export default function App() {
  return (
    <div className="h-screen bg-fondo text-texto flex flex-col items-center justify-center relative">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">Bienvenido a Rg Library</h1>
        <p className="text-lg">Un sitio web con juegos gratis, páginas entretenidas, programas y roms.</p>
        <p className="text-lg mb-6">Sin anuncios molestos, ni virus. Con enlaces directos y sin complicaciones!</p>
      </header>
      
      <div className="flex space-x-6 mt-8">
      <div className="flex items-center justify-center w-16 h-16">
        <Link to="/paginas">
          <img id='icon-inicio' src="page.svg" alt="Icono 1" className="w-10 h-10" />
        </Link>
      </div>
      <div className="flex items-center justify-center w-16 h-16">
        <Link to="/gallery">
          <img id='icon-inicio' src="games.svg" alt="Icono 2" className="w-10 h-10" />
        </Link>
      </div>
      <div className="flex items-center justify-center w-16 h-16">
        <Link to="/programas">
          <img id='icon-inicio' src="program.svg" alt="Icono 3" className="w-10 h-10" />
        </Link>
      </div>
      <div className="flex items-center justify-center w-16 h-16">
        <Link to="/roms">
          <img id='icon-inicio' src="roms.svg" alt="Icono 4" className="w-10 h-10" />
        </Link>
      </div>
    </div>
    </div>
  )
}
