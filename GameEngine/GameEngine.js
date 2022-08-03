import Scene from "./EngineObject/Scene/Scene.class.js";

export default class GameEngine {
    scene = new Scene();
    isPaused = false;

    constructor() {
        
        const cvs = document.createElement("canvas");
        const ctx = cvs.getContext("2d");
        document.body.appendChild(cvs);

        this.init(cvs, ctx);

        window.addEventListener("resize", () => {
            this.init(cvs, ctx);
        });


        setInterval(() => {

            if(this.isPaused) return false;

            this.update();
            this.render(ctx);
        }, 1000/60);
    }

    update() {
        this.scene.update();
    }
    
    render(ctx) {
        this.scene.render(ctx);
    }

    init(cvs, ctx) {
        cvs.width = innerWidth;
        cvs.height = innerHeight;
        ctx.textAlign = "center";
    }

    pause() {
        this.isPaused = true;
    }

    resume() {
        this.isPaused = false;
    }

}