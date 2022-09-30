import HTMLTemplate from "bundle-text:./signup.html";
import { AbstractElement } from "../../core/element/abstractelement";
import { ElementConfig } from "../../core/element/elementconfig";

export class SignUp extends AbstractElement {
    /** @type {HTMLFormElement} */
    #form;
    /**  @type {HTMLObjectElement[]} */
    #inputs;
    /**
     * @constructor
     */
    constructor(config) {
        super(config);
        this.render();
    }
    /**
     *
     * @returns {ElementConfig}
     * Is created if no config is passed to the constructor
     */
    createConfig() {
        return new ElementConfig({
            id: "signup",
            classList: "signup",
        });
    }
    /**
     *
     */
    render() {
        super.render(HTMLTemplate);
        this.#form = this.querySelector("form");
        this.#inputs = this.#form.querySelectorAll("input, select");
        this.#addFormListeners();
    }
    /**
     *
     */
    #addFormListeners() {
        this.#form.addEventListener("submit", (event) => {
            event.preventDefault();
            this.#form.checkValidity();
            let formIsValid = true;
            for (const input of this.#inputs) {
                formIsValid = input.validity.valid;
                if (!formIsValid) {
                    this.#showInputError(input);
                    break;
                }
            }
            if (formIsValid) this.#form.submit();
        });

        this.#form.addEventListener(
            "input",
            (event) => {
                this.#hideInputError(event.target);
            },
            true
        );
    }
    /**
     * @param {HTMLObjectElement} input
     */
    #showInputError(input) {
        input.classList.add("is-invalid");
        console.log(input.validationMessage);
    }
    /**
     * @param {HTMLObjectElement} input
     */
    #hideInputError(input) {
        input.classList.remove("is-invalid");
    }
}

//Register as custom html-element
window.customElements.define("sign-up", SignUp);
