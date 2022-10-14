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

        //Test buttons
        const btnStart = document.createElement('button');
        btnStart.innerText = 'Log New Game';
        btnStart.classList.add('generic-button');
        btnStart.addEventListener('click', () => {
            btnRound.disabled = true;
            this.#gameService.setupNewGame().then(() => (btnRound.disabled = false));
        });
        document.querySelector('main').appendChild(btnStart);

        const btnRound = document.createElement('button');
        btnRound.style.marginLeft = '10px';
        btnRound.innerText = 'Log Play Round';
        btnRound.classList.add('generic-button');
        btnRound.disabled = true;
        btnRound.addEventListener('click', () => this.#gameService.playRound());
        document.querySelector('main').appendChild(btnRound);
    }
}
