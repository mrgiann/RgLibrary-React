import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const gameData = {
  godofwar4: {
    title: "God of War 4",
    description: "God of War es un videojuego de acción-aventura desarrollado por SCE Santa Monica Studio y publicado por Sony Interactive Entertainment. Su lanzamiento se produjo el 20 de abril de 2018 como un título exclusivo para la consola PlayStation 4.​ Posteriormente, fue lanzado en Microsoft Windows el 14 de enero de 2022",
    requisitos: {
      SO: "Windows 10",
      Almacenamiento: "70 GB HDD",
      Memoria: "16 GB DDR",
      Procesador: "(CPU): Intel i5-2500k / AMD Ryzen 3 1200",
      Gráfica: "NVIDIA GTX 960 (4 GB) / AMD R9 290X (4 GB)",
    },
    images: ["/gameplay/godofwar1.jpg", "/gameplay/godofwar2.jpg", "/gameplay/godofwar3.jpg"],
    downloadLinks: [
      { url: "https://www.mediafire.com/file/2uckgvqlknhzqua/G11odoW64rV2-elamigos.part01.rar/file", label: "God of War 4 - Mediafire parte1" },
      { url: "https://www.mediafire.com/file/lrnpgz13ybnfs38/G11odoW64rV2-elamigos.part02.rar/file", label: "God of War 4 - Mediafire parte2" },
      { url: "https://www.mediafire.com/file/8846l9mu5mbsc8y/G11odoW64rV2-elamigos.part03.rar/file", label: "God of War 4 - Mediafire parte3" },
      { url: "https://www.mediafire.com/file/9ry5ij7fo4j19vi/G11odoW64rV2-elamigos.part04.rar/file", label: "God of War 4 - Mediafire parte4" },
      { url: "https://www.mediafire.com/file/5vfj0bn6ube0t08/G11odoW64rV2-elamigos.part05.rar/file", label: "God of War 4 - Mediafire parte5" },
      { url: "https://www.mediafire.com/file/ii2v7pekdmg84jq/G11odoW64rV2-elamigos.part06.rar/file", label: "God of War 4 - Mediafire parte6" },
      { url: "https://www.mediafire.com/file/a9dbxgdcpw33k2y/G11odoW64rV2-elamigos.part07.rar/file", label: "God of War 4 - Mediafire parte7" },
      { url: "https://www.mediafire.com/file/yrafnpdl7phs738/G11odoW64rV2-elamigos.part08.rar/file", label: "God of War 4 - Mediafire parte8" },
      { url: "https://www.mediafire.com/file/v0t4r4s74ur5bwe/G11odoW64rV2-elamigos.part09.rar/file", label: "God of War 4 - Mediafire parte9" },
      { url: "https://www.mediafire.com/file/4oevwnrpekcyyzm/G11odoW64rV2-elamigos.part10.rar/file", label: "God of War 4 - Mediafire parte10" },
      { url: "https://www.mediafire.com/file/9r6qq3xin5fvj4h/G11odoW64rV2-elamigos.part11.rar/file", label: "God of War 4 - Mediafire parte11" }
    ],
  },
  portal1: {
    title: "Portal 1",
    description: "Portal es un videojuego de lógica en primera persona para un solo jugador desarrollado por Valve Corporation. El juego se publicó en un paquete llamado The Orange Box para Microsoft Windows y Xbox 360 el 9 de octubre de 2007, y para PlayStation 3 el 11 de diciembre de ese año.",
    requisitos: {
      SO: "Windows",
      Procesador: "1.7 GHz",
      Memoria: "512 MB de RAM",
      Gráfica: "compatible con DirectX® 8.1 (requiere compatibilidad con SSE)",
      Windows: "7 (32 y 64 bits) / Vista / XP, ratón, teclado, conexión a Internet"
    },
    images: ["/gameplay/portal1img1.jpg", "/gameplay/portal1img2.jpg", "/gameplay/portal1img3.jpg"],
    downloadLinks: [
      { url: "http://www.mediafire.com/file/gl94ckm4ozxbmbs/Portal+By+Tutos+Nahuel.rar", label: "Portal 1 - Mediafire" }
    ],
  },
  portal2: {
    title: "Portal 2",
    description: "Portal 2 es el segundo videojuego mezcla de videojuego de lógica y de disparos en primera persona, de la saga Portal. Fue desarrollado por Valve Corporation. El 19 de abril de 2011, Portal 2 fue lanzado a través de Steam.",
    requisitos: {
      SO: "Windows 7 / Vista / XP",
      Procesador: "3.0 GHz P4, Dual Core 2.0 (or higher) ó AMD64X2 (or higher)",
      Memoria: "2 GB RAM",
      Gráfica: "De 128 MB o superior y con soporte DirectX 9 con soporte Pixel Shader 2.0b (ATI Radeon X800 o superior / NVIDIA GeForce 7600 o superior / Intel HD Graphics 2000 o superior).",
      DirectX: "Versión 9.0c",
      Almacenamiento: "8 GB espacio disponible"
    },
    images: ["/gameplay/portal2img1.jpg", "/gameplay/portal2img2.jpg", "/gameplay/portal2img3.jpg"],
    downloadLinks: [
      { url: "", label: "No disponible" }
    ],
  },
  farcry1: {
    title: "Far Cry 1",
    description: "Far Cry es un videojuego de disparos en primera persona de la compañía de videojuegos Crytek y distribuido por Ubisoft, editado para PC, y después en Xbox, y por último, con el nombre Farcry Classic, en PlayStation 3 y Xbox 360.",
    requisitos: {
      SO: "Windows® 2000 / XP (sólo)",
      Procesador: "AMD Athlon™ a 1 GHz o Pentium® III a 1 GHz",
      Memoria: "256 MB de RAM",
      Gráfica: "con 64 MB y compatible con DirectX® 9.0b (ver lista de soportadas*)",
      Sonido: "Dispositivo de sonido PCI compatible con DirectX 9.0b (familia Sound Blaster Audigy recomendada)",
    },
    images: ["/gameplay/FarCry 1img1.jpg", "/gameplay/FarCry 1img2.jpg", "/gameplay/FarCry 1img3.jpg"],
    downloadLinks: [
      { url: "", label: "No disponible" }
    ],
  },
  farcry2: {
    title: "Far Cry 2",
    description: "Far Cry 2 es la secuela del videojuego de acción en primera persona Far Cry desarrollado y distribuido por Ubisoft en 2008.",
    requisitos: {
      SO: "compatible con Microsoft Windows XP o Windows Vista (compatible con 64 bits)",
      Procesador: "Pentium 4 a 3,2 GHz, Pentium D a 2,66 GHz, AMD Athlon 64 3500+ o superior",
      Almacenamiento: "3,5 GB",
      Gráfica: "256 MB, Shader Model 3 requerido, NVidia 6800 o ATI X1650 o superior",
      TarjetaSonido: "5.1 recomendada",
    },
    images: ["/gameplay/FarCry 2img1.jpg", "/gameplay/FarCry 2img2.jpg", "/gameplay/FarCry 2img3.jpg"],
    downloadLinks: [
      { url: "https://www.mediafire.com/file/vvrvr140kbc9qp5/el_far_cry_2.rar/file#", label: "Far Cry 2 - Mediafire " }
    ],
  },
  farcry3: {
    title: "Far Cry 3",
    description: "Far Cry 3 es un juego de acción y supervivencia en el trópico, creado por Ubisoft Montreal que se lanzó el 29 de noviembre del 2012 para PlayStation 3, Xbox 360 y Microsoft Windows. El juego pone al jugador en el papel de Jason Brody, un turista varado en una misteriosa isla tropical aislado de la civilización.",
    requisitos: {
      SO: "Windows 7 (con SP1) o Windows 8",
      Procesador: "Intel Core 2 Duo E6700 @ 2.6 GHz o mejor, AMD Athlon 64 X2 6000+ @ 3.0Ghz o superior",
      Memoria: "4 GB",
      Almacenamiento: "15 GB",
      Tarjeta: "Compatible con DirectX 9.0c de 512 MB con Shader Model 3.0 o superior / NVidia 8800 o superior, AMD HD 2900 o superior",
    },
    images: ["/gameplay/FarCry 3img1.jpg", "/gameplay/FarCry 3img2.jpg", "/gameplay/FarCry 3img3.jpg"],
    downloadLinks: [
      { url: "https://mega.nz/file/9StnDZhS#94Z7-P_6wpE5SJXuEX-XyZhOmi6UC5GOyddX5LLvefs", label: "Far Cry 3 - Mega parte1" },
      { url: "https://mega.nz/file/0X0nwJBC#ivpuGXHpWOgnUJi392hMmtt0zkSykqCAGuBL15PKzsE", label: "Far Cry 3 - Mega parte2" },
      { url: "https://mega.nz/file/xLsxXAKT#-SvP22LZ6xJ5XeRKawbtTxNjEvozOQjxVS8erZhHpf4", label: "Far Cry 3 - Mega parte3" },
      { url: "https://mega.nz/file/EH8yGZTS#sjR1MymOydWCA6irdIm3KzcI230zc6FSZExZidZnzuQ", label: "Far Cry 3 - Mega parte4" }
    ],
  },
  farcryprimal: {
    title: "Far Cry Primal",
    description: "Far Cry Primal es un videojuego de acción y aventura en primera persona distribuido por Ubisoft y desarrollado por Ubisoft Montreal para las plataformas Microsoft Windows, Xbox One y PlayStation 4. Es la secuela de Far Cry 4.",
    requisitos: {
      SO: "Windows 7, Windows 8.1, Windows 10 (solo versiones de 64 bits)",
      Procesador: "Intel Core i3-550 a 3,2 GHz o AMD Phenom II X4 955 a 3,2 GHz",
      Memoria: "4GB de RAM",
      Almacenamiento: "20GB",
      Tarjeta: "Nvidia GeForce GTX 460 (1 GB VRAM) o AMD Radeon HD5770 (1 GB VRAM)",
    },
    images: ["/gameplay/Far Cry Primal1.jpg", "/gameplay/Far Cry Primal2.jpg", "/gameplay/Far Cry Primal3.jpg"],
    downloadLinks: [
      { url: "", label: "No disponible" }
    ],
  },
  kenshi: {
    title: "Kenshi",
    description: "Kenshi es un videojuego de rol desarrollado y publicado por Lo-Fi Games para Windows. Es un juego de temática sandbox que se caracteriza por otorgar al jugador la libertad de hacer lo que quiera. Inicialmente el videojuego fue desarrollado durante 12 años por una única persona, Chris Hunt.",
    requisitos: {
      SO: "Windows 7 64-bit",
      Procesador: "Quad-core 64-bit",
      Memoria: "4+ GB RAM",
      DirectX: "11",
      Almacenamiento: "4GB HD space",
    },
    images: ["/gameplay/kenshi1.jpg", "/gameplay/kenshi2.jpg", "/gameplay/kenshi3.jpg"],
    downloadLinks: [
      { url: "https://www.mediafire.com/file/83bci8duwddqqj1/K3ens8hi-1.0.60-elamigos.part1.rar/file", label: "Kenshi - Mediafire parte1" },
      { url: "https://www.mediafire.com/file/e44d05pufdff2jz/K3ens8hi-1.0.60-elamigos.part2.rar/file", label: "Kenshi - Mediafire parte2" },
      { url: "https://www.mediafire.com/file/oqu9yenjuuc9mwt/K3ens8hi-1.0.60-elamigos.part3.rar/file", label: "Kenshi - Mediafire parte3" }
    ],
  },
  fallout1: {
    title: "Fallout 1",
    description: "Te acabas de topar con el clásico juego de rol postapocalíptico que revitalizó todo el género. El sistema SPECIAL de Fallout® te permite desarrollar diferentes tipos de personaje y tomar decisiones significativas, todo bajo tu completo control. Explora las ruinas devastadas de una civilización de la Edad de Oro. Habla, infíltrate o combate contra mutantes, gánsteres y adversarios robóticos. Toma las decisiones correctas o acabarás como otro héroe caído en el páramo.",
    requisitos: {
      SO: "Windows",
      Procesador: "Pentium 90 MHz o más rápido",
      Memoria: "16 MB de RAM",
      Gráficos: "SVGA",
      DirectX: "Cualquiera",
      Almacenamiento: "565 MB de espacio libre",
      Sonido: "Dispositivo compatible con DirectSound o SoundBlaster"
    },
    images: ["/gameplay/Fallout 1img1.jpg", "/gameplay/Fallout 1img2.jpg", "/gameplay/Fallout 1img3.jpg"],
    downloadLinks: [
      { url: "", label: "No disponible" }
    ],
  },
  fallout3: {
    title: "Fallout 3",
    description: "Fallout 3 es un videojuego de rol de acción desarrollado por Bethesda Game Studios y publicado por Bethesda Softworks. Es el tercer juego de la serie, a excepción de Fallout Tactics que se desarrolla en otra época.",
    requisitos: {
      SO: "Windows XP / Vista",
      Procesador: "Intel Pentium 4 a 2.4 GHz o equivalente",
      Memoria: "1 GB de RAM (XP) / 2 GB de RAM (Vista)",
      Gráficos: "Gráfica con 256 MB de VRAM y compatible con DirectX 9.0c (nVidia 6800 o superior / ATI X850 o superior)",
      Almacenamiento: "7 GB de espacio libre"
    },
    images: ["/gameplay/Fallout 3img1.jpg", "/gameplay/Fallout 3img2.jpg", "/gameplay/Fallout 3img3.jpg"],
    downloadLinks: [
      { url: "", label: "No disponible" }
    ],
  },
  maxpayne1: {
    title: "Max Payne 1",
    description: "Max Payne es un videojuego de disparos en tercera persona y entorno 3D desarrollado para Microsoft Windows por la empresa finlandesa Remedy Entertainment, escrito por Sam Lake, producido por 3D Realms y publicado por Gathering of Developers en julio de 2001.",
    requisitos: {
      SO: "Windows® 2000 / XP (sólo)",
      Procesador: "AMD / Intel a 450 MHz.",
      Memoria: "96 MB de RAM (128 MB de RAM o más recomendados)",
      Gráficos: "Tarjeta gráfica con 16 MB y compatible con Direct3D",
      DirectX: "DirectX 8.0"
    },
    images: ["/gameplay/Max payne 1img1.jpg", "/gameplay/Max payne 1img2.jpg", "/gameplay/Max payne 1img3.jpg"],
    downloadLinks: [
      { url: "", label: "No disponible" }
    ],
  },
  maxpayne2: {
    title: "Max Payne 2",
    description: "Max Payne 2: The Fall of Max Payne es la continuación del videojuego Max Payne. Es un juego de disparos en tercera persona el cual recalca su género de videojuegos de acción y su estilo de juego característico utilizando el modo Bullet time y el acompañamiento de los cambios en la trama con una novela gráfica.",
    requisitos: {
      SO: "Microsoft® Windows® 2000 / XP",
      Procesador: "PIII / Athlon a 1 GHz o Celeron / Duron a 1.2 GHz",
      Memoria: "256 MB de RAM",
      Gráficos: "Tarjeta gráfica AGP con 32 MB y con soporte de Hardware T&L",
      DirectX: "DirectX 9.0",
      Almacenamiento: "1.5 GB de espacio libre"
    },
    images: ["/gameplay/Max payne 2img1.jpg", "/gameplay/Max payne 2img2.jpg", "/gameplay/Max payne 2img3.jpg"],
    downloadLinks: [
      { url: "https://mega.nz/file/thpmHKaI#aDRqAkbC3m7AaacguQeOQpIlZAZNxMBSOnnlrjYEcwg", label: "Max Payne 2 - Mega" }
    ],
  },
  callofduty1: {
    title: "Call of duty 1",
    description: "Call of Duty es un videojuego de disparos en primera persona de tipo bélico desarrollado por Infinity Ward. El videojuego es el primer título de la franquicia en ser lanzado para las videoconsolas de séptima generación.",
    requisitos: {
      Procesador: "Pentium III a 600 MHz o Athlon a 600 MHz o superior",
      Memoria: "128 MB de RAM",
      Almacenamiento: "1,4 GB de espacio libre",
      Graficos: "requiere tarjeta aceleradora 3D de hardware (tarjeta de vídeo de 32 MB 100% compatible con DirectX 9.0b y Hardware T&L y los controladores más recientes"
    },
    images: ["/gameplay/Call of Duty1.jpg", "/gameplay/Call of Duty2.jpg", "/gameplay/Call of Duty3.jpg"],
    downloadLinks: [
      { url: "", label: "No disponible" }
    ],
  },
  callofduty2: {
    title: "Call of duty 2",
    description: "Call of Duty 2 es un videojuego de disparos en primera persona bélico, perteneciente a la popular serie de videojuegos Call of Duty de Activision y que sucede a la primera entrega.",
    requisitos: {
      GPU: "Intel Core 2 Duo (Dual-Core)",
      Memoria: "512 MB de RAM",
      Almacenamiento: "4 GB",
      Gráfica: "NVIDIA Geforce 7300 or ATI Radeon X1600"
    },
    images: ["/gameplay/Call of Duty2img1.jpg", "/gameplay/Call of Duty2img2.jpg", "/gameplay/Call of Duty2img3.jpg"],
    downloadLinks: [
      { url: "http://www.mediafire.com/file/xvfx5n4blauv0lv", label: "Call of duty 2 - Mediafire parte1" },
      { url: "http://www.mediafire.com/file/7qbojx4szf4gqz7", label: "Call of duty 2 - Mediafire parte2" },
      { url: "http://www.mediafire.com/file/sifjlh20uj8rhd1", label: "Call of duty 2 - Mediafire parte3" },
      { url: "http://www.mediafire.com/file/ywdec8g9amo15ea", label: "Call of duty 2 - Mediafire parte4" },
      { url: "http://www.mediafire.com/file/scsevp1zqgmubnx", label: "Call of duty 2 - Mediafire parte5" },
      { url: "http://www.mediafire.com/file/ppmw3fo29dwp9hh", label: "Call of duty 2 - Mediafire parte6" },
      { url: "http://www.mediafire.com/file/bjcx68isgwo97o1", label: "Call of duty 2 - Mediafire parte7" },
      { url: "http://www.mediafire.com/file/43sievnlapxsy6j", label: "Call of duty 2 - Mediafire parte8" },
      { url: "http://www.mediafire.com/file/9oee7mp9znipzfu", label: "Call of duty 2 - Mediafire parte9" },
      { url: "http://www.mediafire.com/file/i9ienszt7a265ns", label: "Call of duty 2 - Mediafire parte10" }
    ],
  },
  mafia1: {
    title: "Mafia 1",
    description: "Mafia: Definitive Edition es un videojuego de acción y aventuras desarrollado por Hangar 13 y publicado por 2K Games, un remake de la versión original del videojuego Mafia del año 2002. Anunciado en mayo de 2020, fue lanzado al mercado el 25 de septiembre de ese año para Microsoft Windows, PlayStation 4 y Xbox One.",
    requisitos: {
      SO: "Windows 10 64-bit",
      Procesador: "Intel Core-i5 2550K 3.4GHz / AMD FX 8120 3.1 GHz",
      Memoria: "6 GB de RAM",
      Almacenamiento: "50 GB de espacio disponible",
      Graficos: "NVIDIA GeForce GTX 660 / AMD Radeon HD 7870",
      DirectX: "Versión 11"
    },
    images: ["/gameplay/Mafia 1img1.jpg", "/gameplay/Mafia 1img2.jpg", "/gameplay/Mafia 1img3.jpg"],
    downloadLinks: [
      { url: "", label: "No disponible" }
    ],
  },
  mafia2: {
    title: "Mafia 2",
    description: "Mafia II es un videojuego de acción en tercera persona desarrollado por 2K Games. Es la continuación de la primera entrega Mafia: The City of Lost Heaven, aunque no posee continuidad directa con la línea argumentativa de esta.",
    requisitos: {
      SO: "Microsoft Windows XP (SP2 o posterior) / Windows Vista / Windows 7",
      Procesador: "Pentium D a 3 GHz o AMD Athlon 64 X2 3600+ (Dual core) o superior",
      Memoria: "1.5 GB de RAM",
      Almacenamiento: "8 GB de espacio libre",
      Graficos: "nVidia GeForce 8600 / ATI HD2600 Pro o superior",
    },
    images: ["/gameplay/Mafia 2img1.jpg", "/gameplay/Mafia 2img2.jpg", "/gameplay/Mafia 2img3.jpg"],
    downloadLinks: [
      { url: "https://www.mediafire.com/file/589f32mkorbhc33/Mafia_II__SOLOMEDIAFIRE.rar/file", label: "Mafia 2 - Mediafire" }
    ],
  },
  slimerancher1: {
    title: "Slime Rancher 1",
    description: "Traducción del inglés-Slime Rancher es un videojuego de aventuras de simulación de vida en primera persona desarrollado y publicado por el estudio independiente estadounidense Monomi Park.",
    requisitos: {
      SO: "Sistema operativoWindows 7 o posterior",
      Procesador: "Procesador: Dual Core 2,2 Ghz",
      Memoria: "4 GB de RAM",
      Almacenamiento: "1 GB de espacio disponible",
      Graficos: "512 MB VRAM",
      DirectX: "Versión 11"
    },
    images: ["/gameplay/Slime Rancher 1img1.jpg", "/gameplay/Slime Rancher 1img2.jpg", "/gameplay/Slime Rancher 1img3.jpg"],
    downloadLinks: [
      { url: "https://www.mediafire.com/file/wlpvt18s6dyzs56/Slim3Rr+1.4.4.rar/file", label: "Slime Rancher 1 - Mediafire" }
    ],
  },
  slimerancher2: {
    title: "Slime Rancher 2",
    description: "Traducción del inglés-Slime Rancher 2 es un videojuego de aventura de simulación de vida en primera persona desarrollado y publicado por el estudio independiente estadounidense Monomi Park. Slime Rancher 2 es la secuela directa de su predecesor, Slime Rancher.",
    requisitos: {
      SO: "Windows 10 de 64 bits. Sistema",
      Procesador: "Intel® Core™ i5-2500K / AMD FX-6300. ProcesadorIntel i5-8400 / AMD Ryzen 5 1500X",
      Memoria: "8 GB",
      Gráfica: "NVIDIA GeForce GTX 960 de 2 GB / AMD Radeon R9 280 de 3 GB",
      DirectX: "DirectX11",
      Almacenamiento: "8 GB de espacio disponible"
    },
    images: ["/gameplay/Slime Rancher 2img1.jpg", "/gameplay/Slime Rancher 2img2.jpg", "/gameplay/Slime Rancher 2img3.jpg"],
    downloadLinks: [
      { url: "https://www.mediafire.com/file/8nmexk18yd8k2ts/Slime.Rancher.2.Early.Access.zip/file%20target%20=", label: "Slime Rancher 2 - Mediafire" }
    ],
  },
  gtasanandreas: {
    title: "Grand Theft Auto San Andreas",
    description: "Grand Theft Auto: San Andreas es un videojuego de acción-aventura de mundo abierto desarrollado por Rockstar North y publicado por Rockstar Games.",
    requisitos: {
      SO: "Microsoft Windows 2000/XP",
      Procesador: "1Ghz Pentium III ó AMD Athlon Procesador",
      Memoria: "256MB de RAM",
      Gráfica: "64MB Video Card (Geforce 3 ó superior)",
      Almacenamiento: "3.6GB de free hard disk space (minimal install)"
    },
    images: ["/gameplay/Grand Theft Auto San Andreas1.jpg", "/gameplay/Grand Theft Auto San Andreas2.jpg", "/gameplay/Grand Theft Auto San Andreas3.jpg"],
    downloadLinks: [
      { url: "https://www.mediafire.com/file/c1krdarnefkjfba/GTA_San_Andreas_Megatuto.rar/file", label: "Grand Theft Auto San Andreas - Mediafire" }
    ],
  },
  gtavicecity: {
    title: "Grand Theft Auto Vice City",
    description: "Grand Theft Auto: Vice City, es un videojuego de acción-aventura de mundo abierto en tercera persona. Es el quinto título de la serie Grand Theft Auto y el segundo en gráficos 3D. Se trabajó en una versión para Nintendo GameCube pero fue cancelada por razones desconocidas.",
    requisitos: {
      SO: "Microsoft Windows 2000 / XP",
      Procesador: "Procesador Intel Pentium III a 800 MHz / AMD Athlon a 800 MHz / Intel Celeron a 1.2 GHz / AMD Duron a 1.2 GHz",
      Memoria: "128 MB de RAM",
      Graficos: "Dispositivo de 32 MB con controladores compatibles con DirectX 9.0 (GeForce o superior)",
      DirectX: "Microsoft DirectX 9.0"
    },
    images: ["/gameplay/Grand Theft Auto Vice City1.jpg", "/gameplay/Grand Theft Auto Vice City2.jpg", "/gameplay/Grand Theft Auto Vice City3.jpg"],
    downloadLinks: [
      { url: "https://www.mediafire.com/file/uv3ufb4e300xf6l/Gra4ndTh1eftAVi7ceCi2ty1.1-elamigos.part1.rar/file", label: "Grand Theft Auto Vice City - Mediafire parte1" },
      { url: "https://www.mediafire.com/file/67akup88vovyuhs/Gra4ndTh1eftAVi7ceCi2ty1.1-elamigos.part2.rar/file", label: "Grand Theft Auto Vice City - Mediafire parte2" }
    ],
  },
  manhunt: {
    title: "Manhunt",
    description: "Manhunt es un videojuego de sigilo y videojuego de terror desarrollado por Rockstar North para PlayStation 2 y posteriormente para Xbox y Microsoft Windows. Es la primera entrega de la serie Manhunt.",
    requisitos: {
      SO: "Microsoft® Windows® 2000 / XP sólo",
      Procesador: "Intel Pentium III a 1 GHz o AMD Athlon o equivalente",
      Memoria: "192 MB de RAM",
      Graficos: "Tarjeta 3D con 32 MB",
      DirectX: "Microsoft DirectX® 8.1",
      Almacenamiento: "2.3 GB de espacio libre"
    },
    images: ["/gameplay/Manhunt1.jpg", "/gameplay/Manhunt2.jpg", "/gameplay/Manhunt3.jpg"],
    downloadLinks: [
      { url: "https://www.mediafire.com/file/x839y19ex19599r/Manhunt.rar", label: "Manhunt - Mediafire" }
    ],
  },
  ultrakill: {
    title: "Ultrakill",
    description: "Traducción del inglés-Ultrakill es un videojuego de plataformas de disparos en primera persona desarrollado por Arsi Hakita Patala y publicado por New Blood Interactive. Fue lanzado a través de Early Access en Steam para Microsoft Windows el 3 de septiembre de 2020.",
    requisitos: {
      SO: "Windows 10 64-bit",
      Procesador: "2.4 GHZ Quad Core Processor Or Higher",
      Memoria: "4 GB de RAM",
      Graficos: "Geforce GTX 460 Or Equivalent",
      DirectX: "Versión 11",
      Almacenamiento: "3 GB de espacio disponible",
      TarjetaSonido: "MAXIMUM VOLUME YIELDS MAXIMUM RESULTS"
    },
    images: ["/gameplay/UltraKill1.jpg", "/gameplay/UltraKill2.jpg", "/gameplay/UltraKill3.jpg"],
    downloadLinks: [
      { url: "https://www.mediafire.com/file/vkd85dr5gby1goz/ULTRAKILL.The.Saw.Your.Heart.Early.Access.zip/file", label: "Ultrakill - Mediafire" }
    ],
  },
  counterstrike: {
    title: "Counter Strike",
    description: "Traducción del inglés-Counter-Strike es una serie de videojuegos tácticos multijugador de disparos en primera persona en los que equipos de terroristas luchan para perpetrar un acto terrorista mientras los contraterroristas intentan prevenirlo. La serie comenzó en Windows en 1999 con el lanzamiento del primer juego, Counter-Strike.",
    requisitos: {
      Procesador: "Pentium II 300 MHz",
      Memoria: "96 MB de RAM",
      Gráfica: "de 16 MB",
      Almacenamiento: "600 MB de espacio libre en el disco duro"
    },
    images: ["/gameplay/Counter-Strike 1.6 img1.jpg", "/gameplay/Counter-Strike 1.6 img2.jpg", "/gameplay/Counter-Strike 1.6 img3.jpg"],
    downloadLinks: [
      { url: "https://down-cs.su/download.php?id=asiimov&type=1", label: "Counter Strike - Asiimov" }
    ],
  },
  halflife: {
    title: "Half Life",
    description: "Half-Life es una serie de videojuegos pertenecientes al género de disparos en primera persona que fue desarrollado y publicado por la empresa Valve.",
    requisitos: {
      SO: "Windows 7 (32/64-bit)/Vista/XP",
      Procesador: "1.7 GHz Procesador, requires support for SSE",
      Memoria: "1024 MB RAM",
      DirectX: "Versión 8.1",
      Almacenamiento: "4 GB espacio disponible"
    },
    images: ["/gameplay/Half-Life1.jpg", "/gameplay/Half-Life2.jpg", "/gameplay/Half-Life3.jpg"],
    downloadLinks: [
      { url: "http://www.mediafire.com/file/i0xj867o1s36ww6/Half-Life_By_Marco_Cg.zip/file", label: "Half Life - Mediafire" }
    ],
  },
  area51: {
    title: "Area 51",
    description: "Traducción del inglés-Area 51 es una serie de videojuegos inspirada en las instalaciones militares del Área 51. La franquicia fue lanzada por Atari Games como una serie de dos juegos de disparos con armas ligeras y fue revisada por Midway Games como una serie de juegos de disparos en primera persona.",
    requisitos: {
      SO: "Windows 7",
      Procesador: "Intel Core i5-2400 @ 3.1 GHz ó AMD FX-6300 @ 3.5 GHz",
      Memoria: "4 GB de RAM",
      Gráficos: "NVIDIA GeForce GTX 670",
      Almacenamiento: "190 MB de espacio disponible"
    },
    images: ["/gameplay/Area 51img 1.jpg", "/gameplay/Area 51img 2.jpg", "/gameplay/Area 51img 3.jpg"],
    downloadLinks: [
      { url: "https://www.mediafire.com/file/1npng4gvq4v0ct1/AREA51.rar/file", label: "Area 51 - Mediafire" }
    ],
  },
  undertale: {
    title: "Undertale",
    description: "Undertale es un videojuego de rol en 2D de 2015 creado por el desarrollador independiente estadounidense Toby Fox. El jugador controla a un niño que ha caído al subsuelo: una gran región aislada bajo la superficie de la Tierra, separada por una barrera mágica.",
    requisitos: {
      SO: "Windows XP, Vista, 7, or 10",
      Procesador: "2GHz+",
      Memoria: "3 GB de RAM",
      Gráficos: "512MB",
      Almacenamiento: "200 MB de espacio disponible"
    },
    images: ["/gameplay/Undertale1.jpg", "/gameplay/Undertale2.jpg", "/gameplay/Undertale3.jpg"],
    downloadLinks: [
      { url: "https://www.mediafire.com/file/4y4575p7zd786c6/Undertale.20160309.VeroxPiViGames.rar/file", label: "Undertale - Mediafire" }
    ],
  },
  xmenoriginswolverine: {
    title: "X-men origins: wolverine",
    description: "X-Men Origins: Wolverine es un videojuego de acción-aventura y Hack and slash basado parcialmente en la película homónima. El juego llegó al mercado el 1 de mayo de 2009, coincidiendo con el estreno de la película, llegando a todas las plataformas y mercados.",
    requisitos: {
      SO: "Windows XP SP2/Vista SP1",
      Procesador: "Intel Pentiium 4 @ 3 GHz / AMD Athlon64 3000+",
      Memoria: "1 GB",
      Gráfica: "256 MB, nVidia GeForce 7800 GT / ATI Radeon X1800",
      Almacenamiento: "8 GB libres",
      DirectX: "9.0c",
      TarjetaSonido: "DirectX Compatible"
    },
    images: ["/gameplay/X-men origins wolverine1.jpg", "/gameplay/X-men origins wolverine2.jpg", "/gameplay/X-men origins wolverine3.jpg"],
    downloadLinks: [
      { url: "https://www.mediafire.com/file/6mhb704s2ur0hr1/XMOW-cr.rar/file", label: "X-men origins: wolverine - Mediafire" }
    ],
  },
  clustertruck: {
    title: "Cluster Truck",
    description: "Traducción del inglés-Clustertruck es un juego de plataformas desarrollado por el estudio independiente sueco Landfall Games y publicado por tinyBuild. Se lanzó para Microsoft Windows, macOS, Linux, PlayStation 4 y Xbox One el 27 de septiembre de 2016. Se lanzó para Nintendo Switch el 15 de marzo de 2018",
    requisitos: {
      SO: "Windows 7",
      Procesador: "2Ghz",
      Memoria: "4 GB de RAM",
      Graficos: "Dedicated recommended, integrated will run at 720p",
      Almacenamiento: "500 MB de espacio disponible",
      DirectX: "Versión 9.0"
    },
    images: ["/gameplay/Clustertruck1.jpg", "/gameplay/Clustertruck2.jpg", "/gameplay/Clustertruck3.jpg"],
    downloadLinks: [
      { url: "https://www.mediafire.com/file/bfj7t83qgc7u0fe/Ctruck.rar/file", label: "Cluster Truck - Mediafire" }
    ],
  },
  cuphead: {
    title: "Cuphead",
    description: "Cuphead es un videojuego perteneciente al género de corre y dispara, publicado por la empresa canadiense StudioMDHR. Fue lanzado al mercado el 29 de septiembre de 2017 para Microsoft Windows, Xbox One y Steam, ​ en 2018 para macOS, en 2019 para Nintendo Switch y en 2020 para PlayStation 4.",
    requisitos: {
      SO: "Windows 7",
      Procesador: "Intel Core2 Duo E8400, 3.0GHz or AMD Athlon 64 X2 6000+, 3.0GHz or higher",
      Memoria: "3 GB de RAM",
      Graficos: "Geforce 9600 GT or AMD HD 3870 512MB or higher",
      Almacenamiento: "4 GB de espacio disponible",
      DirectX: "Versión 11"
    },
    images: ["/gameplay/Cuphead1.jpg", "/gameplay/Cuphead2.jpg", "/gameplay/Cuphead3.jpg"],
    downloadLinks: [
      { url: "https://www.mediafire.com/file/z7m8dyrcyevn8qm/Cuphead+V1.2+By+Gonex.rar", label: "Cuphead - Mediafire" }
    ],
  },
  secretneighbor: {
    title: "Secret Neighbor",
    description: "Secret Neighbor es un juego multijugador de terror social en auge ambientado en el universo de Hello Neighbor. Tu grupo tiene un objetivo: colarse en la casa y conseguir las llaves para abrir la puerta del sótano. El único problema es que uno de vosotros es el vecino, ¡un traidor disfrazado!",
    requisitos: {
      SO: "Windows 7 and up",
      Procesador: "Intel Core i5-3330 3.0 GHz, AMD FX-8300 3.3 GHz",
      Memoria: "6 GB de RAM",
      Graficos: "NVIDIA GeForce GTX 760, Radeon R9 270",
      Red: "Conexión de banda ancha a Internet",
      DirectX: "Versión 11"
    },
    images: ["/gameplay/Secret Neighbor1.jpg", "/gameplay/Secret Neighbor2.jpg", "/gameplay/Secret Neighbor3.jpg"],
    downloadLinks: [
      { url: "https://mega.nz/#!sgoj0SSR!xq5TFORDVKOohpH9TZecVcglPfbTRWtUOCNpaUGF7PE", label: "Secret Neighbor - Mega" }
    ],
  },
  helloneighbor1: {
    title: "Hello Neighbor 1",
    description: "Hello Neighbor es un videojuego de terror independiente del género de sigilo desarrollado por Dynamic Pixels y publicado por tinyBuild. El objetivo del juego es que el jugador se infiltre con éxito en el sótano de la casa de su vecino para descubrir un intrigante secreto.",
    requisitos: {
      SO: "Windows 7 and up",
      Procesador: "i5 and up",
      Memoria: "6 GB de RAM",
      Graficos: "GTX 770 and up",
      Almacenamiento:  "5 GB de espacio disponible",
      DirectX: "Versión 11",
      TarjetaSonido: "Stereo. Play with good stereo"
    },
    images: ["/gameplay/Hello Neighbor img1.jpg", "/gameplay/Hello Neighbor img2.jpg", "/gameplay/Hello Neighbor img3.jpg"],
    downloadLinks: [
      { url: "https://mega.nz/file/6G5hiCZQ#uXfQ0Z7K--S3iIH8XPxeuhZWVfTqHWmuhFqMQ95aN14", label: "Hello Neighbor 1 - Mega" }
    ],
  },
  helloneighbor2: {
    title: "Hello Neighbor 2",
    description: "¡La beta de Hello Neighbor 2 llegará el 7 de abril de 2022 y podrás obtener acceso exclusivo con tu reserva! ¡Descubre el misterio y los oscuros secretos que se extienden más allá del Sr. Peterson!",
    requisitos: {
      SO: "Windows 10. Sistema operativoWindows 10",
      Procesador: "i5. Procesadori7",
      Memoria: "6 GB. 8 GB",
      Graficos: "GTX 770 o superior. GráficosGTX 1060",
      DirectX: "DirectX12"
    },
    images: ["/gameplay/Hello Neighbor 2img 1.jpg", "/gameplay/Hello Neighbor 2img 2.jpg", "/gameplay/Hello Neighbor 2img 3.jpg"],
    downloadLinks: [
      { url: "https://www.mediafire.com/file/s8p2pti8gcz0rzk/Hell0+Neighb0r+2+v1.1.1.7.rar/file", label: "Hello Neighbor 2 - Mediafire" }
    ],
  },
  fnaf1: {
    title: "Five nights at freddy's 1",
    description: "Five Nights at Freddy's es un videojuego de supervivencia de terror independiente del género «point-and-click» desarrollado y publicado por Scott Cawthon, siendo la primera entrega de la serie de videojuegos del mismo nombre. Ambientado en el ficticio restaurante de Freddy Fazbear's Pizza",
    requisitos: {
      SO: "XP,Vista,Windows7",
      Procesador: "2 GHz Intel Pentium 4 or AMD Athlon or equivalent",
      Memoria: "1 GB de RAM",
      Graficos: "1 GB",
      DirectX: "Versión 9.0",
      Almacenamiento: "250 MB de espacio disponible"
    },
    images: ["/gameplay/Five Nights at Freddy's1.jpg", "/gameplay/Five Nights at Freddy's2.jpg", "/gameplay/Five Nights at Freddy's3.jpg"],
    downloadLinks: [
      { url: "https://www.mediafire.com/file/1fjtg5124uh6v1p/FNAF1.rar/file", label: "Five nights at freddy's 1 - Mediafire" }
    ],
  },
  fnaf4: {
    title: "Five Nights at Freddy's 4",
    description: "Five Nights at Freddy's 4 es un videojuego de terror donde asumimos el papel de un niño que debe sobrevivir a sus terrores nocturnos con los animatrónicos nightmare",
    requisitos: {
      SO: "Win XP, 7, 8, Vista, 10",
      Procesador: "2 GHz Intel Pentium 4 or AMD Athlon or equivalent",
      Memoria: "2 GB de RAM",
      Almacenamiento: "1 GB de espacio disponible"
    },
    images: ["/gameplay/Five Nights at Freddy's 4 img 1.jpg", "/gameplay/Five Nights at Freddy's 4 img 2.jpg", "/gameplay/Five Nights at Freddy's 4 img 3.jpg"],
    downloadLinks: [
      { url: "https://www.mediafire.com/file/narl6652b8jz56l/FNAF4.zip/file", label: "Five Nights at Freddy's 4 - Mediafire" }
    ],
  },
  fnaf5: {
    title: "Five Nights at Freddy's 5",
    description: "Five Nights at Freddy's: Sister Location es un videojuego de terror independiente del género «point-and-click» desarrollado y publicado por Scott Cawthon, siendo la quinta entrega de la saga de videojuegos Five Nights at Freddy's.",
    requisitos: {
      SO: "Xbox, Versión 17763.0 de Windows 10 o posterior",
      Procesador: "x86/x64/ARM/ARM64",
      Memoria: "4 GB",
      DirectX: "Versión 11"
    },
    images: ["/gameplay/Five Nights at Freddy's 5 img 1.jpg", "/gameplay/Five Nights at Freddy's 5 img 2.jpg", "/gameplay/Five Nights at Freddy's 5 img 3.jpg"],
    downloadLinks: [
      { url: "https://www.mediafire.com/file/gmpd3yketdlhnho/SisterLocation1.1.VeroxPiviGames.exe/file", label: "Five Nights at Freddy's 5 - Mediafire" }
    ],
  },
  fnafucn: {
    title: "Ultimate Custom Night",
    description: "Ultimate Custom Night es un videojuego de terror gratuito e independiente del género «point-and-click» desarrollado y publicado por Scott Cawthon, siendo el segundo «spin-off» oficial de la serie.",
    requisitos: {
      SO: "Win XP, 7, 8, Vista, 10",
      Procesador: "2 GHz Intel Pentium 4 or AMD Athlon or equivalent",
      Memoria: "2 GB de RAM",
      Graficos: "1 GB",
      Almacenamiento: "500 MB de espacio disponible"
    },
    images: ["/gameplay/Five Night at Freddys UCN1.jpg", "/gameplay/Five Night at Freddys UCN2.jpg", "/gameplay/Five Night at Freddys UCN3.jpg"],
    downloadLinks: [
      { url: "https://www.mediafire.com/file/4zp1y9817hgkty9/UCN.rar/file", label: "Ultimate Custom Night - Mediafire" }
    ],
  },
  fnafsecuritybreach: {
    title: "Five Nights at Freddy's: Security Breach",
    description: "Five Nights at Freddy's: Security Breach es un videojuego de terror y aventura en primera persona y mundo abierto del año 2021 desarrollado por Steel Wool Studios y publicado por Scott Cawthon.",
    requisitos: {
      SO: "Windows 10 (64 bit)",
      Procesador: "AMD Ryzen 5 3600, Core i5 6600K",
      Memoria: "8 GB de RAM",
      DirectX: "Versión 12",
      Gráficos: "Nvidia GeForce GTX 1050 Ti",
      Almacenamiento: "80 GB de espacio disponible"
    },
    images: ["/gameplay/Five Night at Freddys Segurity Breach1.jpg", "/gameplay/Five Night at Freddys Segurity Breach2.jpg", "/gameplay/Five Night at Freddys Segurity Breach3.jpg"],
    downloadLinks: [
      { url: "https://www.mediafire.com/file/imdejao0y2qx7fy/FNaFred9dysSec9urityB-elamigos.part01.rar/file", label: "Five Nights at Freddy's: Security Breach - Mediafire parte1" },
      { url: "https://www.mediafire.com/file/fmcyj1e2wh0o5ug/FNaFred9dysSec9urityB-elamigos.part02.rar/file", label: "Five Nights at Freddy's: Security Breach - Mediafire parte2" },
      { url: "https://www.mediafire.com/file/6iknusscmys72j2/FNaFred9dysSec9urityB-elamigos.part03.rar/file", label: "Five Nights at Freddy's: Security Breach - Mediafire parte3" },
      { url: "https://www.mediafire.com/file/xqgilrruidl030k/FNaFred9dysSec9urityB-elamigos.part04.rar/file", label: "Five Nights at Freddy's: Security Breach - Mediafire parte4" },
      { url: "https://www.mediafire.com/file/14j26zjpyk949zz/FNaFred9dysSec9urityB-elamigos.part05.rar/file", label: "Five Nights at Freddy's: Security Breach - Mediafire parte5" },
      { url: "https://www.mediafire.com/file/d17m9zt2mv5gt5n/FNaFred9dysSec9urityB-elamigos.part06.rar/file", label: "Five Nights at Freddy's: Security Breach - Mediafire parte6" },
      { url: "https://www.mediafire.com/file/aupdlm7za25kzc8/FNaFred9dysSec9urityB-elamigos.part07.rar/file", label: "Five Nights at Freddy's: Security Breach - Mediafire parte7" },
      { url: "https://www.mediafire.com/file/5jb3edkgl4gb1v0/FNaFred9dysSec9urityB-elamigos.part08.rar/file", label: "Five Nights at Freddy's: Security Breach - Mediafire parte8" },
      { url: "https://www.mediafire.com/file/a27w1i3yu4r5hq6/FNaFred9dysSec9urityB-elamigos.part09.rar/file", label: "Five Nights at Freddy's: Security Breach - Mediafire parte9" },
    ],
  },
  phasmophobia: {
    title: "Phasmophobia",
    description: "Phasmophobia es un videojuego de terror independiente desarrollado y publicado por Kinetic Games. El juego contó con un acceso anticipado a través de Steam para los equipos de Microsoft Windows en septiembre de 2020, junto con soporte de realidad virtual.",
    requisitos: {
      SO: "Windows 10 64Bit",
      Procesador: "Intel Core i5-10600 / AMD Ryzen 5 3600",
      Memoria: "8 GB de RAM",
      Graficos: "NVIDIA RTX 2060 / AMD Radeon RX 5700",
      Red: "Conexión de banda ancha a Internet",
      Almacenamiento: "21 GB de espacio disponible"
    },
    images: ["/gameplay/Phasmophobia1.jpg", "/gameplay/Phasmophobia2.jpg", "/gameplay/Phasmophobia3.jpg"],
    downloadLinks: [
      { url: "https://www.mediafire.com/file/7rjwan1hcgmozit/Phasmophobia.v0.6.1.3-0xdeadc0de.zip/file", label: "Phasmophobia - Mediafire" }
    ],
  },
  scp: {
    title: "SCP: Containment Breach",
    description: "SCP: Containment Breach es un videojuego de terror independiente desarrollado por Joonas Rikkonen y Third Subdivision Studio. Está basado en las historias de ficción paranormal del sitio web de la Fundación SCP",
    requisitos: {
      SO: "Windows XP, Vista, 7, 8, 10, 11",
      Procesador: "Intel Pentium E2160 / AMD C-50 1ghz, 1 core",
      Memoria: "4 GB de RAM",
      Graficos: "NVIDIA Geforce GT 9600 / AMD RADEON 6250HD",
      DirectX: "Versión 7.0",
      Red: "Conexión de banda ancha a Internet",
      Almacenamiento: "500 MB de espacio disponible"
    },
    images: ["/gameplay/SCP Containment Breach1.jpg", "/gameplay/SCP Containment Breach2.jpg", "/gameplay/SCP Containment Breach3.jpg"],
    downloadLinks: [
      { url: "https://undertowgames.com/file/scp/SCP%20-%20Containment%20Breach%20v1.3.11.zip", label: "SCP: Containment Breach - Download" }
    ],
  },
  poppyplaytime: {
    title: "Poppy Playtime",
    description: "Poppy Playtime es un videojuego de terror y puzzles desarrollado y publicado por el desarrollador MOB Games. El primer capítulo se lanzó en Steam para Microsoft Windows el 12 de octubre de 2021, más tarde el 11 de marzo de 2022 se lanzó en Play Store para Android y en App Store para iOS.",
    requisitos: {
      SO: "Windows 10",
      Procesador: "Intel Core i5",
      Memoria: "8 GB de RAM",
      Graficos: "Nvidia GeForce GTX 1060 / Radeon RX 580",
      Almacenamiento: "10 GB de espacio disponible"
    },
    images: ["/gameplay/Poppy Playtime1.jpg", "/gameplay/Poppy Playtime2.jpg", "/gameplay/Poppy Playtime3.jpg"],
    downloadLinks: [
      { url: "https://www.mediafire.com/file/d1mo6juf914rw93/PoppyPT-PiviGames.blog.rar/file", label: "Poppy Playtime - Mediafire" }
    ],
  },
  poppyplaytime2: {
    title: "Poppy Playtime Chapter 2",
    description: "Llega el Chapter 2 del fenómeno de terror de moda. Allá en 2021, MOB Games produjo, desarrolló y publicó un peculiar juego de terror llamado Poppy Playtime. Descrito como un juego de supervivencia y horror, nos pone en la piel de uno de los antiguos empleados de la empresa Playtime.",
    requisitos: {
      SO: "Windows 10",
      Procesador: "Intel Core i5",
      Memoria: "8 GB de RAM",
      Graficos: "Nvidia GeForce GTX 1050 / Radeon RX 580",
      Almacenamiento: "20 GB de espacio disponible"
    },
    images: ["/gameplay/Poppy Playtime2img1.jpg", "/gameplay/Poppy Playtime2img2.jpg", "/gameplay/Poppy Playtime2img3.jpg"],
    downloadLinks: [
      { url: "https://www.mediafire.com/file/3eutaomseaas65g/PP.Chapter+2+v08.05.2022.part1.rar/file", label: "Poppy Playtime Chapter 2 - Mediafire parte1" },
      { url: "https://www.mediafire.com/file/zgmkp6tnnd22a0a/PP.Chapter+2+v08.05.2022.part2.rar/file", label: "Poppy Playtime Chapter 2 - Mediafire parte2" },
      { url: "https://www.mediafire.com/file/k5td1anoinrgwlf/PP.Chapter+2+v08.05.2022.part3.rar/file", label: "Poppy Playtime Chapter 2 - Mediafire parte3" }
    ],
  },
  ark: {
    title: "Ark: Survival Evolved",
    description: "Ark: Survival Evolved es un videojuego de acción-aventura y supervivencia desarrollado por Studio Wildcard, Instinct Games, Efecto Studio y Virtual Basement. Lanzado oficialmente el 29 de agosto de 2017 para Windows, Xbox One, Nintendo Switch, PlayStation 4, IOS y Android.",
    requisitos: {
      SO: "Windows 7/8.1/10 (64-bit versions)",
      Procesador: "Intel Core i5-2400/AMD FX-8320 or better",
      Memoria: "8 GB de RAM",
      Graficos: "NVIDIA GTX 670 2GB/AMD Radeon HD 7870 2GB or better",
      DirectX: "Versión 10",
      Almacenamiento: "60 GB de espacio disponible"
    },
    images: ["/gameplay/ARK1.jpg", "/gameplay/ARK2.jpg", "/gameplay/ARK3.jpg"],
    downloadLinks: [
      { url: "", label: "No disponible" }
    ],
  },
  strandeddeep: {
    title: "Stranded Deep",
    description: "Stranded Deep es un vídeo juego de supervivencia desarrollado por el estudio australiano Beam Team Games para Microsoft Windows, macOS, PlayStation 4, Xbox One y Linux. El videojuego se lanzó en acceso anticipado el 23 de enero de 2015 y la versión completa se lanzó el 11 de agosto de 2022.",
    requisitos: {
      SO: "Windows 7 o superior (64 bits) Sistema operativoWindows 10 (64-bits)",
      Procesador: "CPU de 64 bits y de cuatro núcleos a 2.0 GHz o superior",
      Memoria: "8GB",
      Graficos: "2GB VRAM",
      Almacenamiento: "4GB",
      DirectX: "DirectX11.0"
    },
    images: ["/gameplay/Stranded Deep1.jpg", "/gameplay/Stranded Deep2.jpg", "/gameplay/Stranded Deep3.jpg"],
    downloadLinks: [
      { url: "https://www.mediafire.com/file/3q3db74oviufnpu/Stranded.Deep.v0.90.11.zip/file", label: "Stranded Deep - Mediafire" }
    ],
  },
  terraria: {
    title: "Terraria",
    description: "Terraria es un videojuego de acción, aventura y de sandbox producido de forma independiente por el estudio Re-Logic. Tiene características tales como la exploración, la artesanía, la construcción de estructuras y el combate.​Se lanzó el 16 de mayo de 2011.",
    requisitos: {
      SO: "Windows XP / Vista / 7",
      Procesador: "1.6 GHz",
      Memoria: "512 MB de RAM",
      Graficos: "Shader Model 1.1 con 128 MB de VRAM",
      Almacenamiento: "200 MB de espacio libre",
      DirectX: "9.0c o posterior"
    },
    images: ["/gameplay/Terraria1.jpg", "/gameplay/Terraria2.jpg", "/gameplay/Terraria3.jpg"],
    downloadLinks: [
      { url: "https://www.mediafire.com/file/p9mblunrpo9voi4/TerrariA+v1.4.3.6.rar/file", label: "Terraria - Mediafire" }
    ],
  },
  projectzomboid: {
    title: "Project Zomboid",
    description: "Traducción del inglés-Project Zomboid es un videojuego de terror de supervivencia isométrico de mundo abierto desarrollado por el desarrollador independiente británico y canadiense The Indie Stone.",
    requisitos: {
      SO: "Windows XP, Vista, 7",
      Procesador: "Intel 2.77GHz Dual Core",
      Memoria: "2Gb Ram"
    },
    images: ["/gameplay/Project Zomboid1.jpg", "/gameplay/Project Zomboid2.jpg", "/gameplay/Project Zomboid3.jpg"],
    downloadLinks: [
      { url: "https://www.mediafire.com/file/94g33dxytbl1vlx/Project.Zomboid.v41.68.zip/file", label: "Project Zomboid - Mediafire" }
    ],
  },
  greenhell: {
    title: "Green Hell",
    description: "Traducción del inglés-Green Hell es un videojuego de supervivencia desarrollado y publicado por Creepy Jar. El juego tiene lugar en la selva amazónica.",
    requisitos: {
      SO: "Windows 7/8/10 64-bit",
      Procesador: "3.2 GHz Dual Core Processor",
      Memoria: "4 GB de RAM",
      Gráficos: "GeForce GTX 660, Radeon RX 460 or equivalent with 2 GB of video RAM",
      DirectX: "Versión 11",
      Almacenamiento: "8 GB de espacio disponible"
    },
    images: ["/gameplay/Green Hell1.jpg", "/gameplay/Green Hell2.jpg", "/gameplay/Green Hell3.jpg"],
    downloadLinks: [
      { url: "https://www.mediafire.com/file/yhmtohee7c48edx/Green+Hell.rar/file", label: "Green Hell - Mediafire" }
    ],
  },
  minecraft: {
    title: "Minecraft",
    description: "Minecraft es un videojuego de construcción de tipo «mundo abierto» o sandbox creado originalmente por el sueco Markus Persson, ​ y posteriormente desarrollado por Mojang Studios",
    requisitos: {
      SO: "Windows: Windows 7 and up. macOS: Any 64-bit OS X using 10.9 Maverick or newer. Linux: Any modern 64-bit distributions from 2014 onwards",
      Procesador: "Intel Core i3-3210 3.2 GHz/ AMD A8-7600 APU 3.1 GHz o equivalente",
      Memoria: "4 GB"
    },
    images: ["/gameplay/Minecraftimg1.jpg", "/gameplay/Minecraftimg2.jpg", "/gameplay/Minecraftimg3.jpg"],
    downloadLinks: [
      { url: "https://launcherfenix.com.ar/wope/", label: "Minecraft - Launcher Fenix" }
    ],
  },
  residentevil4: {
    title: "Resident Evil 4",
    description: "Resident Evil 4, es un videojuego de acción-aventura y disparos en tercera persona de estilo terror y supervivencia desarrollado por Capcom Production Studio.",
    requisitos: {
      SO: "Windows® 8 / Windows® 10",
      Procesador: "Intel® CoreTM2 Duo 2,4 GHz o superior, AMD AthlonTM X2 2,8 GHz o superior",
      Memoria: "2 GB de RAM",
      Graficos: "NVIDIA® GeForce® 8800GTS o superior, ATI RadeonTM HD 4850 o superior",
      DirectX: "Versión 9.0c",
      Almacenamiento: "15 GB de espacio disponible"
    },
    images: ["/gameplay/Resident Evil 4img1.jpg", "/gameplay/Resident Evil 4img2.jpg", "/gameplay/Resident Evil 4img3.jpg"],
    downloadLinks: [
      { url: "https://drive.google.com/drive/folders/12OjVoafsV73slKSjmxztydTjfunIr93g", label: "Resident Evil 4 - Drive" }
    ],
  },
  internetcafesimulator1: {
    title: "Internet Cafe Simulator 1",
    description: "Internet Cafe Simulator es un juego de simulación de negocios de cibercafés. ¡Construye el mejor cibercafé del mundo! Reseñas recientes: Mayormente positivas (45) - El 75 % de las 45 reseñas de los usuarios en los últimos 30 días son positivas.",
    requisitos: {
      SO: "Windows 7",
      Procesador: "2 GHz Dual Core CPU",
      Memoria: "2 GB de RAM",
      Graficos: "Intel HD Graphics 4000 or better",
      Almacenamiento: "Intel HD Graphics 4000 or better"
    },
    images: ["/gameplay/Internet Cafe Simulator1.jpg", "/gameplay/Internet Cafe Simulator2.jpg", "/gameplay/Internet Cafe Simulator3.jpg"],
    downloadLinks: [
      { url: "https://drive.google.com/file/d/1aOgFH8-OBew4l6WrqZPEPS63L_4EBS3o/view", label: "Internet Cafe Simulator 1 - Drive" }
    ],
  },
  internetcafesimulator2: {
    title: "Internet Cafe Simulator 2",
    description: "Internet Cafe Simulator 2 es un juego de simulación empresarial de cibercafés extremadamente completo y detallado. Reseñas recientes: Mayormente positivas (140) - El 77 % de las 140 reseñas de los usuarios en los últimos 30 días son positivas.",
    requisitos: {
      SO: "Windows 7",
      Procesador: "2 GHz Dual Core CPU",
      Memoria: "4 GB de RAM",
      Graficos: "Intel HD Graphics 4000 or bette",
      Almacenamiento: "7 GB de espacio disponible"
    },
    images: ["/gameplay/Internet Cafe Simulator 2 img1.jpg", "/gameplay/Internet Cafe Simulator 2 img2.jpg", "/gameplay/Internet Cafe Simulator 2 img3.jpg"],
    downloadLinks: [
      { url: "https://www.mediafire.com/file/j6q5d9e6oe2lhdv/ICF_SIM_2.rar/file", label: "Internet Cafe Simulator 2 - Mediafire" }
    ],
  },
  streamerlifesimulator: {
    title: "Streamer Life Simulator",
    description: "Streamer Life Simulator es un juego de simulación de vida de streamer muy completo. Sea el streamer más popular del mundo. Reseñas recientes: Mayormente positivas (75) - El 74 % de las 75 reseñas de los usuarios en los últimos 30 días son positivas.",
    requisitos: {
      SO: "Windows 7",
      Procesador: "2 GHz Dual Core CPU",
      Memoria: "4 GB de RAM",
      Graficos: "Intel HD Graphics 4000 or bette",
      Almacenamiento: "5 GB de espacio disponible"
    },
    images: ["/gameplay/Streamer Life Simulator1.jpg", "/gameplay/Streamer Life Simulator2.jpg", "/gameplay/Streamer Life Simulator3.jpg"],
    downloadLinks: [
      { url: "https://www.mediafire.com/file/t2i2bxqppcf5mu7/SLSim-v1.2.5.rar/file", label: "Streamer Life Simulator - Mediafire" }
    ],
  },
  contra: {
    title: "Contra",
    description: "Contra es una serie de videojuegos creada por la compañía japonesa Konami en 1987, cuyos primeros títulos recibieron el nombre de Probotector en Europa. Son fundamentalmente Matamarcianos de tipo run and gun y están inspirados en películas como Rambo o Aliens.",
    requisitos: {
      "": "No disponible",
    },
    images: ["/gameplay/contra1.jpg", "/gameplay/contra2.jpg", "/gameplay/contra3.jpg"],
    downloadLinks: [
      { url: "http://www.mediafire.com/file/9eis5enkl7tk0gz/Contra_By_Piero_Random.rar/file", label: "Contra - Mediafire" }
    ],
  },
  mortalkombat3: {
    title: "Mortal Kombat 3",
    description: "Mortal Kombat 3 es el tercer videojuego y la cuarta entrega de la saga, fue lanzado el 10 de marzo de 1995 por Midway Games para Arcade, fue estrenado después del éxito de su antecesor, Mortal Kombat.",
    requisitos: {
      "": "No disponible",
    },
    images: ["/gameplay/Mortal Kombat 3 Ultimate1.jpg", "/gameplay/Mortal Kombat 3 Ultimate2.jpg", "/gameplay/Mortal Kombat 3 Ultimate3.jpg"],
    downloadLinks: [
      { url: "", label: "No disponible" }
    ],
  },
  pepsiman: {
    title: "Pepsiman",
    description: "Pepsiman, es un videojuego de acción desarrollado y distribuido por KID para la consola PlayStation de Sony.​ Fue lanzado exclusivamente en Japón el 4 de marzo del año 1999, y se basa en la mascota del superhéroe epónima de la popular gaseosa estadounidense Pepsi, Pepsiman.",
    requisitos: {
      SO: "Windows 7 o posterior",
      Procesador: "Pentium 2 1.4 GHz",
      Memoria: "100 MB de RAM",
      DirectX: "Versión 9.0",
      Almacenamiento: "128 MB de espacio disponible"
    },
    images: ["/gameplay/PepsiMan1.jpg", "/gameplay/PepsiMan2.jpg", "/gameplay/PepsiMan3.png"],
    downloadLinks: [
      { url: "https://mega.nz/file/qMAXhZ7L#5N-1wLekuiHEp7S0X4jVA2LBqBTkH5ydV7jrAeHruUA", label: "Pepsiman - Mega" }
    ],
  },
  crashbandicoot: {
    title: "Crash Bandicoot",
    description: "Crash Bandicoot es el nombre de una serie de videojuegos protagonizado por el personaje del mismo nombre. Fue creada en 1996 por Naughty Dog, quien desarrolló los primeros cuatro títulos, bajo la distribución de Universal Interactive Studios.",
    requisitos: {
      "": "No disponible",
    },
    images: ["/gameplay/Crash Bandicoot 1.jpg", "/gameplay/Crash Bandicoot 2.jpg", "/gameplay/Crash Bandicoot 3.jpg"],
    downloadLinks: [
      { url: "https://mega.nz/file/GJI1TIQT#q9TXM-8oXxWyA0uOP_5_eFjrxyR0qttrxnF2mW5dgG0", label: "Crash Bandicoot - Mega" }
    ],
  },
  terrordrome: {
    title: "Terrordrome",
    description: "Terrordrome: Rise of the Boogeymen es un juego fan- made del género de las peleas uno contra uno desarrollado y publicado por Huracan Studios que salió de manera exclusiva para PC. El videojuego cuenta con tres opciones de juego: el clásico modo historia, el modo versus uno contra uno y el modo entrenamiento.",
    requisitos: {
      "": "No disponible",
    },
    images: ["/gameplay/Terrordrome1.jpg", "/gameplay/Terrordrome2.jpg", "/gameplay/Terrordrome3.jpg"],
    downloadLinks: [
      { url: "https://www.mediafire.com/file/fodivfqpez0jo7h/TerrordromeV2_8.zip/file", label: "Terrordrome - Mediafire" }
    ],
  },
  plantsvszombies: {
    title: "Plants vs. Zombies",
    description: "Plantas contra Zombis ​ es un videojuego de estilo defensa de torres desarrollado y publicado el 5 de mayo de 2009 por PopCap Games para Microsoft Windows, BlackBerry, PlayStation 3, Xbox 360, Windows Phone 7, Android, IOS, PlayStation Vita, Nintendo DS, Nintendo DSi, Nintendo 3DS y Mac OS X.",
    requisitos: {
      SO: "Windows XP / Vista / 7",
      Procesador: "1.2 GHz",
      Memoria: "1 GB de RAM",
      Gráficos: "128 MB de memoria gráfica, color de 16 bits o 32 bits",
      DirectX: "8 o superior",
      Almacenamiento: "Más de 65 MB de espacio libre"
    },
    images: ["/gameplay/Plantas vs Zombies1.jpg", "/gameplay/Plantas vs Zombies2.jpg", "/gameplay/Plantas vs Zombies3.jpg"],
    downloadLinks: [
      { url: "https://www.mediafire.com/file/8ljigazy4kixrcx/Pla5ntsvsZo7mbiesGOTY-elamigos.rar/file", label: "Plants vs. Zombies - Mediafire" }
    ],
  },
  plantsvszombiesfusion: {
    title: "Plants vs. Zombies Fusion",
    description: "PVZ Fusion, también conocido como PVZ Hybrid, es una divertida modificación del clásico Plants vs Zombies que te permite fusionar tus plantas favoritas para crear versiones mucho más poderosas.",
    requisitos: {
      SO: "Windows XP / Vista / 7",
      Procesador: "1.2 GHz",
      Memoria: "1 GB de RAM",
      Gráficos: "128 MB de memoria gráfica, color de 16 bits o 32 bits",
      DirectX: "8 o superior",
      Almacenamiento: "Más de 65 MB de espacio libre"
    },
    images: ["/gameplay/Plantas vs Zombiesfusion1.jpg", "/gameplay/Plantas vs Zombiesfusion2.jpg", "/gameplay/Plantas vs Zombiesfusion3.jpg"],
    downloadLinks: [
      { url: "https://mega.nz/file/2IBh1CrB#7509It6ZybKe7umkM0Nnje1vsxo48AVPvawqnybSYHA", label: "Plants vs. Zombies Fusion - Mega" }
    ],
  },
  polybridge1: {
    title: "Poly Bridge 1",
    description: "Poly Bridge es un juego de lógica y simulación de construcción de puentes, desarrollado por el estudio independiente, con sede en Nueva Zelanda, Dry Cactus con música del compositor canadiense Adrian Talens, donde los jugadores construyen puentes para que vehículos los crucen.",
    requisitos: {
      SO: "Windows 7",
      Procesador: "1GHz",
      Memoria: "2 GB de RAM",
      Gráficos: "512Mb",
      DirectX: "Versión 9.0",
      Almacenamiento: "150 MB de espacio disponible"
    },
    images: ["/gameplay/Poly Bridge img1.jpg", "/gameplay/Poly Bridge img2.jpg", "/gameplay/Poly Bridge img3.jpg"],
    downloadLinks: [
      { url: "http://www.mediafire.com/file/lv9n6zizcuh6hoi/Poly_Bridge_v1.0.5.VeroxPiviGames.rar/file", label: "Poly Bridge 1 - Mediafire" }
    ],
  },
  polybridge2: {
    title: "Poly Bridge 2",
    description: "Poly Bridge 2 es un juego de lógica de simulación, secuela de Poly Bridge. El juego está desarrollado y publicado por Dry Cactus, con música compuesta por Adrian Talens. Está disponible en todo el mundo para Linux, macOS, Microsoft Windows, Android e iOS",
    requisitos: {
      SO: "Windows 10",
      Procesador: "1 GHz. Procesador2 GHz",
      Memoria: "4 GB. Memoria8 GB",
      Almacenamiento: "500 MB. Almacenamiento2 GB"
    },
    images: ["/gameplay/Poly Bridge 2 img1.jpg", "/gameplay/Poly Bridge 2 img2.jpg", "/gameplay/Poly Bridge 2 img3.jpg"],
    downloadLinks: [
      { url: "https://www.mediafire.com/file/p4lcbn3lpk936nl/Poly+Bridge+2.zip/file", label: "Poly Bridge 2 - Mediafire" }
    ],
  },
  gettingoverit: {
    title: "Getting Over It with Bennett Foddy",
    description: "Getting Over It with Bennett Foddy, comúnmente abreviado como Getting Over It, es un videojuego desarrollado por el creador de QWOP Bennett Foddy. El juego fue lanzado como parte del Humble Monthly de octubre de 2017, el 6 de octubre, cuando fue jugado por más de 2.7 millones de jugadores.",
    requisitos: {
      SO: "Windows Vista",
      Procesador: "2 GHz Dual Core CPU",
      Memoria: "2 GB de RAM",
      Gráficos: "Intel HD Graphics 4000 or better",
      DirectX: "Versión 11",
      Almacenamiento: "2 GB de espacio disponible"
    },
    images: ["/gameplay/Getting Over It with Bennett Foddy1.jpg", "/gameplay/Getting Over It with Bennett Foddy2.jpg", "/gameplay/Getting Over It with Bennett Foddy3.jpg"],
    downloadLinks: [
      { url: "https://www.mediafire.com/file/xks47y19qmcmqls/GETTING+OVER+IT++Juego+Tutorial+de++JoseGaming.rar/file", label: "Getting Over It with Bennett Foddy - Mediafire" }
    ],
  },
  passpartout: {
    title: "Passpartout",
    description: "Passpartout: The Starving Artist en Steam. Passpartout te pone en los zapatos de un artista francés que intenta moverse por la hermosamente confusa escena artística. Pinta y vende tus propias obras para sobrevivir a tu cara adicción al vino y a los baguetes.",
    requisitos: {
      SO: "Windows 7 or later",
      Procesador: "Intel Core i3 or equivalent",
      Memoria: "1 GB de RAM",
      Gráficos: "GeForce GTX 460 or Radeon HD 6850",
      DirectX: "Versión 9.0c",
      Almacenamiento: "2 GB de espacio disponible"
    },
    images: ["/gameplay/Passpartout1.jpg", "/gameplay/Passpartout2.jpg", "/gameplay/Passpartout3.jpg"],
    downloadLinks: [
      { url: "http://www.mediafire.com/file/e39639195dco945/PasstheSArtu_v1.5.11.rar/file", label: "Passpartout - Mediafire" }
    ],
  },
  fridaynightfunkin: {
    title: "Friday Night Funkin",
    description: "​Friday Night Funkin' es un videojuego de ritmo lanzado el 1 de noviembre de 2020, desarrollado por el programador canadiense Cameron Taylor también conocido como Ninjamuffin99. Fue lanzado en Newgrounds y en Itch.io.",
    requisitos: {
      SO: "Windows 10 64bit",
      Procesador: "Quad core (Intel(R) Core(TM) i5-2450M)",
      Memoria: "8.00 GB de RAM",
      Gráficos: "Intel(R) HD Graphics",
      Almacenamiento: "800 MB de espacio disponible"
    },
    images: ["/gameplay/Friday Night Funkin1.jpg", "/gameplay/Friday Night Funkin2.jpg", "/gameplay/Friday Night Funkin3.jpg"],
    downloadLinks: [
      { url: "https://www.mediafire.com/file/ngp1aftsjgerug0/Friday_Night_Funkin.rar/file", label: "Friday Night Funkin - Mediafire" }
    ],
  },
  ageofmythology: {
    title: "Age Of Mythology",
    description: "​Age of Mythology es un videojuego de estrategia en tiempo real para computadoras personales, desarrollado por Ensemble Studios y más tarde por Skybox Labs, y publicado por Microsoft Games en 2002.",
    requisitos: {
      SO: "Windows Vista, 7, 8.1+",
      Procesador: "1.6 Ghz",
      Memoria: "1 GB de RAM",
      Gráficos: "Direct X 10+ Capable GPU",
      DirectX: "Versión 10",
      Almacenamiento: "3 GB de espacio disponible",
      TarjetaSonido: "Direct X Compatible Sound Card"
    },
    images: ["/gameplay/Age of mythology1.jpg", "/gameplay/Age of mythology2.jpg", "/gameplay/Age of mythology3.jpg"],
    downloadLinks: [
      { url: "https://mega.nz/file/1tYT0bTS#rMX8f1qhPea2XfWt7GRw4-Jg8_WAHedCJtQXngrBx7Y", label: "Age Of Mythology - Mega" }
    ],
  },
  peopleplayground: {
    title: "People Playground",
    description: "People Playground es un juego un tanto experimental con imágenes cruentas y gráficas, aunque interesante al mismo tiempo. El personaje principal del juego es un muñeco de trapo o “ragdoll” cuyo destino decides tú exclusivamente.",
    requisitos: {
      SO: "Windows 7 SP2+",
      Procesador: "2 GHz",
      Memoria: "4 GB de RAM",
      Gráficos: "Graphics card with DX10 (shader model 4.0) capabilities",
      DirectX: "Versión 10",
      Almacenamiento: "350 MB de espacio disponible"
    },
    images: ["/gameplay/People Playground1.jpg", "/gameplay/People Playground2.jpg", "/gameplay/People Playground3.jpg"],
    downloadLinks: [
      { url: "http://www.mediafire.com/file/9qy6vgthcifbhte/People_playground_64_bits.zip/file", label: "People Playground - Mediafire" }
    ],
  },
  ultimatechickenhorse: {
    title: "Ultimate Chicken Horse",
    description: "Ultimate Chicken Horse es un videojuego multijugador y cooperativo de plataformas desarrollado y distribuido por Clever Endeavour Games y lanzado el 4 de marzo de 2016, para los sistemas operativos Microsoft Windows, Mac OS X y Linux.",
    requisitos: {
      SO: "Windows 7 or later",
      Procesador: "1.5GHZ +",
      Memoria: "2 GB de RAM",
      Gráficos: "512 MB VRAM Intel HD 4000 / GeForce 200 Series / Radeon HD 4000 Series",
      DirectX: "Versión 9.0c",
      Almacenamiento: "2 GB de espacio disponible"
    },
    images: ["/gameplay/Ultimate Chicken Horse1.jpg", "/gameplay/Ultimate Chicken Horse2.jpg", "/gameplay/Ultimate Chicken Horse3.jpg"],
    downloadLinks: [
      { url: "https://www.mediafire.com/file/b1q0zagyomao8qc/Ultimate+Chicken+Horse+v1.8.22.rar/file", label: "Ultimate Chicken Horse - Mediafire" }
    ],
  },
  teardown: {
    title: "Teardown",
    description: "Teardown es un sandbox, rompecabezas y juego de acción desarrollado y publicados por Tuxedo Labs. Los niveles del juego están hechos enteramente con vóxels destruibles. Cada misión presenta un conjunto de objetivos para ser completados en un minuto.",
    requisitos: {
      SO: "Windows 7",
      Procesador: "Quad Core CPU",
      Memoria: "4 GB de RAM",
      Gráficos: "NVIDIA GeForce GTX 1060 or similar. 3 Gb VRAM",
      Almacenamiento: "4 GB de espacio disponible"
    },
    images: ["/gameplay/teardownimg1.jpg", "/gameplay/teardownimg2.jpg", "/gameplay/teardownimg3.jpg"],
    downloadLinks: [
      { url: "https://www.mediafire.com/file/01tnh8mobcrau09/Teardown.rar/file", label: "Teardown - Mediafire" }
    ],
  },
  hollowknightsilksong: {
    title: "Hollow Knight: Silksong",
    description: "Hollow Knight: Silksong es un videojuego metroidvania desarrollado por el estudio independiente australiano Team Cherry. Es la secuela del videojuego de 2017 Hollow Knight.",
    requisitos: {
      SO: "Windows 10 versión 21H1 (o posterior), 64 bits.",
      Procesador: "Intel Core i3-3240 / AMD FX-4300.",
      Memoria: "4 GB de RAM",
      Gráficos: "NVIDIA GeForce GTX 560 Ti (1GB) / AMD Radeon HD 7750 (1GB).",
      DirectX: "Versión 10.",
      Almacenamiento: "8 GB de espacio disponible."
    },
    images: ["/gameplay/hollowknight1.jpg", "/gameplay/hollowknight2.jpg", "/gameplay/hollowknight3.jpg"],
    downloadLinks: [
      { url: "https://www.mediafire.com/file/6z3u4b56im9u079", label: "Hollow Knight: Silksong - Mediafire" }
    ],
  },
};

