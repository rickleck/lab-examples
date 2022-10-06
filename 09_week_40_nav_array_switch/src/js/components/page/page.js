import { AbstractElement } from '../../core/element/abstractelement';

export class Page extends AbstractElement {
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
        return { id: 'page', classList: 'page' };
    }

    /**
     *
     */
    render(htmlString) {
        if (!htmlString) {
            super.render(`<h1>Page: ${this.id}</h1>`);
        } else {
            super.render(htmlString);
        }
        //
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
window.customElements.define('component-page', Page);
