export class ApiService {
    /** @type {string} */
    static BASE_URL = 'https://deckofcardsapi.com/api/deck/';

    constructor() {}

    /**
     * @param {number} deckCount
     * @param {boolean} shuffle
     * @returns {Promise}
     */
    getNewDeck(deckCount = 1, shuffle = true) {
        let req = 'new/' + (shuffle ? 'shuffle/' : '') + '?deck_count=' + deckCount;
        return this.#doApiFetch(req);
    }

    /**
     *
     * @param {string} req
     * @returns {Promise}
     */
    #doApiFetch(req) {
        return new Promise((resolve, reject) => {
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
                    resolve(data);
                })
                .catch((err) => reject(err));
        });
    }
}
