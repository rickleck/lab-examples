import { Constants } from '../../constants/constants';
import { ApiService } from '../api/api-service';
import { CardVO } from './vo/card-vo';
import { PlayerVO } from './vo/player-vo';

export class GameService {
    /** @type {ApiService}*/
    #api;

    /** @type {string} */
    #devMode;

    /** @type {object[]}*/
    #resultQueue;

    /** @type {CardVO[]}*/
    #cardsInPlay;

    /** @type {boolean} */
    #isGameOver;

    /** @type {boolean}*/
    #turnPending;

    /**
     * @constructor
     */
    constructor(devMode) {
        this.#devMode = devMode;
        this.#api = new ApiService();
    }

    /**
     * @returns {boolean}
     */
    get devMode() {
        return this.#devMode === Constants.GAME.DEV_MODE;
    }

    /**
     * @returns {Promise}
     */
    async setupNewGame() {
        console.clear();
        console.log('%cSetting up new game...', 'color: yellow');
        console.log(
            '%cConsole will always be 1 turn ahead of the interface,\nsince the next turn is preloaded in the background.',
            'color: yellow'
        );

        this.#resultQueue = [];
        this.#cardsInPlay = [];
        this.#isGameOver = false;
        this.#turnPending = false;

        let testCardCodes;
        let pileSize = Constants.GAME.START_PILE;
        if (this.devMode) {
            testCardCodes = {
                //user: '8H,4C,9S,QC,8C',
                //computer: '5C,4D,7S,QH,3H',
                user: '8H,4C,9S,8C',
                computer: '5C,4D,7S,KH',
            };
            pileSize = testCardCodes.user.split(',').length;
        }

        try {
            await this.#api.getNewDeck();
            await this.#setupStartHand(Constants.GAME.USER, testCardCodes);
            await this.#setupStartHand(Constants.GAME.COMPUTER, testCardCodes);
            //Preload first turn
            console.log('-------------------');
            console.log('%cNext turn', 'color: yellow');
            await this.#createTurn();
            return pileSize;
        } catch (error) {
            console.error(error);
        }

        console.log('%cNew game ready', 'color: yellow');
    }

    /**
     * @returns {object}
     */
    async playTurn() {
        if (this.#turnPending) return;

        console.log('-------------------');
        console.log('%cNext turn', 'color: yellow');

        //Check if result queue is empty
        if (this.#resultQueue.length === 0) {
            await this.#createTurn();
        }
        // Use first result in queue
        const result = this.#resultQueue.shift();

        //Preload next result
        if (!this.#isGameOver) this.#createTurn();

        return result;
    }

    /**
     * @param {id}
     * @param {object} testCardCodes
     * @returns {Promise}
     */
    async #setupStartHand(id, testCardCodes = undefined) {
        let apiData;
        if (!testCardCodes) {
            apiData = await this.#api.drawFromDeck(Constants.GAME.START_PILE);
            await this.#api.addToPile(id, this.#api.getCardCodes(apiData.cards));
        } else {
            apiData = await this.#api.drawFromDeck(52);
            const testCodes = testCardCodes[id];
            let returnCodes = [];
            for (const card of apiData.cards) {
                if (!testCodes.split(',').includes(card.code)) {
                    returnCodes.push(card.code);
                }
            }
            await this.#api.addToPile(id, testCodes);
            await this.#api.returnToDeck(returnCodes);
        }
    }

    /**
     * @returns {Promise}
     */
    async #createTurn() {
        this.#turnPending = true;
        try {
            const user = new PlayerVO(Constants.GAME.USER);
            const computer = new PlayerVO(Constants.GAME.COMPUTER);

            await this.#drawCard(user);
            await this.#drawCard(computer);

            console.log('user.card: ' + user.card.valueByNumber);
            console.log('computer.card: ' + computer.card.valueByNumber);

            let isWar = false;
            let winner;
            let loser;

            if (user.card.valueByNumber === computer.card.valueByNumber) {
                console.log('%cWAR', 'color: red');
                isWar = true;
                user.state = computer.state = Constants.GAME.WAR;

                await this.#drawCard(user, true);
                await this.#drawCard(computer, true);

                console.log('%cWar: ', 'color: red', user);
                console.log('%cWar: ', 'color: red', computer);
            } else {
                if (user.card.valueByNumber > computer.card.valueByNumber) {
                    winner = user;
                    loser = computer;
                } else {
                    winner = computer;
                    loser = user;
                }

                winner.state = Constants.GAME.WIN;
                loser.state = Constants.GAME.LOSE;

                await this.#awardCardsInPlay(winner);

                console.log('%cWinner: ', 'color: lightgreen', winner);
                console.log('%cLoser: ', 'color: red', loser);
            }

            const gameResult = this.#checkGameOver([user, computer]);
            if (gameResult) {
                winner = gameResult.winner;
                loser = gameResult.loser;
                await this.#awardCardsInPlay(winner);
            }

            const result = {
                user: user,
                computer: computer,
                winner: winner,
                loser: loser,
                isWar: isWar,
                isGameOver: this.#isGameOver,
            };

            this.#resultQueue.push(result);

            this.#turnPending = false;
        } catch (error) {
            this.#turnPending = false;
            console.error(error);
            return;
        }
    }

    /**
     * @param {PlayerVO} pVO
     * @param {boolean} isWarCard
     * @returns {Promise}
     */
    async #drawCard(pVO, isWarCard = false) {
        const apiData = await this.#api.drawFromPile(pVO.id);
        const card = new CardVO(apiData.cards[0]);
        if (!isWarCard) {
            await card.loadImage();
            pVO.card = card;
        }
        this.#cardsInPlay.push(card);
        pVO.remaining = apiData.piles[pVO.id].remaining;
    }

    /**
     * @param {PlayerVO} pVO
     * @returns {Promise}
     */
    async #awardCardsInPlay(pVO) {
        if (this.#cardsInPlay.length > 0) {
            console.log('Cards in play for winner: ', this.#cardsInPlay);
            const apiData = await this.#api.addToPile(
                pVO.id,
                this.#api.getCardCodes(this.#cardsInPlay)
            );
            pVO.remaining = apiData.piles[pVO.id].remaining;
            this.#cardsInPlay = [];
        }
    }

    /**
     * @returns {object}
     */
    #checkGameOver(players) {
        const loser = players.find((pVO) => pVO.remaining == 0);
        let winner;
        if (loser) {
            loser.state = Constants.GAME.LOSE;
            winner = players.find((pVO) => pVO.remaining != 0);
            winner.state = Constants.GAME.WIN;
            this.#isGameOver = true;

            console.log('-------------------');
            console.log('%cGame Over!', 'color: yellow');
            console.log('%cWinner: ', 'color: lightgreen', winner);
            console.log('%cLoser: ', 'color: red', loser);

            return { winner: winner, loser: loser };
        } else {
            return;
        }
    }
}
