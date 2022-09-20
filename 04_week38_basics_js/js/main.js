import { PrinterLab4 } from "./printer/printerLab4.js";
import { Navigation, EVENT_NAV_CLICK } from "./navigation/navigation.js";
import { MODES_DEFAULT_KEY } from "./printer/modes/modes.js";
import { BROWSER } from "./utils/environment.js";

let printer = new PrinterLab4();

if (BROWSER) {
    let navigation = new Navigation();
    navigation.active = MODES_DEFAULT_KEY;
    printer.mode = MODES_DEFAULT_KEY;
    printer.listenForKeyPress("enter");
    document.addEventListener(EVENT_NAV_CLICK, (event) => {
        printer.mode = event.detail.id;
        navigation.active = event.detail.id;
    });
} else {
    printer.print();
}
