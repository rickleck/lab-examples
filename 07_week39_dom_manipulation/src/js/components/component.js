export class Component {
    /** @type {HTMLElement} */
    #element;
    /** @type {object} */
    #config;
    /**
     * @constructor
     * @param {object} config
     */
    constructor(config = {}) {
        this.#config = config;
    }
    /**
     * @returns {object}
     */
    get config() {
        return this.#config;
    }
    /**
     * @param {HTMLElement} el
     */
    set element(el) {
        this.#element = el;
    }
    /**
     * @returns {HTMLElement}
     */
    get element() {
        if (this.#element === undefined) {
            this.draw();
        }
        return this.#element;
    }
    /**
     *
     */
    draw() {
        this.element = document.createElement("div");
    }
}
