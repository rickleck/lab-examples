import * as environment from "../utils/environment.js";

export class Printer {
    constructor(path) {
        this.PATH = path;
        this.CURSOR = '<span class="blink">|</span>';
        this._htmlConsole = environment.BROWSER ? document.querySelector("#console") : undefined;
        this._init();
        if (environment.TERMINAL) this.run();
    }

    run() {
        this._removeCursor();
        this._print();
        this._addCursor();
    }

    listenForKey(key) {
        if (environment.BROWSER) {
            let ref = this;
            document.addEventListener("keypress", (event) => {
                if (event.code.toLowerCase() === key) ref.run();
            });
        }
    }

    _init() {
        this._addCursor();
    }

    _print() {
        this._log("// Override this function...");
    }

    _addCursor() {
        if (environment.BROWSER) this._log(this.PATH + this.CURSOR);
    }

    _removeCursor() {
        if (environment.BROWSER) {
            this._htmlConsole.innerHTML = this._htmlConsole.innerHTML.replace(this.CURSOR, "");
        }
    }

    _log(msg) {
        console.log(msg);
        if (environment.BROWSER) this._htmlConsole.innerHTML += msg + "<br>";
    }
}
