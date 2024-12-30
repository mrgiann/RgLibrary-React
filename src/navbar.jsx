import React, { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import '../src/navbar.css';

const themes = {
  moon: ['#0B0C0D', '#0F0F0F', '#181818', '#ffffff', '#020202', '#181818'],
  sun: ['#4D9AF8', '#ffffff', '#EBEBEBFF', '#333333FF', '#020202', '#FFFFFFFF'],
};

const ColorCircles = ({ theme }) => {
  return (
    <div className="color-circles">
      {themes[theme].map((color, index) => (
        <span
          key={index}
          className="circle"
          style={{ backgroundColor: color }}
        ></span>
      ))}
    </div>
  );
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isThemeOpen, setIsThemeOpen] = useState(false);
  const [selectedTheme, setSelectedTheme] = useState('moon');

  useEffect(() => {
    const savedTheme = localStorage.getItem('selectedTheme');
    if (savedTheme) {
      setSelectedTheme(savedTheme);
      updateThemeStyles(savedTheme);
    }
  }, []);

  const location = useLocation(); // Hook para obtener la ruta actual
  const isHome = location.pathname === "/"; // Verifica si estamos en la página de inicio

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsThemeOpen(false);
  };

  const toggleThemeMenu = () => {
    setIsThemeOpen(!isThemeOpen);
    setIsMenuOpen(false);
  };

  const closeMenus = () => {
    setIsMenuOpen(false);
    setIsThemeOpen(false);
  };

  const changeTheme = (theme) => {
    setSelectedTheme(theme);
    localStorage.setItem('selectedTheme', theme); // Guardar el tema en localStorage
    updateThemeStyles(theme);
    setIsThemeOpen(false);
  };

  // Función para actualizar las variables de CSS según el tema seleccionado
  const updateThemeStyles = (theme) => {
    const colors = themes[theme];
    document.documentElement.style.setProperty('--color-navbar', colors[0]);
    document.documentElement.style.setProperty('--color-fondo', colors[1]);
    document.documentElement.style.setProperty('--color-fondo-card', colors[2]);
    document.documentElement.style.setProperty('--color-texto', colors[3]);
    document.documentElement.style.setProperty('--color-fondo-menu', colors[4]);
    document.documentElement.style.setProperty('--color-fondo-card-links', colors[5]);

    if (colors) {
      // Aplicar brillo según el tema
      if (theme === 'sun') {
        document.documentElement.style.setProperty('--theme-input-filter', 'brightness(0.1)');
      } else {
        document.documentElement.style.setProperty('--theme-input-filter', 'none');
      }
    }
  };

  return (
    <div className={`navbar ${isMenuOpen || isThemeOpen ? 'menu-open' : ''}`}>
      <div
        className={`menu-overlay ${isMenuOpen || isThemeOpen ? 'open' : ''}`}
        onClick={closeMenus}
      ></div>
      <div className="line"></div>
      <nav className="navbar">
        <div className="container">
        <div className={`navbar-links ${isMenuOpen ? 'open' : ''}`}>
      <a href={location.pathname === '/' ? "#" : "/"}>
        <button onClick={closeMenus}>Inicio</button>
      </a>
      <a href={location.pathname === '/gallery' ? "#" : "/gallery"}>
        <button onClick={closeMenus}>Juegos</button>
      </a>
      <a href={location.pathname === '/paginas' ? "#" : "/paginas"}>
        <button onClick={closeMenus}>Páginas</button>
      </a>
      <a href={location.pathname === '/roms' ? "#" : "/roms"}>
        <button onClick={closeMenus}>ROMS</button>
      </a>
      <a href={location.pathname === '/programas' ? "#" : "/programas"}>
        <button onClick={closeMenus}>Programas</button>
      </a>
    </div>

          <button className="menu-toggle" aria-label="Abrir menú" onClick={toggleMenu}>
            <i className={`fas fa-bars ${isMenuOpen ? 'open' : ''}`}><img id='hamburger' src='/hamburger.svg' alt="hamburger" /></i>
          </button>

          <div className="navbar-actions">
            <div className="theme-select-container">
              <img
                src={`../${selectedTheme}.webp`}
                alt="Tema actual"
                className="theme-input"
                onClick={toggleThemeMenu}
              />
              <div className={`theme-options ${isThemeOpen ? 'open' : ''}`}>
                <div id='theme-navbar' className="theme-title">Tema de color</div>
                <div className="theme-option" onClick={() => changeTheme('moon')}>
                  <img src="../moon.webp" alt="Moon" />
                  Noche
                  <ColorCircles theme="moon" />
                </div>
                <div className="theme-option" onClick={() => changeTheme('sun')}>
                  <img src="../sun.webp" alt="Sun" />
                  Día
                  <ColorCircles theme="sun" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
