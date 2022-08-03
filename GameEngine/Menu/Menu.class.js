import EngineObject from "../EngineObject.class.js";

export default class Menu extends EngineObject {
    static TYPE = {
        SIMPLE: 1,
        MIN_MAX: 2,
        BUTTON: 3,
        H_PROGRESS: 4, // horizontal [=>]
        V_PROGRESS: 5 // vertical [î]
    }
    #type = null;
    #child = null;
    #value = 100;
    #limit = null;
    #width = 100;
    #height = 20;
    
    constructor(type = Menu.TYPE.SIMPLE, child = null, valueAttrName = null, limitAttrName = null) {
        super();

        this.#child = child;
        
        this.#type = type || Menu.TYPE.SIMPLE;
        this.#value = valueAttrName;
        this.#limit = limitAttrName;

        switch (this.#type) {
            case Menu.TYPE.SIMPLE:
                this.#width = 20;
                break;
            case Menu.TYPE.MIN_MAX:
                break;
            case Menu.TYPE.BUTTON:
                break;
            case Menu.TYPE.H_PROGRESS:
                break;
            case Menu.TYPE.V_PROGRESS:
                break;
            default:
                break;
        }
    }

    get displayText() {
        switch (this.#type) {
            case Menu.TYPE.SIMPLE:
                return this.value;
            case Menu.TYPE.MIN_MAX:
                return this.#value + ": " + this.value + " / " + this.limit;
            case Menu.TYPE.BUTTON:
                return this.#value;
            case Menu.TYPE.H_PROGRESS:
                return this.value + " / " + this.limit;
            case Menu.TYPE.V_PROGRESS:
                return this.value;
            default:
                return this.#value + ": " + this.value;
        }
    }

    get value() {
        return Math.floor(this.#child[this.#value]) || this.#child[this.#value];
    }

    get limit() {
        return Math.floor(this.#child[this.#limit]) || this.#child[this.#limit];
    }

    onClick() {
        if(this.type === Menu.TYPE.BUTTON) {
            this.value();
        }
    }

    callbackOnValueEquals() {
        
    }

    update() {

    }

    render(ctx, xOffset, zOffset) {

        ctx.fillStyle = "white";
        ctx.fillRect(this.position.x - this.#width/2, this.position.z, this.#width, this.#height);
        ctx.fillStyle = "orange";
        ctx.fillRect(this.position.x - this.#width/2, this.position.z, this.#width / this.limit * this.value, this.#height);
        ctx.strokeRect(this.position.x - this.#width/2, this.position.z, this.#width, this.#height);
        

        ctx.textAlign = "right";
        ctx.fillText(this.#value + ":", this.position.x - this.#width/2, this.position.z + this.#height - 5);

        ctx.fillStyle = "black";
        ctx.textAlign = "center";
        ctx.fillText(this.displayText, this.position.x, this.position.z + this.#height - 5);

        super.render(ctx, xOffset, zOffset);
    }
}