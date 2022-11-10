import { BaseElement } from '../../core/element/base-element.js';

export class LoaderSpinner extends BaseElement {
    /**
     * @constructor
     */
    constructor() {
        super();
        this.render();
    }

    /**
     * @returns {object}
     */
    get defaults() {
        return { tag: 'div', id: 'loader-spinner', classList: 'todo__header-loader' };
    }

    /**
     *
     */
    render() {
        super.render(
            '<svg class="loader__spinner" viewBox="0 0 50 50"><circle class="path" cx="25" cy="25" r="20" fill="none" stroke-width="5"></circle></svg>'
        );
    }
    /**
     *
     */
    show() {
        this.element.querySelector('.loader__spinner').classList.add('show');
    }

    /**
     * @param {number} delay
     */
    hide(delay = 0) {
        return new Promise((resolve) => {
            setTimeout(() => {
                this.element.querySelector('.loader__spinner').classList.remove('show');
                resolve();
            }, delay);
        });
    }
}
