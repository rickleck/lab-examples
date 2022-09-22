export class Navigation {
    /** @type {string} */
    #id;
    /** @type {HTMLElement} */
    #container;
    /**
     * @constructor
     * @param  {string} id
     */
    constructor(id) {
        this.#id = id;
        this.#container = document.querySelector("#" + this.#id);
        this.#init();
    }
    /**
     *
     */
    static EVENT_CLICK = "nav-click";
    /**
     * @param {string} id
     */
    set active(id) {
        let items = this.#container.getElementsByClassName("btn");
        for (let item of items) {
            if (item["id"] == id) {
                item.classList.add("active");
            } else {
                item.classList.remove("active");
            }
        }
    }
    /**
     * @param {Event} event
     */
    handleEvent(event) {
        let itemID = event.target["id"];
        let navClick = new CustomEvent(Navigation.EVENT_CLICK, {
            detail: {
                navID: this.#id,
                itemID: itemID,
            },
        });
        window.dispatchEvent(navClick);
    }
    /**
     *
     */
    #init() {
        let items = this.#container.getElementsByClassName("btn");
        for (let item of items) {
            item.addEventListener("click", this);
        }
    }
}
