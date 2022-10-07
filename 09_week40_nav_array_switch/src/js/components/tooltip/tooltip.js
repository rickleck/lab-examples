import { AbstractElement } from '../../core/element/abstractelement';
import { TooltipConfig } from './config/tooltipconfig';

export class Tooltip extends AbstractElement {
    /** @type {string} */
    static MODE_INFO = 'info';

    /** @type {string} */
    static MODE_SUCCESS = 'success';

    /** @type {string} */
    static MODE_ERROR = 'error';

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
     *
     */
    render() {
        super.render(this.config.msg);
        this.prependTo(this.config.targetElement);
        this.style.transform = `translate(${Number.parseInt(this.config.offsetX)}px, ${
            -this.clientHeight + Number.parseInt(this.config.offsetY)
        }px)`;
        this.classList.add(this.config.mode, 'show');
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
