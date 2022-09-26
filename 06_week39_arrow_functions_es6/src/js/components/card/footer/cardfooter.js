import { Component } from "../../component";

export class CardFooter extends Component {
    /** @type {Array} */
    #buttons = [];
    /*
     * @constructor
     */
    constructor(config) {
        super(config);
    }
    /**
     * @param {String} value
     */
    set state(value) {
        for (let button of this.#buttons) {
            if (button["id"] == value) {
                button.classList.add("disabled");
            } else {
                button.classList.remove("disabled");
            }
        }
    }
    /**
     *
     */
    draw() {
        this.element = document.createElement("div");
        this.element.classList.add("card-footer");

        const text = ["Original", "Arrow"];
        for (let i = 0; i < 2; i++) {
            let button = document.createElement("div");
            button["id"] = "state-" + (i + 1);
            button.classList.add("btn", "btn-primary", "me-2");
            button.textContent = text[i];
            this.element.appendChild(button);
            this.#buttons.push(button);
        }
    }
}
