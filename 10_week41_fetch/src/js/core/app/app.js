import { GameService } from '../services/game/game-service';

export class App {
    /** @type {App} */
    static #instance;

    /**
     * @returns {App} global instance of App
     */
    static get instance() {
        if (!this.#instance) {
            this.#instance = new App();
        }
        return this.#instance;
    }

    /** @type {GameService} */
    #gameService;

    /**
     * @constructor
     */
    constructor() {}

    /**
     * @returns {GameService}
     */
    get gameService() {
        return this.#gameService;
    }

    /**
     *
     */
    run() {
        document
            .querySelector('main')
            .insertAdjacentElement('afterbegin', document.createElement('h1')).innerHTML =
            'Week 41 Lab 10 Fetch (Deck of Cards)';

        this.#gameService = new GameService();
        this.#gameService.startNewGame();
    }
}
