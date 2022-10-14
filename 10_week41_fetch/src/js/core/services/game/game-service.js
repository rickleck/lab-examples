import { Constants } from '../../constants/constants';
import { ApiService } from '../api/api-service';
import { CardVO } from './vo/card-vo';
import { PlayerVO } from './vo/player-vo';

export class GameService {
    /** @type {ApiService}*/
    #api;

    /** @type {Card[]}*/
    #cardsInPlay = [];

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
     * @returns {Promise}
     * @comment Draw half the deck and store in a pile for each player
     */
    async setupNewGame() {
        try {
            await this.#api.getNewDeck();
            await this.#setupStartHand(Constants.GAME.USER);
            await this.#setupStartHand(Constants.GAME.COMPUTER);
            console.log('New game ready');
        } catch (error) {
            console.error(error);
        }
    }

    /**
     * @returns {object}
     */
    async playRound() {
        console.log('Play round');

        try {
            const user = await this.#drawCard(new PlayerVO(Constants.GAME.USER));
            const computer = await this.#drawCard(new PlayerVO(Constants.GAME.COMPUTER));

            console.log('user.card: ' + user.card.valueByNumber);
            console.log('computer.card: ' + computer.card.valueByNumber);

            if (user.card.valueByNumber === computer.card.valueByNumber) {
                // WAR
                console.log('WAR');
                user.state = computer.state = Constants.GAME.WAR;
                await this.#drawCard(user);
                await this.#drawCard(computer);
            } else {
                // WIN / LOSE
                console.log('WIN / LOSE');
                if (user.card.valueByNumber > computer.card.valueByNumber) {
                    user.state = Constants.GAME.WIN;
                    computer.state = Constants.GAME.LOSE;
                } else {
                    user.state = Constants.GAME.LOSE;
                    computer.state = Constants.GAME.WIN;
                }
            }

            console.log('user: ', user);
            console.log('computer:', computer);
        } catch (error) {
            console.error(error);
        }

        /*
        TODO:

        ROUND

        x Draw 1 card from each player's pile via api. Return it as a CardVO (CardValueObject)
        x Create a PlayerVO (PlayerValueObject) and populate with the card for each player
        x Add the cards to a list of cards in play
        x Determine round result (card with highest value or even)

        if WIN / LOSE

        x Set states WIN or LOSE to each PlayerVO
        - Update api and move all cards in play to winner's pile
        - Set remaining cards to each PlayerVO
        - Clear the cards in play list
        - Declare war winner if previous round was game service state WAR
        - Declare overall winner if other player has 0 cards
        - Return result of round with each PlayerVO

        else if WAR (even)S

        - Set game service state to WAR
        x Set state WAR for each player
        x Draw 1 extra card for each player (the cards facing down)
        X Add the cards to the cards in play list
        x Set remaining cards for each player
        - Declare overall winner if other player has 0 cards
        - Return result of round with each PlayerVO

        */
    }

    /**
     * @returns {Promise}
     */
    async #setupStartHand(id) {
        const apiData = await this.#api.drawFromDeck(26);
        await this.#api.addToPile(id, apiData.cards);
    }

    /**
     * @param {PlayerVO} pVO
     * @returns {PlayerVO}
     */
    async #drawCard(pVO) {
        const apiData = await this.#api.drawFromPile(pVO.id);
        const card = new CardVO(apiData.cards[0]);
        if (pVO.state !== Constants.GAME.WAR) pVO.card = card;
        this.#cardsInPlay.push(card);
        pVO.remaining = apiData.piles[pVO.id].remaining;
        return pVO;
    }
}
