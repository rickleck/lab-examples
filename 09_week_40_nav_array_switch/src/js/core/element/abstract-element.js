import { ElementConfig } from './config/element-config';

export class AbstractElement extends HTMLElement {
    /** @type {ElementConfig} */
    #config;

    /**
     * @constructor
     * @param {ElementConfig} config optional
     */
    constructor(config) {
        super();
        this.config = config ? config : new ElementConfig();
        this.validateConfig();
        this.populateFromConfig();
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
     * @returns {object}
     * @comment Override this getter to register default component id and classlist if needed
     */
    get defaults() {
        return { id: '', classList: '' };
    }

    /**
     * @param {string} htmlString
     */
    render(htmlString) {
        this.innerHTML = htmlString;
    }

    /**
     * @param {HTMLElement} element
     * @returns {AbstractElement}
     */
    appendTo(element) {
        element.append(this);
        return this;
    }

    /**
     * @param {HTMLElement} element
     * @returns {AbstractElement}
     */
    prependTo(element) {
        element.prepend(this);
        return this;
    }

    /**
     *
     */
    validateConfig() {
        this.config.id = this.config.id ? this.config.id : this.defaults.id;
        this.config.appendClassList(this.defaults.classList);
    }

    /**
     *
     */
    populateFromConfig() {
        this.id = this.config.id;
        for (const className of this.config.classList.split(' ')) this.classList.add(className);
    }
    /**
     *
     */
    destroy() {
        if (this.parentElement) this.parentElement.removeChild(this);
    }
}
