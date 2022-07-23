import Position from "./Position/Position.class.js";
export default class EngineObject { // pls rename me - I am a child of any scene. I am the parent of any (visible) object! I am the master.class
    static idCounter = 0;
    static source = new Image();

    id = 0;
    children = [];
    position = new Position(0, 0);
    scale = 1;
    visible = true;

    constructor() {
        this.id = "#" + this.constructor.idCounter++;
        this.constructor.source.src = "./sources/Player/player.png";
        // 
    }

    appendChild = function (obj) {
        this.children.push(obj);
        return this.id;
    }

    removeChild = function (obj) {
        this.children = this.children.filter((item) => { return item.id !== obj.id; });
    }

    update = function() {
        
    }

    render = function(ctx, xOffset, zOffset) { // ctx, {xOffset, zOffset} = {parentPosition.x, parentPosition.z}
        if(!this.visible) return;
        ctx.drawImage(this.constructor.source, this.position.x + xOffset, this.position.z + zOffset, this.constructor.source.width * this.scale, this.constructor.source.height * this.scale); // move whenever the parent moves...
    }

}