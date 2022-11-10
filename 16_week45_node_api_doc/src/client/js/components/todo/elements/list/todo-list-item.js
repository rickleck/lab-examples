import template from 'bundle-text:../../../../../templates/todo/todo-list-item.html';
import { BaseElement } from '../../../../core/element/base-element';
import { ListItemEvent } from '../../events/list-item-event';

export class TodoListItem extends BaseElement {
    /** @type {boolean} */
    #done;

    /** @type {HTMLFormElement} */
    #form;

    /** @type {HTMLInputElement} */
    #title;

    /** @type {HTMLElement} */
    #check;

    /** @type {HTMLElement} */
    #menu;

    /** @type {HTMLButtonElement} */
    #btnMenu;

    /** @type {HTMLButtonElement} */
    #btnDelete;

    /** @type {HTMLButtonElement} */
    #btnSave;

    /** @type {boolean} */
    #isMenuOpen = false;

    /** @type {boolean} */
    #isSaved;

    /** @type {string} */
    #prevTitleValue;

    /**
     * @constructor
     */
    constructor(config) {
        super(config);
        this.render();
    }

    /**
     * @returns {object}
     */
    get defaults() {
        return { tag: 'li', id: 'todo-list-item', classList: 'todo__list-item' };
    }

    /**
     * @param {string} value
     */
    set _id(value) {
        this.id = value;
    }

    /**
     * @param {string} value
     */
    set title(value) {
        this.#title.value = value;
    }

    /**
     * @returns {string}
     */
    get title() {
        return this.#title.value;
    }

    /**
     * @param {boolean} value
     */
    set done(value) {
        this.#done = value;
        this.#check.innerText = value ? 'check_circle_outline' : 'radio_button_unchecked';
        this.#done ? this.#title.classList.add('done') : this.#title.classList.remove('done');
    }

    /**
     * @returns {boolean}
     */
    get done() {
        return this.#done;
    }

    /**
     *
     */
    render() {
        super.render(template);

        const cPrefix = '.todo__list-item-';

        this.#form = this.element.querySelector('form');
        this.#form.addEventListener('submit', (event) => {
            event.preventDefault();
            this.#isSaved = true;
            this.#toggleMenu();
            this.#dispatchUpdateEvent({ title: this.title }, { title: this.#prevTitleValue });
        });

        this.#title = this.element.querySelector('input');

        this.#check = this.element.querySelector(cPrefix + 'check');
        this.#check.addEventListener('click', this);

        this.#menu = this.element.querySelector(cPrefix + 'menu');

        this.#btnMenu = this.element.querySelector(cPrefix + 'btn-menu');
        this.#btnMenu.addEventListener('click', this);

        this.#btnDelete = this.element.querySelector(cPrefix + 'btn-delete');
        this.#btnDelete.addEventListener('click', this);

        this.#btnSave = this.element.querySelector(cPrefix + 'btn-save');
        this.#btnSave.addEventListener('click', this);

        document.addEventListener('click', this.#handleDocumentClick.bind(this));
    }

    /**
     * @param {object} data
     */
    populate(data) {
        Object.assign(this, data);
    }

    /**
     * @param {Event} event
     */
    handleEvent(event) {
        switch (true) {
            case event.target === this.#check:
                this.#dispatchUpdateEvent({ done: !this.done }, { done: this.done });
                break;
            case event.target === this.#btnSave:
                this.#form.requestSubmit();
                break;
            case event.target === this.#btnDelete:
                this.#dispatchDeleteEvent();
                break;
            case event.target === this.#btnMenu:
                this.#toggleMenu();
                break;
        }
    }

    /**
     * @param {Event} event
     */
    #handleDocumentClick(event) {
        if (!event.composedPath().includes(this.element) && this.#isMenuOpen) {
            this.#toggleMenu();
        }
    }

    /**
     *
     */
    #toggleMenu() {
        this.#isMenuOpen = !this.#isMenuOpen;
        this.#title.disabled = !this.#isMenuOpen;

        if (this.#isMenuOpen) {
            this.#prevTitleValue = this.title;
            this.#isSaved = false;
            this.#title.focus();
        } else if (!this.#isSaved) {
            this.title = this.#prevTitleValue;
        }

        this.#menu.classList.toggle('show');
        this.#btnMenu.classList.toggle('selected');
    }

    /**
     * @param {object} props
     */
    #dispatchUpdateEvent(props, prevProps) {
        const event = new ListItemEvent(ListItemEvent.UPDATE, {
            detail: { id: this.id, props: props, prevProps: prevProps },
        });
        document.dispatchEvent(event);
    }

    /**
     *
     */
    #dispatchDeleteEvent() {
        const event = new ListItemEvent(ListItemEvent.DELETE, {
            detail: this,
        });
        document.dispatchEvent(event);
    }

    /**
     *
     */
    destroy() {
        this.#check.removeEventListener('click', this);
        this.#btnMenu.removeEventListener('click', this);
        this.#btnDelete.removeEventListener('click', this);
        this.#btnSave.removeEventListener('click', this);
        document.removeEventListener('click', this.#handleDocumentClick.bind(this));
        super.destroy();
    }
}
