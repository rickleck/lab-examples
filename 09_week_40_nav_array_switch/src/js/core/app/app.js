import { Navigation } from '../../components/navigation/navigation';

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

    /** @type {Navigation} */
    #navigation;

    /**
     * @constructor
     */
    constructor() {}

    /**
     *
     */
    run() {
        this.#navigation = new Navigation().appendTo(document.body);
    }

    /**
     * @param {string} href
     */
    reportNavigationClick(href) {
        console.log(href);
    }
}
