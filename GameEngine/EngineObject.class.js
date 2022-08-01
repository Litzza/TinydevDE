import Position from "./Position/Position.class.js";
export default class EngineObject { // pls rename me - I am a child of any scene. I am the parent of any (visible) object! I am the master.class
    static idCounter = 0;
    static source = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+/HgAFhAJ/wlseKgAAAABJRU5ErkJggg==";
    id = 0;
    children = [];
    position = new Position(0, 0);
    scale = 1;
    visible = true;
    name = null;
    showName = true;
    lastUpdate = Date.now();

    constructor(src) {
        this.id = "#" + this.constructor.idCounter++;
        this.source = new Image();
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
        console.log("children?", this.name);

        // update children
        for(let i = 0; i < this.children.length; i++){
            this.children[i].update();
        }
    }

    render(ctx, xOffset, zOffset) { // ctx, {xOffset, zOffset} = {parentPosition.x, parentPosition.z}
        // visibility does apply to self and children
        if(!this.visible) return;

        // render self
        ctx.drawImage(this.source, this.position.x + xOffset, this.position.z + zOffset, this.source.width * this.scale, this.source.height * this.scale); // move whenever the parent moves...
        
        if(this.name){
            ctx.fillStyle = "white";
            ctx.fillText(this.name, this.position.x + xOffset + (this.source.width * this.scale / 2), this.position.z + zOffset - 5, this.source.width * this.scale, this.source.height * this.scale);
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