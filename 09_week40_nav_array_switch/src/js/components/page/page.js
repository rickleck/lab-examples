import { AbstractElement } from '../../core/element/abstract-element';
import { Copy } from './copy/copy';

export class Page extends AbstractElement {
    /**
     * @constructor
     * @param {ElementConfig} config
     */
    constructor(config) {
        super(config);
    }

    /**
     * @returns {object}
     */
    get defaults() {
        return { id: 'page', classList: 'page' };
    }

    /**
     * @return {object}
     */
    get copy() {
        return Copy.getPage(this.id);
    }

    /**
     *
     */
    render(htmlString = '<h1>Page</h1>') {
        super.render(htmlString);
    }

    /**
     *
     */
    destroy() {
        super.destroy();
    }

    /**
     * @param {string} pageId
     * @returns {string} html string
     */
    getStepsHTML() {
        let htmlString = ``;
        let counter = 0;
        for (const step of this.copy.steps)
            htmlString += `<div id="step-${(counter += 1)}" class="page__step">
                <div class="page__step-text">
                    <span class="page__step-text--number">
                        <p>${counter}</p>
                    </span>
                    <span>
                    ${step}
                    </span>
                </div>
                <div id="step-draw-${counter}"></div>
            </div>`;

        return htmlString;
    }

    /**
     * @param {number} step
     * @returns {string}
     */
    getStepInputHTML(step) {
        step;
        return '';
    }
}

/**
 * @comment Register as custom html-element
 */
window.customElements.define('component-page', Page);
