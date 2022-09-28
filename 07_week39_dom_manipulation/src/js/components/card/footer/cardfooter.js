import { Component } from "../../component";

export class CardFooter extends Component {
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
        this.element.classList.add("card-footer");

        let button = document.createElement("div");
        button["id"] = this.config.button.id;
        button.classList.add("btn", "btn-primary", "me-2");
        button.textContent = this.config.button.text;
        this.element.appendChild(button);
    }
}
