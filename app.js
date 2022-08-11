import GameEngine from "./GameEngine/GameEngine.js"
import EntityObject from "./GameEngine/EngineObject/EntityObject/EntityObject.class.js";
import Menu from "./GameEngine/EngineObject/Menu/Menu.class.js";
import ImageLoader from "./GameEngine/EngineObject/Loader/ImageLoader.class.js";
import Bar from "./GameEngine/EngineObject/Menu/Bar/Bar.class.js";
import Button from "./GameEngine/EngineObject/Menu/Button/Button.class.js";


const scene = new GameEngine();
// scene.addMousePointerController(); // Target Selector
// scene.removeMousePointerController(); // Target Selector

const player0 = new EntityObject();
player0.setImage("./sources/Player/player.png");
player0.scale = 0.5; // das Bild war etwas zu groß^^
player0.position.set(200, 200);
player0.setName("Player");
player0.showHitbox = true;
player0.position.needStamina = true;
// player0.addKeyUpEvent(() => {

// });
// player0.addKeyDownEvent(() => {
// });
// player0.removeKeyMovementController(); // "WASD"-Movement deaktivieren...

player0.addMousePointerEvent((event, targetObject) => {

    if(targetObject == player0){
        return false;
    }

    var audio = new Audio("data:audio/wav;base64,UklGRhwMAABXQVZFZm10IBAAAAABAAEAgD4AAIA+AAABAAgAZGF0Ya4LAACAgICAgICAgICAgICAgICAgICAgICAgICAf3hxeH+AfXZ1eHx6dnR5fYGFgoOKi42aloubq6GOjI2Op7ythXJ0eYF5aV1AOFFib32HmZSHhpCalIiYi4SRkZaLfnhxaWptb21qaWBea2BRYmZTVmFgWFNXVVVhaGdbYGhZbXh1gXZ1goeIlot1k6yxtKaOkaWhq7KonKCZoaCjoKWuqqmurK6ztrO7tbTAvru/vb68vbW6vLGqsLOfm5yal5KKhoyBeHt2dXBnbmljVlJWUEBBPDw9Mi4zKRwhIBYaGRQcHBURGB0XFxwhGxocJSstMjg6PTc6PUxVV1lWV2JqaXN0coCHhIyPjpOenqWppK6xu72yxMu9us7Pw83Wy9nY29ve6OPr6uvs6ezu6ejk6erm3uPj3dbT1sjBzdDFuMHAt7m1r7W6qaCupJOTkpWPgHqAd3JrbGlnY1peX1hTUk9PTFRKR0RFQkRBRUVEQkdBPjs9Pzo6NT04Njs+PTxAPzo/Ojk6PEA5PUJAQD04PkRCREZLUk1KT1BRUVdXU1VRV1tZV1xgXltcXF9hXl9eY2VmZmlna3J0b3F3eHyBfX+JgIWJiouTlZCTmpybnqSgnqyrqrO3srK2uL2/u7jAwMLFxsfEv8XLzcrIy83JzcrP0s3M0dTP0drY1dPR1dzc19za19XX2dnU1NjU0dXPzdHQy8rMysfGxMLBvLu3ta+sraeioJ2YlI+MioeFfX55cnJsaWVjXVlbVE5RTktHRUVAPDw3NC8uLyknKSIiJiUdHiEeGx4eHRwZHB8cHiAfHh8eHSEhISMoJyMnKisrLCszNy8yOTg9QEJFRUVITVFOTlJVWltaXmNfX2ZqZ21xb3R3eHqAhoeJkZKTlZmhpJ6kqKeur6yxtLW1trW4t6+us7axrbK2tLa6ury7u7u9u7vCwb+/vr7Ev7y9v8G8vby6vru4uLq+tri8ubi5t7W4uLW5uLKxs7G0tLGwt7Wvs7avr7O0tLW4trS4uLO1trW1trm1tLm0r7Kyr66wramsqaKlp52bmpeWl5KQkImEhIB8fXh3eHJrbW5mYGNcWFhUUE1LRENDQUI9ODcxLy8vMCsqLCgoKCgpKScoKCYoKygpKyssLi0sLi0uMDIwMTIuLzQ0Njg4Njc8ODlBQ0A/RUdGSU5RUVFUV1pdXWFjZGdpbG1vcXJ2eXh6fICAgIWIio2OkJGSlJWanJqbnZ2cn6Kkp6enq62srbCysrO1uLy4uL+/vL7CwMHAvb/Cvbq9vLm5uba2t7Sysq+urqyqqaalpqShoJ+enZuamZqXlZWTkpGSkpCNjpCMioqLioiHhoeGhYSGg4GDhoKDg4GBg4GBgoGBgoOChISChISChIWDg4WEgoSEgYODgYGCgYGAgICAgX99f398fX18e3p6e3t7enp7fHx4e3x6e3x7fHx9fX59fn1+fX19fH19fnx9fn19fX18fHx7fHx6fH18fXx8fHx7fH1+fXx+f319fn19fn1+gH9+f4B/fn+AgICAgH+AgICAgIGAgICAgH9+f4B+f35+fn58e3t8e3p5eXh4d3Z1dHRzcXBvb21sbmxqaWhlZmVjYmFfX2BfXV1cXFxaWVlaWVlYV1hYV1hYWVhZWFlaWllbXFpbXV5fX15fYWJhYmNiYWJhYWJjZGVmZ2hqbG1ub3Fxc3V3dnd6e3t8e3x+f3+AgICAgoGBgoKDhISFh4aHiYqKi4uMjYyOj4+QkZKUlZWXmJmbm52enqCioqSlpqeoqaqrrK2ur7CxsrGys7O0tbW2tba3t7i3uLe4t7a3t7i3tre2tba1tLSzsrKysbCvrq2sq6qop6alo6OioJ+dnJqZmJeWlJKSkI+OjoyLioiIh4WEg4GBgH9+fXt6eXh3d3V0c3JxcG9ubWxsamppaWhnZmVlZGRjYmNiYWBhYGBfYF9fXl5fXl1dXVxdXF1dXF1cXF1cXF1dXV5dXV5fXl9eX19gYGFgYWJhYmFiY2NiY2RjZGNkZWRlZGVmZmVmZmVmZ2dmZ2hnaGhnaGloZ2hpaWhpamlqaWpqa2pra2xtbGxtbm1ubm5vcG9wcXBxcnFycnN0c3N0dXV2d3d4eHh5ent6e3x9fn5/f4CAgIGCg4SEhYaGh4iIiYqLi4uMjY2Oj5CQkZGSk5OUlJWWlpeYl5iZmZqbm5ybnJ2cnZ6en56fn6ChoKChoqGio6KjpKOko6SjpKWkpaSkpKSlpKWkpaSlpKSlpKOkpKOko6KioaKhoaCfoJ+enp2dnJybmpmZmJeXlpWUk5STkZGQj4+OjYyLioqJh4eGhYSEgoKBgIB/fn59fHt7enl5eHd3dnZ1dHRzc3JycXBxcG9vbm5tbWxrbGxraWppaWhpaGdnZ2dmZ2ZlZmVmZWRlZGVkY2RjZGNkZGRkZGRkZGRkZGRjZGRkY2RjZGNkZWRlZGVmZWZmZ2ZnZ2doaWhpaWpra2xsbW5tbm9ub29wcXFycnNzdHV1dXZ2d3d4eXl6enp7fHx9fX5+f4CAgIGAgYGCgoOEhISFhoWGhoeIh4iJiImKiYqLiouLjI2MjI2OjY6Pj46PkI+QkZCRkJGQkZGSkZKRkpGSkZGRkZKRkpKRkpGSkZKRkpGSkZKRkpGSkZCRkZCRkI+Qj5CPkI+Pjo+OjY6Njo2MjYyLjIuMi4qLioqJiomJiImIh4iHh4aHhoaFhoWFhIWEg4SDg4KDgoKBgoGAgYCBgICAgICAf4CAf39+f35/fn1+fX59fHx9fH18e3x7fHt6e3p7ent6e3p5enl6enl6eXp5eXl4eXh5eHl4eXh5eHl4eXh5eHh3eHh4d3h4d3h3d3h4d3l4eHd4d3h3eHd4d3h3eHh4eXh5eHl4eHl4eXh5enl6eXp5enl6eXp5ent6ent6e3x7fHx9fH18fX19fn1+fX5/fn9+f4B/gH+Af4CAgICAgIGAgYCBgoGCgYKCgoKDgoOEg4OEg4SFhIWEhYSFhoWGhYaHhoeHhoeGh4iHiIiHiImIiImKiYqJiYqJiouKi4qLiouKi4qLiouKi4qLiouKi4qLi4qLiouKi4qLiomJiomIiYiJiImIh4iIh4iHhoeGhYWGhYaFhIWEg4OEg4KDgoOCgYKBgIGAgICAgH+Af39+f359fn18fX19fHx8e3t6e3p7enl6eXp5enl6enl5eXh5eHh5eHl4eXh5eHl4eHd5eHd3eHl4d3h3eHd4d3h3eHh4d3h4d3h3d3h5eHl4eXh5eHl5eXp5enl6eXp7ent6e3p7e3t7fHt8e3x8fHx9fH1+fX59fn9+f35/gH+AgICAgICAgYGAgYKBgoGCgoKDgoOEg4SEhIWFhIWFhoWGhYaGhoaHhoeGh4aHhoeIh4iHiIeHiIeIh4iHiIeIiIiHiIeIh4iHiIiHiIeIh4iHiIeIh4eIh4eIh4aHh4aHhoeGh4aHhoWGhYaFhoWFhIWEhYSFhIWEhISDhIOEg4OCg4OCg4KDgYKCgYKCgYCBgIGAgYCBgICAgICAgICAf4B/f4B/gH+Af35/fn9+f35/fn1+fn19fn1+fX59fn19fX19fH18fXx9fH18fXx9fH18fXx8fHt8e3x7fHt8e3x7fHt8e3x7fHt8e3x7fHt8e3x7fHt8e3x8e3x7fHt8e3x7fHx8fXx9fH18fX5+fX59fn9+f35+f35/gH+Af4B/gICAgICAgICAgICAgYCBgIGAgIGAgYGBgoGCgYKBgoGCgYKBgoGCgoKDgoOCg4KDgoOCg4KDgoOCg4KDgoOCg4KDgoOCg4KDgoOCg4KDgoOCg4KDgoOCg4KDgoOCg4KDgoOCg4KCgoGCgYKBgoGCgYKBgoGCgYKBgoGCgYKBgoGCgYKBgoGCgYKBgoGCgYKBgoGBgYCBgIGAgYCBgIGAgYCBgIGAgYCBgIGAgYCBgIGAgYCAgICBgIGAgYCBgIGAgYCBgIGAgYCBgExJU1RCAAAASU5GT0lDUkQMAAAAMjAwOC0wOS0yMQAASUVORwMAAAAgAAABSVNGVBYAAABTb255IFNvdW5kIEZvcmdlIDguMAAA");
    audio.play();

    window.setTimeout(() => {
        audio.pause();
        audio.currentTime = 0;
        audio.src = audio.src;
    }, 100);
}); // Target Selector

