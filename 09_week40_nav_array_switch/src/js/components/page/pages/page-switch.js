import { Page } from '../page';

export class PageSwitch extends Page {
    /**
     * @constructor
     * @param {ElementConfig} config
     */
    constructor(config) {
        super(config);
        this.render();
    }

    /**
     * @returns {object}
     */
    get defaults() {
        return { id: 'page-switch', classList: 'page page-switch' };
    }

    /**
     *
     */
    render() {
        this.buildHTML();
    }
    /**
     *
     */
    buildHTML() {
        super.render(this.getStepsHTML());
    }

    /**
     * @param {number} step
     * @returns {string}
     */
    getStepInputHTML(step) {
        return `<input type="number" id="param-step-${step}"/>`;
    }
}

/**
 * @comment Register as custom html-element
 */
window.customElements.define('component-page-switch', PageSwitch);
