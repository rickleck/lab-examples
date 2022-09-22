import { Printer } from "../printer.js";
import { PrinterHelpers } from "../helpers/printerhelpers.js";

export class Lab4 extends Printer {
    /**
     * @constructor
     */
    constructor() {
        super(4);
    }
    /**
     *
     */
    print() {
        const randomNum = () => Math.floor(Math.random() * 100);
        let num1 = randomNum();
        let num2 = randomNum();
        let person = {
            fname: "Sven",
            lname: "Svensson",
            age: randomNum(),
        };

        this.log(
            PrinterHelpers.lineBreak +
                "*** Lab 4 Week 38: Basics - JavaScript ***" +
                PrinterHelpers.lineBreak
        );
        this.log(num1 + " plus " + num2 + " är: " + (num1 + num2));
        this.log(num1 + " minus " + num2 + " är: " + (num1 - num2));
        this.log(num1 + " gånger " + num2 + " är: " + num1 * num2);
        this.log(
            PrinterHelpers.lineBreak +
                "Hej, mitt namn är " +
                person.fname +
                " " +
                person.lname +
                " och jag är " +
                person.age +
                " år gammal."
        );
        this.log(PrinterHelpers.lineBreak + "*** The End ***" + PrinterHelpers.lineBreak);
    }
}
