import Scene from "./Scene/Scene.class.js";

export default class GameEngine {
    scene = new Scene();

    constructor() {
        
        const cvs = document.createElement("canvas");
        const ctx = cvs.getContext("2d");
        document.body.appendChild(cvs);

        cvs.width = innerWidth;
        cvs.height = innerHeight;
        window.addEventListener("resize", () => {
            cvs.width = innerWidth;
            cvs.height = innerHeight;
        });
        
        setInterval(async() => {
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