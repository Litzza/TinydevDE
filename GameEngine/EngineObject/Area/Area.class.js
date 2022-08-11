import Node2D from "../Node2D.class.js";

export default class Area extends Node2D {
    showHitbox = true;
    collision = false; // performance reasons
    constructor() {
        super();
    }

    update(parent) {
        if(!this.collision) return false;
        
        for(let i = 0; i < parent.children.length; i++) {
            console.log("collision:", parent.children[i].collision);
            if(!parent.children[i].collision) continue;

            console.log("colliding with:", parent.children[i]);
        }

        super.update();
    }

    render() {
        const point = this.getDynamicHitboxPoints(xOffset, zOffset, width, height);

        // render self
        ctx.drawImage(this.source, point.topLeft.x, point.topLeft.z, this.width, this.height); // move whenever the parent moves...
     
        // this is the HITBOX preset:
        if(this.showHitbox) {
            ctx.strokeRect(point.topLeft.x, point.topLeft.z, this.width, this.height);
        }

        // render name
        if(this.name) {
            ctx.textAlign = "center";
            ctx.fillStyle = "white";
            ctx.fillText(this.name, point.topCenter.x, point.topCenter.z - 10); // , this.width, this.height
        }
        
        // render children
        for(let i = 0; i < this.children.length; i++){
            this.children[i].render(ctx, point.topLeft.x + this.viewport.x, point.topLeft.z + this.viewport.z, this.width, this.height);
        }
    }

}