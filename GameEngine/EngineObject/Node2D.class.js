import GameEngine from "../GameEngine.js";
import Position from "./Position/Position.class.js";
export default class Node2D {
    gravity = false;
    gravitySpeed = 9;
    static idCounter = 0;
    backgroundImage = new Image();
    backgroundColor = "#ffffff00";
    source = new Image();
    id = 0;
    children = [];
    scale = 1;
    lastUpdate = Date.now();
    showName = false;
    showHitbox = true;
    collision = false;
    name = null;
    visible = true;
    static source = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=";
    position = new Position(0, 0);
    positionBeforeFight = this.position;
    // collision = false; //... todo
    staticPosition = false;
    viewport = {x: 0, z: 0};
    actionPressed = {...this.keyConfig};

    constructor() {
        this.id = "#" + this.constructor.idCounter++;
        this.backgroundImage.src = this.constructor.source;
        this.source.src = this.constructor.source;
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

    collide(collider) {
        
    }

    update(parent) {

        let x = 0;
        let z = 0;

        if(this.actionPressed.MOVE_UP === true) {
            z -= this.position.stepSize;
        }
        
        if(this.actionPressed.MOVE_LEFT === true) {
            x -= this.position.stepSize;
        }
        
        if(this.actionPressed.MOVE_DOWN === true) {
            z += this.position.stepSize;
        }
        
        if(this.actionPressed.MOVE_RIGHT === true) {
            x += this.position.stepSize;
        }

        if(x || z) {
            this.position.moveTo(this.position.x + x, this.position.z + z);
        }
        
        // first: update self
        

        this.lastUpdate = Date.now();
        this.position.update();
        

        // last: update children
        for(let i = 0; i < this.children.length; i++){

        // gravity affects only the children inside the object:
        if(this.gravity && !this.children[i].staticPosition) {
            const x = this.children[i].position.x;
            const z = this.children[i].position.z;
            this.children[i].position.set(x, z + this.gravitySpeed);
        }
            this.children[i].update();
        }
    }

    setSize(w, h) {
        this.source.width = w;
        this.source.height = h;
    }
    get width() {
        return this.source.width * this.scale;
    }

    get height() {
        return this.source.height * this.scale;
    }

    setImage(src){
        this.source.src = src || this.constructor.source;
    }

    setBackgroundImage(src){
        this.backgroundImage.src = src || this.constructor.source;
    }

    setName(name){
        this.name = name;
    }

    // mouseDown = function(event) { // scene should have that too maybe? since i only want to move the scene with drag and drop (but: maybe drag only the player's position too, this would indeed be handled HERE)
    //     //_padding: viewport // this will maybe help me understand the logic later on
    //     //__margin: position // this will maybe help me understand the logic later on
    //     console.log("DOWN", event.clientX, event.clientY);
    //     for(let i = 0; i < GameEngine.scene.children.length; i++){
    //         const parent = GameEngine.scene;
    //         const obj = GameEngine.scene.children[i];
    //         if(obj.staticPosition) {
    //             const point = obj.getStaticHitboxPoints();
    //             if(event.clientX >= point.topLeft.x && event.clientX <= point.bottomRight.x && event.clientY >= point.topLeft.z && event.clientY <= point.bottomRight.z){
    //                 console.log("HIT Static Object", obj);
    //             }
    //         } else {
    //             const point = obj.getDynamicHitboxPoints(parent.position.x - parent.width/2 * parent.scale, parent.position.z - parent.height/2 * parent.scale, parent.width * parent.scale, parent.height * parent.scale);
    //             if(event.clientX - parent.width/2 * parent.scale >= point.topLeft.x && event.clientX - parent.width/2 * parent.scale <= point.bottomRight.x && event.clientY - parent.height/2 * parent.scale >= point.topLeft.z && event.clientY - parent.height/2 * parent.scale <= point.bottomRight.z){
    //                 console.log("HIT Dynamic Object", obj);
    //             }
    //         }
    //     }

    // }.bind(this);
    onclick() {
        return;
    }
    clickHandler = function(event, parent, callback) { // scene should have that too maybe? since i only want to move the scene with drag and drop (but: maybe drag only the player's position too, this would indeed be handled HERE)
        //_padding: viewport // this will maybe help me understand the logic later on, ignore this on staticObjects
        //__margin: position // this will maybe help me understand the logic later on
        // console.log("DOWN", event.clientX, event.clientY);

        console.log("click handler for", this.name);

        for(let i = 0; i < parent.children.length; i++){
            const obj = parent.children[i];

            if(!obj.visible) continue; // we cant see it, so we dont want it!

            // console.log("click handler for", obj.name);

            if(obj.staticPosition) {
                console.log("CLICK? [STATIC] object ...");
                
            }

            if(!obj.staticPosition) {
                console.log("CLICK? [DYNAMIC] object ...");
            }


            // if(obj.staticPosition) {
            //     const point = obj.getStaticHitboxPoints(parent.position.x * parent.scale, parent.position.z * parent.scale);
            //     if(event.clientX >= point.topLeft.x && event.clientX <= point.bottomRight.x && event.clientY >= point.topLeft.z && event.clientY <= point.bottomRight.z){
            //         // console.log("HIT Static Object,", "insideSelf: [true|false]", obj);
            //         obj.onclick();
            //         obj.clickHandler(event, this, callback);
            //         callback(event, obj);
            //     } else {
            //         console.log(event.clientX, point.topLeft.x, point);
            //     }
            // } else {
            //     const point = obj.getDynamicHitboxPoints(parent.position.x - parent.width/2 * parent.scale, parent.position.z - parent.height/2 * parent.scale, parent.width * parent.scale, parent.height * parent.scale);
            //     if(event.clientX - parent.width/2 * parent.scale >= point.topLeft.x && event.clientX - parent.width/2 * parent.scale <= point.bottomRight.x && event.clientY - parent.height/2 * parent.scale >= point.topLeft.z && event.clientY - parent.height/2 * parent.scale <= point.bottomRight.z){
            //         // console.log("HIT Dynamic Object,", "insideSelf: [true|false]", obj);
            //         obj.onclick();
            //         obj.clickHandler(event, this, callback);
            //         callback(event, obj);
            //     }
            // }
        }
        // if there was no object found, i should just return the position inside the clicked scene
        // console.log("parent position... pls work here...", parent.position);


    }.bind(this);

    // mouseUp = function(event) {
    //     // console.log("UP", event);
    // }.bind(this);


    addMousePointerEvent(callback = (event, targetObject) => { console.log("click event triggered", event, obj); }) {
        // workaround:
        const fx = function(event) {
            this.clickHandler(event, this, callback);
        }.bind(this);

        addEventListener("click", fx);

        this.removeMousePointerController = () => {
            removeEventListener("click", fx);
        }
    }


    addKeyDownEvent(callback = (event) => { console.log("keyDown event triggered", event); }) {
        const fx = function(event) {
            callback(event);
        }.bind(this);

        addEventListener("keydown", fx);

        this.removeMousePointerController = () => {
            removeEventListener("keydown", fx);
        }
    }


    addKeyUpEvent(callback = (event) => { console.log("keyup event triggered", event); }) {
        const fx = function(event) {
            callback(event);
        }.bind(this);

        addEventListener("keyup", fx);

        this.removeMousePointerController = () => {
            removeEventListener("keyup", fx);
        }
    }

    keyConfig = {
        MOVE_UP:"W",
        MOVE_LEFT:"A",
        MOVE_DOWN:"S",
        MOVE_RIGHT:"D"
    };

    loadKeyConfig (keyConfig = this.keyConfig) {
        this.keyConfig = {...this.keyConfig} || {...keyConfig}
    }

    keyDown = function(event) {

        const key = event.key.toUpperCase();
            
        if(key === this.keyConfig.MOVE_UP) {
            this.actionPressed.MOVE_UP = true;
        }
        
        if(key === this.keyConfig.MOVE_LEFT) {
            this.actionPressed.MOVE_LEFT = true;
        }
        
        if(key === this.keyConfig.MOVE_DOWN) {
            this.actionPressed.MOVE_DOWN = true;
        }
        
        if(key === this.keyConfig.MOVE_RIGHT) {
            this.actionPressed.MOVE_RIGHT = true;
        }
    }.bind(this);

    keyUp = function(event) {
        const key = event.key.toUpperCase();
            
        if(key === this.keyConfig.MOVE_UP) {
            this.actionPressed.MOVE_UP = false;
        }
        
        if(key === this.keyConfig.MOVE_LEFT) {
            this.actionPressed.MOVE_LEFT = false;
        }
        
        if(key === this.keyConfig.MOVE_DOWN) {
            this.actionPressed.MOVE_DOWN = false;
        }
        
        if(key === this.keyConfig.MOVE_RIGHT) {
            this.actionPressed.MOVE_RIGHT = false;
        }
    }.bind(this);

    
    addKeyMovementController() {
        addEventListener("keydown", this.keyDown);
        addEventListener("keyup", this.keyUp);
    }

    removeKeyMovementController() {
        removeEventListener("keydown", this.keyDown);
        removeEventListener("keyup", this.keyUp);
    }

    getStaticHitboxPoints(xOffset, zOffset) {
        return {
            topLeft: {x: this.position.x + xOffset - this.width/2, z:this.position.z + zOffset - this.height/2},
            topRight: {x: this.position.x + xOffset + this.width/2, z:this.position.z + zOffset - this.height/2},
            bottomLeft: {x: this.position.x + xOffset - this.width/2, z:this.position.z + zOffset + this.height/2},
            bottomRight: {x: this.position.x + xOffset + this.width/2, z:this.position.z + zOffset + this.height/2},

            centerCenter: {x: this.position.x + xOffset, z: this.position.z + zOffset},

            topCenter: {x: this.position.x + xOffset, z: this.position.z + zOffset - this.height/2},
            leftCenter: {x: this.position.x + xOffset - this.width/2, z: this.position.z + zOffset},
            rightCenter: {x: this.position.x + xOffset + this.width/2, z: this.position.z + zOffset},
            bottomCenter: {x: this.position.x + xOffset, z: this.position.z + zOffset + this.height/2}
        }
    }

    // static ...
    // x: +  - 

    // dynamic ...
    // x: + xOffset + width/2,


    getDynamicHitboxPoints(xOffset, zOffset, width, height) {
        return {
            topLeft: {x: this.position.x + xOffset + width/2 - this.width/2, z:this.position.z + zOffset + height/2 - this.height/2},
            topRight: {x: this.position.x + xOffset + width/2 + this.width/2, z:this.position.z + zOffset + height/2 - this.height/2},
            bottomLeft: {x: this.position.x + xOffset + width/2 - this.width/2, z:this.position.z + zOffset + height/2 + this.height/2},
            bottomRight: {x: this.position.x + xOffset + width/2 + this.width/2, z:this.position.z + zOffset + height/2 + this.height/2},

            centerCenter: {x: this.position.x + xOffset + width/2, z: this.position.z + zOffset + height/2},

            topCenter: {x: this.position.x + xOffset + width/2, z: this.position.z + zOffset + height/2 - this.height/2},
            leftCenter: {x: this.position.x + xOffset + width/2 - this.width/2, z: this.position.z + height/2 + zOffset},
            rightCenter: {x: this.position.x + xOffset + width/2 + this.width/2, z: this.position.z + height/2 + zOffset},
            bottomCenter: {x: this.position.x + xOffset + width/2, z: this.position.z + zOffset + height/2 + this.height/2}
        }
    }

    renderHitbox(ctx, point) {
        if(!this.showHitbox) return;
        ctx.strokeStyle = "white";
        ctx.strokeRect(point.topLeft.x, point.topLeft.z, this.width, this.height);
    }

    renderBackgroundColor(ctx, point) {
        ctx.fillStyle = this.backgroundColor; // rect background
        ctx.fillRect(point.topLeft.x, point.topLeft.z, this.width, this.height); // background color
    }

    renderBackgroundImage(ctx, point) {
        ctx.drawImage(this.backgroundImage, point.topLeft.x, point.topLeft.z, this.width, this.height); // background image
    }

    renderImage(ctx, point) {
        // render background, then self
        ctx.drawImage(this.source, point.topLeft.x, point.topLeft.z, this.width, this.height); // main image
    }

    renderName(ctx, point) {
        if(!this.name) return;
        ctx.textAlign = "center";
        ctx.fillStyle = "white";
        ctx.fillText(this.name + " " + this.id, point.topCenter.x, point.topCenter.z - 10); // , this.width, this.height
    }


    render(ctx, parentPointTopLeftX, parentPointTopLeftZ, parentNodeWidth, parentNodeHeight) {
        if(!this.visible) return;
        let point = null;
        if(this.staticPosition) {
            point = this.getStaticHitboxPoints(parentPointTopLeftX, parentPointTopLeftZ);
        } else {
            point = this.getDynamicHitboxPoints(parentPointTopLeftX, parentPointTopLeftZ, parentNodeWidth, parentNodeHeight);
        }
        this.renderBackgroundColor(ctx, point);
        this.renderBackgroundImage(ctx, point);
        this.renderHitbox(ctx, point);
        this.renderImage(ctx, point);
        this.renderName(ctx, point);
        
        ctx.fillStyle = "green";
        ctx.fillRect(point.topLeft.x, point.topLeft.z, 5, 5);

        // render children
        for(let i = 0; i < this.children.length; i++){
            this.children[i].render(ctx, point.topLeft.x, point.topLeft.z, this.width, this.height);
        }
    }
}

// addEventListener("mouseup", this.mouseUp);
// addEventListener("mousedown", this.mouseDown);
// addEventListener("dblclick", );
// addEventListener("contextmenu", );
// removeEventListener("mousedown", this.mouseDown);
// removeEventListener("mouseup", this.mouseUp);
// removeEventListener("dblclick", );
// removeEventListener("contextmenu", );
