import { Constants } from '../../constants/constants';
import { ApiService } from '../api/api-service';
import { CardVO } from './vo/card-vo';
import { PlayerVO } from './vo/player-vo';

export class GameService {
    /** @type {ApiService}*/
    #api;

    /** @type {PlayerVO}*/
    #user;

    /** @type {PlayerVO}*/
    #computer;

    /** @type {PlayerVO[]} */
    #players = [];

    /** @type {Card[]}*/
    #cardsInPlay = [];

    /**
     * @constructor
     */
    constructor() {
        this.#api = new ApiService();
    }

    /**
     * @param {string} id
     * @returns {PlayerVO}
     */
    player(id) {
        return this.#players.find((pVO) => pVO.id === id);
    }

    /**
     * @returns {Promise}
     */
    async setupNewGame() {
        console.log('%cSetting up new game...', 'color: yellow');

        this.#user = new PlayerVO(Constants.GAME.USER);
        this.#players.push(this.#user);

        this.#computer = new PlayerVO(Constants.GAME.COMPUTER);
        this.#players.push(this.#computer);

        try {
            await this.#api.getNewDeck();
            await this.#setupStartHand(Constants.GAME.USER);
            await this.#setupStartHand(Constants.GAME.COMPUTER);
        } catch (error) {
            console.error(error);
        }

        console.log('%cNew game ready', 'color: yellow');
    }

    /**
     * @returns {PlayerVO | undefined} PlayerVO is returned if it's the game end winner
     */
    async playRound() {
        console.log('-------------------');
        console.log('%cPlay round', 'color: yellow');

        try {
            await this.#drawCard(this.#user);
            await this.#drawCard(this.#computer);

            console.log('user.card: ' + this.#user.card.valueByNumber);
            console.log('computer.card: ' + this.#computer.card.valueByNumber);

            if (this.#user.card.valueByNumber === this.#computer.card.valueByNumber) {
                console.log('%cWAR', 'color: red');

                this.#user.state = this.#computer.state = Constants.GAME.WAR;

                await this.#drawCard(this.#user, true);
                await this.#drawCard(this.#computer, true);
            } else {
                let winner;
                let loser;

                if (this.#user.card.valueByNumber > this.#computer.card.valueByNumber) {
                    winner = this.#user;
                    loser = this.#computer;
                } else {
                    winner = this.#computer;
                    loser = this.#user;
                }

                winner.state = Constants.GAME.WIN;
                loser.state = Constants.GAME.LOSE;

                await this.#awardCardsInPlay(winner);

                console.log('%cWinner: ', 'color: lightgreen', winner);
                console.log('%cLoser: ', 'color: red', loser);
            }
        } catch (error) {
            console.error(error);
            return;
        }

        return this.#checkGameEndState();
    }

    /**
     * @param {id}
     * @returns {Promise}
     */
    async #setupStartHand(id) {
        const apiData = await this.#api.drawFromDeck(Constants.GAME.START_PILE);
        await this.#api.addToPile(id, apiData.cards);
    }

    /**
     * @param {PlayerVO} pVO
     * @param {boolean} isWarCard
     * @returns {Promise}
     */
    async #drawCard(pVO, isWarCard = false) {
        const apiData = await this.#api.drawFromPile(pVO.id);
        const card = new CardVO(apiData.cards[0]);
        if (!isWarCard) pVO.card = card;
        this.#cardsInPlay.push(card);
        pVO.remaining = apiData.piles[pVO.id].remaining;
    }

    /**
     * @param {PlayerVO} pVO
     * @returns {Promise}
     */
    async #awardCardsInPlay(pVO) {
        console.log('Cards in play for winner: ', this.#cardsInPlay);
        const apiData = await this.#api.addToPile(pVO.id, this.#cardsInPlay);
        pVO.remaining = apiData.piles[pVO.id].remaining;
        this.#cardsInPlay = [];
    }

    /**
     * @returns {PlayerVO}
     */
    #checkGameEndState() {
        const loser = this.#players.find((pVO) => pVO.remaining == 0);
        let winner;
        if (loser) {
            winner = this.#players.find((pVO) => pVO.remaining != 0);
            winner.endState = Constants.GAME.WIN;
            loser.endState = Constants.GAME.LOSE;

            console.log('-------------------');
            console.log('%cGame Over!', 'color: yellow');
            console.log('%cWinner: ', 'color: lightgreen', winner);
            console.log('%cLoser: ', 'color: red', loser);
        }
        return winner;
    }
}
