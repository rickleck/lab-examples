import { Todo } from '../../components/todo/todo.js';

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
        const todo = new Todo();
        todo.appendTo(document.querySelector('main'));
    }
}
