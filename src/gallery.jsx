import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./gallery.css";

export default function Gallery() {
  const [searchTerm, setSearchTerm] = useState("");
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    // Restaurar la posición del scroll cuando el componente se monte
    const savedScrollPosition = localStorage.getItem("scrollPosition");
    if (savedScrollPosition) {
      window.scrollTo(0, parseInt(savedScrollPosition, 10));
    }
  }, []);

  const handleCardClick = () => {
    // Guardar la posición del scroll antes de navegar
    localStorage.setItem("scrollPosition", window.scrollY);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const cards = [
    { id: "godofwar4", title: "God of War 4", imageUrl: "/games/godofwar4.webp" },
    { id: "portal1", title: "Portal 1", imageUrl: "/games/portal1.webp" },
    { id: "portal2", title: "Portal 2", imageUrl: "/games/portal2.webp" },
    { id: "farcry1", title: "Far Cry 1", imageUrl: "/games/farcry1.webp" },
    { id: "farcry2", title: "Far Cry 2", imageUrl: "/games/farcry2.webp" },
    { id: "farcry3", title: "Far Cry 3", imageUrl: "/games/farcry3.webp" },
    { id: "farcryprimal", title: "Far Cry Primal", imageUrl: "/games/farcryprimal.webp" },
    { id: "kenshi", title: "Kenshi", imageUrl: "/games/kenshi.webp" },
    { id: "fallout1", title: "Fallout 1", imageUrl: "/games/fallout1.webp" },
    { id: "fallout3", title: "Fallout 3", imageUrl: "/games/fallout3.webp" },
    { id: "maxpayne1", title: "Max Payne 1", imageUrl: "/games/maxpayne1.webp" },
    { id: "maxpayne2", title: "Max Payne 2", imageUrl: "/games/maxpayne2.webp" },
    { id: "callofduty1", title: "Call of Duty 1", imageUrl: "/games/callofduty1.webp" },
    { id: "callofduty2", title: "Call of Duty 2", imageUrl: "/games/callofduty2.webp" },
    { id: "mafia1", title: "Mafia 1", imageUrl: "/games/mafia1.webp" },
    { id: "mafia2", title: "Mafia 2", imageUrl: "/games/mafia2.webp" },
    { id: "slimerancher1", title: "Slime Rancher 1", imageUrl: "/games/slimerancher1.webp" },
    { id: "slimerancher2", title: "Slime Rancher 2", imageUrl: "/games/slimerancher2.webp" },
    { id: "gtasanandreas", title: "GTA San Andreas", imageUrl: "/games/gtasanandreas.webp" },
    { id: "gtavicecity", title: "GTA Vice City", imageUrl: "/games/gtavicecity.webp" },
    { id: "manhunt", title: "Manhunt", imageUrl: "/games/manhunt1.webp" },
    { id: "ultrakill", title: "Ultrakill", imageUrl: "/games/ultrakill.webp" },
    { id: "counterstrike", title: "Counter Strike", imageUrl: "/games/conterstrike1.6.webp" },
    { id: "halflife", title: "Half Life", imageUrl: "/games/halflife.webp" },
    { id: "area51", title: "Area 51", imageUrl: "/games/area51.webp" },
    { id: "undertale", title: "Undertale", imageUrl: "/games/undertale.webp" },
    { id: "xmenoriginswolverine", title: "X-Men Origins Wolverine", imageUrl: "/games/xmen.webp" },
    { id: "clustertruck", title: "Clustertruck", imageUrl: "/games/clustertruck.webp" },
    { id: "cuphead", title: "Cuphead", imageUrl: "/games/cuphead.webp" },
    { id: "secretneighbor", title: "Secret Neighbor", imageUrl: "/games/secretneighbor.webp" },
    { id: "helloneighbor1", title: "Hello Neighbor 1", imageUrl: "/games/helloneighnor1.webp" },
    { id: "helloneighbor2", title: "Hello Neighbor 2", imageUrl: "/games/helloneighnor2.webp" },
    { id: "fnaf1", title: "Five Nights at Freddy's 1", imageUrl: "/games/fnaf1.webp" },
    { id: "fnaf4", title: "Five Nights at Freddy's 4", imageUrl: "/games/fnaf4.webp" },
    { id: "fnaf5", title: "Five Nights at Freddy's 5", imageUrl: "/games/fnaf5.webp" },
    { id: "fnafucn", title: "FNAF Ultimate Custom Night", imageUrl: "/games/fnafucn.webp" },
    { id: "fnafsecuritybreach", title: "FNAF Security Breach", imageUrl: "/games/fnafseguritybreach.webp" },
    { id: "phasmophobia", title: "Phasmophobia", imageUrl: "/games/phasmophobia.webp" },
    { id: "scp", title: "SCP", imageUrl: "/games/scp.webp" },
    { id: "poppyplaytime", title: "Poppy Playtime", imageUrl: "/games/poppyplaytime.webp" },
    { id: "poppyplaytime2", title: "Poppy Playtime 2", imageUrl: "/games/poppyplaytime2.webp" },
    { id: "ark", title: "ARK", imageUrl: "/games/ark.webp" },
    { id: "strandeddeep", title: "Stranded Deep", imageUrl: "/games/strandeddeep.webp" },
    { id: "terraria", title: "Terraria", imageUrl: "/games/terraria.webp" },
    { id: "projectzomboid", title: "Project Zomboid", imageUrl: "/games/projectzomboid.webp" },
    { id: "greenhell", title: "Green Hell", imageUrl: "/games/greenhell.webp" },
    { id: "minecraft", title: "Minecraft", imageUrl: "/games/minecraft.webp" },
    { id: "residentevil4", title: "Resident Evil 4", imageUrl: "/games/residentevil4.webp" },
    { id: "internetcafesimulator1", title: "Internet Cafe Simulator 1", imageUrl: "/games/internetcafesimulator.webp" },
    { id: "internetcafesimulator2", title: "Internet Cafe Simulator 2", imageUrl: "/games/internetcafesimulator2.webp" },
    { id: "streamerlifesimulator", title: "Streamer Life Simulator", imageUrl: "/games/streamerlifesimulator.webp" },
    { id: "contra", title: "Contra", imageUrl: "/games/contra.webp" },
    { id: "mortalkombat3", title: "Mortal Kombat 3", imageUrl: "/games/mortalcombat3.webp" },
    { id: "pepsiman", title: "Pepsiman", imageUrl: "/games/pepsiman.webp" },
    { id: "crashbandicoot", title: "Crash Bandicoot", imageUrl: "/games/crashbandicoot.webp" },
    { id: "terrordrome", title: "Terrordrome", imageUrl: "/games/terrordrome.webp" },
    { id: "plantsvszombies", title: "Plants vs Zombies", imageUrl: "/games/plantasvszombies.webp" },
    { id: "plantsvszombiesfusion", title: "Plants vs Zombies Fusion", imageUrl: "/games/plantasvszombiesfusion.webp" },
    { id: "polybridge1", title: "Poly Bridge 1", imageUrl: "/games/polybridge.webp" },
    { id: "polybridge2", title: "Poly Bridge 2", imageUrl: "/games/polybridge2.webp" },
    { id: "gettingoverit", title: "Getting Over It", imageUrl: "/games/getting.webp" },
    { id: "passpartout", title: "Passpartout", imageUrl: "/games/passpartout.webp" },
    { id: "fridaynightfunkin", title: "Friday Night Funkin'", imageUrl: "/games/fnf.webp" },
    { id: "ageofmythology", title: "Age of Mythology", imageUrl: "/games/ageofmythology.webp" },
    { id: "peopleplayground", title: "People Playground", imageUrl: "/games/peopleplayground.webp" },
    { id: "ultimatechickenhorse", title: "Ultimate Chicken Horse", imageUrl: "/games/ultimatechickenhorse.webp" },
    { id: "teardown", title: "Teardown", imageUrl: "/games/teardown.webp" },
    { id: "hollowknightsilksong", title: "Hollow Knight: Silksong", imageUrl: "/games/hollowknightsilksong.webp" },
  ];

  const filteredCards = cards.filter((card) =>
    card.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div id="juegos" className="mt-24 container-gallery">
      <div className="search-container">
        <input
          type="text"
          placeholder="Buscar juegos..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="search-input"
        />
      </div>
      <div className="gallery">
        {filteredCards.map((card) => (
          <Link to={`/juego/${card.id}`} key={card.id} className="card-link" onClick={handleCardClick}>
            <div className="card">
              <img src={card.imageUrl} alt={card.title} loading="lazy" className="card-image" />
              <div className="card-content">
                <h3 className="card-title">{card.title}</h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}