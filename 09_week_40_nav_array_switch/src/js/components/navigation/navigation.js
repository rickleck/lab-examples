import HTMLTemplate from 'bundle-text:./navigation.html';
import { App } from '../../core/app/app';
import { AbstractElement } from '../../core/element/abstractelement';
import { ElementConfig } from '../../core/element/config/elementconfig';

export class Navigation extends AbstractElement {
    /**  @type {HTMLElement[]} */
    #items;

    /**
     * @constructor
     * @param {ElementConfig} config
     */
    constructor(config) {
        super(config);
        this.render();
    }

    /**
     * @param {string} value
     */
    set active(value) {
        for (const item of this.#items) item.disabled = item.id === value;
    }

    /**
     * @returns {object}
     */
    get defaults() {
        return { id: 'navigation', classList: 'navigation' };
    }

    /**
     *
     */
    render() {
        super.render(HTMLTemplate);
        this.#items = this.querySelectorAll('li');
        this.addEventListener(
            'click',
            (event) => {
                if (event.target.dataset.href) {
                    App.instance.reportNavigationClick(event.target.dataset.href);
                }
            },
            true
        );
    }
}

/**
 * @comment Register as custom html-element
 */
window.customElements.define('component-navigation', Navigation);
