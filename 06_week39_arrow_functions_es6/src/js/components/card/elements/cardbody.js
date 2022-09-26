import { Component } from "../../component";

export class CardBody extends Component {
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
        this.element.classList.add("card-body");
        this.element.innerHTML = "<p>Body text</p>";
    }
}
