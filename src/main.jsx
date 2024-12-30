import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Navbar from "./navbar.jsx";
import Inicio from "./inicio.jsx";
import Gallery from "./gallery.jsx";
import Paginas from "./paginas.jsx";
import Roms from "./roms.jsx";
import Programas from "./programas.jsx";
import GameDetails from "./gameDetail.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        {/* Página principal con todos los componentes */}
        <Route
          path="/"
          element={
            <div>
              <Inicio />
            </div>
          }
        />
        {/* Rutas separadas */}
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/juego/:gameId" element={<GameDetails />} />
        <Route path="/paginas" element={<Paginas />} />
        <Route path="/roms" element={<Roms />} />
        <Route path="/programas" element={<Programas />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
