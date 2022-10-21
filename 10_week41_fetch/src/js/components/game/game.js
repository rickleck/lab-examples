import HTMLTemplate from 'bundle-text:./game.html';
import { App } from '../../core/app/app';
import { Constants } from '../../core/constants/constants';
import { ElementConfig } from '../../core/element/config/element-config';
import { CustomElement } from '../../core/element/custom-element';
import { PlayerVO } from '../../core/services/game/vo/player-vo';
import { TooltipConfig } from '../tooltip/config/tooltipconfig';
import { Tooltip } from '../tooltip/tooltip';
import { Card } from './card/card';
import { Hud } from './hud/hud';
import { Overlay } from './overlay/overlay';

export class Game extends CustomElement {
    /** @type {Card[]}*/
    #cards = [];

    /** @type {Hud[]}*/
    #huds = [];

    /** @type {HTMLElement[]}*/
    #piles = [];

    /** @type {HTMLElement}*/
    #btnDeal;

    /** @type {HTMLButtonElement}*/
    #btnHelp;

    /** @type {HTMLElement}*/
    #overlayStart;

    /** @type {HTMLElement}*/
    #overlayWar;

    /** @type {HTMLElement}*/
    #overlayGameOver;

    /** @type {HTMLElement}*/
    #overlayHelp;

    /** @type {object}*/
    #turnResult;

    /** @type {number}*/
    #timeout;

    /** @type {boolean} */
    #isWar;

    /** @type {ToolTip} */
    #tooltip;

    /** @type {boolean} */
    #firstRun = true;

    /** @type {HTMLImageElement} */
    #warImage;

    /**
     * @constructor
     */
    constructor() {
        super();
    }

    /**
     * @returns {object}
     */
    get defaults() {
        return { id: 'game', classList: 'game' };
    }

    /**
     * @returns {Image}
     */
    get warImage() {
        return this.#warImage;
    }

    /**
     *
     */
    render() {
        super.render(HTMLTemplate);

        this.#createHud(Constants.GAME.USER, 'YOU').appendTo(this);
        this.#createHud(Constants.GAME.COMPUTER, 'WOPR').prependTo(this);

        this.#setupDealButton();
        this.#toggleDealButton(false);

        this.#setupHelpButton();

        this.#piles.push(this.#btnDeal);
        this.#piles.push(this.querySelector('#slot-pile-' + Constants.GAME.COMPUTER));

        this.#warImage = new Image();
        this.#warImage.src = require('../../../../assets/gif/war.gif');

        this.#overlayStart = this.#createOverlay(Constants.GAME.OVERLAY.START);
    }

    /**
     *
     */
    newGame() {
        this.#toggleLoader(true);
        this.#resetGame();
        App.instance.gameService
            .setupNewGame()
            .then((pileSize) => this.#gameReady(pileSize))
            .catch((error) => {
                console.error('Game.newGame');
                console.error(error);
                this.#toggleLoader(false);
                this.#displayError();
            });
    }

    /**
     * @param {number} pileSize
     */
    #gameReady(pileSize) {
        this.#cards = [];

        this.#toggleLoader(false);

        this.#updateHud(Constants.GAME.COMPUTER, pileSize);
        this.#updateHud(Constants.GAME.USER, pileSize);

        this.#toggleDealButton(true);

        this.#togglePiles(true);

        if (this.#firstRun) {
            this.#toggleTooltip(true);
            this.#firstRun = false;
        }

        this.#animateInHuds();
    }

