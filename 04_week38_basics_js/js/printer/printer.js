import { BROWSER } from "../utils/environment.js";
import { MODES, MODES_DEFAULT_KEY } from "./modes/modes.js";

export class Printer {
    constructor() {
        if (BROWSER) {
            this.CURSOR = '<span class="blink">|</span>';
            this._path = MODES[MODES_DEFAULT_KEY];
            this._htmlConsole = BROWSER ? document.querySelector("#console") : undefined;
            this._init();
        } else {
            this.run();
        }
    }

    /**
     * @param {string} id
     */
    set mode(id) {
        this._path = MODES[id];
        this._init();
    }

    run() {
        if (BROWSER) this._removeCursor();
        this._print();
        if (BROWSER) this._addCursor();
    }
    /**
     * @param {string} key
     */
    listenForKeyPress(keyCode) {
        let ref = this;
        document.addEventListener("keypress", (event) => {
            if (event.code.toLowerCase() === keyCode) ref.run();
        });
    }

    _init() {
        this._htmlConsole.innerHTML = "";
        this._addCursor();
    }

    _print() {
        this._log("// Override this function...");
    }

    _addCursor() {
        this._printToBrowser(this._path + this.CURSOR);
    }

    _removeCursor() {
        this._htmlConsole.innerHTML = this._htmlConsole.innerHTML.replace(this.CURSOR, "");
    }
    /**
     * @param {string} msg
     */
    _log(msg) {
        console.log(msg);
        if (BROWSER) this._printToBrowser(msg);
    }
    /**
     * @param {string} msg
     */
    _printToBrowser(msg) {
        this._htmlConsole.innerHTML += msg + "<br>";
    }
}
