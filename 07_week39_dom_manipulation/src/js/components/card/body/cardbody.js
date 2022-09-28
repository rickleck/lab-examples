import { Component } from "../../component";

export class CardBody extends Component {
    /**
     * @type {Boolean}
     */
    #isToggled = false;
    /**
     * @constructor
     * @param {object} config
     */
    constructor(config) {
        super(config);
    }
    /**
     * @returns {Boolean}
     */
    get isToggled() {
        return this.#isToggled;
    }
    /**
     *
     */
    draw() {
        super.draw();
        this.element.classList.add("card-body");
    }
    /**
     *
     */
    onFooterButton() {
        this.toggle();
    }
    /**
     *
     */
    toggle() {
        this.#isToggled = !this.#isToggled;
    }
}
