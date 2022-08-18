import Node2D from "../Node2D.class.js";

export default class Menu extends Node2D {
    _child = null;
    _value = 100;
    width = 100;
    height = 20;
    showName = false;
    showValue = false;
    staticPosition = true;
    gravity = false;

    backgroundColor = "black";
    valueColor = "orange";
    
    constructor(child, valueAttrName) {
        super();
        this._child = child;
        this._value = valueAttrName;
    }

    get displayText() {
        return this.value;
    }

    setSize(w, h) {
        this.width = w;
        this.height = h;
    }

    get value() {
        if(typeof this._child[this._value] == "number") {
            return Math.floor(this._child[this._value]);
        }
        return this._child[this._value];
    }

    renderName(ctx, point) {

        ctx.fillStyle = "white";
        if(this.showName) {
            ctx.textAlign = "right";
            ctx.fillText(this.name, point.centerCenter.x, point.centerCenter.z);
        }

        if(this.showValue) {
            ctx.textAlign = "left";
            ctx.fillText(this.displayText, point.centerCenter.x, point.centerCenter.z);
        }
            
    }

    // renderName(ctx, point) {
    //     if(!this.name) return;
    //     ctx.textAlign = "center";
    //     ctx.fillStyle = "white";
    //     ctx.fillText(this.name + " " + this.id, point.topCenter.x, point.topCenter.z - 10); // , this.width, this.height
    // }
}