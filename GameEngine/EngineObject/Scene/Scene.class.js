import Node2D from "../Node2D.class.js";
export default class Scene extends Node2D {
    constructor() {
        super();
    }

    update() {
        for(let i = 0; i < this.children.length; i++){


            super.update();
        }
    }

    get width() {
        return innerWidth;
    }

    get height() {
        return innerHeight;
    }
    
    render(ctx) {
        ctx.clearRect(0, 0, innerWidth, innerHeight);
        // visibility: does apply to self and children - obviously not the parents, lol
        if(!this.visible) return;

        // scenes should have a backgroud ( if visible ;) )
        ctx.fillStyle = "#222222";
        ctx.fillRect(this.position.x, this.position.z, this.width, this.height);
        super.render(ctx, 0, 0, innerWidth, innerHeight); // mouseDragEvent als MouseController einbinden (ähnlich wie beim KeyController vom Spieler): NONE(), OuterPositionDrag(Items), InnerPositionDrag(Scene)
    }

}