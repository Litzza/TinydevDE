import EngineObject from "../EngineObject.class.js";
export default class EntityObject extends EngineObject {
    maxHp = 100;
    hp = this.maxHp;
    constructor() {
        super();
    }
}