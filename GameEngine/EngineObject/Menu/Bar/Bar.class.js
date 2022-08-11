import Menu from "../Menu.class.js";

export default class Bar extends Menu {
    _limit = null;
    width = 100;
    height = 5;

    constructor(child = null, valueAttrName = null, limitAttrName = null) {
        super(child, valueAttrName);
        this._limit = limitAttrName;
    }

    get displayText() {
        return this.value + " / " + this.limit;
    }

    get limit() {
        if(typeof this._child[this._value] == "number") {
            return Math.floor(this._child[this._limit]);
        }
        return this._child[this._limit];
    }
    renderStatic(ctx, xOffset = 0, zOffset = 0, width = 0, height = 0) {
        const point = this.getStaticHitboxPoints();
        
        ctx.fillStyle = this.backgroundColor; // rect background
        ctx.fillRect(point.topLeft.x, point.topLeft.z, this.width, this.height);

        ctx.fillStyle = this.valueColor; // rect value
        ctx.fillRect(point.topLeft.x, point.topLeft.z, this.width / this.limit * this.value, this.height);

        ctx.strokeStyle = "black"; // rect border
        ctx.strokeRect(point.topLeft.x, point.topLeft.z, this.width, this.height);

        ctx.textAlign = "right"; // text title
        // ctx.fillText(this.#value + ":", this.position.x + xOffset, this.position.z + zOffset + this.height - 5);

        ctx.fillStyle = "white";
        ctx.textAlign = "center"; // text value
        if(this.showValue) {
            ctx.fillText(this._value + ": " + this.displayText, point.topCenter.x, point.topCenter.z + this.height/2 + 3);
        }
    }

    renderDynamic(ctx, xOffset = 0, zOffset = 0, width = 0, height = 0) {
        const point = this.getDynamicHitboxPoints(xOffset, zOffset, width, height);

        ctx.fillStyle = this.backgroundColor; // rect background
        ctx.fillRect(point.topLeft.x, point.topLeft.z, this.width, this.height);

        ctx.fillStyle = this.valueColor; // rect value
        ctx.fillRect(point.topLeft.x, point.topLeft.z, this.width / this.limit * this.value, this.height);

        ctx.strokeStyle = "black"; // rect border
        ctx.strokeRect(point.topLeft.x, point.topLeft.z, this.width, this.height);

        ctx.textAlign = "right"; // text title
        // ctx.fillText(this.#value + ":", this.position.x + xOffset, this.position.z + zOffset + this.height - 5);

        ctx.fillStyle = "white";
        ctx.textAlign = "center"; // text value
        if(this.showValue) {
            ctx.fillText(this._value + ": " + this.displayText, point.topCenter.x, point.topCenter.z + this.height/2 + 3);
        }

    }
    
    render(ctx, xOffset, zOffset, width, height) {
        // ctx.fillRect(this.position.x + xOffset + width/2 - this.width/2, this.position.z + zOffset, this.width, this.height);
        

        if(this.staticPosition) {
            this.renderStatic(ctx, 0, 0, 0, 0);
        } else {
            this.renderDynamic(ctx, xOffset, zOffset, width, height);
        }
        
    }
}