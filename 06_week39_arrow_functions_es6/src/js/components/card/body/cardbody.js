import { Component } from "../../component";

export class CardBody extends Component {
    /** @type {Array} */
    #states = [];
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
        for (let state of this.#states) {
            if (state.id == value) {
                state.element.classList.remove("d-none");
                state.run();
            } else {
                state.element.classList.add("d-none");
            }
        }
    }
    /**
     * @returns {Array}
     */
    get states() {
        return this.#states;
    }
    /**
     *
     */
    draw() {
        this.element = document.createElement("div");
        this.element.classList.add("card-body");

        let runs = [this.runState1, this.runState2];
        for (let i = 0; i < 2; i++) {
            let id = "state-" + (i + 1);
            let stateElelement = document.createElement("div");
            this.element.appendChild(stateElelement);
            this.#states.push({
                id: id,
                element: stateElelement,
                run: runs[i],
            });
        }

        this.drawState1();
        this.drawState2();
    }
    /**
     *
     */
    drawState1() {
        // Override this method
        const element = this.#states[0].element;
        element.innerHTML = "STATE 1";
    }
    /**
     *
     */
    runState1() {
        // Override this method
    }
    /**
     *
     */
    drawState2() {
        // Override this method
        const element = this.#states[1].element;
        element.innerHTML = "STATE 2";
    }
    /**
     *
     */
    runState2() {
        // Override this method
    }
}
