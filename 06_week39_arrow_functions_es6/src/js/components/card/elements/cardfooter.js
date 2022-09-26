import { Component } from "../../component";

export class CardFooter extends Component {
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
        this.element.classList.add("card-footer");
        this.element.innerHTML =
            '<div role="button" id="state-1" class="btn btn-primary me-2">Original</div>' +
            '<div role="button" id="state-2" class="btn btn-primary">Arrow</div>';
    }
}
