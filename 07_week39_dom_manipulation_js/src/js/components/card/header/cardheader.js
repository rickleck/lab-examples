import { Component } from "../../component";

export class CardHeader extends Component {
    /**
     * @constructor
     * @param {object} config
     */
    constructor(config) {
        super(config);
    }
    /**
     *
     */
    draw() {
        super.draw();
        this.element.classList.add("card-header");
        this.element.innerHTML = "<h5 class='mb-1 mt-1'>" + this.config.title + "</h5>";
    }
}
