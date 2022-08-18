import Inventory from "../Inventory/Inventory.class.js";
import Node2D from "../Node2D.class.js";
import Position from "../Position/Position.class.js";
export default class EntityObject extends Node2D { // Creatures & Plants
    isEntity = true;
    experience = 0;
    level = this.experience / 1000;
    maxHp = 20;
    hp = this.maxHp;
    maxMana = 100;
    mana = this.maxMana;
    hpRegenerationRate = 10; // regenerate stamina per second
    // showHp = true; // allow multiplayers to see my hp. important for networking data-transfer informations...
    isFighting = false;
    lastFight = Date.now();
    battleTarget = null;
    damage = 10;
    lastAttack = Date.now(); // to calculate attack speed cooldown
    attackSpeed = 1.1; // 1.1x times per sec (= 110%)
    respawnCooldown = 10 * 1000; //     10s
    respawnPoint = new Position(0, 0);
    gender = null;
    inventory = new Inventory();
    battleClickCounter = 0;

    constructor() {
        super();
        this.position.set(0, 0);
        this.respawnPoint.set(0, 0);
        this.position.needStamina = true;
    }

    onDeath() {
        // drop some items?
        // this.inventory


        this.respawn(); // or better: showDeathMenu(); then: button -> respawn(); ??
    }

    onFightStart(battleTarget) {
        this.battleTarget = battleTarget;
        this.isFighting = true;
        this.positionBeforeFight = this.position;
        console.log("[SAVE] Position", this.name, this.positionBeforeFight.x, this.positionBeforeFight.z);
    }

    onFightEnd() {
        this.lastFight = Date.now();
        this.position = this.positionBeforeFight;
        this.battleTarget = null;
        this.isFighting = false;
    }

    onclick(event) {
        return;
    }

    regenerate(delta) {
        const timeBasedHpRegenRate = delta * this.hpRegenerationRate; // Position after Time(ms)

        // hp
        // if(!this.isFighting) {
            this.hp = Math.min(this.hp + timeBasedHpRegenRate, this.maxHp);
        // }
    }

    respawn() {
        this.hp = this.maxHp;
        this.position.set(this.respawnPoint.x, this.respawnPoint.z);
    }

    attack(target) {
        console.log(target.id, target.isEntity, target)
        if(typeof target != "object") return false;
        if(!target.isEntity) return false;
        target.hp = Math.max(target.hp - this.damage, 0);
        if(target.hp <= 0) {
            target.onDeath();
            this.lastFight = Date.now();
            this.isFighting = false;
            
            return true;

        }

        return false;
    }

    setRespawnPoint(x, z) {
        respawnPoint.set(x, z);
    }

    update(parent) {
        const delta = Math.min((Date.now() - this.lastUpdate) / 1000, 1);
        this.lastUpdate = Date.now();

        this.regenerate(delta);

        super.update();
    }

    moveTo(x, z) {
        // this.position.
    }



}
