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
     * @param {string | string[]} value array or string of space separated class names
     */
    addClassList(value) {
        if (value !== undefined && typeof value === "string") {
            value = value.split(" ");
        }
        this.classList = value;
    }
    /**
     * @param {object} init
     */
    populate(init) {
        this.id = init.id;
        this.addClassList(init.classList);
        this.options = init.options;
    }
}
