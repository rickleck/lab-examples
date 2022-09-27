import { CardBody } from "./cardbody";

export class CardBody2 extends CardBody {
    /** @type {Array <string>} */
    #links = ["https://example.com", "https://google.com"];
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
        this.element.innerHTML = `<p>This <a href="${
            this.#links[0]
        }" target="_blank">link</a> goes to <span>${this.#links[0]}</span>.</p>`;
    }
    /**
     *
     */
    toggle() {
        super.toggle();
        let a = this.element.querySelector("a");
        let span = this.element.querySelector("span");
        if (this.isToggled) {
            a.href = this.#links[1];
            span.innerText = this.#links[1];
        } else {
            a.href = this.#links[0];
            span.innerText = this.#links[0];
        }
    }
}
