import EntityObject from "./EntityObject/EntityObject.class.js";
import Scene from "./Scene/Scene.class.js";

export default class GameEngine {
    constructor(cvs, ctx) {

        cvs.width = innerWidth;
        cvs.height = innerHeight;
        window.addEventListener("resize", () => {
            cvs.width = innerWidth;
            cvs.height = innerHeight;
        });
        
        const player = new EntityObject();
        player.scale = 0.5;
        this.scene = new Scene();
        this.scene.appendChild(player);
        
        setInterval(() => {
            this.update();
            this.render(ctx);
        }, 1000/60);
    }

    update = function() {
        
    }
    
    render = function(ctx) {
        this.scene.render(ctx);
    }



}