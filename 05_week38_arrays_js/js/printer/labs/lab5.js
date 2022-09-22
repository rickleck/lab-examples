import { Printer } from "../Printer.js";
import { ENV } from "../../utils/env.js";

export class Lab5 extends Printer {
    /** @type {array} */
    #names;
    /**
     * @constructor
     */
    constructor() {
        super(5);
        this.#names = [
            "Adam",
            "Christer A",
            "Christer S",
            "Erik N",
            "Ivan",
            "Ivona",
            "Johannes",
            "Lars-Erik",
            "Matewos",
            "Miriam",
            "Niklas",
            "Ola",
            "Rickard",
            "Robert",
        ];
    }
    /**
     *
     */
    print() {
        let randomNames = this.#names.sort(() => 0.5 - Math.random());
        let prefix = this.lineBreak + "- ";

        this.log(this.lineBreak + "*** Lab 5 Week 38: Arrays - JavaScript ***");

        this.log(prefix + "Create an array with 5 names");
        let output = randomNames.slice(0, 5);
        this.log(output);

        this.log(prefix + "Remove the last item");
        output.pop();
        this.log(output);

        this.log(prefix + "Change the name at place 2 (index 1)");
        output[1] = randomNames.pop();
        this.log(output);

        this.log(prefix + 'Add "Joakim"');
        output.push("Joakim");
        this.log(output);

        this.log(prefix + "Sort by name");
        output.sort();
        this.log(output);

        this.log(prefix + 'Find index of "Joakim"');
        let index = output.indexOf("Joakim");
        this.log(index);

        this.log(prefix + 'Remove "Joakim"');
        output.splice(index, 1);
        this.log(output);

        this.log(prefix + "Loop through all items");
        for (let name of output) {
            this.log(name);
        }

        this.log(this.lineBreak + "*** The End ***" + this.lineBreak);
    }
}
