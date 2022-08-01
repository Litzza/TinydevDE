import GameEngine from "./GameEngine/app.js"
import EntityObject from "./GameEngine/EntityObject/EntityObject.class.js";
import Player from "./GameEngine/EntityObject/Player/Player.class.js";

window.addEventListener("load", () => {
    const game = new GameEngine();

    const player0 = new Player();
    player0.setImage("./sources/Player/player.png");
    player0.scale = 0.5;
    player0.position.set(100, 100);
    player0.setName("TigA");

    const player1 = new EntityObject();
    player1.setImage("./sources/Player/player.png");
    player1.scale = 0.5;
    player1.position.set(300, 100);
    player1.setName("Maran23");

    game.scene.appendChild(player0);
    game.scene.appendChild(player1);
});


