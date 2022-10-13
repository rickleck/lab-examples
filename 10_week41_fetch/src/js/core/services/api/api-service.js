export class ApiService {
    /** @type {string} */
    static BASE_URL = 'https://deckofcardsapi.com/api/deck';

    /** @type {string} */
    static DECK_TOP = '';

    /** @type {string} */
    static DECK_BOTTOM = 'bottom/';

    /** @type {string} */
    static DECK_RANDOM = 'random/';

    /** @type {string} */
    #deckID;

    /**
     * @constructor
     */
    constructor() {}

    /**
     * @param {number} count
     * @returns {Promise}
     */
    async getNewDeck(count = 1) {
        const data = await this.#doApiFetch(`/new/shuffle/?deck_count=${count}`);
        this.#deckID = data.deck_id;
    }

    /**
     * @param {number} count
     * @param {string} position DECK_TOP (default), DECK_BOTTOM, DECK_RANDOM
     * @returns {Promise}
     */
    drawFromDeck(count, position = ApiService.DECK_TOP) {
        return this.#doApiFetch(`/${this.#deckID}/draw/${position}?count=${count}`);
    }

    /**
     * @param {string} pile
     * @param {number} count
     * @param {string} position DECK_TOP (default), DECK_BOTTOM, DECK_RANDOM
     * @returns {Promise}
     */
    drawFromPile(pile, count, position = ApiService.DECK_TOP) {
        return this.#doApiFetch(`/${this.#deckID}/pile/${pile}/draw/${position}?count=${count}`);
    }

    /**
     * @param {string} pile
     * @param {object[]} cards
     * @returns {Promise}
     */
    addToPile(pile, cards) {
        return this.#doApiFetch(
            `/${this.#deckID}/pile/${pile}/add/?cards=${this.#getCardCodes(cards)}`
        );
    }

    /**
     * @param {string} req
     * @returns {Promise}
     */
    #doApiFetch(req) {
        return new Promise((resolve, reject) => {
            console.log('%c[API Call]' + req, 'color: grey');
            fetch(ApiService.BASE_URL + req, {
                method: 'GET',
            })
                .then((res) => {
                    if (!res.ok) {
                        throw new Error(res.statusText);
                    }
                    return res.json();
                })
                .then((data) => {
                    console.log('%c[API Data]', 'color: grey', data);
                    resolve(data);
                })
                .catch((err) => reject(err));
        });
    }
    /**
     * @param {object[]} cards
     * @returns {string}
     */
    #getCardCodes(cards) {
        return cards.map((card) => card.code).join(',');
    }
}
