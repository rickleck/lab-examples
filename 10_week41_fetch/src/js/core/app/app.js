import { Game } from '../../components/game/game';
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

    /** @type {Game} */
    #game;

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
     * @returns {Game}
     */
    get game() {
        return this.#game;
    }

    /**
     *
     */
    run() {
        const devMode = new URLSearchParams(document.location.search).get('dev');

        this.#gameService = new GameService(devMode);

        this.#game = new Game();
        document.querySelector('main').appendChild(this.#game);
        this.#game.render();
    }
}
