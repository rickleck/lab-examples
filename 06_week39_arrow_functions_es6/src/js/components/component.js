export class Component {
    /** type {HTMLElement} */
    #element;
    /** type {Object} */
    #config;
    /*
     * @constructor
     */
    constructor(config = {}) {
        this.#config = config;
    }
    /**
     * @returns {Object}
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
        if (this.#element == undefined) {
            this.draw();
        }
        return this.#element;
    }
    /**
     *
     */
    draw() {}
}
