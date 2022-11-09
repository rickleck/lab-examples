import { ElementConfig } from './config/element-config';

export class BaseElement {
    /** @type {ElementConfig} */
    #config;

    /** @type {HTMLElement} */
    #element;

    /**
     * @constructor
     * @param {ElementConfig} config optional
     */
    constructor(config) {
        this.config = config || new ElementConfig();
        this.validateConfig();
        this.populateFromConfig();
    }

    /**
     * @param {string}
     */
    set id(value) {
        this.element.id = value;
    }

    /**
     * @returns {HTMLElement}
     */
    get id() {
        return this.element.id;
    }

    /**
     * @param {HTMLElement}
     */
    set element(el) {
        this.#element = el;
    }

    /**
     * @returns {HTMLElement}
     */
    get element() {
        return this.#element;
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
        return { tag: 'div', id: '', classList: '' };
    }

    /**
     * @param {string} htmlString
     */
    render(htmlString) {
        this.element.innerHTML = htmlString;
    }

    /**
     * @param {HTMLElement} element
     * @returns {CustomElement}
     */
    appendTo(el) {
        el.appendChild(this.element);
        return this;
    }

    /**
     * @param {HTMLElement} element
     * @returns {CustomElement}
     */
    prependTo(el) {
        element.prependChild(this.element);
        return this;
    }

    /**
     *
     */
    validateConfig() {
        this.config.tag = this.config.tag || this.defaults.tag;
        this.config.id = this.config.id || this.defaults.id;
        this.config.classList = this.defaults.classList;
    }

    /**
     *
     */
    populateFromConfig() {
        this.element = document.createElement(this.config.tag);
        this.id = this.config.id;
        this.element.classList.add(...this.config.classList);
    }
    /**
     *
     */
    destroy() {
        this.element.remove();
    }
}
