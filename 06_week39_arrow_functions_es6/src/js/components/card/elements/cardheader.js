import { Component } from "../../component";

export class CardHeader extends Component {
    /*
     * @constructor
     */
    constructor(config) {
        super(config);
    }
    /**
     *
     */
    draw() {
        this.element = document.createElement("div");
        this.element.classList.add("card-header");
        this.element.innerHTML = "<h5 class='mb-1 mt-1'>" + this.config.title + "</h5>";
    }
}
