export class Layout {
    /** @type {HTMLElement[]} */
    #cols = [];
    /**
     * @constructor
     */
    constructor() {
        this.#draw();
    }
    /**
     * @param {number} numCol
     * @returns {HTMLElement}
     */
    getColumn(numCol) {
        return this.#cols[numCol - 1];
    }
    /**
     *
     */
    #draw() {
        document.body.classList.add("pt-5", "pt-lg-0", "px-lg-0");

        const main = document.createElement("main");
        main.classList.add("d-lg-flex", "align-items-center", "h-100");
        document.body.appendChild(main);

        const container = document.createElement("div");
        container.classList.add("container");
        container.innerHTML = "<h1>Laboration 7: DOM Manipulation - JavaScript</h1>";
        main.appendChild(container);

        const row = document.createElement("div");
        row.classList.add("row", "g-4", "pb-4", "pb-lg-0");
        container.appendChild(row);

        for (let i = 0; i < 2; i++) {
            let col = document.createElement("div");
            col.classList.add("col-lg-6");
            this.#cols.push(col);
            row.appendChild(col);
        }
    }
}
