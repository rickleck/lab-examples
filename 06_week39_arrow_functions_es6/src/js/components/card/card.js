import { Component } from "../component";
import { CardBody } from "./elements/cardbody";
import { CardFooter } from "./elements/cardfooter";
import { CardHeader } from "./elements/cardheader";

export class Card extends Component {
    /** type {Component} */
    #header;
    /** type {Component} */
    #body;
    /** type {Component} */
    #footer;
    #test;
    /*
     * @constructor
     */
    constructor(config) {
        super(config);
    }
    /**
     *
     */
    draw() {
        this.element = document.createElement("div");
        this.element.classList.add("card", "shadow");
        this.element.style.height = "300px";

        this.#header = new CardHeader({ title: "Function " + this.config.order });
        this.element.appendChild(this.#header.element);

        this.#body = new CardBody();
        this.element.appendChild(this.#body.element);

        this.#footer = new CardFooter();
        this.element.appendChild(this.#footer.element);
        this.#footer.element.addEventListener("click", this);
    }
    /**
     * @param {Event} event
     */
    handleEvent(event) {
        let id = event.target["id"];
    }
}
