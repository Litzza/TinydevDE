export default class PopupMessage {
    text = "";

    constructor(msg = "Your Message Here", ttl = 5) {
        this.text = msg;
    }

    destroy() {
        delete this;
    }
}