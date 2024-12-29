import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Inicio from './inicio.jsx'
import Navbar from './navbar.jsx'
import Galerry from './gallery.jsx'
import Paginas from './paginas.jsx'
import Roms from './roms.jsx'
import Programas from './programas.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <Navbar />
  <Inicio />
  <Galerry />
  <Paginas />
  <Roms />
  <Programas />
  </StrictMode>,
)
