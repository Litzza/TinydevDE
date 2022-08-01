import EngineObject from "../EngineObject.class.js";
import Position from "../Position/Position.class.js";
export default class EntityObject extends EngineObject { // Creatures & Plants
    isEntity = true;
    experience = 0;
    level = this.experience / 1000;
    maxHp = 10;
    hp = this.maxHp;
    showHp = true;
    attack = 1;
    lastAttack = Date.now();
    movementSpeed = 100;
    attackSpeed = 1000 / 1; //          1x/s
    respawnCooldown = 10 * 1000; //     10s
    respawnPoint = new Position(0, 0);
    gender = null;

    dropTable = [{type:"EXPERIENCE", db_id: 1, amount: 1}, {type:"CURRENCY", db_id: 1, amount: 1}, {type:"ITEM", db_id: 1, amount: 1}];

    constructor() {
        super();
        this.position.set(0, 0);
        this.respawnPoint.set(0, 0);
    }

    onDeath() {
        this.respawn(); // or better: showDeathMenu(); then: button -> respawn();
    }

    respawn() {
        this.hp = this.maxHp;
        this.position.set(0, 0);
    }

    attack(target) {
        if(typeof target != "object") return false;
        if(!target.isEntity) return false;
        target.hp -= this.attack;
    }

    setRespawnPoint(x, z) {
        respawnPoint.set(x, z);
    }

    update() {
    }

    moveTo(x, z) {
        // this.position.
    }
}