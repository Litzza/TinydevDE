export default class Position {
    #needUpdate = false;

    #speed = 1000/10;
    #xDestination = 0;
    #zDestination = 0;
    #x = 0;
    #z = 0;
    #degree = 1;

    constructor(x, z) {
        this.#xDestination = x;
        this.#zDestination = z;
        this.#x = x;
        this.#z = z;

        // const p = destinationPoint(this.#x, this.#z,this.#speed, this.#degree);
        console.log("Point:", Math.cos(this.#degree));
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

    set(x, z) {
        this.#x = x;
        this.#z = z;
    }

    setSpeed(value) {
        this.#speed = value;
    }

    moveTo(x, z) { // interpolation for networking stuff
        this.#xDestination = x;
        this.#zDestination = z;
        this.#needUpdate = true;
    }

    update() {
        if(!this.#needUpdate) return false;
        this.lastUpdate = Date.now();
        const delta = Math.min((Date.now() - this.lastUpdate) / 1000, 1);
        const speed = delta * this.movementSpeed;

        // this.#x;
        
    }

    set(x, z) {
        this.#x = x;
        this.#z = z;
    }

}


  /**
  * Returns the destination point from a given point, having travelled the given distance
  * on the given initial bearing.
  *
  * @param   {number} lat - initial latitude in decimal degrees (eg. 50.123)
  * @param   {number} lon - initial longitude in decimal degrees (e.g. -4.321)
  * @param   {number} distance - Distance travelled (metres).
  * @param   {number} bearing - Initial bearing (in degrees from north).
  * @returns {array} destination point as [latitude,longitude] (e.g. [50.123, -4.321])
  *
  * @example
  *     var p = destinationPoint(51.4778, -0.0015, 7794, 300.7); // 51.5135°N, 000.0983°W
  */
   function destinationPoint(lat, lon, distance, bearing) {
    var radius = 6371e3; // (Mean) radius of earth

    var toRadians = function(v) { return v * Math.PI / 180; };
    var toDegrees = function(v) { return v * 180 / Math.PI; };

    // sinφ2 = sinφ1·cosδ + cosφ1·sinδ·cosθ
    // tanΔλ = sinθ·sinδ·cosφ1 / cosδ−sinφ1·sinφ2
    // see mathforum.org/library/drmath/view/52049.html for derivation

    var δ = Number(distance) / radius; // angular distance in radians
    var θ = toRadians(Number(bearing));

    var φ1 = toRadians(Number(lat));
    var λ1 = toRadians(Number(lon));

    var sinφ1 = Math.sin(φ1), cosφ1 = Math.cos(φ1);
    var sinδ = Math.sin(δ), cosδ = Math.cos(δ);
    var sinθ = Math.sin(θ), cosθ = Math.cos(θ);

    var sinφ2 = sinφ1*cosδ + cosφ1*sinδ*cosθ;
    var φ2 = Math.asin(sinφ2);
    var y = sinθ * sinδ * cosφ1;
    var x = cosδ - sinφ1 * sinφ2;
    var λ2 = λ1 + Math.atan2(y, x);

    return [toDegrees(φ2), (toDegrees(λ2)+540)%360-180]; // normalise to −180..+180°
 }