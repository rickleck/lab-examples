import { Navigation } from '../../components/navigation/navigation';
import { Pages } from '../../components/page/pages/pages';

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

        //Shortcut for dev
        const page = new URLSearchParams(document.location.search).get('page');
        this.goToPage(page === null ? 'page-array' : 'page-' + page);
    }

    /**
     * @param {string} id
     */
    goToPage(id) {
        if (this.#currentPage) this.#currentPage.destroy();
        this.#currentPage = Pages.getPage(id);
        document.querySelector('#page-container').appendChild(this.#currentPage);
        this.activePage = id;

        window.scrollTo(0, 0);
    }

    /**
     * @param {string} id
     */
    reportNavigationClick(id) {
        this.goToPage(id);
    }
}
