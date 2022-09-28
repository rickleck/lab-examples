import { CardBody } from "./cardbody";

export class CardBody3 extends CardBody {
    /** @type {HTMLFormElement} */
    #form;
    /** @type {HTMLElement} */
    #result;
    /**
     * @constructor
     * @param {object} config
     */
    constructor(config) {
        super(config);
    }
    /**
     *
     */
    draw() {
        super.draw();

        this.element.innerHTML = this.#getHTML();
        this.#form = this.element.querySelector("form");
        this.#result = this.element.querySelector("#result");
        this.#reset();

        this.#form.addEventListener("change", () => {
            this.#calculate();
        });
    }
    /**
     *
     */
    onFooterButton() {
        this.#reset();
    }
    /**
     * @returns {string}
     */
    #getHTML() {
        return `<p class="mb-2 fw-bold">Calculate Box Volume</p>
                <form submit="" class="row mb-3 mb-lg-5">
                    ${this.#getInput("Width (x)", "x")}
                    ${this.#getInput("Height (y)", "y")}
                    ${this.#getInput("Depth (z)", "z", "mb-0")}
                 </form>
                <div id="result" class="mb-3 mb-lg-0">The volume is 
                    <strong><span></span> cm<sup>3</sup></strong>.
                </div>`;
    }
    /**
     * @param {string} label
     * @param {string} id
     * @param {string} mb
     * @returns {string}
     */
    #getInput(label, id, mb = "mb-2") {
        return `<div class="col-sm ${mb} mb-sm-0">
                    <label for="${id}" class="form-label mb-0">${label}</label>
                    <div class="input-group">
                        <input type="number" min="0" step="0.1" class="form-control" id="${id}" required>
                        <span class="input-group-text">cm</span>
                    </div>
                </div>`;
    }
    /**
     *
     */
    #calculate() {
        let x = this.#form.elements["x"].value;
        let y = this.#form.elements["y"].value;
        let z = this.#form.elements["z"].value;
        let result = x * y * z;
        this.#result.querySelector("span").innerText = +result.toFixed(2);
    }
    /**
     *
     */
    #reset() {
        const inputs = this.#form.getElementsByTagName("input");
        for (let input of inputs) {
            input.value = 0;
        }
        this.#calculate();
    }
}
