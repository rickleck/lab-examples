import { ENV } from "../../utils/env.js";

export class PrinterHelpers {
    /**
     * @returns {string}
     */
    static get lineBreak() {
        return ENV.BROWSER ? "<br>" : "\n";
    }
    /**
     * @param {array} arr
     * @returns {string | array} string or array
     */
    static styleArray(array) {
        if (ENV.BROWSER) {
            let output = "[ ";
            for (let i = 0; i < array.length; i++) {
                output += '<span class="array-item">' + "'" + array[i] + "'" + "</span>";
                if (i < array.length - 1) {
                    output += ", ";
                }
            }
            output += " ]";
            return output;
        } else {
            return array;
        }
    }
    /**
     * @param {number} num
     * @returns {string | num} string or number
     */
    static styleNumber(num) {
        if (ENV.BROWSER) {
            return '<span class="number">' + num + "</>";
        } else {
            return num;
        }
    }
}
