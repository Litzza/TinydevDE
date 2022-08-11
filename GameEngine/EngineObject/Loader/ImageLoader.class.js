export default class ImageLoader {
    resourceList = [];
    loaded = 0;
    errors = 0;
    onload = null;

    constructor(callback) {
        this.onload = callback;
    }

    load(resource) {
        this.resourceList.push(resource);
        const img = new Image();
        img.onload = function() {
            ++this.loaded;
            this.status;
        }.bind(this);
        // .bind(resource);

        img.onerror = function(error) {
            ++this.errors;
            this.status;
        }.bind(this);

        img.src = resource;
        return img;
    }

    get status() {
        if(this.loaded + this.errors === this.resourceList.length && typeof this.onload === "function") {
            this.onload();
            this.onload = null;
        }

        return (this.loaded + this.errors) + "/" + this.resourceList.length;
    }

}