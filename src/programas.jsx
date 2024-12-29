import React from "react";

export default function programas() {
  // Constante con títulos, descripciones y enlaces
  const links = {
    "Programas": [
      {
        title: "WinRAR",
        url: "https://www.winrar.es/descargas/103/descargar-winrar-para-windows-x64-en-espanol",
        description: "Descomprimidor de archivos",
      },
      {
        title: "Autoclicker",
        url: "https://www.mediafire.com/file/6sm70pa75w0qj12/AutoClicker.exe/file",
        description: "Autoclicker",
      },
      {
        title: "Desktop goose",
        url: "https://www.usitility.com/es/desktop-goose/",
        description: "Ganso mascota de escritorio",
      },
      {
        title: "Twitch studio",
        url: "https://www.twitch.tv/broadcast/studio?lang=es",
        description: "Programa para streams",
      },
      {
        title: "Avast antivirus",
        url: "https://www.avast.com/es-ar/free-antivirus-download#pc",
        description: "Antivirus",
      },
      {
        title: "Livesplit",
        url: "https://livesplit.org/downloads/",
        description: "Contador para speedruns",
      },
      {
        title: "Idle master extended",
        url: "https://idle-master-extended.uptodown.com/windows",
        description: "Farmer de cromos de Steam",
      },
      {
        title: "Shotcut",
        url: "https://shotcut.org/download/",
        description: "Editor de videos",
      },
      {
        title: "Raze cortex",
        url: "https://www.razer.com/cortex",
        description: "Optimizar juegos",
      }
    ]
  };
  

  return (
    <div id="programas" className="p-6 bg-fondo min-h-screen flex justify-center items-center">
      <div className="w-full max-w-[1580px]">
        {Object.keys(links).map((category, index) => (
          <div key={index} className="mb-12">
            <h2 className="text-3xl font-semibold text-texto mb-4 flex justify-center">{category}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {links[category].map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-6 bg-fondo-card-links rounded-lg shadow-md hover:shadow-lg transition duration-200 text-left"
                >
                  <h3 className="text-xl font-semibold text-blue-600 mb-2 flex items-center">
                    <img src="link.svg" alt="Link icon" className="w-5 h-5 mr-2" />
                    {link.title}
                  </h3>
                  <p className="text-texto text-sm">{link.description}</p>
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}  
