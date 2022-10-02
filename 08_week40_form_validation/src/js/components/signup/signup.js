import HTMLTemplate from "bundle-text:./signup.html";
import { App } from "../../core/app/app";
import { AbstractElement } from "../../core/element/abstractelement";
import { ElementConfig } from "../../core/element/config/elementconfig";
import { TooltipConfig } from "../tooltip/config/tooltipconfig";
import { Tooltip } from "../tooltip/tooltip";

export class SignUp extends AbstractElement {
    /** @type {HTMLFormElement} */
    #form;

    /**  @type {HTMLObjectElement[]} */
    #inputs;

    /** @type {HTMLElement} */
    #success;

    /** @type {Tooltip} */
    #toolTip;

    /** @type {string} */
    #mode;

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
    set mode(value) {
        this.#mode = value;
        this.#form.noValidate = this.#mode === App.MODE_CUSTOM;
        this.#hideInputError();
    }

    /**
     * @returns {object}
     */
    get defaults() {
        return { id: "signup", classList: "signup" };
    }

    /**
     *
     */
    render() {
        super.render(HTMLTemplate);
        this.#form = this.querySelector(".signup__form");
        this.#inputs = this.#form.querySelectorAll("input, select");
        this.#success = this.querySelector(".signup__success");
        this.#addListeners();
    }

    /**
     *
     */
    #addListeners() {
        this.#form.addEventListener("submit", (event) => {
            event.preventDefault();
            if (this.#mode === App.MODE_CUSTOM) {
                this.#form.querySelector("button").blur();
                if (this.#validate()) this.#submitForm();
            } else {
                this.#submitForm();
            }
        });
        this.#form.addEventListener("input", () => this.#hideInputError(), true);
        this.#success.querySelector("button").addEventListener("click", () => this.#hideSuccess());
    }

    /**
     *
     */
    #validate() {
        let valid = true;
        this.#form.checkValidity();
        for (const input of this.#inputs) {
            if (!input.validity.valid) {
                valid = false;
                this.#showInputError(input);
                break;
            }
        }
        return valid;
    }

    /**
     * @comment Real scenario: this.#form.submit();
     */
    #submitForm() {
        this.#showSuccess();
    }

    /**
     * @param {HTMLObjectElement} input
     */
    #showInputError(input) {
        input.classList.add("is-invalid");
        this.#addErrorTooltip(input);
    }

    /**
     *
     */
    #hideInputError() {
        for (const input of this.#inputs) input.classList.remove("is-invalid");
        this.#removeTooltip();
    }

    /**
     *
     */
    #showSuccess() {
        this.#success.classList.add("show");
    }

    /**
     *
     */
    #hideSuccess() {
        this.#success.classList.remove("show");
        this.#reset();
    }

    /**
     *
     */
    #reset() {
        for (const input of this.#inputs)
            input.type === "checkbox" ? (input.checked = false) : (input.value = "");
    }

    /**
     * @param {HTMLObjectElement} input
     */
    #addErrorTooltip(input) {
        if (!this.#toolTip)
            this.#toolTip = new Tooltip(
                new TooltipConfig({
                    mode: Tooltip.MODE_ERROR,
                    targetElement: input.parentElement,
                    msg: input.validationMessage,
                    offsetX: -15,
                    offsetY: input.dataset.tooltipOffsetY,
                })
            );
    }

    /**
     *
     */
    #removeTooltip() {
        if (this.#toolTip) this.#toolTip.destroy();
        this.#toolTip = undefined;
    }
}

/**
 * @comment Register as custom html-element
 */
window.customElements.define("component-signup", SignUp);
