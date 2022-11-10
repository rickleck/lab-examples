import { BaseElement } from '../../../../core/element/base-element';
import { TodoListItem } from './todo-list-item';

export class TodoList extends BaseElement {
    /** @type {TodoListItem[]} */
    #items = [];
    /**
     * @constructor
     */
    constructor() {
        super();
    }

    /**
     * @returns {object}
     */
    get defaults() {
        return { tag: 'ul', id: 'todo-list', classList: 'todo__list' };
    }

    /**
     * @param {objetct} data
     * @returns {TodoListItem}
     */
    addItem(data) {
        const item = new TodoListItem();
        item.populate(data);
        item.appendTo(this.element);
        this.#items.push(item);
        return item;
    }

    /**
     * @param {string} id
     * @param {object} props
     */
    updateItem(id, props) {
        const item = this.#items.find((item) => item.id === id);
        item.populate(props);
    }

    /**
     * @param {string} id
     * @param {object} props
     */
    deleteItem(id) {
        const index = this.#items.findIndex((item) => item.id === id);
        if (index !== -1) {
            const item = this.#items.splice(index, 1)[0];
            item.destroy();
        }
    }
}
