import React from "react";

export default function Paginas() {
  // Constante con títulos, descripciones y enlaces
  const links = {
    "Páginas web con juegos": [
    {
      title: "JKLM.fun",
      url: "https://jklm.fun/",
      description: "Juego de la bomba, completar palabras",
    },
    {
      title: "Cat Trap Game",
      url: "https://llerrah.com/cattrap.htm",
      description: "Encierra al gato",
    },
    {
      title: "Neal.fun - Gasta dinero",
      url: "https://neal.fun/spend/",
      description: "Gasta el dinero de Bill Gates",
    },
    {
      title: "Wordle",
      url: "https://www.nytimes.com/games/wordle/index.html",
      description: "Adivina palabras",
    },
    {
      title: "Super Mario Bros",
      url: "https://supermariobros.io/",
      description: "Clásico juego de super mario bros",
    },
    {
      title: "Townscaper",
      url: "https://oskarstalberg.com/Townscaper/",
      description: "Hacer casas en el mar",
    },
    {
      title: "Gif Party",
      url: "https://gifparty.dance/",
      description: "GIFs que bailan",
    },
    {
      title: "Powerline.io",
      url: "https://powerline.io/",
      description: "Destroza a tus rivales con líneas",
    },
    {
      title: "Diep.io",
      url: "https://diep.io",
      description: "Juego de tanques",
    },
    {
      title: "Geektyper",
      url: "https://www.geektyper.com/",
      description: "Simula que eres un hacker",
    },
    {
      title: "Kickassapp",
      url: "https://kickassapp.com/",
      description: "Nave destructora de páginas",
    },
    {
      title: "EmuOS",
      url: "https://emupedia.net/beta/emuos/",
      description: "Windows con juegos",
    },
    {
      title: "Astroe.io",
      url: "https://astroe.io/",
      description: "Maneja tu propia nave espacial",
    },
    {
      title: "Shootup.io",
      url: "https://shootup.io/",
      description: "Defiéndete de los zombies",
    },
    {
      title: "Smashkarts.io",
      url: "https://smashkarts.io",
      description: "Destroza a tus enemigos en carros",
    },
    {
      title: "Zlap.io",
      url: "https://www.zlap.io/",
      description: "Tala árboles y sobrevive",
    },
    {
      title: "Humanbenchmark",
      url: "https://humanbenchmark.com/",
      description: "Practica tus reflejos",
    },
    {
      title: "Momoo.io",
      url: "https://moomoo.io/",
      description: "Ataca con una bola y hazte más grande",
    },
    {
      title: "Findtheinvisiblecow",
      url: "https://findtheinvisiblecow.com/",
      description: "Encuentra la vaca invisible",
    },
    {
      title: "Lorzd.io",
      url: "https://lordz.io/",
      description: "Organiza tú ejército de caballeros",
    },
    {
      title: "Sliher.io",
      url: "http://slither.io/",
      description: "Come a los otros gusanos",
    },
    {
      title: "Ducklings",
      url: "https://poki.com/es/g/ducklings-io",
      description: "Juego de patos",
    },
    {
      title: "Classic Minecraft",
      url: "https://classic.minecraft.net",
      description: "Juega Minecraft clásico sin descargar nada",
    },
    {
      title: "Gota.io",
      url: "https://gota.io",
      description: "Devora a los demás",
    },
    {
      title: "Wings.io",
      url: "https://wings.io/",
      description: "Vuela tu propio avión",
    },
    {
      title: "Shell Shockers",
      url: "https://poki.com/es/g/shell-shockers",
      description: "Shooter de Huevos",
    },
    {
      title: "Venge.io",
      url: "https://venge.io/",
      description: "Juego de disparos estilo 3D",
    },
    {
      title: "Run3",
      url: "https://poki.com/es/g/run-3",
      description: "Corre y esquiva los obstáculos",
    },
    {
      title: "Skribbl.io",
      url: "https://skribbl.io",
      description: "Dibuja y adivina estilo pinturillo",
    },
    {
      title: "Cookie Clicker",
      url: "https://orteil.dashnet.org/cookieclicker/",
      description: "Clickea galletas",
    },
    {
      title: "Idiottest",
      url: "https://llerrah.com/idiottest.htm",
      description: "Test de idiotas",
    },
    {
      title: "Pinturillo2",
      url: "https://www.pinturillo2.com/",
      description: "Pinturillo",
    },
    {
      title: "Krunker.io",
      url: "https://krunker.io/",
      description: "Shooter estilo Counter-Strike",
    },
    {
      title: "Bartender The Right Mix",
      url: "https://www.1001juegos.com/juego/bartender-the-right-mix",
      description: "Mezcla bebidas",
    },
    {
      title: "Intrusion",
      url: "https://www.1001juegos.com/juego/intrusion",
      description: "Juego de disparos 2D",
    },
    {
      title: "Crossy Road",
      url: "https://poki.com/es/g/crossy-road",
      description: "Cruza la calle",
    },
    {
      title: "Zombotron",
      url: "https://www.friv.com/z/games/zombotron/game.html",
      description: "Juego de zombies",
    },
    {
      title: "Zombsroyale.io",
      url: "https://zombsroyale.io/",
      description: "Battle Royale",
    },
    {
      title: "Higher Lower",
      url: "http://www.higherlowergame.com/",
      description: "Más buscado o menos buscado",
    },
    {
      title: "Agar.io",
      url: "https://agar.io/",
      description: "Consigue el círculo más grande",
    },
    {
      title: "Samurai Showdown",
      url: "https://www.1001juegos.com/juego/samurai-showdown",
      description: "Juego de samuráis",
    },
    {
      title: "Fist of Awesome",
      url: "https://www.miniclip.com/games/fist-of-awesome/es/#privacy-settings",
      description: "Juego de peleas contra animales",
    },
    {
      title: "Littlealchemy2",
      url: "https://littlealchemy2.com/",
      description: "Combina elementos",
    },
    {
      title: "1v1.lol",
      url: "https://1v1.lol/",
      description: "Combates estilo Fortnite",
    },
    {
      title: "Buscaminas",
      url: "https://buscaminas.eu/",
      description: "El clásico juego de buscaminas",
    }
    ],
    "Páginas de dibujo-audio": [    
    {
      title: "Messi Messages",
      url: "https://www.messimessages.com/ar/index.html",
      description: "Haz un saludo personalizado de Messi",
    },
    {
      title: "FakeYou",
      url: "https://fakeyou.com/",
      description: "Usa la voz de un personaje para decir lo que quieras",
    },
    {
      title: "Mrdoob",
      url: "https://mrdoob.com/#/125/multiuser_sketchpad",
      description: "Dibuja con gente random",
    },
    {
      title: "Plink.in",
      url: "https://plink.in/",
      description: "Crea música con personas",
    },
    {
      title: "Bongo Cat",
      url: "https://bongo.cat/",
      description: "Bongo cat",
    },
    {
      title: "Radio Garden",
      url: "http://radio.garden/",
      description: "Radios de todo el mundo",
    },
    {
      title: "Tinkercad",
      url: "https://www.tinkercad.com/",
      description: "Página para hacer diseños 3D",
    },
    {
      title: "Incredibox",
      url: "https://www.incredibox.com/demo/",
      description: "Crea canciones mezclando sonidos",
    },
    {
      title: "Autodraw",
      url: "https://www.autodraw.com/",
      description: "Dibuja algo y se te transformará en algo real",
    },
    {
      title: "Tholman",
      url: "https://tholman.com/texter/",
      description: "Dibuja con letras",
    },
    {
      title: "Voice changer",
      url: "https://voicechanger.io/",
      description: "Cambiador de voz",
    },
    {
      title: "Weavesilk",
      url: "http://weavesilk.com/",
      description: "Siéntete un artista",
    },
    {
      title: "Touchpianist",
      url: "https://touchpianist.com/",
      description: "Toca el piano como el mejor",
    },
    {
      title: "Musiclab",
      url: "https://musiclab.chromeexperiments.com/Rhythm/",
      description: "Crea ritmos",
    },
    {
      title: "Neal.fun",
      url: "https://neal.fun/logos-from-memory/",
      description: "Dibuja logos con la memoria",
    },
    {
      title: "Webamp",
      url: "https://emupedia.net/emupedia-app-winamp/",
      description: "Simulador de DJ",
    }
    ],
    "Páginas visuales-satisfactorias": [
    {
      title: "RickyMortylatino",
      url: "https://rickymortylatino.com/",
      description: "Todos los episodios de Rick Y Morty",
    },
    {
      title: "Simpsonizados",
      url: "https://www.simpsonizados.cyou/",
      description: "Todos los episodios de Los Simpson",
    },
    {
      title: "Malcomlatino",
      url: "https://vermalcolmlatino.com/",
      description: "Todos los episodios de Malcom in the middle",
    },
    {
      title: "Bouncy balls",
      url: "https://bouncyballs.org/",
      description: "Rebota bolitas",
    },
    {
      title: "Civinext",
      url: "https://www.civinext.com/whale.aspx",
      description: "Ballena que sigue el mouse",
    },
    {
      title: "Body visualizer",
      url: "https://bodyvisualizer.com/",
      description: "Crea un tipo de cuerpo a tu gusto",
    },
    {
      title: "Pointer pointer",
      url: "https://pointerpointer.com/",
      description: "Siempre habrá una foto señalando ahí",
    },
    {
      title: "Dinosaurpictures",
      url: "https://dinosaurpictures.org/ancient-earth#0",
      description: "Como se veía la tierra con el tiempo",
    },
    {
      title: "In2white",
      url: "https://www.in2white.com/",
      description: "La imagen con mayor resolución del mundo",
    },
    {
      title: "Pixels fighting",
      url: "https://pixelsfighting.com/",
      description: "Pelea de pixeles",
    },
    {
      title: "Koalastothemax",
      url: "http://www.koalastothemax.com/",
      description: "Haz un koala con píxeles",
    },
    {
      title: "David.li",
      url: "https://david.li/",
      description: "Personajes con físicas raras",
    },
    {
      title: "Cat bounce",
      url: "https://cat-bounce.com/",
      description: "Haz rebotar gatos",
    },
    {
      title: "Biglongnow",
      url: "http://www.biglongnow.com/",
      description: "Puertas infinitas",
    },
    {
      title: "Eslslap",
      url: "http://eelslap.com/",
      description: "Golpea a un hombre con una anguila",
    },
    {
      title: "Voxel space",
      url: "https://emupedia.net/emupedia-demo-voxel-space/",
      description: "Explora mapas con un dron",
    },
    {
      title: "Mrdoob",
      url: "https://mrdoob.com/projects/voxels/",
      description: "Pon cubos en lugares random",
    },
    ],
    "Páginas utiles-datos": [
    {
      title: "ChatGPT",
      url: "https://chat.openai.com/",
      description: "Chatgpt",
    },
    {
      title: "Famous birthdays",
      url: "https://es.famousbirthdays.com/",
      description: "Cumpleaños de famosos",
    },
    {
      title: "When was i conceived",
      url: "https://www.whenwasiconceived.com/",
      description: "Curiosidades de cuando naciste",
    },
    {
      title: "Online Tone Generator",
      url: "https://onlinetonegenerator.com/hearingtest.html",
      description: "Test de Hertz",
    },
    {
      title: "The true size",
      url: "https://www.thetruesize.com/",
      description: "El tamaño real de los paises",
    },
    {
      title: "PiliApp",
      url: "https://es.piliapp.com/emoticon/",
      description: "Copia emojis hechos con símbolos",
    },
    {
      title: "Dafont",
      url: "https://www.dafont.com/es/",
      description: "Página con fuentes de texto",
    },
    {
      title: "Timenow",
      url: "https://es.piliapp.com/time-now/",
      description: "Que hora es en cada país",
    },
    {
      title: "Generator qr",
      url: "https://es.piliapp.com/generator/qr-code/",
      description: "Genera un código QR",
    },
    {
      title: "Random wheel",
      url: "https://es.piliapp.com/random/wheel/",
      description: "Crea una ruleta con tus opciones",
    },
    {
      title: "Speaktogo",
      url: "https://speaktogo.withgoogle.com/",
      description: "Busca una ubicación con tu voz",
    },
    {
      title: "Neal.fun",
      url: "https://neal.fun/progress/",
      description: "Barras de cuanto falta para tal cosa",
    },
    {
      title: "Is it christmas?",
      url: "https://isitchristmas.com/",
      description: "Esta página te dice si es navidad",
    },
    {
      title: "Flightradar24",
      url: "https://www.flightradar24.com/",
      description: "Todos los vuelos del mundo a tiempo real",
    },
    {
      title: "Internetlivestats",
      url: "https://www.internetlivestats.com/",
      description: "Estadísticas de internet",
    },
    {
      title: "Chequeado",
      url: "https://chequeado.com/desgrabador/",
      description: "Desgrabador de video a texto",
    },
    {
      title: "VirusTotal",
      url: "https://www.virustotal.com/",
      description: "Analiza links, archivos, etc.",
    },
    {
      title: "IDRIabs",
      url: "https://www.idrlabs.com/es/estilo-de-personalidad/prueba.php",
      description: "Test de estilo de personalidad",
    },
    {
      title: "Myinstants",
      url: "https://www.myinstants.com/es/index/ar/",
      description: "Cientos de audios meme para descargar",
    },
    ],
    "Páginas extras": [
    {
      title: "Natias.ma",
      url: "https://matias.ma/nsfw/",
      description: "Confía en mi",
    },
    {
      title: "pnrtscr",
      url: "https://pnrtscr.com/kqrkc7",
      description: "El screamer",
    },
    {
      title: "Yyyyyyy.info",
      url: "https://www.yyyyyyy.info/",
      description: "Página random bizarra",
    },
    ]
  };

  return (
    <div id="paginas" className="p-6 bg-fondo min-h-screen flex justify-center items-center">
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
