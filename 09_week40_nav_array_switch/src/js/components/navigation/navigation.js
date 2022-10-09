import HTMLTemplate from 'bundle-text:./navigation.html';
import { App } from '../../core/app/app';
import { AbstractElement } from '../../core/element/abstract-element';
import { ElementConfig } from '../../core/element/config/element-config';

export class Navigation extends AbstractElement {
    /**  @type {HTMLElement[]} */
    #list;
    /** @type {string} */
    #listOpenClass = 'is-open';
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
        for (const item of this.#items)
            item.dataset.href === value
                ? item.classList.add('is-active')
                : item.classList.remove('is-active');
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
        this.#list = this.querySelector('ul');
        this.#items = this.#list.querySelectorAll('a');
        this.addEventListener(
            'click',
            (e) => {
                if (e.target.id === 'nav-toggle') {
                    this.#toggleList();
                } else if (e.target.dataset.href) {
                    App.instance.reportNavigationClick(event.target.dataset.href);
                    this.#toggleList(true);
                }
            },
            true
        );

        window.addEventListener('resize', () => {
            if (window.innerWidth >= 768) this.#list.classList.remove(this.#listOpenClass);
        });
    }

    /**
     * @param {boolean} forceOff default false
     */
    #toggleList(forceOff = false) {
        this.#list.classList.contains(this.#listOpenClass) || forceOff
            ? this.#list.classList.remove(this.#listOpenClass)
            : this.#list.classList.add(this.#listOpenClass);
    }
}

/**
 * @comment Register as custom html-element
 */
window.customElements.define('component-navigation', Navigation);
