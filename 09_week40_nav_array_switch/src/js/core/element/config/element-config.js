export class ElementConfig {
    /** @type {string[]}*/
    #classList = [];
    /**
     * @constructor
     * @param {object} init
     */
    constructor(init) {
        /** @type {string} */
        this.id;

        /** @type {object} */
        this.options;

        this.populate(init);
    }

    /**
     * @param {*} space-separated string or an array of class-names
     */
    set classList(value) {
        if (typeof value === 'string') {
            value = value.split(' ');
        }
        this.#classList = [...this.#classList, ...value];
    }
    /**
     * @returns {string[]}
     */
    get classList() {
        return this.#classList;
    }
    /**
     * @param {object} init
     */
    populate(init) {
        if (init) Object.assign(this, init);
    }
}
