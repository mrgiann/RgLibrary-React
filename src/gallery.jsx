import React from "react";
import "./gallery.css";

export default function Gallery() {
const cards = [
    { title: "God of War 4", imageUrl: "/games/godofwar4.webp" },
    { title: "Portal 1", imageUrl: "/games/portal1.webp" },
    { title: "Portal 2", imageUrl: "/games/portal2.webp" },
    { title: "Far Cry 1", imageUrl: "/games/farcry1.webp" },
    { title: "Far Cry 2", imageUrl: "/games/farcry2.webp" },
    { title: "Far Cry 3", imageUrl: "/games/farcry3.webp" },
    { title: "Far Cry Primal", imageUrl: "/games/farcryprimal.webp" },
    { title: "Kenshi", imageUrl: "/games/kenshi.webp" },
    { title: "Fallout 1", imageUrl: "/games/fallout1.webp" },
    { title: "Fallout 3", imageUrl: "/games/fallout3.webp" },
    { title: "Max Payne 1", imageUrl: "/games/maxpayne1.webp" },
    { title: "Max Payne 2", imageUrl: "/games/maxpayne2.webp" },
    { title: "Call of Duty 1", imageUrl: "/games/callofduty1.webp" },
    { title: "Call of Duty 2", imageUrl: "/games/callofduty2.webp" },
    { title: "Mafia 1", imageUrl: "/games/mafia1.webp" },
    { title: "Mafia 2", imageUrl: "/games/mafia2.webp" },
    { title: "Slime Rancher 1", imageUrl: "/games/slimerancher1.webp" },
    { title: "Slime Rancher 2", imageUrl: "/games/slimerancher2.webp" },
    { title: "GTA San Andreas", imageUrl: "/games/gtasanandreas.webp" },
    { title: "GTA Vice City", imageUrl: "/games/gtavicecity.webp" },
    { title: "Manhunt", imageUrl: "/games/manhunt1.webp" },
    { title: "Ultrakill", imageUrl: "/games/ultrakill.webp" },
    { title: "Counter Strike", imageUrl: "/games/conterstrike1.6.webp" },
    { title: "Half Life", imageUrl: "/games/halflife.webp" },
    { title: "Area 51", imageUrl: "/games/area51.webp" },
    { title: "Undertale", imageUrl: "/games/undertale.webp" },
    { title: "X-Men Origins Wolverine", imageUrl: "/games/xmen.webp" },
    { title: "Clustertruck", imageUrl: "/games/clustertruck.webp" },
    { title: "Cuphead", imageUrl: "/games/cuphead.webp" },
    { title: "Secret Neighbor", imageUrl: "/games/secretneighbor.webp" },
    { title: "Hello Neighbor 1", imageUrl: "/games/helloneighnor1.webp" },
    { title: "Hello Neighbor 2", imageUrl: "/games/helloneighnor2.webp" },
    { title: "Five Nights at Freddy's 1", imageUrl: "/games/fnaf1.webp" },
    { title: "Five Nights at Freddy's 4", imageUrl: "/games/fnaf4.webp" },
    { title: "Five Nights at Freddy's 5", imageUrl: "/games/fnaf5.webp" },
    { title: "FNAF Ultimate Custom Night", imageUrl: "/games/fnafucn.webp" },
    { title: "FNAF Security Breach", imageUrl: "/games/fnafseguritybreach.webp" },
    { title: "Phasmophobia", imageUrl: "/games/phasmophobia.webp" },
    { title: "SCP", imageUrl: "/games/scp.webp" },
    { title: "Poppy Playtime", imageUrl: "/games/poppyplaytime.webp" },
    { title: "Poppy Playtime 2", imageUrl: "/games/poppyplaytime2.webp" },
    { title: "ARK", imageUrl: "/games/ark.webp" },
    { title: "Stranded Deep", imageUrl: "/games/strandeddeep.webp" },
    { title: "Terraria", imageUrl: "/games/terraria.webp" },
    { title: "Project Zomboid", imageUrl: "/games/projectzomboid.webp" },
    { title: "Green Hell", imageUrl: "/games/greenhell.webp" },
    { title: "Minecraft", imageUrl: "/games/minecraft.webp" },
    { title: "Resident Evil 4", imageUrl: "/games/residentevil4.webp" },
    { title: "Internet Cafe Simulator 1", imageUrl: "/games/internetcafesimulator.webp" },
    { title: "Internet Cafe Simulator 2", imageUrl: "/games/internetcafesimulator2.webp" },
    { title: "Streamer Life Simulator", imageUrl: "/games/streamerlifesimulator.webp" },
    { title: "Contra", imageUrl: "/games/contra.webp" },
    { title: "Mortal Kombat 3", imageUrl: "/games/mortalcombat3.webp" },
    { title: "Pepsiman", imageUrl: "/games/pepsiman.webp" },
    { title: "Crash Bandicoot", imageUrl: "/games/crashbandicoot.webp" },
    { title: "Terrordrome", imageUrl: "/games/terrordrome.webp" },
    { title: "Plants vs Zombies", imageUrl: "/games/plantasvszombies.webp" },
    { title: "Poly Bridge 1", imageUrl: "/games/polybridge.webp" },
    { title: "Poly Bridge 2", imageUrl: "/games/polybridge2.webp" },
    { title: "Getting Over It", imageUrl: "/games/getting.webp" },
    { title: "Passpartout", imageUrl: "/games/passpartout.webp" },
    { title: "Friday Night Funkin'", imageUrl: "/games/fnf.webp" },
    { title: "Age of Mythology", imageUrl: "/games/ageofmythology.webp" },
    { title: "People Playground", imageUrl: "/games/peopleplayground.webp" },
    { title: "Ultimate Chicken Horse", imageUrl: "/games/ultimatechickenhorse.webp" },
    { title: "Teardown", imageUrl: "/games/teardown.webp" }
];
    
      

  return (
    <div id="juegos" className="container-gallery">
      <div className="gallery">
        {cards.map((card, index) => (
          <div key={index} className="card">
            <img src={card.imageUrl} alt={card.title} className="card-image" />
            <div className="card-content">
              <h3 className="card-title">{card.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
