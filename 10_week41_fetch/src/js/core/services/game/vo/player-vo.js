export class PlayerVO {
    #state = '';
    #prevState = '';
    /**
     * @constructor
     * @param {string} id
     */
    constructor(id) {
        this.id = id;
        this.card;
        this.ramaining;
        this.endState;
    }
    /**
     * @param {string} value
     */
    set state(value) {
        this.#prevState = this.#state;
        this.#state = value;
    }

    /**
     * @returns {string}
     */
    get state() {
        return this.#state;
    }

    /**
     * @returns {string}
     */
    get prevState() {
        return this.#prevState;
    }
}
