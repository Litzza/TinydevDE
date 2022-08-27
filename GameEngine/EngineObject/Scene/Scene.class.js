import Node2D from "../Node2D.class.js";
export default class Scene extends Node2D {
    name = "Scene";
    staticPosition = false;
    backgroundColor = "#222222";
    constructor() {
        super();
    }

    update() {
        // for(let i = 0; i < this.children.length; i++){


        //     this.children[i].update();
        // }

        super.update();
    }

    get width() {
        return innerWidth;
    }

    get height() {
        return innerHeight;
    }
    
    render(ctx, xOffset, zOffset) {
        ctx.clearRect(0, 0, innerWidth, innerHeight);

        if(!this.visible) return;

        super.render(ctx, this.position.x, this.position.z, innerWidth, innerHeight); // mouseDragEvent als MouseController einbinden (ähnlich wie beim KeyController vom Spieler): NONE(), OuterPositionDrag(Items), InnerPositionDrag(Scene)
    }

}