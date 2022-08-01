import EngineObject from "../EngineObject.class.js";
export default class Scene extends EngineObject {

    constructor() {
        super();
    }

    update() {
        for(let i = 0; i < this.children.length; i++){
            this.children[i].update();
        }
    }
    
    render(ctx, xOffset, zOffset) {
        ctx.clearRect(0, 0, innerWidth, innerHeight);
        // scenes should have a backgroud
        ctx.fillStyle = "#222222";
        ctx.fillRect(0, 0, innerWidth, innerHeight);

        // visibility does apply to self and children
        if(!this.visible) return;

        // render self
        ctx.drawImage(this.source, this.position.x + xOffset, this.position.z + zOffset, this.source.width * this.scale, this.source.height * this.scale); // move whenever the parent moves...
        
        // render children on top
        for(let i = 0; i < this.children.length; i++){
            this.children[i].render(ctx, this.position.x, this.position.z);
        }
    }

}