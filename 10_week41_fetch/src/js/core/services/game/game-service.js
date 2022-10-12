import { ApiService } from '../api/api-service';

export class GameService {
    /** @type {ApiService}*/
    #api;
    /**
     * @constructor
     */
    constructor() {
        this.#init();
    }

    /**
     *
     */
    #init() {
        this.#api = new ApiService();
    }

    /**
     *
     */
    startNewGame() {
        this.#createNewDeck();
    }

    /**
     *
     */
    #createNewDeck() {
        this.#api
            .getNewDeck()
            .then((data) => {
                console.log(data);
                document.querySelector('#console').innerHTML = JSON.stringify(
                    data,
                    null,
                    '<br>&emsp;'
                ).replace('}', '<br>}');
            })
            .catch((err) => console.log(err));
    }
}
