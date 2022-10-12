import { CustomElement } from '../../core/element/custom-element';
import { TooltipConfig } from './config/tooltipconfig';

export class Tooltip extends CustomElement {
    /** @type {string} */
    static MODE_INFO = 'info';

    /** @type {string} */
    static MODE_SUCCESS = 'success';

    /** @type {string} */
    static MODE_ERROR = 'error';

    /** @type {number} */
    #arrowHeight = 20;

    /**
     * @constructor
     * @param { TooltipConfig} config
     */
    constructor(config) {
        super(config);
        this.render();
    }

    /**
     * @returns {object}
     */
    get defaults() {
        return { id: 'tooltip', classList: 'tooltip' };
    }

    /**
     * @returns {HTMLElement}
     */
    get targetElement() {
        return this.config.targetElement;
    }

    /**
     * @returns {object}
     */
    get globalPosition() {
        const rectTarget = this.config.targetElement.getBoundingClientRect();
        return {
            left: rectTarget.left + window.scrollX + this.config.offsetX,
            top:
                rectTarget.top +
                window.scrollY +
                this.config.offsetY -
                this.offsetHeight -
                this.#arrowHeight,
        };
    }

    /**
     *
     */
    render() {
        super.render(this.config.msg);
        document.body.appendChild(this);
        this.classList.add(this.config.mode, 'show');
        this.style.left = this.globalPosition.left + 'px';
        this.style.top = this.globalPosition.top + 'px';

        if (this.offsetLeft + this.offsetWidth > document.body.clientWidth) {
            this.style.marginLeft = this.config.offsetX - this.offsetWidth + 'px';
            this.classList.add('left');
        }
    }
    /**
     *
     */
    destroy() {
        this.parentElement.removeChild(this);
    }
}

/**
 * @comment Register as custom html-element
 */
window.customElements.define('component-tooltip', Tooltip);
