export class Layout {
    /** @type {HTMLElement[]} */
    #cols = [];
    /**
     * @constructor
     * @param {string} title
     */
    constructor(title = "") {
        this.#draw(title);
    }
    /**
     * @param {number} numCol
     * @returns {HTMLElement}
     */
    getColumn(numCol) {
        return this.#cols[numCol - 1];
    }
    /**
     * @param {string} title
     */
    #draw(title) {
        document.body.classList.add("pt-5", "pt-lg-0", "px-lg-0");
        document.body.innerHTML = this.#getHTML(title);

        const row = document.body.querySelector(".row");
        for (let i = 0; i < 2; i++) {
            let col = document.createElement("div");
            col.classList.add("col-lg-6");
            this.#cols.push(col);
            row.appendChild(col);
        }
    }
    /**
     * @param {string} title
     * @returns {string}
     */
    #getHTML(title) {
        return `<main class="d-lg-flex align-items-center h-100">
                    <div class="container">
                        <h1>${title}</h1>
                        <div class="row g-4 pb-4 pb-lg-0""></div>
                     </div>
                </main>`;
    }
}
