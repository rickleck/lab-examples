import { ApiService } from '../api/api-service';
import { CardVO } from './card/card-vo';
import { PlayerVO } from './player/player-vo';

export class GameService {
    /** @type {string} */
    static PLAYER_USER = 'player_user';

    /** @type {string} */
    static PLAYER_COMPUTER = 'player_computer';

    /** @type {string} */
    static ROUND_WIN = 'round_win';

    /** @type {string} */
    static ROUND_LOSE = 'round_lose';

    /** @type {string} */
    static ROUND_WAR = 'round_war';

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
    async setupNewGame() {
        try {
            await this.#api.getNewDeck();
            await this.#setupStartHand(GameService.PLAYER_USER);
            await this.#setupStartHand(GameService.PLAYER_COMPUTER);
            console.log('New game ready');
            //await this.playRound();
        } catch (error) {
            console.error(error);
        }
    }

    /**
     * @returns {object}
     */
    async playRound() {
        console.log('Play round');
        const user = this.#getPlayerRound(GameService.PLAYER_USER);
        const computer = this.#getPlayerRound(GameService.PLAYER_COMPUTER);

        /*

        ROUND:

        - Draw 1 card from each player's pile via api
        - Create PlayerVO-ojects and populate with the card for each player
        - Add the cards to a list of cards in play
        - Determine round result (card with highest value)

        if WIN or LOSE

        - Set ROUND_WIN or ROUND_LOSE to each player's VO
        - Update api and move all cards in play to winner's pile
        - Set remaining cards to each player's VO
        - Clear the cards in play list
        - Declare war winner if previous round was ROUND_WAR
        - Declare overall winner if other player has 0 cards
        - Return result of round with each player's VO

        else if WAR (draw)

        - Set game service state to ROUND_WAR
        - Set ROUND_WAR to each player
        - Draw 1 extra card for each player (the ones facing down)
        - Add the cards to the cards in play list
        - Set remaining cards for each player
        - Declare overall winner if other player has 0 cards
        - Return result of round with each player's VO

        */
    }
    /**
     * @param {id} string
     * @returns {PlayerVO}
     */
    async #getPlayerRound(id) {
        const cards = await this.#api.drawFromPile(id, 1, ApiService.DECK_BOTTOM);
        return new PlayerVO(new CardVO(cards.cards[0]));
    }
    /**
     * @comment Draw half the deck and store in a pile for each player
     */
    async #setupStartHand(player) {
        const data = await this.#api.drawFromDeck(26);
        await this.#api.addToPile(player, data.cards);
    }
}
