import Position from "./Position/Position.class.js";
export default class EngineObject { // pls rename me - I am a child of any scene. I am the parent of any (visible) object! I am the master.class
    static idCounter = 0;
    static source = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+/HgAFhAJ/wlseKgAAAABJRU5ErkJggg==";
    id = 0;
    children = [];
    position = new Position(0, 0);
    scale = 1;
    visible = true;

    constructor(src) {
        this.id = "#" + this.constructor.idCounter++;
        this.source = new Image();
        this.source.src = src || this.constructor.source;
    }

    appendChild = function (obj) {
        this.children.push(obj);
        return this.id;
    }

    removeChild = function (obj) {
        this.children = this.children.filter((item) => { return item.id !== obj.id; });
    }

    update = function() {
        // maybe some user interface/input from coding APIs?
    }

    render = function(ctx, xOffset, zOffset) { // ctx, {xOffset, zOffset} = {parentPosition.x, parentPosition.z}
        if(!this.visible) return;
        ctx.drawImage(this.source, this.position.x + xOffset, this.position.z + zOffset, this.source.width * this.scale, this.source.height * this.scale); // move whenever the parent moves...
    }

    setImage(src){
        this.source.src = src || this.constructor.source;
    }

}