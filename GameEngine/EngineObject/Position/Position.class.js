export default class Position {
    lastUpdate = Date.now();
    #x = 0;
    #z = 0;
    #xTarget = 0;
    #zTarget = 0;
    #movementSpeed = 100; // pixel per second
    #stepSize = 50; // pixel movement range
    
    maxStamina = 1000;
    _stamina = this.maxStamina;
    get stamina() {
        return this._stamina;
    }
    set stamina(value) {
        this._stamina = value;
    }

    constructor(x, z) {
        this.#x = x;
        this.#z = z;
        this.#xTarget = x;
        this.#zTarget = z;
    }

    get x() {
        return this.#x;
    }

    get y() {
        console.error("[warning] - please use 'z' instead of 'y' to support possible 3D-content!");
        return this.#z;
    }

    get z() {
        return this.#z;
    }

    get stepSize () {
        return this.#stepSize;
    }


    set setMovementSpeed(value) {
        this.#movementSpeed = value;
    }

    moveTo(x, z) { // user tool: requires stamina, movement animation
        if(this.stamina < this.#stepSize) return false;
        this.#xTarget = x;
        this.#zTarget = z;
    }

    set(x, z) { // admin tool: no stamina required, instant teleport
        this.#x = x;
        this.#z = z;
        this.#xTarget = x;
        this.#zTarget = z;
    }

    update() {

        const delta = Math.min((Date.now() - this.lastUpdate) / 1000, 1);
        this.lastUpdate = Date.now();
        const allowedTimestep = delta * this.#movementSpeed; // Position after Time(ms)
        this.stamina = Math.min(this.stamina + allowedTimestep/4, this.maxStamina);

        let xDist = this.#x - this.#xTarget;
        let zDist = this.#z - this.#zTarget;
        if(xDist < 0) {
            xDist *= -1;
        }
        if(zDist < 0) {
            zDist *= -1;
        }
        const pixelUntilFinished = Math.sqrt(Math.pow(xDist, 2) + Math.pow(zDist, 2));
        if(pixelUntilFinished <= allowedTimestep) {
            this.#x = this.#xTarget;
            this.#z = this.#zTarget;
            return; // reason: too close to destination
        }
        const angle = (degreeAngleBetweenTwoPoints({x: this.#x, z: this.#z}, {x: this.#xTarget, z: this.#zTarget}) - 90) * -1;
        const pos = circleMovementPosition(this.#x, 0, this.#z, allowedTimestep, angle, 0);
        this.#x = pos.x;
        this.#z = pos.z;
        this.stamina -= allowedTimestep;
    }

}

function circleMovementPosition (sx, sy, sz, radius = 1, yawAngle = 10, pitchAngle = 0) {

    const x = Math.sin(degreeToRadian(yawAngle)) * Math.cos(degreeToRadian(pitchAngle));
    const y = Math.sin(degreeToRadian(pitchAngle));
    const z = Math.cos(degreeToRadian(yawAngle)) * Math.cos(degreeToRadian(pitchAngle));

    const distance = {x:x * radius, y:y * radius, z:z * radius};
    const newPos = {x:sx+distance.x, y:sy+distance.y, z:sz+distance.z};
    return newPos;
}

function degreeAngleBetweenTwoPoints (p1 = {x: 0, z: 0}, p2 = {x: 1, z: 1}) {
    
    // angle in radians
    // var angleRadians = Math.atan2(p2.y - p1.y, p2.x - p1.x);
    
    // angle in degrees
    var angleDeg = Math.atan2(p2.z - p1.z, p2.x - p1.x) * 180 / Math.PI;
    return angleDeg;
}

function degreeToRadian (degree) {
    return degree * Math.PI/180;
}

function radianToDegree (radian) {
    return radian * 180/Math.PI;
}