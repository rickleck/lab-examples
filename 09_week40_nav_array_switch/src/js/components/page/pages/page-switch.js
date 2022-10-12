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
        this.#buildHTML();
        this.addEventListener('input', this, true);
    }

    /**
     *
     */
    destroy() {
        this.removeEventListener('input', this, true);
        super.destroy();
    }

    /**
     * @param {Event} e
     */
    handleEvent(e) {
        if (e.type === 'input' && e.target.dataset.step) {
            this.#processInput(e.target.dataset.step, e.target.value);
        }
    }

    /**
     *
     */
    #buildHTML() {
        super.render(this.getStepsHTML());
        this.querySelectorAll('.page__step').forEach((step, index) => {
            let inset = step.querySelector('.page__step-inset');
            inset.append(this.#getStepParams(index + 1));
            inset.append(this.#getStepInput(index + 1));
        });
        this.addInstruction();
    }

    /**
     * @param {number} step
     * @returns {HTMLInputElement}
     */
    #getStepInput(step) {
        const input = document.createElement('input');
        input.type = 'number';
        input.dataset.step = step;
        return input;
    }

    /**
     * @param {number} step
     * @returns {HTMLElement}
     */
    #getStepParams(step) {
        const container = document.createElement('div');
        container.classList.add('page-switch__params');
        container.id = 'params-' + step;
        for (const param of this.copy.params[step - 1]) {
            let row = document.createElement('div');
            row.classList.add('page-switch__params-row');
            container.append(row);

            let span = document.createElement('span');
            span.innerText = param.param + ':';
            row.append(span);

            span = document.createElement('span');
            span.innerText = param.value;
            row.append(span);
        }
        return container;
    }

    /**
     * @param {string} step
     * @param {string} value
     */
    #processInput(step, value) {
        const valid = () => !Number.isNaN(value) && !Number.isNaN(parseFloat(value));
        valid() ? this.#processParam(+step, +value) : this.#setSelected(+step);
    }

    /**
     * @param {number} step
     * @param {number} value
     */
    #processParam(step, value) {
        let index;
        if (step === 1) {
            switch (true) {
                case value >= 0 && value <= 3 && Number.isInteger(value):
                    index = value;
                    break;
                default:
                    index = 4;
                    break;
            }
        } else {
            switch (true) {
                case value < 0:
                    index = 5;
                    break;
                case value == 0:
                    index = 0;
                    break;
                case value <= 5:
                    index = 1;
                    break;
                case value <= 9:
                    index = 2;
                    break;
                case value <= 14:
                    index = 3;
                    break;
                case value <= 19:
                    index = 4;
                    break;
                default:
                    index = 5;
                    break;
            }
        }

        this.#setOutput(step, index);
    }

    /**
     * @param {number} step
     * @param {number} index
     */
    #setOutput(step, index) {
        let valuePair = this.copy.params[step - 1][index];
        if (valuePair !== undefined) {
            console.log(valuePair.value);
        }

        this.#setSelected(step, index);
    }

    /**
     * @param {number} step
     * @param {number} index
     */
    #setSelected(step, index = undefined) {
        const rows = this.querySelector('#step-' + step).querySelectorAll(
            '.page-switch__params-row'
        );

        rows.forEach((row, i) => {
            i === index ? row.classList.add('selected') : row.classList.remove('selected');
        });
    }
}

/**
 * @comment Register as custom html-element
 */
window.customElements.define('component-page-switch', PageSwitch);
