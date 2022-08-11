import Menu from "../Menu.class.js";

export default class Button extends Menu {
    onclick = null;
    constructor(valueAttrName, callback = () => {console.warn("You created this button without overriding the callback function!!");}) {
        super();
        this._child = this;
        this._value = valueAttrName;
        this.onclick = callback;
    }

    get displayText() {
        return this._value;
    }

    renderStatic(ctx, xOffset = 0, zOffset = 0, width = 0, height = 0) {
        const point = this.getStaticHitboxPoints();
        
        ctx.fillStyle = this.backgroundColor; // rect background
        ctx.fillRect(point.topLeft.x, point.topLeft.z, this.width, this.height);

        ctx.fillStyle = this.valueColor; // rect value
        ctx.fillRect(point.topLeft.x, point.topLeft.z, this.width / this.limit * this.value, this.height);

        ctx.strokeStyle = "black"; // rect border
        ctx.strokeRect(point.topLeft.x, point.topLeft.z, this.width, this.height);

        // ctx.textAlign = "right"; // text title
        // ctx.fillText(this.value + ":", this.position.x + xOffset, this.position.z + zOffset + this.height - 5);

        ctx.fillStyle = "white";
        ctx.textAlign = "center"; // text value
        if(this.showValue) {
            ctx.fillText(this.displayText, point.topCenter.x, point.topCenter.z + this.height/2 + 3);
        }
    }

    renderDynamic(ctx, xOffset = 0, zOffset = 0, width = 0, height = 0) {
        const point = this.getDynamicHitboxPoints(xOffset, zOffset, width, height);

        ctx.fillStyle = this.backgroundColor; // rect background
        ctx.fillRect(point.topLeft.x, point.topLeft.z, this.width, this.height);

        ctx.strokeStyle = "black"; // rect border
        ctx.strokeRect(point.topLeft.x, point.topLeft.z, this.width, this.height);

        ctx.textAlign = "right"; // text title
        // ctx.fillText(this.#value + ":", this.position.x + xOffset, this.position.z + zOffset + this.height - 5);

        ctx.fillStyle = "white";
        ctx.textAlign = "center"; // text value
        if(this.showValue) {
            ctx.fillText(this.displayText, point.topCenter.x, point.topCenter.z + this.height/2 + 3);
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