import EntityObject from '../EntityObject.class.js';

export default class Player extends EntityObject {

    keyConfig = {
        "MOVE_UP":"W",
        "MOVE_LEFT":"A",
        "MOVE_DOWN":"S",
        "MOVE_RIGHT":"D"
    };

    actionPressed = {...this.keyConfig};

    constructor() {
        super();
        window.addEventListener("keydown", (event) => {
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
        });
        window.addEventListener("keyup", (event) => {
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
        });
    }

    update() {
        const delta = Math.min((Date.now() - this.lastUpdate) / 1000, 1);
        this.lastUpdate = Date.now();

        const speed = delta * this.movementSpeed;
        console.log(this.movementSpeed, speed);

        if(this.actionPressed.MOVE_UP === true) {
            this.position.set(this.position.x, this.position.z - speed);
        }
        
        if(this.actionPressed.MOVE_LEFT === true) {
            this.position.set(this.position.x - speed, this.position.z);
        }
        
        if(this.actionPressed.MOVE_DOWN === true) {
            this.position.set(this.position.x, this.position.z + speed);
        }
        
        if(this.actionPressed.MOVE_RIGHT === true) {
            this.position.set(this.position.x + speed, this.position.z);
        }
    }
    
}