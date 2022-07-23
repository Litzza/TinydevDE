export default class Creature {

    constructor(level) {
        this.#level = 1;
        this.#maxHitpoints = 20 * this.#level;
        this.#hitpoints = this.#maxHitpoints;
        this.#gender = 1; // if (parent1.gender + parent2.gender !== 1) return new Error("Even if we would support LGBTQ+, this would never work physically... Maybe think about adoptions?");
    }
    
}