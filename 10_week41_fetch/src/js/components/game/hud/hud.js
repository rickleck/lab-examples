import HTMLTemplate from 'bundle-text:./hud.html';
import { CustomElement } from '../../../core/element/custom-element';

export class Hud extends CustomElement {
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
        return { id: 'game-hud', classList: 'game__hud' };
    }

    /**
     *
     */
    render() {
        super.render(HTMLTemplate);
        this.classList.add(this.config.options.player);
        this.querySelector('.game__hud-name').innerHTML = this.config.options.name;
        this.update(0);
    }

    /**
     * @param {number} remainingCards
     */
    update(remainingCards) {
        this.querySelector('.game__hud-score-points').innerHTML = remainingCards;
    }

    /**
     *
     */
    animateIn() {
        this.classList.remove('animate-out');
        this.classList.add('animate-in');
    }

    /**
     *
     */
    animateOut() {
        if (this.classList.contains('animate-in')) {
            this.classList.add('animate-out');
        }
        this.classList.remove('animate-in');
    }
}

/**
 * @comment Register as custom html-element
 */
window.customElements.define('element-hud', Hud);
