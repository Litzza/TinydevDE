import EngineObject from "../EngineObject.class.js";
export default class Scene extends EngineObject {
    gravity = false;
    gravitySpeed = 1;
    constructor() {
        super();
    }

    update() {
        for(let i = 0; i < this.children.length; i++){

            if(this.gravity) {
                const x = this.children[i].position.x;
                const z = this.children[i].position.z;
                this.children[i].position.set(x, z + this.gravitySpeed);
            }

            super.update();
        }
    }
    
    render(ctx, xOffset = 0, zOffset = 0) {
        ctx.clearRect(0, 0, innerWidth, innerHeight);
        // scenes should have a backgroud
        ctx.fillStyle = "#222222";
        ctx.fillRect(0, 0, innerWidth, innerHeight);

        // visibility does apply to self and children
        if(!this.visible) return;

        // render self
        ctx.drawImage(this.source, this.position.x + xOffset, this.position.z + zOffset, this.source.width * this.scale, this.source.height * this.scale); // move whenever the parent moves...
        
        super.render(ctx, xOffset, zOffset);
    }

}