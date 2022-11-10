export class ListItemEvent extends CustomEvent {
    /** @type {string} */
    static UPDATE = 'item-update';

    /** @type {string} */
    static CREATE = 'item-create';

    /** @type {string} */
    static DELETE = 'item-delete';

    /**
     * @constructor
     * @param {string} type
     * @param {obejct} options
     */
    constructor(type, options) {
        super(type, options);
    }
}
