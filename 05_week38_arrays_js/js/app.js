import { Navigation } from "./navigation/navigation.js";
import { Modes } from "./printer/modes/Modes.js";
import { Labs } from "./printer/labs/labs.js";
/*
 * App browser version (terminal version in terminal/app.js)
 */
class App {
    /** @type {string} */
    #currentMode;
    /** @type {Printer} */
    #printer;
    /** @type {Navigation} */
    #navModes;
    /** @type {Navigation} */
    #navLabs;
    /** @type {string} */
    #NAV_MODES_ID;
    /** @type {string} */
    #NAV_LABS_ID;
    /**
     * @constructor
     */
    constructor() {
        this.#NAV_MODES_ID = "nav_modes";
        this.#NAV_LABS_ID = "nav_labs";
    }
    /**
     * @returns {App} App
     */
    static instance() {
        return new App();
    }
    /**
     *
     */
    run() {
        this.#navLabs = new Navigation(this.#NAV_LABS_ID);
        this.#setLab(5);

        this.#navModes = new Navigation(this.#NAV_MODES_ID);
        this.#setMode(Modes.MODES_DEFAULT_ID);

        window.addEventListener(Navigation.EVENT_CLICK, (event) => {
            switch (event.detail.navID) {
                case this.#NAV_MODES_ID:
                    this.#setMode(event.detail.itemID);
                    break;
                case this.#NAV_LABS_ID:
                    this.#setLab(event.detail.itemID);
                    this.#setMode(this.#currentMode);
            }
        });
    }
    /**
     * @param {string | number} order
     */
    #setLab(order) {
        this.#navLabs.active = order;
        if (this.#printer) this.#printer.destroy();
        this.#printer = Labs.getPrinter(order);
    }
    /**
     * @param {string} id
     */
    #setMode(id) {
        this.#currentMode = id;
        this.#navModes.active = id;
        this.#printer.mode = id;
    }
}

App.instance().run();
