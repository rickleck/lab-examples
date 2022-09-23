import { ENV } from "../utils/env.js";
import { Modes } from "./modes/modes.js";
import { PrinterHelpers } from "./helpers/printerhelpers.js";

export class Printer {
    /** @type {string} */
    #path;
    /** @type {string} */
    #param;
    /** @type {string} */
    #order;
    /** @type {string} */
    #cursor;
    /** @type {HTMLElement} */
    #htmlConsole;
    /** @type {HTMLElement} */
    #btnEnter;
    /**
     * @constructor
     * @param {string} order
     */
    constructor(order = "") {
        if (ENV.BROWSER) {
            this.#init(order);
        }
    }
    /**
     * @param {string} id
     */
    set mode(id) {
        let mode = Modes.getMode(id);
        this.#path = mode.path[this.#order];
        this.#param = mode.param;
        this.#reset();
    }
    /**
     *
     */
    print() {
        this.log("// Override this function...");
    }
    /**
     * @param {string} msg
     */
    log(msg) {
        console.log(msg);
        if (ENV.BROWSER) this.#printToBrowser(msg);
    }
    /**
     *
     */
    destroy() {
        this.#clear();
        window.removeEventListener("keypress", this);
        this.#btnEnter.removeEventListener("click", this);
        this.#htmlConsole = undefined;
        this.#btnEnter = undefined;
    }
    /**
     * @param {Event} event
     */
    handleEvent(event) {
        switch (event.type) {
            case "keypress":
                if (event.code.toLowerCase() === "enter") this.#run();
                break;
            case "click":
                this.#run();
                break;
        }
    }
    /**
     * @param {string} order
     */
    #init(order) {
        this.#order = order;
        this.#cursor = '<span class="blink">|</span>';
        this.#htmlConsole = document.querySelector("#console");
        this.#btnEnter = document.querySelector("#btn-enter");
        window.addEventListener("keypress", this);
        this.#btnEnter.addEventListener("click", this);
    }
    /**
     *
     */
    #run() {
        this.#removeCursor();
        this.print();
        this.#addCursor();
    }
    /**
     *
     */
    #reset() {
        this.#clear();
        this.#addCursor();
    }
    /**
     *
     */
    #clear() {
        this.#htmlConsole.innerHTML = "";
    }
    /**
     *
     */
    #addCursor() {
        this.#printToBrowser(this.#path + this.#param + this.#order + this.#cursor);
    }
    /**
     *
     */
    #removeCursor() {
        this.#htmlConsole.innerHTML = this.#htmlConsole.innerHTML.replace(this.#cursor, "");
    }
    /**
     * @param {string} msg
     */
    #printToBrowser(msg) {
        this.#htmlConsole.innerHTML += msg + PrinterHelpers.lineBreak;
    }
}
