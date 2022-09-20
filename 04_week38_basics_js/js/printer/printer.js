import { BROWSER } from "../utils/environment.js";
import { MODES } from "./modes/modes.js";

export class Printer {
    constructor() {
        this.CURSOR = '<span class="blink">|</span>';
        if (BROWSER) this._htmlConsole = document.querySelector("#console");
    }
    /**
     * @param {string} id
     */
    set mode(id) {
        this._path = MODES[id];
        this._reset();
    }

    print() {
        this._log("// Override this function...");
    }
    /**
     * @param {string} key
     */
    listenForKeyPress(keyCode) {
        document.addEventListener("keypress", (event) => {
            if (event.code.toLowerCase() === keyCode) this._run();
        });
    }

    _run() {
        this._removeCursor();
        this.print();
        this._addCursor();
    }

    _reset() {
        this._htmlConsole.innerHTML = "";
        this._addCursor();
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
