import { Navigation } from '../../components/navigation/navigation';
import { Page } from '../../components/page/page';
import { ElementConfig } from '../element/config/elementconfig';

export class App {
    /** @type {App} */
    static #instance;

    /**
     * @returns {App} global instance of App
     */
    static get instance() {
        if (!this.#instance) {
            this.#instance = new App();
        }
        return this.#instance;
    }

    /** @type {Navigation} */
    #navigation;

    /** @type {Page} */
    #currentPage;

    /**
     * @constructor
     */
    constructor() {}

    /**
     * @param {string} id
     */
    set activePage(id) {
        this.#navigation.active = id;
    }
    /**
     *
     */
    run() {
        this.#navigation = new Navigation().prependTo(document.body);
        this.goToPage('array');
    }

    /**
     *
     */
    goToPage(id) {
        if (this.#currentPage) this.#currentPage.destroy();
        this.#currentPage = new Page(new ElementConfig({ id: id }));
        document.querySelector('#page-container').appendChild(this.#currentPage);
        this.activePage = id;
    }

    /**
     * @param {string} href
     */
    reportNavigationClick(id) {
        this.goToPage(id);
    }
}
