import HTMLTemplate from 'bundle-text:./page-array.html';
import { AbstractElement } from '../../../core/element/abstract-element';

export class PageArray extends AbstractElement {
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
        return { id: 'page-array', classList: 'page page-array' };
    }

    /**
     *
     */
    render() {
        super.render(HTMLTemplate);
        this.#drawArray('#chart', 8, 3);

        //TODO: Add names, age etc. and hover a stack for details about person
    }

    /**
     * @param {string} id container id
     */
    #drawArray(id, length, forceHeight = 0, forceHeightMin = 200) {
        const randomRange = (min = 140, max = 220) =>
            Math.floor(Math.random() * (max - min + 1) + min);
        const chart = this.querySelector(id);

        for (let i = 0; i < length; i++) {
            let height = i < forceHeight ? randomRange(forceHeightMin) : randomRange();
            let stack = document.createElement('div');
            let inner = document.createElement('span');
            stack.append(inner);
            stack.classList.add('page-array__chart-stack');
            stack.style.height = height + 'px';
            inner.innerText = height / 100 + ' m';
            //Randomize list
            Math.random() > 0.5 ? chart.append(stack) : chart.prepend(stack);
        }
    }
}

/**
 * @comment Register as custom html-element
 */
window.customElements.define('component-page-array', PageArray);
