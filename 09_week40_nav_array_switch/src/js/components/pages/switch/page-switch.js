import HTMLTemplate from 'bundle-text:./page-switch.html';
import { AbstractElement } from '../../../core/element/abstract-element';

export class PageSwitch extends AbstractElement {
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
        super.render(HTMLTemplate);
    }
}

/**
 * @comment Register as custom html-element
 */
window.customElements.define('component-page-switch', PageSwitch);
