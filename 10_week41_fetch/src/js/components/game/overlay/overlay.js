import HTMLTemplateStart from 'bundle-text:./overlay-start.html';
import HTMLTemplateWar from 'bundle-text:./overlay-war.html';
import HTMLTemplateGameOver from 'bundle-text:./overlay-game-over.html';
import HTMLTemplateHelp from 'bundle-text:./overlay-help.html';
import { Constants } from '../../../core/constants/constants';
import { CustomElement } from '../../../core/element/custom-element';
import { App } from '../../../core/app/app';

export class Overlay extends CustomElement {
    /** @type {string} */
    #displayTime;

    /** @type {boolean} */
    #isInAnimation = false;

    /**
     * @constructor
     */
    constructor(config) {
        super(config);
        this.render();
    }

    /**
     * @returns {object}
     */
    get defaults() {
        return { id: 'game-overlay', classList: 'game__overlay' };
    }

    /**
     * @returns {string}
     */
    get mode() {
        return this.config.options.mode;
    }

    /**
     * @returns {string}
     */
    get state() {
        return this.config.options.state;
    }

    /**
     * @returns {boolean}
     */
    get isInAnimnation() {
        return this.#isInAnimation;
    }

    /**
     *
     */
    render() {
        switch (this.mode) {
            case Constants.GAME.OVERLAY.START:
                this.#renderStart();
                break;
            case Constants.GAME.OVERLAY.WAR:
                this.#renderWar();
                break;
            case Constants.GAME.OVERLAY.GAME_OVER:
                this.#renderGameOver();
                break;
            case Constants.GAME.OVERLAY.HELP:
                this.#renderHelp();
                break;
        }
    }

    /**
     *
     */
    #renderStart() {
        this.classList.add('game__overlay-start');
        super.render(HTMLTemplateStart);
        this.#setupNewGameButton();
        this.animateIn();
    }

    /**
     *
     */
    #renderWar() {
        this.classList.add('game__overlay-war');
        this.#displayTime = '2.5s';
        super.render(HTMLTemplateWar);

        this.querySelector('.screen').appendChild(this.config.options.img);
    }

    /**
     *
     */
    #renderGameOver() {
        this.classList.add('game__overlay-game-over', this.state);
        super.render(HTMLTemplateGameOver);
        if (this.state !== Constants.GAME.ERROR) this.#setupNewGameButton();
        this.animateIn();
    }

    /**
     *
     */
    #renderHelp() {
        this.classList.add('game__overlay-help');
        super.render(HTMLTemplateHelp);
        this.animateIn();
    }

    /**
     *
     */
    #setupNewGameButton() {
        this.querySelector('#btn-new-game').addEventListener('click', () =>
            this.animateOut().then(() => App.instance.game.newGame())
        );
    }

    /**
     *
     */
    animateIn() {
        return this.#animate('animate-in');
    }

    /**
     *
     */
    animateOut() {
        if (this.#displayTime) this.style.animationDelay = this.#displayTime;
        return this.#animate('animate-out');
    }

    /**
     * @param {string} className
     */
    #animate(className) {
        this.#isInAnimation = true;
        return new Promise((resolve) => {
            this.onanimationend = () => {
                this.#isInAnimation = false;
                resolve();
            };
            this.classList.add(className);
        });
    }
}

/**
 * @comment Register as custom html-element
 */
window.customElements.define('element-overlay', Overlay);
