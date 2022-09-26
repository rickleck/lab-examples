export class Layout {
    /** type {HTMLElement} */
    #row;
    /*
     * @constructor
     */
    constructor() {
        this.#draw();
    }
    /*
     * @returns {HTMLElement}
     */
    get column() {
        const col = document.createElement("div");
        col.classList.add("col-lg-6");
        this.#row.appendChild(col);
        return col;
    }
    /**
     *
     */
    #draw() {
        const main = document.createElement("main");
        main.classList.add("d-lg-flex", "align-items-center", "h-100");

        const container = document.createElement("div");
        container.classList.add("container");
        container.innerHTML = "<h1>Laboration 6: Arrow Functions - ES6</h1>";

        this.#row = document.createElement("div");
        this.#row.classList.add("row", "g-4", "pb-4", "pb-lg-0");

        document.body.appendChild(main);
        main.appendChild(container);
        container.appendChild(this.#row);
    }
}
