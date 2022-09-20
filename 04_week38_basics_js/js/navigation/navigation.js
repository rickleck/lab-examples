export const EVENT_NAV_CLICK = "nav-click";

export class Navigation {
    constructor() {
        this._container = document.querySelector("#navigation");
        this._init();
    }
    /**
     * @param {string} id
     */
    set active(id) {
        let items = this._container.getElementsByClassName("btn");
        for (let i = 0; i < items.length; i++) {
            if (items[i]["id"] == id) {
                items[i].classList.add("active");
            } else {
                items[i].classList.remove("active");
            }
        }
    }

    _init() {
        let items = this._container.getElementsByClassName("btn");
        for (let i = 0; i < items.length; i++) {
            items[i].addEventListener("click", this._onClick);
        }
    }
    /**
     * @param {Event} event
     */
    _onClick(event) {
        let itemID = event.target["id"];
        let navClick = new CustomEvent(EVENT_NAV_CLICK, {
            detail: {
                id: itemID,
            },
        });
        document.dispatchEvent(navClick);
    }
}
