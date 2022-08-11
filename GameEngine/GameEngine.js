import Scene from "./EngineObject/Scene/Scene.class.js";

export default class GameEngine {
    static scene = new Scene();
    static isPaused = true;

    constructor() {
        return GameEngine.scene;
    }

    static update(parent) {
        GameEngine.scene.update();
    }
    
    static render(ctx) {
        GameEngine.scene.render(ctx);
    }

    static init(cvs, ctx) {
        cvs.width = innerWidth;
        cvs.height = innerHeight;
        ctx.textAlign = "center";
    }

    static pause() {
        GameEngine.isPaused = true;
    }

    static resume() {
        GameEngine.isPaused =false;
    }

}

(function () {
    const cvs = document.createElement("canvas");
    const ctx = cvs.getContext("2d");
    document.body.appendChild(cvs);

    GameEngine.init(cvs, ctx);

    window.addEventListener("resize", () => {
        GameEngine.init(cvs, ctx);
    });

    setInterval(() => {
        if (GameEngine.isPaused)
            return false;

        GameEngine.update();
        GameEngine.render(ctx);
    }, 1000 / 60);
})();


// export default class GameEngine {
//     scene = new Scene();
//     isPaused = false;

//     constructor() {
        
//         const cvs = document.createElement("canvas");
//         const ctx = cvs.getContext("2d");
//         document.body.appendChild(cvs);

//         this.init(cvs, ctx);

//         window.addEventListener("resize", () => {
//             this.init(cvs, ctx);
//         });

//         setInterval(() => {

//             if(this.isPaused) return false;

//             this.update();
//             this.render(ctx);
//         }, 1000/60);
//     }

//     update() {
//         this.scene.update();
//     }
    
//     render(ctx) {
//         this.scene.render(ctx);
//     }

//     init(cvs, ctx) {
//         cvs.width = innerWidth;
//         cvs.height = innerHeight;
//         ctx.textAlign = "center";
//     }

//     pause() {
//         this.isPaused = true;
//     }

//     resume() {
//         this.isPaused = false;
//     }

// }