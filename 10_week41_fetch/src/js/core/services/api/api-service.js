import { Constants } from '../../constants/constants';

export class ApiService {
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
     * @param {string} position see Constants.API
     * @returns {Promise}
     */
    drawFromDeck(count, position = Constants.API.DECK_TOP) {
        return this.#doApiFetch(`/${this.#deckID}/draw/${position}?count=${count}`);
    }

    /**
     * @param {string} pile
     * @param {number} count
     * @param {string} position see Constants.API
     * @returns {Promise}
     */
    drawFromPile(pile, count = 1, position = Constants.API.DECK_BOTTOM) {
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
            if (Constants.API.LOG) console.log('%c[API Call]' + req, 'color: grey');
            fetch(Constants.API.BASE_URL + req, {
                method: 'GET',
            })
                .then((res) => {
                    if (!res.ok) {
                        throw new Error(res.statusText);
                    }
                    return res.json();
                })
                .then((data) => {
                    if (Constants.API.LOG) console.log('%c[API Data]', 'color: grey', data);
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
