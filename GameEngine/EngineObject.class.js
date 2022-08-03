import Position from "./Position/Position.class.js";
export default class EngineObject {
    static idCounter = 0;
    source = new Image();
    id = 0;
    children = [];
    scale = 1;
    lastUpdate = Date.now();
    showName = true;
    name = null;
    visible = true;
    static source = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+/HgAFhAJ/wlseKgAAAABJRU5ErkJggg==";
    position = new Position(0, 0);

    constructor(src) {
        this.id = "#" + this.constructor.idCounter++;
        this.source.src = src || this.constructor.source;
    }

    getChildById(id) {
        for(let i = 0; i < this.children.length; i++){
            
        }
    }

    appendChild(obj) {
        this.children.push(obj);
        return this.id;
    }

    removeChild(obj) {
        this.children = this.children.filter((item) => { return item.id !== obj.id; });
    }

    update() {
        // first: update self
        this.lastUpdate = Date.now();
        this.position.update();

        // last: update children
        for(let i = 0; i < this.children.length; i++){
            this.children[i].update();
        }
    }

    render(ctx, xOffset, zOffset) { // ctx, {xOffset, zOffset} = {parentPosition.x, parentPosition.z}
        // visibility does apply to self and children
        if(!this.visible) return;

        // render self
        ctx.drawImage(this.source, this.position.x + xOffset - (this.source.width/2 * this.scale), this.position.z + zOffset - this.source.height * this.scale, this.source.width * this.scale, this.source.height * this.scale); // move whenever the parent moves...
        
        // this is the HITBOX preset:
        ctx.strokeRect(this.position.x + xOffset - (this.source.width/2 * this.scale), this.position.z + zOffset - this.source.height * this.scale, this.source.width * this.scale, this.source.height * this.scale);
        if(this.name){
            ctx.textAlign = "center";
            ctx.fillStyle = "white";
            ctx.fillText(this.name, this.position.x + xOffset, this.position.z + zOffset - 5 - this.source.height * this.scale, this.source.width * this.scale, this.source.height * this.scale);
        }
        
        // render children on top
        for(let i = 0; i < this.children.length; i++){
            this.children[i].render(ctx, this.position.x, this.position.z);
        }
    }

    setImage(src){
        this.source.src = src || this.constructor.source;
    }

    setName(name){
        this.name = name;
    }

}