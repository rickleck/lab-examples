export class ElementConfig {
    /**
     * @constructor
     * @param {object} init
     */
    constructor(init) {
        this.id;
        this.classList;
        this.options;
        this.populate(init);
    }

    /**
     * @param {string} value string of space separated class names
     */
    appendClassList(value) {
        this.classList = this.classList ? this.classList : "";
        let prefix = this.classList.length > 0 && !this.classList.endsWith(" ") ? " " : "";
        this.classList += prefix + value;
    }

    /**
     * @param {object} init
     */
    populate(init) {
        if (init) {
            for (const key in init) {
                if (key == "classList") {
                    this.appendClassList(init[key]);
                } else {
                    this[key] = init[key];
                }
            }
        }
    }
}
