import { CardBody } from "./cardbody";

export class CardBody1 extends CardBody {
    /** @type {Array <string>} */
    #texts = ["This paragraph is old and needs to be updated.", "This paragraph is new and fresh."];
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
        this.element.innerHTML = "<p>" + this.#texts[0] + "</p>";
    }
    /**
     *
     */
    toggle() {
        super.toggle();
        let p = this.element.querySelector("p");
        if (this.isToggled) {
            p.innerText = this.#texts[1];
        } else {
            p.innerText = this.#texts[0];
        }
    }
}