    /**
     *
     */
    #setupDealButton() {
        this.#btnDeal = this.querySelector('#slot-pile-' + Constants.GAME.USER);
        this.#btnDeal.addEventListener('click', () => {
            this.#toggleDealButton(false);
            this.#toggleTooltip(false);
            App.instance.gameService
                .playTurn()
                .then((result) => {
                    if (result) {
                        this.#drawTurnResult(result);
                    } else {
                        this.#toggleDealButton(true);
                    }
                })
                .catch((error) => {
                    console.error('Game.#btnDeal.click');
                    console.error(error);
                    this.#displayError();
                });
        });
    }

    /**
     *
     */
    #setupHelpButton() {
        this.#btnHelp = this.querySelector('#btn-help');
        this.#btnHelp.addEventListener('click', () => {
            this.#toggleHelp();
        });
    }

    /**
     * @param {object} result
     */
    #drawTurnResult(result) {
        if (!this.#isWar) this.#cards = [];

        this.#turnResult = result;

        this.#createCard(this.#turnResult.user);
        this.#createCard(this.#turnResult.computer);

        this.#turnAnimIn();
    }

    /**
     *
     */
    #turnAnimIn() {
        Promise.all(this.#getCardAnimQueue('in', this.#cards.length - 2)).then(() => {
            this.#turnAnimInDone();
        });
    }

    /**
     *
     */
    #turnAnimInDone() {
        if (this.#turnResult.isWar) {
            this.#isWar = true;
            this.#displayWar();
        } else {
            this.#isWar = false;
            setTimeout(() => {
                this.#turnAnimOut();
            }, 750);
        }
    }

    /**
     *
     */
    #displayWar() {
        this.#timeout = setTimeout(() => {
            this.#overlayWar = this.#createOverlay(
                Constants.GAME.OVERLAY.WAR,
                null,
                this.#warImage
            );
            this.#overlayWar
                .animateIn()
                .then(() => this.#overlayWar.animateOut())
                .then(() => {
                    this.#destroyElement(this.#overlayWar);

                    let numCards = 0;
                    const checkRemaining = (player) => {
                        if (player.remaining > 0) {
                            this.#createCard(player, true);
                            numCards += 1;
                        }
                    };
                    checkRemaining(this.#turnResult.user);
                    checkRemaining(this.#turnResult.computer);
                    if (numCards > 0) {
                        return Promise.all(
                            this.#getCardAnimQueue('in', this.#cards.length - numCards)
                        );
                    } else {
                        this.#warGameOver();
                    }
                })
                .then(() => {
                    if (this.#turnResult.isGameOver) {
                        this.#warGameOver();
                    } else {
                        this.#toggleDealButton(true);
                    }
                });
        }, 1000);
    }

    /**
     *
     */
    #warGameOver() {
        this.#updateHud(Constants.GAME.COMPUTER, this.#turnResult.computer.remaining);
        this.#updateHud(Constants.GAME.USER, this.#turnResult.user.remaining);

        this.#gameOver();
    }

    /**
     *
     */
    #turnAnimOut() {
        this.#updateHud(Constants.GAME.COMPUTER, this.#turnResult.computer.remaining);
        this.#updateHud(Constants.GAME.USER, this.#turnResult.user.remaining);

        Promise.all(this.#getCardAnimQueue('out')).then(() => {
            this.#turnAnimOutDone();
        });
    }

    /**
     *
     */
    #turnAnimOutDone() {
        this.#destroyCards();

        if (this.#turnResult.isGameOver) {
            this.#gameOver();
        } else {
            this.#toggleDealButton(true);
        }
    }

    /**
     * @param {string} state
     */
    #gameOver(state = undefined) {
        if (!state) this.#highlightLoserPile();

        this.#toggleDealButton(false);

        this.#timeout = setTimeout(() => {
            this.#overlayGameOver = this.#createOverlay(Constants.GAME.OVERLAY.GAME_OVER, state);
        }, 2000);
    }

    /**
     *
     */
    #highlightLoserPile() {
        this.querySelector(`#slot-pile-${this.#turnResult.loser.id}`).classList.add('lose');
    }

    /**
     * @param {PlayerVO} pVO
     * @param {boolean} isWarCard
     */
    #createCard(pVO, isWarCard = false) {
        const index = this.#cards.length;
        const config = new ElementConfig({
            id: `game-card-${index}`,
            options: { pVO: pVO, isWarCard: isWarCard },
        });
        const card = new Card(config).appendTo(this.querySelector(`#slot-card-${pVO.id}`));
        this.#cards.push(card);
    }

    /**
     * @param {string} dir
     * @param {number} fromIndex
     * @returns {Promise[]}
     */
    #getCardAnimQueue(dir, fromIndex = 0) {
        fromIndex = Math.max(fromIndex, 0);

        const order = [];
        const promises = [];

        for (let i = fromIndex; i < this.#cards.length; i++) {
            const card = this.#cards[i];
            if (dir === 'in') {
                card.isUser ? order.unshift(card) : order.push(card);
            } else {
                if (card.player.id === this.#turnResult.winner.id) {
                    card.animOutState = Constants.GAME.WIN;
                    order.unshift(card);
                } else {
                    card.animOutState = Constants.GAME.LOSE;
                    order.push(card);
                }
            }
        }

        order.forEach((card, index) => {
            card.animIndex = index;
            if (dir === 'in') {
                card.animZIndex = index;
                promises.push(card.animateIn());
            } else {
                promises.push(card.animateOut());
            }
        });

        return promises;
    }

    /**
     *
     */
    #destroyCards() {
        this.#cards.forEach((card) => {
            this.#destroyElement(card);
        });
    }

    /**
     * @param {string} player
     * @param {string} name
     */
    #createHud(player, name) {
        const config = new ElementConfig({
            id: `game-hud-${player}`,
            options: { name: name, player: player },
        });
        const hud = new Hud(config);
        this.#huds.push(hud);
        return hud;
    }

    /**
     * @param {string} player
     * @param {number} value
     * @param {boolean} reset
     */
    #updateHud(player, value, reset = false) {
        this.#huds.find((hud) => {
            if (hud.id === `game-hud-${player}`) hud.update(value);
            if (reset) hud.classList.remove('animate-in');
        });
    }

    /**
     *
     */
    #animateInHuds() {
        this.#huds.forEach((hud) => hud.animateIn());
    }

    /**
     *
     */
    #animateOutHuds() {
        this.#huds.forEach((hud) => hud.animateOut());
    }

    /**
     *
     */
    #displayError() {
        this.#createOverlay(Constants.GAME.OVERLAY.GAME_OVER, Constants.GAME.ERROR);
    }

    /**
     * @param {string} mode
     * @param {string} state
     * @param {Image} img
     */
    #createOverlay(mode, state, img) {
        state = state ? state : this.#turnResult ? this.#turnResult.user.state : undefined;
        const config = new ElementConfig({
            id: `game-${mode}`,
            options: { mode: mode, state: state, img: img },
        });
        return new Overlay(config).appendTo(this.querySelector('.game__stage'));
    }

    /**
     * @param {boolean} state
     */
    #toggleDealButton(state) {
        state
            ? this.#btnDeal.classList.remove('is-disabled')
            : this.#btnDeal.classList.add('is-disabled');
    }

    /**
     * @param {boolean} state
     */
    #toggleLoader(state) {
        const loader = this.querySelector('.loader__spinner');
        state ? loader.classList.add('show') : loader.classList.remove('show');
    }

    /**
     *
     */
    #toggleHelp() {
        if (this.#overlayHelp && this.#overlayHelp.isInAnimation) return;

        if (!this.#overlayHelp) {
            this.#btnHelp.innerText = 'X';
            this.#overlayHelp = this.#createOverlay(Constants.GAME.OVERLAY.HELP);
        } else {
            this.#btnHelp.innerText = '?';
            this.#overlayHelp.animateOut().then(() => {
                this.#destroyElement(this.#overlayHelp);
                this.#overlayHelp = undefined;
            });
        }
    }

    /**
     * @param {boolean} state
     */
    #toggleTooltip(state) {
        if (state && !this.#tooltip) {
            this.#tooltip = new Tooltip(
                new TooltipConfig({
                    mode: Tooltip.MODE_INFO,
                    targetElement: this.#btnDeal,
                    position: Tooltip.POSITION_TARGET,
                    offsetX: this.#btnDeal.clientWidth * 0.5,
                    offsetY: 20,
                    msg: 'Click on your card stack<br>to start the next turn.',
                })
            );
        } else if (this.#tooltip) {
            this.#tooltip.destroy();
            this.#tooltip = undefined;
        }
    }

    /**
     * @param {boolean} state
     */
    #togglePiles(state) {
        this.#piles.forEach((pile) =>
            state ? pile.classList.remove('is-hidden') : pile.classList.add('is-hidden')
        );
    }

    /**
     *
     */
    #resetPiles() {
        this.#piles.forEach((pile) => pile.classList.remove('lose'));
    }

    /**
     *
     */
    #resetGame() {
        if (this.#timeout) clearTimeout(this.#timeout);

        this.#animateOutHuds();

        this.#destroyCards();

        this.#toggleDealButton(false);

        this.#togglePiles(false);
        this.#resetPiles();

        this.#destroyElement(this.#overlayWar);
        this.#destroyElement(this.#overlayStart);
        this.#destroyElement(this.#overlayGameOver);
        this.#destroyElement(this.#overlayHelp);

        this.#isWar = false;
    }

    /**
     * @param {CustomElement} element
     */
    #destroyElement(element) {
        if (element && element.destroy) element.destroy();
    }
}

/**
 * @comment Register as custom html-element
 */
window.customElements.define('component-game', Game);
