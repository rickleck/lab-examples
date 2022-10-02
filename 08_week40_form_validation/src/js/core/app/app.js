import { Menu } from "../../components/menu/menu";
import { SignUp } from "../../components/signup/signup";

export class App {
    /** @type {string} */
    static MODE_CUSTOM = "custom";

    /** @type {string} */
    static MODE_BROWSER = "browser";

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

    /** @type {SignUp} */
    #signUp;

    /** @type {Menu} */
    #menu;

    /**
     * @constructor
     */
    constructor() {}

    /**
     * @param {string} value
     */
    set mode(value) {
        this.#signUp.mode = value;
        this.#menu.active = value;
    }

    /**
     *
     */
    run() {
        const container = document.querySelector("#app-container");
        this.#menu = new Menu().appendTo(container);
        this.#signUp = new SignUp().appendTo(container);
        this.mode = App.MODE_CUSTOM;
    }

    /**
     * @param {string} id
     */
    reportMenuClick(id) {
        this.mode = id;
    }
}
