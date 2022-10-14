export class PlayerVO {
    /**
     * @constructor
     * @param {string} id
     * @param {CardVO} card
     */
    constructor(id, card) {
        this.id = id;
        this.card = card;
        this.ramaining;
        this.state;
        this.warCards = [];
        this.endState;
    }
}
