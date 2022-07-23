import EngineObject from "../EngineObject.class.js";
export default class Scene extends EngineObject {
    children = [];

    constructor() {
        super();
    }

    update = function() {

    }
    
    render = function(ctx) {
        ctx.fillStyle = "#222222";
        ctx.fillRect(0, 0, innerWidth, innerHeight);

        for(let i = 0; i < this.children.length; i++){
            this.children[i].render(ctx, this.position.x, this.position.z);
        }
    }
}