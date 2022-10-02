import HTMLTemplate from "bundle-text:./menu.html";
import { App } from "../../core/app/app";
import { AbstractElement } from "../../core/element/abstractelement";
import { ElementConfig } from "../../core/element/config/elementconfig";

export class Menu extends AbstractElement {
    /**  @type {HTMLButtonElement[]} */
    #buttons;

    /**
     * @constructor
     * @param {ElementConfig} config
     */
    constructor(config) {
        super(config);
        this.render();
    }

    /**
     * @param {string} value
     */
    set active(value) {
        for (const button of this.#buttons) button.disabled = button.id === value;
    }

    /**
     * @returns {object}
     */
    get defaults() {
        return { id: "menu", classList: "menu" };
    }

    /**
     *
     */
    render() {
        super.render(HTMLTemplate);
        this.#buttons = this.querySelectorAll("button");
        this.addEventListener(
            "click",
            (event) => {
                if (event.target.tagName.toLowerCase() === "button")
                    App.instance.reportMenuClick(event.target.id);
            },
            true
        );
    }
}

/**
 * @comment Register as custom html-element
 */
window.customElements.define("component-menu", Menu);
