import Menu from "../Menu/Menu.class.js";
export default class Inventory extends Menu {
    itemLimit = 10;

    // override size, since this is an invisible object
    constructor(){
        super();
        this.setSize(0,0);
    }

    drop() {
        // here this inventory is beeing converted to an visible item on the scene
        this.setImage();
    }

    
}