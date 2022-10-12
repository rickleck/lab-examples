export class App {
    /** @type {App} */
    static #instance;

    /**
     * @returns {App} global instance of App
     */
    static get instance() {
        if (!this.#instance) {
            this.#instance = new App();
        }
        return this.#instance;
    }

    /**
     * @constructor
     */
    constructor() {}

    /**
     *
     */
    run() {
        document.querySelector('main').appendChild(document.createElement('h1')).innerHTML =
            'Week 41 Lab 10 Fetch (Deck of Cards)';
    }
}
