import { CustomElement } from '../../core/element/custom-element';
import { Copy } from './copy/copy';

export class Page extends CustomElement {
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
                <div class="page__step-inset"></div>
            </div>`;

        return htmlString;
    }

    /**
     *
     */
    addInstruction() {
        const instruction = document.createElement('p');
        instruction.classList.add('page__step-instruction');
        instruction.innerText = this.copy.instruction;
        this.querySelector('#step-1 > .page__step-inset').append(instruction);
    }
}

/**
 * @comment Register as custom html-element
 */
window.customElements.define('component-page', Page);
