import GameEngine from "./GameEngine/GameEngine.js"
import EntityObject from "./GameEngine/EngineObject/EntityObject/EntityObject.class.js";
import Menu from "./GameEngine/EngineObject/Menu/Menu.class.js";
window.addEventListener("load", () => {

    const game = new GameEngine();

    const player0 = new EntityObject();
    player0.setImage("./sources/Player/player.png");
    // player0.scale = 0.5; // das Bild war etwas zu groß^^
    player0.position.set(200, 200);
    player0.setName("Player");
    player0.addKeyMovementController(); // "WASD"-Movement aktivieren...
    // player0.removeController(); // "WASD"-Movement deaktivieren...
    game.scene.appendChild(player0);

    const player1 = new EntityObject();
    player1.setImage("./sources/Player/ball.png");
    // player1.scale = 0.5;
    player1.position.set(300, 200);
    player1.setName("Ball");
    game.scene.appendChild(player1);

    // GUI:
    const menu0 = new Menu(Menu.TYPE.H_PROGRESS, player0, "hp", "maxHp");
    menu0.position.set(100, 10);
    game.scene.appendChild(menu0);
    game.scene.appendChild(menu0);

    const menu1 = new Menu(Menu.TYPE.H_PROGRESS, player0.position, "stamina", "maxStamina");
    menu1.position.set(100, 40);
    game.scene.appendChild(menu1);
    const menu2 = new Menu(Menu.TYPE.SIMPLE, player0.keyConfig, "MOVE_UP");
    menu2.position.set(100, 90);
    game.scene.appendChild(menu2);
    const menu3 = new Menu(Menu.TYPE.SIMPLE, player0.keyConfig, "MOVE_LEFT");
    menu3.position.set(100, 120);
    game.scene.appendChild(menu3);
    const menu4 = new Menu(Menu.TYPE.SIMPLE, player0.keyConfig, "MOVE_DOWN");
    menu4.position.set(100, 150);
    game.scene.appendChild(menu4);
    const menu5 = new Menu(Menu.TYPE.SIMPLE, player0.keyConfig, "MOVE_RIGHT");
    menu5.position.set(100, 180);
    game.scene.appendChild(menu5);
    const menu6 = new Menu(Menu.TYPE.SIMPLE, player0.position, "x");
    menu6.position.set(50, 210);
    game.scene.appendChild(menu6);
    const menu7 = new Menu(Menu.TYPE.SIMPLE, player0.position, "z");
    menu7.position.set(100, 210);
    game.scene.appendChild(menu7);

    // game.pause();
    // game.resume();

});