// player0.removeMousePointerController(); // Target Selector
scene.appendChild(player0);

const player1 = new EntityObject();
player1.setImage("./sources/Player/ball.png");
player1.scale = 0.5;
player1.position.set(0, 0);
player1.setName("Ball");
player1.showHitbox = true;
scene.appendChild(player1);

// scene.addKeyMovementController(); // "WASD"-Movement aktivieren... (speziell für 'interaktive' objekte)
player0.addKeyMovementController(); // "WASD"-Movement aktivieren... (speziell für 'interaktive' objekte)
// player1.addKeyMovementController(); // "WASD"-Movement aktivieren... (speziell für 'interaktive' objekte)

const loader = new ImageLoader(() => {
    addGuiElements();
});

const img = loader.load("./sources/Player/player.png");
const img2 = loader.load("./sources/Player/ball.png");


window.addEventListener("load", () => {

    GameEngine.resume();

});



function addGuiElements() {
    // GUI:
    const dynamicStatsOffset = 20;

    const hpDynamic = new Bar(player0, "hp", "maxHp");
    hpDynamic.staticPosition = false;
    hpDynamic.position.set(0, -player0.height/2 - dynamicStatsOffset - 30);
    hpDynamic.setSize(100, 5);
    hpDynamic.valueColor = "green";
    player0.appendChild(hpDynamic);
    
    const manaDynamic = new Bar(player0, "hp", "maxHp");
    manaDynamic.staticPosition = false;
    manaDynamic.position.set(0, -player0.height/2 - dynamicStatsOffset - 20);
    manaDynamic.setSize(100, 5);
    manaDynamic.valueColor = "cyan";
    player0.appendChild(manaDynamic);
    
    const staminaDynamic = new Bar(player0.position, "stamina", "maxStamina");
    staminaDynamic.staticPosition = false;
    staminaDynamic.position.set(0, -player0.height/2 - dynamicStatsOffset - 10);
    staminaDynamic.setSize(100, 5);
    staminaDynamic.valueColor = "orange";
    player0.appendChild(staminaDynamic);
    
    const staminaStatic = new Bar(player0.position, "stamina", "maxStamina");
    staminaStatic.position.set(100, 20);
    staminaStatic.setSize(150, 20);
    staminaStatic.showValue = true;
    scene.appendChild(staminaStatic);
    
    const menu6 = new Menu(player0.position, "x");
    menu6.position.set(50, 50);
    menu6.showValue = true;
    menu6.setSize(40, 20);
    scene.appendChild(menu6);
    const menu7 = new Menu(player0.position, "z");
    menu7.position.set(150, 50);
    menu7.showValue = true;
    menu7.setSize(40, 20);
    scene.appendChild(menu7);

    const btn0 = new Button("Gravity");
    btn0.showValue = true;
    btn0.setSize(140, 20);
    btn0.position.set(100, 100);
    btn0.onclick = () => {player1.gravity = !player1.gravity; console.log(player1.gravity)};
    scene.appendChild(btn0);
}


    // const menu1 = new Menu(Menu.TYPE.H_PROGRESS, player0.position, "stamina", "maxStamina");
    // menu1.position.set(100, 40);
    // scene.appendChild(menu1);

    // const menu2 = new Menu(Menu.TYPE.SIMPLE, player0.keyConfig, "MOVE_UP");
    // menu2.position.set(100, 90);
    // scene.appendChild(menu2);
    // const menu3 = new Menu(Menu.TYPE.SIMPLE, player0.keyConfig, "MOVE_LEFT");
    // menu3.position.set(100, 120);
    // scene.appendChild(menu3);
    // const menu4 = new Menu(Menu.TYPE.SIMPLE, player0.keyConfig, "MOVE_DOWN");
    // menu4.position.set(100, 150);
    // scene.appendChild(menu4);
    // const menu5 = new Menu(Menu.TYPE.SIMPLE, player0.keyConfig, "MOVE_RIGHT");
    // menu5.position.set(100, 180);
    // scene.appendChild(menu5);


/**
 * PROBLEM:
 * Static Positions doesn't work properly, since the position moves when we try to resize the window.
 * solved, but we still need an on-top solution
 * 
 * SOLUTION:
 * give an special argument, that lets draw static stuff - this is also wanted for menu-buttons, so there is nothing that can be on top of the GUI!
 * 
 * this would work like an second update-loop in the super-method. [STATIC | DYNAMIC]
 * 
 */