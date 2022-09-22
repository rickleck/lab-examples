import { Lab4 } from "./lab4.js";
import { Lab5 } from "./lab5.js";

export class Labs {
    /**
     * @param {string | number} order
     * @returns {Printer} Printer
     */
    static getPrinter = (order) => {
        let labClass;
        switch (parseInt(order)) {
            case 4:
                labClass = Lab4;
                break;
            case 5:
                labClass = Lab5;
                break;
            default:
                labClass = Lab5;
        }
        return new labClass();
    };
}
