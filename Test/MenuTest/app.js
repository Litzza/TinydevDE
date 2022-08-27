import GameEngine from "./GameEngine/GameEngine.js"
import EntityObject from "./GameEngine/EngineObject/EntityObject/EntityObject.class.js";
import Menu from "./GameEngine/EngineObject/Menu/Menu.class.js";
import ImageLoader from "./GameEngine/EngineObject/Loader/ImageLoader.class.js";
import Bar from "./GameEngine/EngineObject/Menu/Bar/Bar.class.js";
import Button from "./GameEngine/EngineObject/Menu/Button/Button.class.js";
import Scene from "./GameEngine/EngineObject/Scene/Scene.class.js";
import Position from "./GameEngine/EngineObject/Position/Position.class.js";


// const kasernen_scene = new Scene();
// const scene = new Scene();
// GameEngine.scene = scene;
const scene = GameEngine.scene;

const kaserne = new Menu();
kaserne.backgroundColor = "orange";
kaserne.setSize(50, 50);
// kaserne.setName("test");
// kaserne.showName = true;
kaserne.position.set(100, 100);
kaserne.staticPosition = false;
scene.appendChild(kaserne);

kaserne.setName("Kaserne");

const kasernenMenu = new Menu(kaserne, "name");
kasernenMenu.staticPosition = false;
kasernenMenu.setSize(1200, 300);
kasernenMenu.setName("Kasernen Menu");
// kasernenMenu.showName = true;
kasernenMenu.backgroundColor = "black";
kasernenMenu.position.set(0, 0);
kasernenMenu.visible = false;
scene.appendChild(kasernenMenu);

kaserne.onclick = () => {
    // GameEngine.scene = kasernen_scene;
    window.setTimeout(() => {
        kasernenMenu.visible = true;
    }, 100);
}

const kasernenMenuExit = new Menu(kasernenMenu, "name");
kasernenMenuExit.setSize(20, 20);
kasernenMenuExit.backgroundColor = "red";
kasernenMenuExit.staticPosition = true;
kasernenMenuExit.position.set(kasernenMenu.width - 15, 15);
kasernenMenuExit.setName("x");
kasernenMenuExit.showName = true;
// kasernenMenuExit.showValue = true;
kasernenMenuExit.onclick = () => {
    kasernenMenu.visible = false;
};
kasernenMenu.appendChild(kasernenMenuExit);

scene.addMousePointerEvent(() => {

});

GameEngine.resume();