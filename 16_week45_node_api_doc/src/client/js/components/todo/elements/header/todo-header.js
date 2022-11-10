import template from 'bundle-text:../../../../../templates/todo/todo-header.html';
import { BaseElement } from '../../../../core/element/base-element.js';
import { LoaderSpinner } from '../../../loader/loader-spinner.js';
import { ListItemEvent } from '../../events/list-item-event.js';

export class TodoHeader extends BaseElement {
    /** @type {LoaderSpinner} */
    #loader;

    /** @type {HTMLButtonElement} */
    #btnCreate;

    /** @type {HTMLButtonElement} */
    #btnSave;

    /** @type {HTMLFormElement} */
    #form;

    /** @type {HTMLInputElement} */
    #input;

    /** @type {HTMLHeadingElement} */
    #heading;

    /** @type {boolean} */
    #isOpen = false;

    /** @type {number} */
    #focusTimeout;

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
        return { tag: 'header', id: 'todo-header', classList: 'todo__header' };
    }

    /**
     *
     */
    render() {
        super.render(template);

        this.#form = this.element.querySelector('form');
        this.#form.addEventListener('submit', (event) => {
            event.preventDefault();
            this.#dispatchCreateEvent();
        });

        this.#input = this.element.querySelector('input');

        this.#btnCreate = this.element.querySelector('.todo__header-btn-create');
        this.#btnCreate.addEventListener('click', () => this.#toggleInput());

        this.#btnSave = this.element.querySelector('.todo__header-btn-save');
        this.#btnSave.addEventListener('click', () => this.#form.requestSubmit());

        this.#heading = this.element.querySelector('.todo__header-heading');

        this.#loader = new LoaderSpinner().appendTo(this.element);
        this.#loader.show();

        document.addEventListener('click', (event) => {
            if (!event.composedPath().includes(this.element) && this.#isOpen) this.#toggleInput();
        });
    }

    /**
     *
     */
    enable() {
        this.#loader.hide(500).then(() => this.#btnCreate.classList.add('show'));
    }

    /**
     *
     */
    #dispatchCreateEvent() {
        const event = new ListItemEvent(ListItemEvent.CREATE, {
            detail: { title: this.#input.value, done: false },
        });
        document.dispatchEvent(event);

        this.#input.value = '';
        this.#toggleInput();
    }

    /**
     *
     */
    #toggleInput() {
        this.#isOpen = !this.#isOpen;
        if (this.#isOpen) {
            this.#btnCreate.setAttribute('title', 'Cancel');
            this.#focusTimeout = setTimeout(() => {
                this.#input.focus();
            }, 300);
        } else {
            this.#btnCreate.setAttribute('title', 'Add task');
            clearTimeout(this.#focusTimeout);
        }

        this.#input.classList.toggle('show');
        this.#btnCreate.classList.toggle('mode-cancel');
        this.#btnSave.classList.toggle('show');
        this.#heading.classList.toggle('hide');
    }
}
