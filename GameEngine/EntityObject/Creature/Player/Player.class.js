import Controls from '../../../Controls/Controls.class.js';
import EntityObject from '../../EntityObject.class.js';

export default class Player extends EntityObject {
    #maxHitpoints = 100;
    #hitpoints = this.#maxHitpoints;
    #controller = new Controls();
    constructor() {
        super();
    }

    get getController() {
        return this.#controller;
    }

    
}