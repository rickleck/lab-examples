import { Component } from "../component";
import { CardBody } from "./body/cardbody";
import { CardBody1 } from "./body/cardbody1";
import { CardBody2 } from "./body/cardbody2";
import { CardBody3 } from "./body/cardbody3";
import { CardFooter } from "./footer/cardfooter";
import { CardHeader } from "./header/cardheader";

export class Card extends Component {
    /** @type {Component} */
    #header;
    /** @type {Component} */
    #body;
    /** @type {Component} */
    #footer;
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
        this.element.classList.add("card", `card-${this.config.order}`, "shadow");

        this.#header = new CardHeader({ title: `# ${this.config.order}` });
        this.element.appendChild(this.#header.element);

        this.#body = this.#getBody(this.config.order);
        this.element.appendChild(this.#body.element);

        this.#footer = new CardFooter(this.config);
        this.element.appendChild(this.#footer.element);
        this.#footer.element.addEventListener("click", this);
    }
    /**
     * @param {Event} event
     */
    handleEvent(event) {
        if (event.type === "click" && event.target.id.includes("btn-footer-")) {
            this.#body.onFooterButton();
        }
    }
    /**
     * @param {number} order
     * @returns {CardBody}
     */
    #getBody(order) {
        let bodyClass;
        switch (order) {
            case 1:
                bodyClass = CardBody1;
                break;
            case 2:
                bodyClass = CardBody2;
                break;
            case 3:
                bodyClass = CardBody3;
                break;
            default:
                bodyClass = CardBody;
                break;
        }
        return new bodyClass();
    }
}
