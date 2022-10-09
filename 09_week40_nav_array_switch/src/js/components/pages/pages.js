import { PageArray } from './array/page-array';
import { PageSwitch } from './switch/page-switch';

export class Pages {
    /**
     * @param {string} id
     */
    static getPage(id) {
        switch (id) {
            case 'array':
                return new PageArray();
            case 'switch':
                return new PageSwitch();
            default:
                throw new Error('No Page class found!');
        }
    }

    /**
     * @param {string[]} stepTexts
     * @returns {string} html string
     */
    static getHTML(stepTexts) {
        let htmlString = ``;
        for (let step = 1; step <= 5; step++) {
            htmlString += `<div id="step-${step}" class="page__step">
                <div class="page__step-text">
                    <span>
                        <p>${step}</p>
                    </span>
                    <span>
                    ${stepTexts[step - 1]}
                    </span>
                </div>
                <button data-type="step" data-step="${step}" class="page__step-btn">Generate</button>
                <div id="step-draw-${step}"></div>
            </div>`;
        }

        htmlString += `<button data-type="reset" class="page-btn-reset is-hidden">Reset</button>`;
        return htmlString;
    }
}
