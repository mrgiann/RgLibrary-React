import React, { useState } from "react";

export default function Roms() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const games = {
    "ROMS de NES": [
      { title: "Super Mario", url: "https://downloads.gamulator.com/roms/Super%20Mario%20Bros.%20(Japan,%20USA).zip" },
      { title: "Pac-Man", url: "https://downloads.gamulator.com/roms/Pac-Man%20(USA)%20(Namco).zip" },
      { title: "Tetris", url: "https://downloads.gamulator.com/roms/Tetris%20(USA).zip" },
      { title: "Duck Hunt", url: "https://downloads.gamulator.com/roms/Duck%20Hunt%20(World).zip" },
      { title: "Legend of Zelda", url: "https://downloads.gamulator.com/roms/Legend%20of%20Zelda,%20The%20(USA)%20(1).zip" },
      { title: "Contra", url: "https://downloads.gamulator.com/roms/Contra%20(USA).zip" },
      { title: "Mortal Kombat 3", url: "https://downloads.gamulator.com/roms/Mortal%20Kombat%203.zip" },
      { title: "Mortal Kombat 4", url: "https://downloads.gamulator.com/roms/Mortal%20Kombat%204.zip" },
      { title: "Chip 'n Dale Rescue Rangers 2", url: "https://downloads.gamulator.com/roms/Chip%20'n%20Dale%20Rescue%20Rangers%202%20(USA).zip" },
      { title: "Galaga", url: "https://downloads.gamulator.com/roms/Galaga%20(U).zip" },
      { title: "Donkey Kong Classics", url: "https://downloads.gamulator.com/roms/Donkey%20Kong%20Classics%20(USA,%20Europe).zip" },
    ],
    "ROMS de MAME": [
      { title: "Spider-Man", url: "https://downloads.gamulator.com/roms/spidman.zip" },
      { title: "Captain Commando", url: "https://downloads.gamulator.com/roms/captcomm.zip" },
      { title: "Cadillacs And Dinosaurs", url: "https://downloads.gamulator.com/roms/dino.zip" },
      { title: "Street Fighter 1", url: "https://downloads.gamulator.com/roms/sf1.zip" },
      { title: "Street Fighter 2", url: "https://downloads.gamulator.com/roms/sf2.zip" },
      { title: "Street Fighter 3", url: "https://downloads.gamulator.com/roms/Street%20Fighter%203.zip" },
    ],
    "ROMS de PS2": [
      { title: "PCSX2", url: "https://pcsx2.net/downloads/" },
      { title: "God of War 1", url: "https://www.mediafire.com/folder/ew3tczj05qgxi/G1_[Esp_-_PAL]" },
      { title: "Bios PS2", url: "https://www.retrostic.com/es/bios/pcsx2-playstation-2/download" },
    ],
  };

  const filteredGames = Object.keys(games).reduce((acc, category) => {
    const filteredCategoryGames = games[category].filter((game) =>
      game.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    if (filteredCategoryGames.length > 0) {
      acc[category] = filteredCategoryGames;
    }
    return acc;
  }, {});

  return (
    <div id="roms" className="mt-24 p-6 bg-fondo min-h-screen flex flex-col items-center">
      <input
        type="text"
        placeholder="Buscar ROMs..."
        value={searchTerm}
        onChange={handleSearchChange}
        className="search-input mb-6"
      />
      <div className="w-full max-w-[1580px]">
        {Object.keys(filteredGames).map((category, index) => (
          <div key={index} className="mb-12">
            <h2 className="text-3xl font-semibold text-texto mb-4 flex justify-center">{category}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredGames[category].map((game, index) => (
                <a
                  key={index}
                  href={game.url} // Enlace para abrir al hacer clic
                  target="_blank" // Abre el enlace en una nueva pestaña
                  rel="noopener noreferrer" // Mejora la seguridad al abrir en nueva pestaña
                  className="block p-6 bg-fondo-card-links rounded-lg shadow-md hover:shadow-lg transition duration-200 text-left"
                >
                  <h3 className="text-xl font-semibold text-blue-600 mb-2 flex items-center">
                    <img src="download.svg" alt="Link icon" className="w-5 h-5 mr-2" />
                    {game.title}
                  </h3>
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}