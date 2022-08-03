import EngineObject from "../EngineObject.class.js";
import Position from "../Position/Position.class.js";
export default class EntityObject extends EngineObject { // Creatures & Plants
    isEntity = true;
    experience = 0;
    level = this.experience / 1000;
    maxHp = 100;
    hp = this.maxHp;
    // showHp = true; // allow multiplayers to see my hp. important for networking data-transfer informations...
    attack = 1;
    lastAttack = Date.now(); // to calculate attack speed cooldown
    attackSpeed = 1.1; // 1.1x times per sec (= 110%)
    respawnCooldown = 10 * 1000; //     10s
    respawnPoint = new Position(0, 0);
    gender = null;
    keyConfig = {
        MOVE_UP:"W",
        MOVE_LEFT:"A",
        MOVE_DOWN:"S",
        MOVE_RIGHT:"D"
    };
    actionPressed = {...this.keyConfig};
    dropTable = [{type:"EXPERIENCE", db_id: 1, amount: 1}, {type:"CURRENCY", db_id: 1, amount: 1}, {type:"ITEM", db_id: 1, amount: 1}];

    constructor() {
        super();
        this.position.set(0, 0);
        this.respawnPoint.set(0, 0);
    }

    onDeath() {
        this.respawn(); // or better: showDeathMenu(); then: button -> respawn(); ??
    }

    respawn() {
        this.hp = this.maxHp;
        this.position.set(this.respawnPoint.x, this.respawnPoint.z);
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
        let x = 0;
        let z = 0;

        if(this.actionPressed.MOVE_UP === true) {
            z -= this.position.stepSize;
        }
        
        if(this.actionPressed.MOVE_LEFT === true) {
            x -= this.position.stepSize;
        }
        
        if(this.actionPressed.MOVE_DOWN === true) {
            z += this.position.stepSize;
        }
        
        if(this.actionPressed.MOVE_RIGHT === true) {
            x += this.position.stepSize;
        }

        if(x || z) {
            this.position.moveTo(this.position.x + x, this.position.z + z);
        }

        super.update();
    }

    moveTo(x, z) {
        // this.position.
    }

    
    keyDown = function(event) {

        const key = event.key.toUpperCase();
            
        if(key === this.keyConfig.MOVE_UP) {
            this.actionPressed.MOVE_UP = true;
        }
        
        if(key === this.keyConfig.MOVE_LEFT) {
            this.actionPressed.MOVE_LEFT = true;
        }
        
        if(key === this.keyConfig.MOVE_DOWN) {
            this.actionPressed.MOVE_DOWN = true;
        }
        
        if(key === this.keyConfig.MOVE_RIGHT) {
            this.actionPressed.MOVE_RIGHT = true;
        }
    }.bind(this);

    keyUp = function(event) {
        const key = event.key.toUpperCase();
            
        if(key === this.keyConfig.MOVE_UP) {
            this.actionPressed.MOVE_UP = false;
        }
        
        if(key === this.keyConfig.MOVE_LEFT) {
            this.actionPressed.MOVE_LEFT = false;
        }
        
        if(key === this.keyConfig.MOVE_DOWN) {
            this.actionPressed.MOVE_DOWN = false;
        }
        
        if(key === this.keyConfig.MOVE_RIGHT) {
            this.actionPressed.MOVE_RIGHT = false;
        }
    }.bind(this);
    
    addKeyMovementController(controller) {

        addEventListener("keydown", this.keyDown);
        addEventListener("keyup", this.keyUp);
    }

    removeKeyMovementController() {
        window.removeEventListener("keydown", this.keyDown);
        window.removeEventListener("keyup", this.keyUp);
    }
}
