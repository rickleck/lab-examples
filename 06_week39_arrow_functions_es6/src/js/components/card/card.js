import { Component } from "../component";
import { CardBody } from "./body/cardbody";
import { CardBody1 } from "./body/cardbody1";
import { CardBody2 } from "./body/cardbody2";
import { CardBody3 } from "./body/cardbody3";
import { CardBody4 } from "./body/cardbody4";
import { CardFooter } from "./footer/cardfooter";
import { CardHeader } from "./header/cardheader";

export class Card extends Component {
    /** @type {Component} */
    #header;
    /** @type {Component} */
    #body;
    /** @type {Component} */
    #footer;
    #test;
    /*
     * @constructor
     */
    constructor(config) {
        super(config);
    }
    /**
     * @param {String} value
     */
    set state(value) {
        this.#body.state = value;
        this.#footer.state = value;
    }
    /**
     *
     */
    draw() {
        this.element = document.createElement("div");
        this.element.classList.add("card", "shadow");

        this.#header = new CardHeader({ title: "Function " + this.config.order });
        this.element.appendChild(this.#header.element);

        this.#body = this.getBody(this.config.order);
        this.element.appendChild(this.#body.element);

        this.#footer = new CardFooter();
        this.element.appendChild(this.#footer.element);
        this.#footer.element.addEventListener("click", this);

        this.state = "state-1";
    }
    /**
     * @param {Event} event
     */
    handleEvent(event) {
        let id = event.target["id"];
        if (id.includes("state-")) {
            this.state = event.target["id"];
        }
    }
    /**
     * @param {Number} order
     * @returns {CardBody}
     */
    getBody(order) {
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
            case 4:
                bodyClass = CardBody4;
                break;
            default:
                bodyClass = CardBody;
                break;
        }
        return new bodyClass();
    }
}
