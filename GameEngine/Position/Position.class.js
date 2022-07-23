export default class Position {
    #__x = null;
    #__z = null;

    constructor(x, z) {
        this.#__x = x;
        this.#__z = z;
    }

    get x() {
        return this.#__x;
    }

    get y() {
        console.error("[warning] - please use 'z' instead of 'y' to support possible 3D-content!")
        return this.#__z;
    }

    get z() {
        return this.#__z;
    }

}

/** // I should not support 3D - IT IS OVERKILL!!!!
export class Position3D {
    #__x = null;
    #__y = null;
    #__z = null;

    constructor(x, y, z) {
        this.#__x = x;
        this.#__y = y;
        this.#__z = z;
    }

    get x() {
        return this.#__x;
    }

    get y() {
        return this.#__y;
    }

    get z() {
        return this.#__z;
    }
}
 */