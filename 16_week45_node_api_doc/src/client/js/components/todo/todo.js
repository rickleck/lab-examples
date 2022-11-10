import { ApiClient } from '../../api/api-client.js';
import { BaseElement } from '../../core/element/base-element.js';
import { ListItemEvent } from './events/list-item-event.js';
import { TodoHeader } from './elements/header/todo-header.js';
import { TodoList } from './elements/list/todo-list.js';

export class Todo extends BaseElement {
    /** @type {TodoHeader} */
    #header;

    /** @type {TodoList} */
    #list;

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
        return { tag: 'div', id: 'todo', classList: 'todo' };
    }

    /**
     *
     */
    render() {
        this.#header = new TodoHeader();
        this.#header.appendTo(this.element);

        this.#list = new TodoList();
        this.#list.appendTo(this.element);

        document.addEventListener(ListItemEvent.CREATE, (event) => this.#createItem(event.detail));

        document.addEventListener(ListItemEvent.UPDATE, (event) =>
            this.#updateItem(event.detail.id, event.detail.props, event.detail.prevProps)
        );

        document.addEventListener(ListItemEvent.DELETE, (event) => this.#deleteItem(event.detail));

        ApiClient.getAllItems()
            .then((data) => {
                this.#header.enable();
                this.#addListItems(data);
            })
            .catch((error) => console.error(error));
    }

    /**
     * @param {object} data
     */
    #createItem(data) {
        ApiClient.createItem(data)
            .then((data) => this.#list.addItem(data))
            .catch((error) => {
                console.error(error);
            });
    }

    /**
     * @param {string} id
     * @param {object} props
     */
    #updateItem(id, props, prevProps) {
        //Immediate visual update before server save
        this.#list.updateItem(id, props);

        ApiClient.updateItem(id, props).catch((error) => {
            //Revert item's visual update if error from server
            this.#list.updateItem(id, prevProps);
            console.error(error);
        });
    }

    /**
     * @param {TodoListItem} item
     */
    #deleteItem(item) {
        //Immediate visual update before server save
        item.element.classList.add('hide');
        ApiClient.deleteItem(item.id)
            .then(() => this.#list.deleteItem(item.id))
            .catch((error) => {
                //Redraw item if error from server
                item.element.classList.remove('hide');
                console.error(error);
            });
    }

    /**
     * @param {objetct[]} dataList
     */
    #addListItems(dataList) {
        dataList.forEach((data) => this.#list.addItem(data));
    }
}