export default function GameDetails() {
  const { gameId } = useParams();
  const game = gameData[gameId];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showMenu, setShowMenu] = useState(false);
  const [resetInterval, setResetInterval] = useState(0);  // Nuevo estado para reiniciar el intervalo
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [gameId]);

  // Función para cambiar la imagen siguiente
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === game.images.length - 1 ? 0 : prevIndex + 1
    );
    setResetInterval(prev => prev + 1);  // Reiniciar el contador al cambiar de imagen
  };

  // Función para cambiar la imagen anterior
  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? game.images.length - 1 : prevIndex - 1
    );
    setResetInterval(prev => prev + 1);  // Reiniciar el contador al cambiar de imagen
  };

  // Desplazamiento automático cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 5000); // Cambia la imagen cada 5 segundos

    return () => clearInterval(interval); // Limpiar el intervalo cuando el componente se desmonte
  }, [game.images.length, resetInterval]); // Dependencia de `resetInterval` para reiniciar el intervalo

  if (!game) {
    return <div>Juego no encontrado.</div>;
  }

  return (
    <div className="game-container">
      <div className="game-content">
        {/* Contenedor de texto */}
        <div className="game-text-container">
          <h1>{game.title}</h1>
          <p>{game.description}</p>

          {/* Requisitos */}
          <div className="game-requirements">
            <h3>Requisitos</h3>
            <ul>
              {Object.entries(game.requisitos).map(([key, value]) => (
                <li key={key}>
                  <strong>{key}:</strong> {value}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contenedor de imágenes */}
        <div className="game-image-carousel">
          {game.images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`${game.title} ${index + 1}`}
              style={{
                transform: `translateX(-${currentImageIndex * 100}%)`,
              }}
            />
          ))}
          <button className="carousel-button carousel-button-prev" onClick={prevImage}>
            &#60;
          </button>
          <button className="carousel-button carousel-button-next" onClick={nextImage}>
            &#62;
          </button>
        </div>

        {/* Contenedor de link */}
      <div className="game-text-container">
        <div className="game-download-section">
          <button onClick={() => setShowMenu(!showMenu)}>
            Descargar
          </button>
          {showMenu && (
            <div className="game-download-links">
              {game.downloadLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}  // Usar link.url aquí
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.label}  {/* Usar link.label aquí */}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
      </div>
    </div>
  );
}
