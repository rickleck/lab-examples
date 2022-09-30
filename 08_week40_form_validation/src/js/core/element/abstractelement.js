import { ElementConfig } from "./elementconfig";

export class AbstractElement extends HTMLElement {
    /** @type {ElementConfig} */
    #config;
    /**
     * @constructor
     * @param {ElementConfig} config optional
     */
    constructor(config) {
        super();
        this.config = config ? config : this.createConfig();
        this.#populateFromConfig();
    }
    /**
     * @param {ElementConfig} config
     */
    set config(config) {
        this.#config = config;
    }
    /**
     * @returns {ElementConfig}
     */
    get config() {
        return this.#config;
    }
    /**
     *
     * @returns {ElementConfig}
     */
    createConfig() {
        //Creates empty config if this method is not overridden
        return new ElementConfig();
    }
    /**
     * @param {string} htmlString
     */
    render(htmlString) {
        this.innerHTML = htmlString;
    }
    /**
     * @param {HTMLElement} el
     * @returns {ElementBase}
     */
    appendTo(element) {
        element.append(this);
        return this;
    }
    /**
     * @param {HTMLElement} el
     * @returns {ElementBase}
     */
    prependTo(element) {
        element.prepend(this);
        return this;
    }
    /**
     *
     */
    #populateFromConfig() {
        if (this.config.id !== undefined) {
            this.id = this.config.id;
        }
        if (this.config.classList !== undefined) {
            for (const className of this.config.classList) {
                this.classList.add(className);
            }
        }
    }
}
