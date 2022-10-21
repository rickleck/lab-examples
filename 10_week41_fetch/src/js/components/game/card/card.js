import HTMLTemplate from 'bundle-text:./card.html';
import { Constants } from '../../../core/constants/constants';
import { CustomElement } from '../../../core/element/custom-element';
import { PlayerVO } from '../../../core/services/game/vo/player-vo';

export class Card extends CustomElement {
    /** @type {number} */
    #animIndex = 0;

    /** @type {string} */
    #animOutState;

    /** @type {number} */
    #animZIndex;

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
        return { id: 'game-card', classList: 'game__card' };
    }

    /**
     *  @returns {PlayerVO}
     */
    get player() {
        return this.config.options.pVO;
    }

    /**
     * @returns {boolean}
     */
    get isUser() {
        return this.player.id === Constants.GAME.USER;
    }

    /**
     * @returns {boolean}
     */
    get isWarCard() {
        return this.config.options.isWarCard;
    }

    /**
     * @param {number} value
     */
    set animIndex(value) {
        this.#animIndex = value;
    }

    /**
     * @param {string} value
     */
    set animOutState(value) {
        this.#animOutState = value;
    }

    /**
     * @param {number} value
     */
    set animZIndex(value) {
        this.#animZIndex = value;
    }

    /**
     *
     */
    render() {
        super.render(HTMLTemplate);
        this.classList.add(this.config.options.pVO.id);

        if (!this.isWarCard) {
            const img = this.config.options.pVO.card.imageElement;
            this.querySelector('.game__card-front').appendChild(img);
        }
    }

    /**
     * @returns {Promise}
     */
    animateIn() {
        return this.#animate('in');
    }

    /**
     * @returns {Promise}
     */
    animateOut() {
        return this.#animate('out');
    }

    /**
     * @param {string} dir
     * @returns {Promise}
     */
    #animate(dir) {
        const classList = [];
        let delayFactor;

        if (dir === 'in') {
            classList.push('animate-in');
            if (this.isWarCard) classList.push('war');
            delayFactor = 0.5;
        } else {
            this.classList.remove('animate-in');
            classList.push('animate-out');
            classList.push(this.#animOutState);
            delayFactor = 0.2;
            this.parentElement.style.zIndex = 25;
        }

        this.style.zIndex = this.#animZIndex;

        console.log('this.style.zIndex ', this.style.zIndex);

        const delay = this.#animIndex * delayFactor + 's';
        this.querySelector('.game__card-inner').style.animationDelay = delay;

        this.onanimationstart = () => {
            if (this.player.remaining === 0)
                document.querySelector('#slot-pile-' + this.player.id).classList.add('is-hidden');
        };

        return new Promise((resolve) => {
            this.onanimationend = () => {
                this.parentElement.style.zIndex = 'auto';
                this.style.zIndex = 'auto';
                resolve();
            };

            this.classList.add(...classList);
        });
    }
}

/**
 * @comment Register as custom html-element
 */
window.customElements.define('element-card', Card);
